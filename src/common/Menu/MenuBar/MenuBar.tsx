import React, { useCallback } from "react";
import { menu } from "../../../utils/helper-const/menu-helper-const";
import s from "./MenuBar.module.scss";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
	filterSortBySelector,
	setCategoryAC,
} from "../../../store/reducer/sort-and-fIlter-reducer";

export const MenuBar: React.FC = () => {
	const { indexCategories } = useAppSelector(filterSortBySelector);
	const dispatch = useAppDispatch();
	const changeCategoryHandler = useCallback((value: number) => {
		dispatch(setCategoryAC(value));
	}, []);

	return (
		<ul className={s.menuBarList}>
			{menu.map((el) => {
				return (
					<li
						key={el.indexCategory}
						className={`${s.menuItem} ${
							el.indexCategory === indexCategories ? s.active : null
						}`}
						onClick={() => changeCategoryHandler(el.indexCategory)}
					>
						{el.titleCategory}
					</li>
				);
			})}
		</ul>
	);
};
