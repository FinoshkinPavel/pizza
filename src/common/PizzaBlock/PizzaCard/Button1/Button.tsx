import React, { memo } from "react";
import s from "./Button.module.scss";

type ButtonPropsType = {
  callback: () => void;
};

export const Button: React.FC<ButtonPropsType> = memo(({ callback }) => {
  const onClickHandler = () => {
    callback();
  };
  return (
    <button className={s.button} onClick={onClickHandler}>
      <span>+</span>
      <span>Добавить</span>
      <span className={s.numButton}>2</span>
    </button>
  );
});
