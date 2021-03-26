import styled from "styled-components";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

export const StyledHeader = styled.header`
  padding: 0 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.green};
`;

export const Logo = styled.div`
  font-family: "Amatic SC", cursive;
  color: ${(props) => props.theme.colors.pureWhite};
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const UserIcon = styled(UserOutlined)`
  color: ${(props) => props.theme.colors.pureWhite};
  font-size: 1em;
`;

export const LogoutIcon = styled(LogoutOutlined)`
  color: ${(props) => props.theme.colors.pureWhite};
  font-size: 1em;
  margin-left: 5px;
`;
