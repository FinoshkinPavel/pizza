import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Accordion } from "./Accordion/Accordion";
import s from "./MenuSort.module.scss";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { filterSortBySelector } from "../../../store/reducer/sort-and-fIlter-reducer";

export const MenuSort: React.FC = () => {
  const { sort } = useAppSelector(filterSortBySelector);
  const [open, setOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const openCloseHAndler = () => {
    setOpen(!open);
  };

  console.log("MenuSort Render");
  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (divRef.current && !e.composedPath().includes(divRef.current))
        setOpen(false);
    };
    document.body.addEventListener("click", clickOutsideHandler);

    return () =>
      document.body.removeEventListener("click", clickOutsideHandler);
  }, []);

  return (
    <div ref={divRef} className={s.menuSortBlock} onClick={openCloseHAndler}>
      <AiFillCaretDown />
      <span>
        сортировка по: {<span className={s.selectedSorting}>{sort.title}</span>}
      </span>
      {open && <Accordion setOpen={setOpen} />}
    </div>
  );
};
