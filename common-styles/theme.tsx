import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export interface DefaultTheme {
  colors: {
    green: string;
    lightGreen: string;
    pureWhite: string;
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
