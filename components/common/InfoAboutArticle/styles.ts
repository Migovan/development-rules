import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  time {
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Name = styled.div`
  font-weight: bold;
  margin: 0px 7px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.green};
`;
