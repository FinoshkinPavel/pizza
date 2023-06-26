export type TitlesCategories =
  | "Все"
  | "Мясные"
  | "Вегетарианские"
  | "Гриль"
  | "Острые"
  | "Закрытые";

export enum IndexCategories {
  "All",
  "Meet",
  "Vegan",
  "Grill",
  "Hot",
  "Closed",
}

export type CategoryType = {
  titleCategory: TitlesCategories;
  indexCategory: number;
};

export const menu: Array<CategoryType> = [
  { titleCategory: "Все", indexCategory: 0 },
  { titleCategory: "Мясные", indexCategory: 1 },
  { titleCategory: "Вегетарианские", indexCategory: 2 },
  { titleCategory: "Гриль", indexCategory: 3 },
  { titleCategory: "Острые", indexCategory: 4 },
  { titleCategory: "Закрытые", indexCategory: 5 },
];
