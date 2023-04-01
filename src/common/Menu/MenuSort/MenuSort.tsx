import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Accordion } from "./Accordion/Accordion";
import s from "./MenuSort.module.scss";

export const MenuSort = () => {
  return (
    <div className={s.menuSortBlock}>
      <AiFillCaretDown />
      <span>
        сортировка по: {<span className={s.selectedSorting}>популярности</span>}
      </span>
      <Accordion />
    </div>
  );
};
