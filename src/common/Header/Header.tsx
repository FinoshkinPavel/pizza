import React from "react";
import { Logo } from "./Logo/Logo";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import s from "./Header.module.scss";
import { SearchInput } from "./SearchInput";

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <SearchInput />
      <ShoppingCart />
    </header>
  );
};
