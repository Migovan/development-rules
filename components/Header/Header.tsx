import { StyledHeader, Logo, UserIcon } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Development Rules</Logo>
      <UserIcon width="1.5rem" height="1.5rem" />
    </StyledHeader>
  );
};

export default Header;
