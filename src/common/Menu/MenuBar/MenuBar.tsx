import React from "react";
import { menu } from "./helperConst";

export const MenuBar = () => {
  return (
    <ul>
      {menu.map((el) => {
        return <li key={el}>{el}</li>;
      })}
    </ul>
  );
};
