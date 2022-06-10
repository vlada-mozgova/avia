import React, { useContext, useState } from "react";

const TicketContext = React.createContext();

export const useTicketContext = () => {
  return useContext(TicketContext);
};

export const TicketProvider = ({ children }) => {
  const [data, setData] = useState([
    { label: "Почта", name: "email" },
    { label: "Номер телефона", name: "phone" },
    { label: "Имя", name: "firstname" },
    { label: "Фамилия", name: "lastname" },
    { label: "Номер паспорта", name: "passport" },
  ]);

  const [savedData, setSavedData] = useState({
    email: "",
    phone: "",
    firstname: "",
    lastname: "",
    passport: "",
  });
  const changeSavedData = (state) => setSavedData(state);
  const changeData = (state) => setData(state);

  const [show, setShow] = useState(false);
  const changeShow = (state) => setShow(state);

  const [showSuccess, setShowSuccess] = useState(false);
  const changeShowSuccess = (state) => setShowSuccess(state);
  const validationInputs = [false, false, false, false, false];
  return (
    <TicketContext.Provider
      value={{
        savedData,
        changeSavedData,
        show,
        changeShow,
        showSuccess,
        changeShowSuccess,
        validationInputs,
        data,
        changeData,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
