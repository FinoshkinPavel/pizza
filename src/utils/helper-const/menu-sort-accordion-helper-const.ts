export type TitlesMenuSortAccordionType =
  | "популярности(ASC)"
  | "популярности(DESC)"
  | "цене(ASC)"
  | "цене(DESC)"
  | "алфавиту(ASC)"
  | "алфавиту(DESC)";

export type MenuSortAccordionType = {
  title: TitlesMenuSortAccordionType;
  namingSortBy: string;
};
export const menuSortAccordion: Array<MenuSortAccordionType> = [
  { title: "популярности(ASC)", namingSortBy: "rating" },
  { title: "популярности(DESC)", namingSortBy: "-rating" },
  { title: "цене(ASC)", namingSortBy: "coast" },
  { title: "цене(DESC)", namingSortBy: "-coast" },
  { title: "алфавиту(ASC)", namingSortBy: "title" },
  { title: "алфавиту(DESC)", namingSortBy: "-title" },
];
