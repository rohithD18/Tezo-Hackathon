import { ReactNode, createContext, useState } from "react";
export type data = {
  activePage: number;
  setActivePage: (message: number) => void;
  itemOffset: number;
  setItemOffset: (message: number) => void;
};

type TodoContextProviderType = {
  children: ReactNode;
};

export const HackathonContext = createContext({} as data);

export const HackathonContextProvider = ({
  children,
}: TodoContextProviderType) => {
  const [activePage, setActivePage] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  return (
    <HackathonContext.Provider
      value={{
        activePage,
        setActivePage,
        itemOffset,
        setItemOffset,
      }}
    >
      {children}
    </HackathonContext.Provider>
  );
};
export default HackathonContext;
