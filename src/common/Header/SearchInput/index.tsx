import React, { ChangeEvent, useRef, useState } from "react";
import s from "./SearchInput.module.scss";
import { SearchIcon } from "./svg-icon/SearchIcon";
import { ClearingIcon } from "./svg-icon/ClearingIcon";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
	filterSortBySelector,
	setSearchAC,
} from "../../../store/reducer/sort-and-fIlter-reducer";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { returningValue } from "../../../utils/helper-function/returningValue-function";

export const SearchInput: React.FC = () => {
	const { search } = useAppSelector(filterSortBySelector);
	const dispatch = useAppDispatch();
	const inputRef = useRef<HTMLInputElement>(null);
	const [searchMod, setSearchMod] = useState(false);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchAC(e.currentTarget.value));
	};

	const clearingInputHandler = () => {
		dispatch(setSearchAC(""));
		inputRef.current?.focus();
	};

	const changeSearchModHandler = () =>
		window.screen.width < 507 && setSearchMod(!searchMod);
	const classNameSearchInput = returningValue<string>(
		"",
		s.activeSearchMod,
		s.deactivateSearchMod,
		searchMod
	);
	const placeholder = returningValue<string>(
		"Поиск пиццы...",
		"Поиск",
		"",
		searchMod
	);
	const classNameSearchInputBlock = returningValue<string>(
		"",
		s.openSearchInputBlock,
		s.closeSearchInputBlock,
		searchMod
	);

	return (
		<div className={`${s.searchInputBlock} ${classNameSearchInputBlock}`}>
			<SearchIcon onClick={changeSearchModHandler} />
			<input
				ref={inputRef}
				type="text"
				placeholder={placeholder}
				className={`${s.searchInput} ${classNameSearchInput}`}
				value={search}
				onChange={onChangeHandler}
			/>
			<ClearingIcon onClick={clearingInputHandler} searchMod={searchMod} />
		</div>
	);
};
