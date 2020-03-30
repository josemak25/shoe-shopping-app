import 'styled-components';

// All app colors
enum COLORS {
  BD_DARK_COLOR = '#e9e9f4',
  BG_LIGHT_COLOR = '#FFFFFF',
  FONT_DARK_COLOR = '#5D6969',
  FONT_LIGHT_COLOR = '#FFFFFF',
  DRAWER_COLOR = '#5c2966',
  ACTION_FONT_COLOR = '#FF0000',
  FUND_WALLET_COLOR = '#875F8D',
  NOTIFICATION_HIGHLIGHT_COLOR = '#52de97'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 10,
  MEDIUM_SIZE = 14,
  LARGE_SIZE = 18,
  NOTOSANS_REGULAR = 'notosans-regular',
  NOTOSANS_BOLD = 'notosans-bold',
  EFFORT_REGULAR = 'effort',
  FONT_WEIGHT_LIGHT = 200,
  FONT_WEIGHT_MEDIUM = 600,
  FONT_WEIGHT_HEAVY = 800
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      BD_DARK_COLOR: string;
      BG_LIGHT_COLOR: string;
      FONT_DARK_COLOR: string;
      FONT_LIGHT_COLOR: string;
      DRAWER_COLOR: string;
      ACTION_FONT_COLOR: string;
      FUND_WALLET_COLOR: string;
      NOTIFICATION_HIGHLIGHT_COLOR: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      NOTOSANS_REGULAR: string;
      NOTOSANS_BOLD: string;
      EFFORT_REGULAR: string;
      FONT_WEIGHT_LIGHT: number;
      FONT_WEIGHT_MEDIUM: number;
      FONT_WEIGHT_HEAVY: number;
    };
  }
}

// App theme
export const theme = { colors: COLORS, fonts: FONTS };
