import { DefaultTheme } from "styled-components";

const colors = {
  // 메인컬러
  Main: "#FBD262",
  SUB_1: "#E63636",
  SUB_2: "#FBD262",
  Blue: "#0094FF",
  Black: "#3C3C3C",
  Black_3: "#9D9D9D",
  White: "#FFFFFF",
  Gray: "#E6E6E6",
  Yellow_1: "#FFDB20",
  Yellow_2: "#FEFBE8",
  Yellow_3: "#EAC955",
  Red: "#FB6262",
};

export type ColorsTypes = typeof colors;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
  letterSpacing: number;
}

function FONT({ weight, size, lineHeight, letterSpacing }: Font): string {
  return `
    font-family: "Noto Sans KR";
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    letter-spacing : ${letterSpacing}rem;
    `;
}

const fonts = {
  title01: FONT({ weight: 900, size: 2.4, lineHeight: 2.6, letterSpacing: 0 }),
  title02: FONT({ weight: 700, size: 2.0, lineHeight: 2.0, letterSpacing: 0 }),
  title03: FONT({ weight: 500, size: 1.8, lineHeight: 2.0, letterSpacing: 0 }),

  body01: FONT({ weight: 700, size: 1.6, lineHeight: 1.6, letterSpacing: 0 }),
  body02: FONT({ weight: 500, size: 1.4, lineHeight: 2.0, letterSpacing: 0 }),
  body03: FONT({ weight: 700, size: 1.4, lineHeight: 1.6, letterSpacing: 0 }),
  body04: FONT({ weight: 500, size: 1.4, lineHeight: 1.6, letterSpacing: 0 }),
  body05: FONT({ weight: 300, size: 1.2, lineHeight: 1.6, letterSpacing: 0 }),
  body06: FONT({ weight: 700, size: 1.2, lineHeight: 1.4, letterSpacing: 0 }),
  body07: FONT({ weight: 700, size: 1.0, lineHeight: 1.4, letterSpacing: 0 }),
  body08: FONT({ weight: 500, size: 1.0, lineHeight: 1.4, letterSpacing: 0 }),
  body09: FONT({ weight: 500, size: 0.8, lineHeight: 1.4, letterSpacing: 0 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
