import React, { useState } from "react";
import {
  CategoryType,
  menu,
} from "../../../utils/helper-const/menu-helper-const";
import s from "./MenuBar.module.scss";

export const MenuBar = () => {
  const [category, setCategory] = useState<CategoryType>("Все");

  const changeCategoryHandler = (value: CategoryType) => {
    setCategory(value);
  };

  return (
    <ul className={s.menuBarList}>
      {menu.map((el) => {
        return (
          <li
            key={el}
            className={`${s.menuItem} ${el === category ? s.active : null}`}
            onClick={() => changeCategoryHandler(el)}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};
