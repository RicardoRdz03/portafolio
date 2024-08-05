import React, { useState, useEffect } from "react";
import AOS from "aos";
import { useTraduccion } from "../context/TraduccionesContext";
import { Link } from "react-router-dom";

function Navb2() {
  const { t, lenguaje, setLenguaje } = useTraduccion();
  const [isOpen, setIsOpen] = useState(false);
  const [bandera, setBandera] = useState(false);

  const abrirMenu = () => {
    const menu = document.querySelector(".menu");

    if (!isOpen) {
      menu.style.display = "flex"; // Mostrar el menú inmediatamente
      setTimeout(() => {
        setIsOpen(true); // Activar la transición después de un pequeño retraso
      }, 10); // Un pequeño retardo permite que el navegador aplique la transición
    } else {
      setIsOpen(false);
      setTimeout(() => {
        menu.style.display = "none"; // Ocultar el menú después de que la transición termine
      }, 300); // Tiempo de la transición en milisegundos
    }
  };

  const cambiarLenguaje = () => {
    if (lenguaje === "es") {
      setLenguaje("en");
      setBandera(!bandera);
    } else {
      setLenguaje("es");
      setBandera(!bandera);
    }
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
        <Link to="/">
          <h2>Ricardo.</h2>
        </Link>
        <div className="links">
          <Link
            to="/"
            style={{ marginRight: "16px", color: "hsla(195, 93%, 48%, 1)" }}
          >
            Regresar al Inicio
          </Link>
        </div>
        {bandera ? (
          <div onClick={cambiarLenguaje} className="bandera">
            <img src="/mundo.png" alt="" /> Español
          </div>
        ) : (
          <div onClick={cambiarLenguaje} className="bandera">
            <img src="/reino-unido.png" alt="" /> English
          </div>
        )}
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
              Regresar al inicio
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navb2;
