import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #e4d8d8;
  border-radius: 5px;
  width: 600px;
  margin: 30px 0 30px;
  padding: 20px;
  /* font-size: ${(props) => props.theme.fontSizes.small}; */
`;

export const NameWithDate = styled.div`
  color: #75818c;
  display: flex;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Text = styled.div`
  font-family: "Amatic SC", cursive;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  font-size: ${(props) => props.theme.fontSizes.small};
`;
