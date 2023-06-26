import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setIsLoadingAC, setRequestStatusAC } from "./app-reducer";
import { pizzasApi } from "../../api/apiPizzas";

const initialState: Array<PizzaCardType> = [];

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async (
    arg: {
      category: string;
      sortBy?: string;
      order?: string;
      _search?: string;
    },
    { dispatch }
  ) => {
    dispatch(setIsLoadingAC(true));
    try {
      const res = await pizzasApi.fetchPizzas(
        arg.category,
        arg.sortBy,
        arg.order,
        arg._search
      );
      dispatch(setIsLoadingAC(false));
      return res.data;
    } catch (e) {
      dispatch(setRequestStatusAC({ status: "rejected" }));
    } finally {
      dispatch(setIsLoadingAC(false));
    }
  }
);

const slice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      return [...action.payload];
    });
  },
});

export const pizzasReducer = slice.reducer;

export type PizzaCardType = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  size: number[];
  coast: number;
  category: number;
  rating: number;
};
