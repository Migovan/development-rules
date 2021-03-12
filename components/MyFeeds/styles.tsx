import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Amatic SC", cursive;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;
