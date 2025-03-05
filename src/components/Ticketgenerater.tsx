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
          Congrats, <span className="ticket-name">{name}!</span> <br />
          Your ticket is ready.
        </h2>
        {/* Ticket Info */}
        <div className="ticket-info">
          <p className="ticket-meta">
            We've emailed your ticket to{" "}
            <strong className="ticket-email">{email}</strong> and will send
            updates in the run-up to the event.
          </p>
        </div>
      </div>

      <div className="ticket-card">
        {/* Event Details */}

        <div>
          {" "}
          <img
            src="src/assets/images/logo-full.svg"
            alt="logomark"
            className="ticket-logo"
          />
        </div>

        <div className="ticket-event">
          <data value="">Jan 31, 2025</data>
          <p className="ticket-location">/ Austin, TX</p>
        </div>

        {/* User Details */}
        <div className="ticket-user">
          {fileURL && (
            <img src={fileURL} alt="Avatar" className="ticket-avatar" />
          )}
          {/* name */}
          <div className="ticket-userbox">
            <h2 className="ticket-username">
              <strong>{name}</strong>
            </h2>
            {/* github */}
            <div className="ticket-github">
              <img
                src="src/assets/images/icon-github.svg"
                alt="giticon"
                className="github-icon"
              />
              <strong>{github}</strong>
            </div>
          </div>

          {/* Ticket Number */}
          <div className="ticket-numbers">
            {" "}
            <p>
              {" "}
              <strong>{ticketNumber}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketgenerater;
