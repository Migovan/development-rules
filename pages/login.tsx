import { useContext, useEffect } from "react";
import styled from "styled-components";
import TelegramLoginButton from "react-telegram-login";
import redirect from "nextjs-redirect";
import UserDataContext from "../components/Context/user-data";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 250px;
`;

const Redirect = redirect("/");

const Login = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  const handleTelegramResponse = (response) => {
    setUserData(response);
  };

  return (
    <Wrapper>
      {userData.id ? (
        <Redirect />
      ) : (
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="developmentrules_bot" />
      )}
    </Wrapper>
  );
};

export default Login;
