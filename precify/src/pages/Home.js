import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="parent">
      <div className="div1">1</div>
      <div className="div2">
        <h2>¡Bienvenido Adrian!</h2>
        <h3>¿Qué deseas hacer?</h3>
        <div className="botones">
          <button className="button">Cálculo</button>
          <button className="button">Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
