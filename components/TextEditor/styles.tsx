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

export const Buttons = styled.div`
  justify-content: space-between;
  width: 110%;
  display: flex;
`;

export const TextArea = styled.textarea`
  min-height: 150px;
  width: 100%;
  border: 1px solid #e4d8d8;
  border-radius: 5px;
  margin: 30px 0 50px;
  padding: 20px;
`;
