import React, { memo, useState } from "react";
import { SelectionBlock } from "./SelectionBlock/SelectionBlock";
import s from "./PizzaCard.module.scss";
import { Button } from "./Button1/Button";
import { RubleIcon } from "../../../utils/icon/RubleIcon";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
  addNewItemAC,
  ItemCardType,
} from "../../../store/reducer/cart-reducer";
import { useAppSelector } from "../../../hooks/useAppSelector";

export type PizzaCardPropsType = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  size: number[];
  coast: number;
  category: number;
  rating: number;
};
export const PizzaCard: React.FC<PizzaCardPropsType> = memo((props) => {
  const { id, title, imageUrl, coast, size, types } = props;

  const pizzaCart = useAppSelector((state) => state.shoppingCart.items);
  const [activePizzaType, setActivePizzaType] = useState<number>(types[0]);
  const [activeSizePizza, setActiveSizePizza] = useState<number>(size[0]);
  const dispatch = useAppDispatch();
  const addNewItemInShoppingCart = () => {
    let totalCountItem;
    let totalCountMoneyItem;
    if (pizzaCart.length) {
      let findPizza = pizzaCart.find(
        (el) =>
          el.id === id &&
          el.type === activePizzaType &&
          el.size === activeSizePizza
      );
      totalCountItem = findPizza?.totalCountItem;
      totalCountMoneyItem = findPizza?.totalCountMoneyItem;
    }
    const itemCard: ItemCardType = {
      id,
      title,
      imageUrl,
      coast,
      size: activeSizePizza,
      type: activePizzaType,
      totalCountItem,
      totalCountMoneyItem,
    };
    dispatch(addNewItemAC(itemCard));
  };

  return (
    <div className={s.pizzaCard}>
      <div className={s.pizzaImg}>
        <img src={imageUrl} alt="pizza" />
      </div>
      <span className={s.title}>{title}</span>
      <SelectionBlock
        {...props}
        activeSizePizza={activeSizePizza}
        activePizzaType={activePizzaType}
        setActivePizzaType={setActivePizzaType}
        setActiveSizePizza={setActiveSizePizza}
      />
      <div className={s.coastButtonBlock}>
        <div>
          <span className={s.coast}>от: {coast} </span>
          <RubleIcon size={12} />
        </div>
        <Button callback={addNewItemInShoppingCart} />
      </div>
    </div>
  );
});
