import React from "react";
import { Logo } from "./Logo/Logo";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <ShoppingCart />
    </header>
  );
};
