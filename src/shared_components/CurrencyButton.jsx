import React from "react";
import "../styles/SideBar.css";

export const CurrencyButton = ({ text, status, onClickChange }) => {
  const onClick = () => {
    onClickChange(text);
  };
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={
        !status ? "SideBar-currency-button" : "SideBar-currency-button-checked"
      }
    >
      {text}
    </div>
  );
};
