import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 55%;
  margin-top: 10px;
`;

export const EditIcon = styled(EditOutlined)`
  color: ${(props) => props.theme.colors.lightGray};
  margin-top: 15px;
  font-size: 1.5em;
  height: 20px;
  &:focus {
    outline: none;
  }
`;
