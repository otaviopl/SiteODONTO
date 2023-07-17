import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contatos = () => {
  return (
    <div className="container">
      <h2>Contatos</h2>
      <div className="contact-info">
      <div className="map-container">
            
          </div>
        <div className="contact-item">
          <a href="https://www.instagram.com/laurindoodontologia" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={50} />
          </a>
          <p>Siga-nos no Instagram</p>
        </div>
        <div className="contact-item">
          <a href="https://wa.me/5518997770098" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={50} />
          </a>
          <p>Entre em contato via WhatsApp</p>
        </div>
      </div>
    </div>
  );
};

export default Contatos;
