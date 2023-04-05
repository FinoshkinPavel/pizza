import React from "react";
import s from "./ShoppingCart.module.scss";
import { IoBagOutline } from "react-icons/io5";
import { RubleIcon } from "../../../utils/icon/RubleIcon";

export const ShoppingCart = () => {
  return (
    <div className={s.shoppingCartBlock}>
      <span>
        520
        <RubleIcon size={12} />
      </span>
      <span className={s.stick}>|</span>
      <IoBagOutline />
    </div>
  );
};
