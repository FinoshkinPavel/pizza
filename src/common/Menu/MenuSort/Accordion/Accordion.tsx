import React from "react";
import s from "./Accorfion.module.scss";
import {
  menuSortAccordion,
  MenuSortAccordionType,
} from "../../../../utils/helper-const/menu-sort-accordion-helper-const";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { setSortAC } from "../../../../store/reducer/sort-and-fIlter-reducer";

type AccordionPropsType = {
  setOpen: (value: boolean) => void;
};

export const Accordion: React.FC<AccordionPropsType> = ({ setOpen }) => {
  const dispatch = useAppDispatch();
  console.log("accordion render");
  const selectNameSortHandler = (value: MenuSortAccordionType) => {
    dispatch(setSortAC(value));
    setOpen(false);
  };

  return (
    <div className={s.accordionBlock}>
      {menuSortAccordion.map((el, i) => {
        return (
          <span
            key={i}
            className={s.menuItem}
            onClick={() => selectNameSortHandler(el)}
          >
            {el.title}
          </span>
        );
      })}
    </div>
  );
};
