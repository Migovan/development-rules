import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export interface DefaultTheme {
  colors: {
    turquoise: string;
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
    turquoise: "#3aafaa",
    pureWhite: "#feff",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

interface Props {
  children: ReactNode;
}

const Theme = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
