import React, { useState, useEffect } from "react";
import AOS from "aos";
import { useTraduccion } from "../context/TraduccionesContext";

function Navb() {
  const { t, setLenguaje } = useTraduccion();
  const [isOpen, setIsOpen] = useState(false);

  const abrirMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <nav>
        <i onClick={abrirMenu} id="btn-burger" className="bi bi-list"></i>
        <h2>Ricardo.</h2>
        <div className="links">
          <a
            style={{ marginRight: "16px", color: "hsla(195, 93%, 48%, 1)" }}
            href=""
          >
            {t.inicio}
          </a>
          <a style={{ marginRight: "16px" }} href="">
            {t.sobremi}
          </a>
          <a style={{ marginRight: "16px" }} href="#proyectos">
            {t.proyectos}
          </a>
          <a href="#certificados">{t.certificados}</a>
          <button onClick={() => setLenguaje("es")}>Español</button>
          <button onClick={() => setLenguaje("en")}>Inglés</button>
        </div>
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <div className="div-icon">
            <i
              onClick={abrirMenu}
              style={{ fontSize: "x-large" }}
              className="bi bi-x"
            ></i>
          </div>
          <div className="div-links">
            <a style={{ marginBottom: "30px" }} href="">
              Inicio
            </a>
            <a style={{ marginBottom: "30px" }} href="">
              Habilidades
            </a>
            <a style={{ marginBottom: "30px" }} href="#proyectos">
              Proyectos
            </a>
            <a href="#certificados">Certificados</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navb;
