import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Ticketgenerater: React.FC = () => {
  const location = useLocation();
  const { name, email, github, fileURL } = location.state || {};
  const [ticketNumber, setTicketNumber] = useState("");

  useEffect(() => {
    // Generate a random 5-digit number and prefix with "#"
    const uniqueNumber = `#${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketNumber(uniqueNumber);
  }, []);

  return (
    <div className="ticket-container">
      {/* Ticket Header */}
      <div className="ticket-header">
        <h2 className="ticket-title">
          Congrats, {name}! <br />
          Your ticket is ready.
        </h2>
      </div>

      {/* Ticket Info */}
      <div className="ticket-info">
        <p className="ticket-meta">
          We've emailed your ticket to <strong>{email}</strong> and will send
          updates in the run-up to the event.
        </p>
      </div>

      {/* Ticket Number */}
      <p className="ticket-number">
        Ticket Number: <strong>{ticketNumber}</strong>
      </p>

      {/* Event Details */}
      <div className="ticket-event">
        <img
          src="src/assets/images/logo-full.svg"
          alt="logomark"
          className="ticket-logo"
        />
        <data value="">Jan 31, 2025</data>
        <p className="ticket-location">Austin, TX</p>
      </div>

      {/* User Details */}
      <div className="ticket-user">
        {fileURL && (
          <img src={fileURL} alt="Avatar" className="ticket-avatar" />
        )}
        <h2 className="ticket-username">
          <strong>{name}</strong>
        </h2>

        <div className="ticket-github">
          <img
            src="src/assets/images/icon-github.svg"
            alt="giticon"
            className="github-icon"
          />
          <strong>{github}</strong>
        </div>
      </div>
    </div>
  );
};

export default Ticketgenerater;
