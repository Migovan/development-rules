import { useContext, useEffect } from "react";
import { StyledHeader, Logo, UserIcon, LogoutIcon, UserName, UserBlock } from "./styles";
import UserDataContext from "../../components/Context/user-data";
import Image from "next/image";

const Header = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const { username, photo_url } = userData;
  let parseData;

  useEffect(() => {
    parseData = JSON.parse(localStorage.getItem("userData"));

    if (parseData) {
      setUserData(parseData);
    }
  }, []);

  const userInfo = () => {
    return username ? (
      <>
        {photo_url && (
          <Image className="avatar" src={photo_url} height={35} width={35} alt="Your" />
        )}
        <UserName>{`${username} `}</UserName>
      </>
    ) : (
      <UserIcon width="1.5rem" height="1.5rem" />
    );
  };

  const logout = () => {
    localStorage.clear();
    setUserData({});
  };

  return (
    <StyledHeader>
      <Logo>Development Rules</Logo>
      <UserBlock>
        {userInfo()}
        <LogoutIcon onClick={logout} />
      </UserBlock>
    </StyledHeader>
  );
};

export default Header;
