import 'styled-components';

type ColorLevels = {
  light: string;
  medium: string;
  dark: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: ColorLevels;
      secondary: ColorLevels;
      accent: ColorLevels;
      error: ColorLevels;
      warning: ColorLevels;
      info: ColorLevels;
      success: ColorLevels;
      background: ColorLevels;
      foreground: ColorLevels;
      text: ColorLevels;
      textAlt: ColorLevels;
    };
    spacing: {
      none: number;
      extraTight: number;
      tight: number;
      snug: number;
      regular: number;
      loose: number;
      extraLoose: number;
    };
    borderRadius: {
      none: number;
      extraSmall: number;
      small: number;
      regular: number;
      large: number;
      extraLarge: number;
    };
    breakpoints: {
      mobile: number;
      phablet: number;
      tablet: number;
      desktop: number;
      hd: number;
    };
    font: {
      sizes: {
        xsmall: number;
        small: number;
        medium: number;
        large: number;
        xlarge: number;
      };
      weights: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
  }
}
