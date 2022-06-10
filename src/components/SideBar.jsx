import "../styles/SideBar.css";
import React from "react";
import { Checkbox } from "../shared_components/Checkbox.jsx";
import { useMainContext } from "../contexts/MainContext";
import { CurrencyButton } from "../shared_components/CurrencyButton.jsx";

export const SideBar = () => {
  const { visible: ticket, changeCheckbox } = useMainContext();
  const { currency, changeCurrency } = useMainContext();

  const checkAll = () => {
    changeCheckbox(
      ticket.map((item) => ({
        ...item,
        status: true,
      }))
    );
  };

  const changeStatus = (value) => {
    const newState = ticket.map((item) =>
      item.value === value ? { ...item, status: !item.status } : item
    );
    changeCheckbox(newState);
    if (newState.every((item) => !item.status)) {
      changeCheckbox(newState.map((item) => ({ ...item, status: true })));
    }
  };
  const onClick = (text) => {
    const state = currency.map((item) =>
      item.text === text
        ? { ...item, checked: true }
        : { ...item, checked: false }
    );
    changeCurrency(state);
  };

  return (
    <section className="SideBar-section-1">
      <div className="SideBar-box">
        <p className="SideBar-text-find"> ВАЛЮТА </p>
        <div className="SideBar-currency">
          {currency.map((item) => (
            <CurrencyButton
              key={item.key}
              text={item.text}
              status={item.checked}
              onClickChange={onClick}
            />
          ))}
        </div>
      </div>
      <div className="SideBar-box">
        <p className="SideBar-text-find">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <div className="SideBar-checkbox-all">
          <Checkbox
            text={"Все"}
            status={!ticket.some((item) => !item.status)}
            changeStatusById={checkAll}
          />
          {ticket.map((item) => (
            <Checkbox
              key={item.value}
              text={item.name}
              value={item.value}
              status={item.status}
              changeStatusById={changeStatus}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
