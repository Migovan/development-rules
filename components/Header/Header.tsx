import { StyledHeader, Logo, UserIcon } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Development Rules</Logo>
      <UserIcon width="2rem" height="2rem" />
    </StyledHeader>
  );
};

export default Header;
