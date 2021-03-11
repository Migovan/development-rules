import styled from "styled-components";

interface Props {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
`;

export const ItemTab = styled.div`
  margin-right: 30px;
  cursor: pointer;
  color: ${(props: any) => {
    const {
      isActive,
      theme: {
        colors: { green, lightGreen },
      },
    } = props;
    return isActive ? green : lightGreen;
  }};
  border-bottom: ${(props: any) => {
    const {
      isActive,
      theme: {
        colors: { green },
      },
    } = props;
    return isActive ? `1.5px solid ${green}` : "none";
  }};

  &:hover {
    color: ${(props) => props.theme.colors.green};
    border-bottom: ${(props) => `1.5px solid ${props.theme.colors.lightGreen}`};
  }
`;
