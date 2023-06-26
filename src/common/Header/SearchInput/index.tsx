import React, { ChangeEvent, useRef } from "react";
import s from "./SearchInput.module.scss";
import { SearchIcon } from "./svg-icon/SearchIcon";
import { ClearingIcon } from "./svg-icon/ClearingIcon";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
  filterSortBySelector,
  setSearchAC,
} from "../../../store/reducer/sort-and-fIlter-reducer";
import { useAppSelector } from "../../../hooks/useAppSelector";

export const SearchInput: React.FC = () => {
  const { search } = useAppSelector(filterSortBySelector);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchAC(e.currentTarget.value));
  };

  const clearingInputHandler = () => {
    dispatch(setSearchAC(""));
    //inputRef.current &&
    inputRef.current?.focus();
  };
  return (
    <div className={s.searchInputWrap}>
      <SearchIcon />
      <input
        ref={inputRef}
        type="text"
        placeholder={"Поиск пиццы..."}
        className={s.searchInput}
        value={search}
        onChange={onChangeHandler}
      />
      <ClearingIcon onClick={clearingInputHandler} />
    </div>
  );
};
