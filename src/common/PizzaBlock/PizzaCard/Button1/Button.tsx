import React from "react";
import s from "./Button.module.scss";

export const Button = () => {
  return (
    <button className={s.button}>
      <span>+</span>
      <span>Добавить</span>
      <span className={s.numButton}>2</span>
    </button>
  );
};
