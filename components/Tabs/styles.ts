import styled from "styled-components";
import { DefaultTheme } from "../../common-styles/theme";

interface Props {
  isActive: boolean;
  theme: DefaultTheme;
}

export const Wrapper = styled.div`
  display: flex;
  height: 25px;
  margin-bottom: 30px;
`;

export const ItemTab = styled.div`
  margin-right: 30px;
  cursor: pointer;
  color: ${(props: Props) => {
    const {
      isActive,
      theme: {
        colors: { green, lightGreen },
      },
    } = props;
    return isActive ? green : lightGreen;
  }};
  border-bottom: ${(props: Props) => {
    const {
      isActive,
      theme: {
        colors: { green },
      },
    } = props;
    return isActive ? `1.5px solid ${green}` : "none";
  }};

  &:hover {
    color: ${(props: Props) => props.theme.colors.green};
    border-bottom: ${(props) => `1.5px solid ${props.theme.colors.lightGreen}`};
  }
`;
