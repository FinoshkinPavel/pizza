import React from "react";
import s from "./ShoppingCart.module.scss";
import { IoBagOutline } from "react-icons/io5";
import { FaRubleSign } from "react-icons/fa";

export const ShoppingCart = () => {
  return (
    <div className={s.shoppingCartBlock}>
      <span>
        520
        <FaRubleSign className={s.iconRuble} />
      </span>
      <span className={s.stick}>|</span>
      <IoBagOutline />
    </div>
  );
};
