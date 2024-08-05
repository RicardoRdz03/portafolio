import React, { useEffect } from "react";
import AOS from "aos";
import { useTraduccion } from "../context/TraduccionesContext";

function SobreMi() {
  const { t } = useTraduccion();

  useEffect(() => {
    AOS.init({
      duration: 700, // Duración de la animación en milisegundos
      once: true, // Si quieres que la animación ocurra solo una vez
    });
  }, []);

  return (
    <section id="sobre-mi" className="seccion-sobremi">
      <h1 className="centrar">
        <i className="bi bi-person-vcard"></i> {t.tsobremi}
      </h1>
      <div className="grid-sobremi">
        <div className="ocultar">
          <img data-aos="fade-down" src="/3.gif" alt="" />
        </div>
        <div className="columna1-sobremi">
          <p data-aos="fade-up">{t.csobremi}</p>
        </div>
        <div className="columna2-sobremi">
          <img data-aos="fade-down" src="/3.gif" alt="" />
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
