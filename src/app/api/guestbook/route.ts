import { NextResponse } from 'next/server';
import { createGuestBookEntry, getApprovedEntries } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { note, name } = body;

    if (!note || !name) {
      return NextResponse.json(
        { success: false, message: 'Note and name are required' },
        { status: 400 }
      );
    }

    await createGuestBookEntry(note, name);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your submission! Your note will be reviewed and added to the guest book.' 
    });
  } catch (error) {
    console.error('Error in guestbook API:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit note' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = await getApprovedEntries();
    return NextResponse.json({ success: true, entries });
  } catch (error) {
    console.error('Error fetching entries:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch entries' },
      { status: 500 }
    );
  }
} 