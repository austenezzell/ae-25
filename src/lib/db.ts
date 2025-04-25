import { sql } from '@vercel/postgres';
import { QueryResult } from '@vercel/postgres';

export interface GuestBookEntry {
  id: number;
  note: string;
  name: string;
  created_at: Date;
  is_approved: boolean;
}

export async function createGuestBookEntry(note: string, name: string): Promise<GuestBookEntry> {
  const result = await sql`
    INSERT INTO guestbook_entries (note, name)
    VALUES (${note}, ${name})
    RETURNING *
  `;
  return result.rows[0] as GuestBookEntry;
}

export async function getApprovedEntries(): Promise<GuestBookEntry[]> {
  const result = await sql`
    SELECT * FROM guestbook_entries
    WHERE is_approved = true
    ORDER BY created_at DESC
  `;
  return result.rows as GuestBookEntry[];
}

export async function query(text: string, params?: unknown[]): Promise<QueryResult> {
  try {
    const result = await sql.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Example helper functions for common operations
export async function createTable(tableName: string, columns: string): Promise<QueryResult> {
  const query = `
    CREATE TABLE IF NOT EXISTS ${tableName} (
      ${columns}
    );
  `;
  return await sql.query(query);
}

export async function insert(tableName: string, data: Record<string, unknown>): Promise<QueryResult> {
  const columns = Object.keys(data).join(', ');
  const values = Object.values(data);
  const placeholders = values.map((_, i) => `$${i + 1}`).join(', ');
  
  const query = `
    INSERT INTO ${tableName} (${columns})
    VALUES (${placeholders})
    RETURNING *;
  `;
  
  return await sql.query(query, values);
}

export async function select(tableName: string, columns: string = '*', where?: string): Promise<QueryResult> {
  const query = `
    SELECT ${columns}
    FROM ${tableName}
    ${where ? `WHERE ${where}` : ''};
  `;
  return await sql.query(query);
} 