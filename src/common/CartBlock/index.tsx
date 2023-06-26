import React from "react";
import s from "./CartBlock.module.scss";
import { IoBagOutline } from "react-icons/io5";
import { RubleIcon } from "../../utils/icon/RubleIcon";
import { CiTrash } from "react-icons/ci";
import { CartItem } from "./CartItem";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { clearCartAC } from "../../store/reducer/cart-reducer";

export const CartBlock = () => {
  const { totalCountItems, totalCountMoney, items } = useAppSelector(
    (state) => state.shoppingCart
  );

  const dispatch = useAppDispatch();

  const onClickClearCartHandler = () => {
    dispatch(clearCartAC());
  };
  return (
    <div className={s.cartBlock}>
      <div className={s.cartBlockWrap}>
        <div className={s.titleAndBtnWrap}>
          <div className={s.title}>
            <span>Корзина</span> <IoBagOutline />
          </div>
          <button className={s.cleanCartBtn} onClick={onClickClearCartHandler}>
            <CiTrash /> Очистить корзину
          </button>
        </div>
        <div className={s.purchasesWrap}>
          {items.map((el, i) => (
            <CartItem key={i} {...el} />
          ))}
        </div>
        <div className={s.sumItemsAndMoneyWrap}>
          <span className={s.sumItems}>
            Колличество покупок: {totalCountItems}
          </span>
          <span className={s.sumMoney}>
            Сумма заказа: {totalCountMoney} <RubleIcon size={12} />
          </span>
        </div>
        <div className={s.btnWrap}>
          <button className={s.backBtn}>
            <Link to={"/"}>
              <BsChevronLeft />
              Вернуться назад
            </Link>
          </button>
          <button className={s.buyBtn}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};
