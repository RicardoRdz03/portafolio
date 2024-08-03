import React, { useState, useEffect } from "react";
import AOS from "aos";

function Navb() {
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
            Inicio
          </a>
          <a style={{ marginRight: "16px" }} href="">
            Habilidades
          </a>
          <a style={{ marginRight: "16px" }} href="#proyectos">
            Proyectos
          </a>
          <a href="#certificados">Certificados</a>
        </div>
      </nav>
      <div className={`menu ${isOpen ? "active" : ""}`}>
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
    </>
  );
}

export default Navb;
