import React from "react";
import s from "../../SearchInput.module.scss";

type SearchIconPropsType = {
	onClick?: () => void;
};

export const SearchIcon: React.FC<SearchIconPropsType> = ({ onClick }) => {
	const onClickHandler = () => {
		onClick && onClick();
	};

	return (
		<svg
			onClick={onClickHandler}
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			className={s.searchIcon}
		>
			<title />
			<g id="search">
				<path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
			</g>
		</svg>
	);
};
