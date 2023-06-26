import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartItemsFromLS } from "../../utils/cartItems-LS/cartItemLS";

const initialState: CartStateType = {
  totalCountMoney: getCartItemsFromLS().totalCountMoney,
  totalCountItems: getCartItemsFromLS().totalCountItems,
  items: getCartItemsFromLS().items || [],
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewItemAC(state, action: PayloadAction<ItemCardType>) {
      const findItem = state.items.find(
        (el) =>
          el.id === action.payload.id &&
          el.type === action.payload.type &&
          el.size === action.payload.size
      );

      if (JSON.stringify(findItem) === JSON.stringify(action.payload)) {
        if (findItem?.totalCountItem) findItem.totalCountItem++;
        if (findItem?.totalCountMoneyItem)
          findItem.totalCountMoneyItem += findItem.coast;
      } else {
        state.items.push({
          ...action.payload,
          totalCountItem: 1,
          totalCountMoneyItem: action.payload.coast,
        });
      }
      state.totalCountMoney += action.payload.coast;
      state.totalCountItems += 1;
    },
    minusItemAC(
      state,
      action: PayloadAction<{ id: number; type: number; size: number }>
    ) {
      const findItem = state.items.find(
        (el) =>
          el.id === action.payload.id &&
          el.size === action.payload.size &&
          el.type === action.payload.type
      );
      if (findItem?.totalCountMoneyItem)
        findItem.totalCountMoneyItem -= findItem.coast;
      if (findItem?.totalCountItem) findItem.totalCountItem--;
      if (findItem?.coast) state.totalCountMoney -= findItem.coast;
      if (findItem) state.totalCountItems--;
    },
    deleteItemAC(
      state,
      action: PayloadAction<{
        id: number;
        type: number;
        size: number;
        coast: number;
        totalCountItem: number;
        totalCountMoneyItem: number;
      }>
    ) {
      const indexItem = state.items.findIndex(
        (el) =>
          el.id === action.payload.id &&
          el.type === action.payload.type &&
          el.size === action.payload.size
      );
      state.items.splice(indexItem, 1);
      state.totalCountItems -= action.payload.totalCountItem;
      state.totalCountMoney -= action.payload.totalCountMoneyItem;
    },
    clearCartAC(state) {
      state.items = [];
      state.totalCountItems = 0;
      state.totalCountMoney = 0;
    },
  },
});

export const shoppingCartReducer = slice.reducer;
export const { addNewItemAC, minusItemAC, deleteItemAC, clearCartAC } =
  slice.actions;

export type CartStateType = {
  totalCountMoney: number;
  totalCountItems: number;
  items: Array<ItemCardType>;
};

export type ItemCardType = {
  id: number;
  title: string;
  coast: number;
  imageUrl: string;
  size: number;
  type: number;
  totalCountItem: number | undefined;
  totalCountMoneyItem?: number;
};
