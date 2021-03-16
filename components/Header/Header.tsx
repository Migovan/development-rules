import { useContext } from "react";
import styled from "styled-components";
import { StyledHeader, Logo } from "./styles";
import UserDataContext from "../../components/Context/user-data";
import Image from "next/image";

const UserName = styled.div`
  font-family: "Amatic SC", cursive;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.pureWhite};
  font-size: 1.3em;
`;

const UserBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  const { userData } = useContext(UserDataContext);
  const { first_name, last_name, photo_url } = userData;

  return (
    <StyledHeader>
      <Logo>Development Rules</Logo>
      <UserBlock>
        {photo_url && (
          <Image className="avatar" src={photo_url} height={35} width={35} alt="Your Name" />
        )}
        {first_name && last_name && <UserName>{`${first_name} ${last_name}`}</UserName>}
      </UserBlock>
    </StyledHeader>
  );
};

export default Header;
