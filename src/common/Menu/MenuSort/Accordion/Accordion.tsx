import React from "react";
import s from "./Accorfion.module.scss";
import { menuSortAccordion } from "../../../../utils/helper-const/menu-sort-accordion-helper-const";

export const Accordion = () => {
  return (
    <div className={s.accordionBlock}>
      {menuSortAccordion.map((el) => {
        return (
          <span key={el} className={s.menuItem}>
            {el}
          </span>
        );
      })}
    </div>
  );
};
