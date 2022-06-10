import React, { useContext, useState } from "react";

const MainContext = React.createContext();

export const useMainContext = () => {
  return useContext(MainContext);
};

export const MainProvider = ({ children }) => {
  const [checkedState, setCheckedState] = useState([
    { name: "Без пересадок", value: 0, status: true },
    { name: "1 пересадка", value: 1, status: true },
    { name: "2 пересадки", value: 2, status: true },
    { name: "3 пересадки", value: 3, status: true },
  ]);
  const changeCheckbox = (state) => setCheckedState(state);

  const [currency, setCurrency] = useState([
    { key: "₴", text: "UAH", percent: 1, checked: true },
    { key: "$", text: "USD", percent: 0.033, checked: false },
    { key: "€", text: "EUR", percent: 0.03, checked: false },
  ]);
  const changeCurrency = (state) => setCurrency(state);

  return (
    <MainContext.Provider
      value={{
        visible: checkedState,
        changeCheckbox,
        currency,
        changeCurrency,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
