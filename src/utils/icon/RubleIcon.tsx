import React from "react";
import { FaRubleSign } from "react-icons/fa";

type RubleIcon = {
  size: number;
};

export const RubleIcon: React.FC<RubleIcon> = ({ size }) => {
  return <FaRubleSign style={{ fontSize: size }} />;
};
