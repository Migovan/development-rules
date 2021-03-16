import React, { createContext, useState } from "react";

interface UserDataProps {
  userData: any;
  setUserData: any;
}

const UserDataContext = createContext<UserDataProps>({
  userData: {},
  setUserData: (value) => value,
});

export default UserDataContext;

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData: (value) => {
          setUserData(value);
        },
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
