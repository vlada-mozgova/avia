import React from "react";
import "../styles/ModalBuy.css";
import { useTicketContext } from "../contexts/TicketContext";
import { Formik } from "formik";
import { validationSchema } from "../helpers/validationSchema";
import { InputData } from "../shared_components/InputData.jsx";
import { Button } from "../shared_components/Button";

export const ModalBuy = ({ show }) => {
  const { changeSavedData, data } = useTicketContext();
  const { changeShow, changeShowSuccess } = useTicketContext();

  const onSubmit = (values, { resetForm }) => {
    changeSavedData(values);
    if (validationSchema.isValid) {
      changeShow(false);
      changeShowSuccess(true);
    }
    setTimeout(() => resetForm({ values: "" }), 1000);
  };
  const onClickExit = (resetForm) => {
    changeShow(false);
    resetForm({ values: "" });
  };
  const initialValues = {
    email: "",
    phone: "",
    firstname: "",
    lastname: "",
    passport: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div
          onClick={() => onClickExit(formik.resetForm)}
          className={`modal ${show ? "show" : ""}`}
        >
          <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <div onClick={(e) => e.stopPropagation()} className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Title</h4>
              </div>
              <div className="modal-body">
                {data.map((item) => (
                  <InputData
                    key={item.name}
                    label={item.label}
                    name={item.name}
                    validation={item.validation}
                    formik={formik}
                  />
                ))}
              </div>
              <div className="modal-footer">
                <Button className="button" type="submit" text="Купить" />
                <Button
                  text={"Отмена"}
                  className="button"
                  onClick={() => onClickExit(formik.resetForm)}
                  type="reset"
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};
