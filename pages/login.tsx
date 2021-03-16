import { useContext } from "react";
import TelegramLoginButton from "react-telegram-login";
import redirect from "nextjs-redirect";
import UserDataContext from "../components/Context/user-data";

const Redirect = redirect("/");

const Login = () => {
  const { userData, setUserData } = useContext(UserDataContext);

  const handleTelegramResponse = (response) => {
    setUserData(response);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "250px" }}>
      {userData.id ? (
        <Redirect />
      ) : (
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="developmentrules_bot" />
      )}
    </div>
  );
};

export default Login;
