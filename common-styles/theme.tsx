import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export interface DefaultTheme {
  colors: {
    green: string;
    lightGreen: string;
    pureWhite: string;
    gray: string;
    lightGray: string;
    black: string;
    deepBlack: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
}

export const theme: DefaultTheme = {
  colors: {
    green: "#285452",
    lightGreen: "#28545294",
    pureWhite: "#feff",
    gray: "#75818c",
    lightGray: "#75818c9c",
    black: "#333",
    deepBlack: "#222",
  },
  fontSizes: {
    small: "1.5em",
    medium: "2.5em",
    large: "3em",
  },
};

interface Props {
  children: ReactNode;
}

const Theme = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
