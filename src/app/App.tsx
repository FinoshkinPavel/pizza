import React from "react";
import s from "./App.module.scss";
import { Header } from "../common/Header/Header";
import { Menu } from "../common/Menu/Menu";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
