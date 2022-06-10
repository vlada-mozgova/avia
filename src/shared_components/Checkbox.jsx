import "../styles/SideBar.css";
import React from "react";

export const Checkbox = ({ text, value, changeStatusById, status }) => {
  const onChange = () => {
    changeStatusById(value);
  };
  return (
    <div onClick={onChange} className="SideBar-checkbox">
      <input type="checkbox" checked={status} onChange={onChange} />
      <span className="geekmark" />
      <label className="SideBar-text-checkbox">{text}</label>
    </div>
  );
};
