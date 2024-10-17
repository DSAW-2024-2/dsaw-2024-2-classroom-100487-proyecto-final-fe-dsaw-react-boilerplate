import React from 'react';
import './principal.css';

const Principal: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo"></div>
        <div className="title">Campus Rush</div>
      </div>
      <div className="button-container">
        <a href="#" className="button">Iniciar sesión</a>
        <a href="#" className="button">Registrarme</a>
      </div>
    </div>
  );
};

export default Principal;

