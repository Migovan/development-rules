import styled from "styled-components";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

export const StyledHeader = styled.header`
  padding: 0 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
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

export const UserName = styled.div`
  font-family: "Amatic SC", cursive;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.pureWhite};
  font-size: 1.3em;
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
`;
