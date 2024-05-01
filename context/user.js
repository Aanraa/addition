import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserWrapper({ children }) {
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider
      value={{
        setUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
