import "../styles/ModalBuy.css";
import React from "react";

export const InputData = ({ label, name, formik }) => {
  const inputType = () => (name === "email" ? "email" : "text");

  return (
    <div>
      <div className="input-data">
        <label htmlFor={name}>{label}</label>
        {formik.touched[name] && formik.errors[name] ? (
          <div className="errors">{formik.errors[name]}</div>
        ) : null}
      </div>
      <input
        className="input"
        id={name}
        type={inputType()}
        {...formik.getFieldProps(name)}
      />
    </div>
  );
};
