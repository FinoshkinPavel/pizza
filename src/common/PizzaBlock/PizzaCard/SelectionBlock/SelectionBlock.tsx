import React, { memo, useState } from "react";
import s from "./SelectionBlock.module.scss";
import { depthPizza } from "../../../../utils/helper-const/selection-block-helper-cosnt";

type SelectionBlockPropsType = {
  size: Array<number>;
  types: Array<number>;
  activeSizePizza: number | null;
  activePizzaType: number | null;
  setActiveSizePizza: (value: number) => void;
  setActivePizzaType: (value: number) => void;
};

export const SelectionBlock: React.FC<SelectionBlockPropsType> = memo(
  ({
    types,
    size,
    setActiveSizePizza,
    setActivePizzaType,
    activeSizePizza,
    activePizzaType,
  }) => {
    return (
      <div className={s.selectionBlock}>
        <div className={s.depthBlock}>
          {types.map((el) => (
            <span
              key={el}
              onClick={() => setActivePizzaType(el)}
              className={`${s.depthBlockItem} ${
                el === activePizzaType ? s.activeDepthBlockItem : null
              }`}
            >
              {depthPizza[el]}
            </span>
          ))}
        </div>
        <div className={s.sizeBlock}>
          {size.map((el, i) => (
            <span
              key={i}
              onClick={() => setActiveSizePizza(el)}
              className={`${s.sizeBlockItem} ${
                el === activeSizePizza ? s.activeSizeBlockItem : null
              }`}
            >
              {el} cm
            </span>
          ))}
        </div>
      </div>
    );
  }
);
