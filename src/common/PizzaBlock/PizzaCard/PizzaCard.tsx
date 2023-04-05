import React, { memo } from "react";
import { SelectionBlock } from "./SelectionBlock/SelectionBlock";
import s from "./PizzaCard.module.scss";
import pizzaImg from "../../../img/pizza1.png";
import { Button } from "./Button1/Button";
import { RubleIcon } from "../../../utils/icon/RubleIcon";

type PizzaCardPropsType = {
  img?: string;
  title?: string;
  depth?: string;
  size?: string;
  coast?: string;
};
export const PizzaCard: React.FC<PizzaCardPropsType> = memo((props) => {
  const { img, title, size, coast, depth } = props;
  return (
    <div className={s.pizzaCard}>
      <div className={s.pizzaImg}>
        <img src={pizzaImg} alt="pizza" />
      </div>
      <span className={s.title}>пицца-чизбургер</span>
      <SelectionBlock />
      <div className={s.coastButtonBlock}>
        <div>
          <span className={s.coast}>от: 125 </span>
          <RubleIcon size={12} />
        </div>
        <Button />
      </div>
    </div>
  );
});
