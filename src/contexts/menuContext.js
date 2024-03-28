'use client';
import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onClickToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MenuContext.Provider value={{ menuOpen, onClickToggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
