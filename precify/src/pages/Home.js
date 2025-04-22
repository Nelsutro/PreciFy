import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="parent">
      <div className="div1-home">
        <h3 className="news-section-title">Noticias del Sector Tecnológico</h3>
        <div className="news-container">
          <article className="news-item">
            <img
              src="https://imagenes.elpais.com/resizer/v2/4S6Q5ZVLNRG7FOM6FQJNIBKR44.jpg?auth=c0489efe42f189788d1d836cca857c6072fef1fc59dd2084568131117c0548fa&width=1200"
              alt="Ilustración sobre trabajos en la nube"
              className="news-image"
            />
            <div className="news-content">
              <h4 className="news-title">Milagros Miceli, investigadora: “Es mentira que la IA va a automatizarlo todo. Necesita el trabajo manual y precarizado de millones de personas”</h4>
              <p className="news-summary">
              La experta del Instituto Alemán de Internet advierte de que el auge de herramientas como ChatGPT aumentará la demanda de gente que genere contenidos por poco dinero para enriquecer las bases de datos
              </p>
            </div>
          </article>

          <article className="news-item">
            <img
              src="https://www.infobae.com/resizer/v2/KQXRMF7HDZFOFF74HKVMPHIHG4.jpg?auth=74c184d91c716d024e5c9830da7fe4b561961b1006b25a2db681ed2f2f50a16c&smart=true&width=992&height=558&quality=85"
              alt="Ilustración sobre expertos en IA"
              className="news-image"
            />
            <div className="news-content">
              <h4 className="news-title">Cómo convertirse en un experto en ciberseguridad y tener el trabajo de tu vida ganando en dólares</h4>
              <p className="news-summary">
              A través de estudios tradicionales o con autonomía es posible obtener conocimientos y tener oportunidades de empleo.
              </p>
            </div>
          </article>

          <article className="news-item">
            <img
              src="https://www.infobae.com/resizer/v2/3GE3QERWXRBYPNLQ76NRYG74XE.png?auth=61256d5780ed068d61c081025accdfc28a0ddb8adae02a82805ae959a8dee685&smart=true&width=992&height=558&quality=85"
              alt="Ilustración sobre ciberseguridad"
              className="news-image"
            />
            <div className="news-content">
              <h4 className="news-title">Lista de trabajos tecnológicos que las empresas pagan bien y necesitan con urgencia</h4>
              <p className="news-summary">
              Países de Europa y Latinoamérica le apuestan a la contratación de profesionales capaces de organizar una gran cantidad de datos, y aprovechar los beneficios de la inteligencia artificial.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* --- Sección de Bienvenida (Antes div2-home) --- */}
      <div className="div2-home">
        <h2>¡Bienvenido Usuario!</h2>
        <h3>¿Qué deseas hacer?</h3>
        <div className="botones">
          <button className="button">Cálculo</button>
          <button className="button">Perfil</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
