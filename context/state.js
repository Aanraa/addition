import { createContext, useContext, useState } from "react";

const DocContext = createContext();

export function DocWrapper({ children }) {
  const [page, setPage] = useState("");
  const [pathName, setPathName] = useState("");
  const [rolee, setRolee] = useState("");
  const [pName, setPName] = useState("");
  return (
    <DocContext.Provider
      value={{
        page,
        setPage,
        pathName,
        setPathName,
        rolee,
        setRolee,
        pName,
        setPName,
      }}
    >
      {children}
    </DocContext.Provider>
  );
}

export function useDocContext() {
  return useContext(DocContext);
}
