import "../styles/FrontBar.css";
import jsonFile from "../data/tickets.json";
import React from "react";
import { TicketBar } from "./TicketBar";
import { useMainContext } from "../contexts/MainContext";
import { useTicketContext } from "../contexts/TicketContext";
import { ModalBuy } from "./ModalBuy";
import { ModalSuccess } from "./ModalSuccess";

export const FrontBar = () => {
  const { tickets } = jsonFile;
  const { visible: stopsForTicket, currency } = useMainContext();
  const { show, showSuccess, changeShowSuccess } = useTicketContext();
  const currentCurrency = currency.filter((item) => item.checked)[0];
  const sortedTickets = tickets
    .filter((ticket) =>
      stopsForTicket
        .filter((item) => item.status)
        .some((item) => item.value === ticket.stops)
    )
    .sort((ticket1, ticket2) => ticket1.price - ticket2.price);
  return (
    <section className="FrontBar-section-2">
      <div>
        {sortedTickets.map((ticket) => (
          <TicketBar
            key={ticket.id}
            price={ticket.price}
            arrival_time={ticket.arrival_time}
            departure_time={ticket.departure_time}
            origin={ticket.origin}
            origin_name={ticket.origin_name}
            destination={ticket.destination}
            destination_name={ticket.destination_name}
            arrival_date={ticket.arrival_date}
            departure_date={ticket.departure_date}
            stops={ticket.stops}
            currency={currentCurrency}
          />
        ))}
        <ModalBuy show={show} />
        <ModalSuccess
          onClose={() => changeShowSuccess(false)}
          showSuccess={showSuccess}
        />
      </div>
    </section>
  );
};
