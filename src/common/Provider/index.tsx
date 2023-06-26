import React, { createContext, ReactNode } from "react";

type ProviderPropsType = {
  children: ReactNode;
  searchElem: string;
  setSearchElem: (value: string) => void;
};

export const Context = createContext({
  searchElem: "",
  setSearchElem: (value: string) => {},
});

export const Provider: React.FC<ProviderPropsType> = ({
  searchElem,
  setSearchElem,
  children,
}) => {
  return (
    <Context.Provider value={{ searchElem, setSearchElem }}>
      {children}
    </Context.Provider>
  );
};
