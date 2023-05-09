import React, { useEffect, useState } from "react";
import { PizzaCard, PizzaCardPropsType } from "./PizzaCard/PizzaCard";
import s from "./PizzaBlock.module.scss";
import pizzas from "../../assets/json/pizzas.json";

export const PizzaBlock = () => {
  let [arrPizzas, setArrPizzas] = useState<Array<PizzaCardPropsType>>([]);

  //https://6459daf665bd868e930a12fe.mockapi.io/items

  useEffect(() => {
    fetch("https://6459daf665bd868e930a12fe.mockapi.io/items")
      .then((res) => res.json())
      .then((arrPizza) => {
        console.log(arrPizza);
        setArrPizzas(arrPizza);
      });
  }, []);

  return (
    <div className={s.pizzaBlock}>
      <h1>Все пицы</h1>
      <div className={s.pizzaCardCont}>
        {arrPizzas.map((el) => {
          return <PizzaCard key={el.id} {...el} />;
        })}
      </div>
    </div>
  );
};
