import React, { useEffect, useState } from "react";
import { PizzaCard, PizzaCardPropsType } from "./PizzaCard/PizzaCard";
import s from "./PizzaBlock.module.scss";
import { PizzaSceleton } from "./PizzaSceleton";

export const PizzaBlock = () => {
  let [arrPizzas, setArrPizzas] = useState<Array<PizzaCardPropsType>>([]);
  let [isLoading, setIsLoading] = useState(true);

  //https://6459daf665bd868e930a12fe.mockapi.io/items

  useEffect(() => {
    fetch("https://6459daf665bd868e930a12fe.mockapi.io/items")
      .then((res) => res.json())
      .then((arrPizza) => {
        console.log(arrPizza);
        setArrPizzas(arrPizza);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={s.pizzaBlock}>
      <h1>Все пицы</h1>
      <div className={s.pizzaCardCont}>
        {isLoading
          ? [...new Array(12)].map((_, i) => <PizzaSceleton key={i} />)
          : arrPizzas.map((el) => <PizzaCard key={el.id} {...el} />)}
      </div>
    </div>
  );
};
