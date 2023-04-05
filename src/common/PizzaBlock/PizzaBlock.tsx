import React from "react";
import { PizzaCard } from "./PizzaCard/PizzaCard";
import s from "./PizzaBlock.module.scss";

export const PizzaBlock = () => {
  return (
    <div className={s.pizzaBlock}>
      <h1>Все пицы</h1>
      <div className={s.pizzaCardCont}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};
