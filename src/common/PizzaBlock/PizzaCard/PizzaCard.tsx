import React, { memo } from "react";
import { SelectionBlock } from "./SelectionBlock/SelectionBlock";
import s from "./PizzaCard.module.scss";
import pizzaImg from "../../../assets/img/pizza1.png";
import { Button } from "./Button1/Button";
import { RubleIcon } from "../../../utils/icon/RubleIcon";

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
  const { id, title, size, rating, category, imageUrl, coast, types } = props;
  return (
    <div className={s.pizzaCard}>
      <div className={s.pizzaImg}>
        <img src={imageUrl} alt="pizza" />
      </div>
      <span className={s.title}>{title}</span>
      <SelectionBlock {...props} />
      <div className={s.coastButtonBlock}>
        <div>
          <span className={s.coast}>от: {coast} </span>
          <RubleIcon size={12} />
        </div>
        <Button />
      </div>
    </div>
  );
});
