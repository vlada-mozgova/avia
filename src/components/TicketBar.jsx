import "../styles/FrontBar.css";
import pic from "../images/turkish.png";
import picPlane from "../images/plane.png";
import React from "react";
import { useTicketContext } from "../contexts/TicketContext";

export const TicketBar = ({
  price,
  arrival_time,
  departure_time,
  origin,
  origin_name,
  destination,
  destination_name,
  arrival_date,
  departure_date,
  stops,
  currency,
}) => {
  const getStop = () => {
    if (stops !== 0) {
      return stops + (stops > 1 ? " ПЕРЕСАДКИ" : " ПЕРЕСАДКА");
    } else {
      return "БЕЗ ПЕРЕСАДОК";
    }
  };

  const arrive = origin + ", " + origin_name;
  const dest = destination + ", " + destination_name;
  const modifiedPrice = Math.floor(price * currency.percent);

  const { changeShow } = useTicketContext();
  return (
    <div>
      <div className="FrontBar-ticket">
        <div className="FrontBar-buy">
          <img src={pic} className="img" alt="carrier" />
          <div onClick={() => changeShow(true)} className="FrontBar-button">
            Купить <br /> за {modifiedPrice} {currency.key}
          </div>
        </div>
        <div className="line"></div>
        <div className="FrontBar-flight">
          <div className="time">
            <div>{arrival_time}</div>

            <div className="stops">
              <div className="stops-count">{getStop()}</div>
              <div className="plane">
                {/* <hr className="plane-line" /> */}
                <span className="plane-line" />
                <img src={picPlane} className="picPlane" alt="plane" />
              </div>
            </div>

            <div>{departure_time}</div>
          </div>
          <div className="cities">
            <div>{arrive}</div>
            <div>{dest}</div>
          </div>
          <div className="dates">
            <div>{arrival_date}</div>
            <div>{departure_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
