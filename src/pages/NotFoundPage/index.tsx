import React from "react";
import s from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={s.wrapNotFoundPage}>
      <span className={s.smile}> 😑</span>
      <h1>Нечего не найдено</h1>
      <span>К сожалению данная страница отсутствует в нашем магазине</span>
    </div>
  );
};
