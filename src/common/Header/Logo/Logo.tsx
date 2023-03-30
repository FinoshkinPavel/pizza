import React from "react";
import logo from "../../../img/logo.png";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={s.logoBlock}>
      <div className={s.logoCont}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h4 className={s.title}>React Pizza</h4>
        <span className={s.text}>самая вкусная пицца во вселенной</span>
      </div>
    </div>
  );
};
