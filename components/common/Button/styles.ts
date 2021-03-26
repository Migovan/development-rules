import styled from "styled-components";

import { DefaultTheme } from "../../../common-styles/theme";

interface Props {
  width?: number;
  theme: DefaultTheme;
}

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: inherit;
  padding: 7px;
  font-size: 15px;
  border-radius: 3px;
  border: ${(props: Props) => `1px solid  ${props.theme.colors.lightGreen}`};
  width: ${(props: Props) => props.width};
  height: 36px;
  color: ${(props: Props) => {
    const {
      //   isActive,
      theme: {
        colors: { green, lightGreen },
      },
    } = props;
    // return isActive ? green : lightGreen;
    return lightGreen;
  }};
  &:hover {
    color: ${(props: Props) => props.theme.colors.pureWhite};
    border: ${(props: Props) => `1px solid  ${props.theme.colors.green}`};
    background-color: ${(props: Props) => props.theme.colors.green};
  }
`;
