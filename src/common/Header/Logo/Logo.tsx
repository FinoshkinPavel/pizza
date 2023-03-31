import React from "react";
import logo from "../../../img/logo.png";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={s.logoBlock}>
      <div className={s.logoCont}>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.titleCont}>
        <span className={s.title}>REACT PIZZA</span>
        <span className={s.text}>самая вкусная пицца во вселенной</span>
      </div>
    </div>
  );
};
