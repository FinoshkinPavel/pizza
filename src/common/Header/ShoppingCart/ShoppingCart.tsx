import React, { useEffect, useRef } from "react";
import s from "./ShoppingCart.module.scss";
import { IoBagOutline } from "react-icons/io5";
import { RubleIcon } from "../../../utils/icon/RubleIcon";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { saveCartItemsLS } from "../../../utils/cartItems-LS/cartItemLS";

export const ShoppingCart = () => {
  const cartState = useAppSelector((state) => state.shoppingCart);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) saveCartItemsLS(cartState);
    isMounted.current = true;
  }, [cartState]);

  return (
    <div className={s.shoppingCartBlock}>
      <span className={s.numMoney}>
        {cartState.totalCountMoney}
        <RubleIcon size={12} />
      </span>
      <span className={s.stick}>|</span>
      <Link to={"cart-page"}>
        <IoBagOutline style={{ color: "white" }} />
      </Link>
    </div>
  );
};
