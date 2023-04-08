import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Accordion } from "./Accordion/Accordion";
import s from "./MenuSort.module.scss";
import { MenuSortAccordionType } from "../../../utils/helper-const/menu-sort-accordion-helper-const";

export const MenuSort = () => {
  const [selectedSortName, setSelected] =
    useState<MenuSortAccordionType>("популярности");
  const [open, setOpen] = useState(false);

  const openCloseHAndler = () => {
    setOpen(!open);
  };

  return (
    <div className={s.menuSortBlock}>
      <AiFillCaretDown />
      <span onClick={openCloseHAndler}>
        сортировка по:{" "}
        {<span className={s.selectedSorting}>{selectedSortName}</span>}
      </span>
      {open && <Accordion setSelected={setSelected} setOpen={setOpen} />}
    </div>
  );
};
