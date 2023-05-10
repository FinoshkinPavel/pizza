import React from "react";
import logo from "../../../assets/img/logo.png";
import s from "./Logo.module.scss";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className={s.logoBlock}>
      <div className={s.logoCont}>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={s.titleCont}>
        <span className={s.title}>REACT PIZZA</span>
        <span className={s.text}>самая вкусная пицца во вселенной</span>
      </div>
    </div>
  );
};
