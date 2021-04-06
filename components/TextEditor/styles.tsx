import styled from "styled-components";

export const Wrapper = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  justify-content: space-between;
  width: 110%;
  display: flex;
`;

export const TextArea = styled.textarea`
  min-height: 100px;
  width: 94%;
  border: 1px solid #e4d8d8;
  border-radius: 5px;
  margin-bottom: 50px;
  padding: 20px;
  line-height: 1.6em;

  ::placeholder {
    color: #70768485;
    font-size: 17px;
  }
  &:focus {
    outline: none;
  }
`;

export const Editor = styled.div`
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #e4d8d8;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  font-size: 30px;
  border: none;

  ::placeholder {
    color: #70768485;
  }

  &:focus {
    outline: none;
  }
`;
