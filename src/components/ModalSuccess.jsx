import React from "react";
import "../styles/ModalSuccess.css";
import { useTicketContext } from "../contexts/TicketContext";
import { Button } from "../shared_components/Button";

export const ModalSuccess = () => {
  const { savedData, changeShow, showSuccess, changeShowSuccess } =
    useTicketContext();
  const onClick = () => {
    changeShowSuccess(false);
    changeShow(false);
  };
  return (
    <div className={`modal-success ${showSuccess ? "show" : ""}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-success-content"
      >
        <div className="modal-success-header">
          <h4 className="modal-success-title">{savedData.firstname},</h4>
        </div>
        <div className="modal-success-body">
          <p>Вы успешно забронировали билет!</p>
        </div>
        <div className="modal-success-footer">
          <Button
            onClick={onClick}
            className="button-success"
            type="button"
            text="Ок"
          />
        </div>
      </div>
    </div>
  );
};
