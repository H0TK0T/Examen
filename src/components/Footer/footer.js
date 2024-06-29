import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contactInfo">
        <h2>Контакты для связи</h2>
        <p>Телефон: +7-900-000-00-00</p>
        <p>Email: example@example.com</p>
        <p>Адрес: ул. Пушкина, д. Колотушкина</p>
      </div>
      <div className="copyRight">
        <p>&copy; 2024 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;

