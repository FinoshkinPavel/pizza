import React from "react";
import s from "./App.module.scss";
import { Header } from "../common/Header/Header";
import { PizzaPage } from "../pages/PizzaPage";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";

function App() {
  return (
    <div className={s.App}>
      <div className={s.innerWrapper}>
        <Header />
        <Routes>
          <Route path={"/"} element={<PizzaPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
