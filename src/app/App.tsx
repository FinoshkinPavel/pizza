import React from "react";
import s from "./App.module.scss";
import { Header } from "../common/Header/Header";

function App() {
  return (
    <div className={s.App}>
      <Header />
    </div>
  );
}

export default App;
