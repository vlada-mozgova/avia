import React from "react";
import "../styles/ModalBuy.css";

export const Button = ({ text, className, type, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
