import React from "react";
import { PizzaCard } from "./PizzaCard/PizzaCard";
import s from "./PizzaBlock.module.scss";
import pizzas from "../../assets/json/pizzas.json";

export const PizzaBlock = () => {
  return (
    <div className={s.pizzaBlock}>
      <h1>Все пицы</h1>
      <div className={s.pizzaCardCont}>
        {pizzas.map((el) => {
          return <PizzaCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};
