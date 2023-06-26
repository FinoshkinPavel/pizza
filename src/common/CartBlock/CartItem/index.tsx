import React from "react";
import s from "./CartItem.module.scss";
import { RubleIcon } from "../../../utils/icon/RubleIcon";
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from "react-icons/ci";
import {
  addNewItemAC,
  deleteItemAC,
  ItemCardType,
  minusItemAC,
} from "../../../store/reducer/cart-reducer";
import { depthPizza } from "../../../utils/helper-const/selection-block-helper-cosnt";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

export const CartItem: React.FC<ItemCardType> = (props) => {
  const {
    totalCountItem,
    totalCountMoneyItem,
    type,
    size,
    title,
    imageUrl,
    id,
    coast,
  } = props;

  const dispatch = useAppDispatch();

  const onClickPlusHandler = () => {
    dispatch(
      addNewItemAC({
        id,
        title,
        imageUrl,
        coast,
        size,
        type,
        totalCountItem,
        totalCountMoneyItem,
      })
    );
  };
  const onClickMinusHandler = () => {
    dispatch(minusItemAC({ size, type, id }));
  };
  const onClickDeleteItemHandler = () => {
    totalCountItem &&
      totalCountMoneyItem &&
      dispatch(
        deleteItemAC({
          size,
          type,
          id,
          coast,
          totalCountItem,
          totalCountMoneyItem,
        })
      );
  };

  return (
    <div className={s.cartItemWrap}>
      <div className={s.descriptionAndImgWrap}>
        <div className={s.imgWrap}>
          <img src={imageUrl} alt="img" />
        </div>
        <div className={s.descriptionWrap}>
          <span className={s.title}>{title}</span>
          <div className={s.description}>
            <span>{depthPizza[type]}, </span>
            <span>{size}cm.</span>
          </div>
        </div>
      </div>
      <div className={s.incAndDecBtnWrap}>
        <button className={s.incDecBtn} onClick={onClickPlusHandler}>
          <CiCirclePlus />
        </button>
        <span className={s.num}>{totalCountItem}</span>
        <button
          className={s.incDecBtn}
          onClick={onClickMinusHandler}
          disabled={totalCountItem === 1}
        >
          <CiCircleMinus />
        </button>
      </div>
      <span className={s.sumMoney}>
        {totalCountMoneyItem} <RubleIcon size={12} />
      </span>
      <button className={s.deleteItemBtn} onClick={onClickDeleteItemHandler}>
        <CiCircleRemove />
      </button>
    </div>
  );
};
