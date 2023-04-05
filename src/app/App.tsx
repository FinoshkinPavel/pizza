import React from "react";
import s from "./App.module.scss";
import { Header } from "../common/Header/Header";
import { Menu } from "../common/Menu/Menu";
import { PizzaBlock } from "../common/PizzaBlock/PizzaBlock";

function App() {
  return (
    <div className={s.App}>
      <div className={s.innerWrapper}>
        <Header />
        <Menu />
        <PizzaBlock />
      </div>
    </div>
  );
}

export default App;
