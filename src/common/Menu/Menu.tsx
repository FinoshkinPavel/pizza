import React from "react";
import { MenuBar } from "./MenuBar/MenuBar";
import { MenuSort } from "./MenuSort/MenuSort";
import s from "./Menu.module.scss";

export const Menu = () => {
  return (
    <nav className={s.menuBlock}>
      <MenuBar />
      <MenuSort />
    </nav>
  );
};
