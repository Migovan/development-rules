import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
import { DefaultTheme } from "../../common-styles/theme";

export const Wrapper = styled.div`
  width: 55%;
  margin-top: 30px;
`;

export const EditIcon = styled(EditOutlined)`
  color: ${(props) => props.theme.colors.lightGray};
  margin-top: 30px;
  font-size: 1.5em;
  &:focus {
    outline: none;
  }
`;
