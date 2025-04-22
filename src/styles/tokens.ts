import tokens from './ae25-tokens.json';

// Define types for the token structure
type TokenValue = string | { [key: string]: string };
type Token = { value: TokenValue; type: string };

// Extract values from the token objects
const extractValue = (token: Token): string => {
  if (typeof token.value === 'string') {
    return token.value;
  }
  if (token.type === 'typography' && 'fontFamily' in token.value) {
    return token.value.fontFamily;
  }
  return '';
};

// Format the tokens for Tailwind
export const designTokens = {
  colors: {
    'light-gray': extractValue(tokens.global['light-gray']),
    gray: extractValue(tokens.global.gray),
    volt: extractValue(tokens.global.volt),
    black: extractValue(tokens.global.black),
    white: extractValue(tokens.global.white),
  },
  spacing: {
    'xs-sp': extractValue(tokens.global['xs-sp']),
    'sm-sp': extractValue(tokens.global['sm-sp']),
    'md-sp': extractValue(tokens.global['md-sp']),
    'lg-sp': extractValue(tokens.global['lg-sp']),
    'xl-sp': extractValue(tokens.global['xl-sp']),
  },
  fontSize: {
    'xs-type': extractValue(tokens.global['xs-type']),
    'sm-type': extractValue(tokens.global['sm-type']),
    'md-type': extractValue(tokens.global['md-type']),
    'lg-type': extractValue(tokens.global['lg-type']),
    'xl-type': extractValue(tokens.global['xl-type']),
  },
  fontFamily: {
    sans: [extractValue(tokens.global.Sans), 'system-ui', 'sans-serif'],
    serif: [extractValue(tokens.global.Serif), 'Georgia', 'serif'],
  },
} as const; 