import React from "react";
import { Logo } from "./Logo/Logo";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const Header = () => {
  return (
    <header>
      <Logo />
      <ShoppingCart />
    </header>
  );
};
