import React, { useEffect } from "react";
import AOS from "aos";

function SobreMi() {
  useEffect(() => {
    AOS.init({
      duration: 700, // Duración de la animación en milisegundos
      once: true, // Si quieres que la animación ocurra solo una vez
    });
  }, []);

  return (
    <section className="seccion-sobremi">
      <h1 className="centrar">
        <i className="bi bi-person-vcard"></i> Sobre mí
      </h1>
      <div className="grid-sobremi">
        <div className="ocultar">
          <img data-aos="fade-down" src="/3.gif" alt="" />
        </div>
        <div className="columna1-sobremi">
          <p data-aos="fade-up">
            Tengo 23 años, estudié Ingeniería en Sistemas computacionales,
            cuento con conocimientos en desarrollo web y experiencia práctica en
            HTML, CSS, JavaScript, React, Node.js, y otras tecnologías
            relevantes. Apasionado por la programación y el aprendizaje
            continuo, con habilidades para trabajar tanto de manera individual
            como en equipo. Siempre estoy dispuesto a aprender algo nuevo.
          </p>
        </div>
        <div className="columna2-sobremi">
          <img data-aos="fade-down" src="/3.gif" alt="" />
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
