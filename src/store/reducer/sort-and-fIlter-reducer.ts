import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IndexCategories } from "../../utils/helper-const/menu-helper-const";
import { MenuSortAccordionType } from "../../utils/helper-const/menu-sort-accordion-helper-const";
import { AppRootStateType } from "../store";

const slice = createSlice({
  name: "filter&Sort",
  initialState: {
    indexCategories: IndexCategories.All,
    sort: {
      title: "популярности(DESC)",
      namingSortBy: "-rating",
    },
    search: "",
  },
  reducers: {
    setCategoryAC(state, action: PayloadAction<number>) {
      state.indexCategories = action.payload;
    },
    setSortAC(state, action: PayloadAction<MenuSortAccordionType>) {
      state.sort.namingSortBy = action.payload.namingSortBy;
      state.sort.title = action.payload.title;
    },
    setSearchAC(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setFiltersAC(state, action) {
      state.indexCategories = Number(action.payload.category);
      state.sort = action.payload.sortBy;
    },
  },
});

export const { setCategoryAC, setSortAC, setSearchAC, setFiltersAC } =
  slice.actions;
export const filterSortBySelector = (state: AppRootStateType) =>
  state.filterSortBy;
export const initStateFilterSlice = slice.getInitialState();
export const filterSortByReducer = slice.reducer;
