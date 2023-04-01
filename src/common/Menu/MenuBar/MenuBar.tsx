import React from "react";
import { menu } from "../../../utils/helper-const/menu-helper-const";
import s from "./MenuBar.module.scss";

export const MenuBar = () => {
  return (
    <ul className={s.menuBarList}>
      {menu.map((el) => {
        return <li key={el}>{el}</li>;
      })}
    </ul>
  );
};
