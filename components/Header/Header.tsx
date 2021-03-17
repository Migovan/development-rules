import { useContext, useEffect } from "react";
import styled from "styled-components";
import { StyledHeader, Logo, UserIcon, LogoutIcon } from "./styles";
import UserDataContext from "../../components/Context/user-data";
import Image from "next/image";
import redirect from "nextjs-redirect";

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

const Redirect = redirect("/login");

const Header = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const { first_name, last_name, photo_url } = userData;
  let parseData;

  useEffect(() => {
    parseData = JSON.parse(localStorage.getItem("userData"));

    if (parseData) {
      setUserData(parseData);
    }
  }, []);

  return (
    <StyledHeader>
      <Logo>Development Rules</Logo>
      <UserBlock>
        {first_name ? (
          <>
            {photo_url && (
              <Image className="avatar" src={photo_url} height={35} width={35} alt="Your Name" />
            )}
            <UserName>{`${first_name} `}</UserName>
            {last_name && <UserName>{last_name}</UserName>}
          </>
        ) : (
          <UserIcon width="1.5rem" height="1.5rem" />
        )}
        <LogoutIcon
          onClick={() => {
            localStorage.clear();
            setUserData({});
          }}
        />
      </UserBlock>
      {!userData.id && (
        <span style={{ display: "none" }}>
          <Redirect />
        </span>
      )}
    </StyledHeader>
  );
};

export default Header;
