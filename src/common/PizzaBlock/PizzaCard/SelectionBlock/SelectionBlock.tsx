import React from "react";
import s from "./SelectionBlock.module.scss";

export const SelectionBlock: React.FC = () => {
  return (
    <div className={s.selectionBlock}>
      <div className={s.depthBlock}>
        <span className={s.depthBlockItem}>тонкое</span>
        <span className={s.depthBlockItem}>традиционное</span>
      </div>
      <div className={s.sizeBlock}>
        <span className={s.sizeBlockItem}>25 cm</span>
        <span className={s.sizeBlockItem}>30 cm</span>
        <span className={s.sizeBlockItem}>40 cm</span>
      </div>
    </div>
  );
};
