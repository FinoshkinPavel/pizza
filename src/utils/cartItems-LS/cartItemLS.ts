import { CartStateType } from "../../store/reducer/cart-reducer";

export const getCartItemsFromLS = () => {
  try {
    const data = localStorage.getItem("cartState");
    if (data === null) {
      return { totalCountMoney: 0, totalCountItems: 0, items: [] };
    }
    const json: CartStateType = data && JSON.parse(data);
    return {
      totalCountMoney: json.totalCountMoney,
      totalCountItems: json.totalCountItems,
      items: json.items,
    };
  } catch (e) {
    return { totalCountMoney: 0, totalCountItems: 0, items: [] };
  }

  // return json.items.length
  //   ? {
  //       totalCountMoney: json.totalCountMoney,
  //       totalCountItems: json.totalCountItems,
  //       items: json.items,
  //     }
  //   : { totalCountMoney: 0, totalCountItems: 0, items: [] };
};

export const saveCartItemsLS = (data: CartStateType) => {
  localStorage.setItem("cartState", JSON.stringify(data));
};
