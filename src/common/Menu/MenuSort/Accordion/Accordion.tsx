import React from "react";
import s from "./Accorfion.module.scss";
import {
  menuSortAccordion,
  MenuSortAccordionType,
} from "../../../../utils/helper-const/menu-sort-accordion-helper-const";

type AccordionPropsType = {
  setSelected: (value: MenuSortAccordionType) => void;
  setOpen: (value: boolean) => void;
};

export const Accordion: React.FC<AccordionPropsType> = ({
  setSelected,
  setOpen,
}) => {
  const selectNameSortHandler = (value: MenuSortAccordionType) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className={s.accordionBlock}>
      {menuSortAccordion.map((el) => {
        return (
          <span
            key={el}
            className={s.menuItem}
            onClick={() => selectNameSortHandler(el)}
          >
            {el}
          </span>
        );
      })}
    </div>
  );
};
