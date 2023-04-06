import React, { memo, useState } from "react";
import s from "./SelectionBlock.module.scss";
import { depthPizza } from "../../../../utils/helper-const/selection-block-helper-cosnt";

type SelectionBlockPropsType = {
  size: Array<number>;
  types: Array<number>;
};

export const SelectionBlock: React.FC<SelectionBlockPropsType> = memo(
  ({ types, size }) => {
    const [activePizzaType, setActivePizzaType] = useState<number | null>(null);
    const [activeSizePizza, setActiveSizePizza] = useState<number | null>(null);

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
              onClick={() => setActiveSizePizza(i)}
              className={`${s.sizeBlockItem} ${
                i === activeSizePizza ? s.activeSizeBlockItem : null
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
