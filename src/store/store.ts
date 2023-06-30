import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterSortByReducer } from "./reducer/sort-and-fIlter-reducer";
import { shoppingCartReducer } from "./reducer/cart-reducer";
import { appReducer } from "./reducer/app-reducer";
import { pizzasReducer } from "./reducer/pizzas-reducer";
const rootReducer = combineReducers({
	filterSortBy: filterSortByReducer,
	shoppingCart: shoppingCartReducer,
	app: appReducer,
	Pizzas: pizzasReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
