import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="http://wa.me/5538999176677" // <-- LINK ATUALIZADO AQUI
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
