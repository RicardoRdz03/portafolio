import React from "react";
import { Link } from "react-router-dom";

function Portada() {
  return (
    <section className="seccion-portada">
      <div className="grid-portada">
        <div className="columna1-portada">
          <img src="/sobremi.avif" alt="" />
        </div>
        <div className="columna2-portada">
          <h2>Hola, soy Ricardo</h2>
          <h1 className="typeado">FullStack Developer</h1>
          <div className="div-btn">
            <button
              onClick={() => window.open("/CV_Ricardo.pdf", "_blank")}
              className="btn-solid"
              style={{ marginRight: "17px" }}
            >
              Descargar CV
            </button>
            <button className="btn-outlined">Contactame</button>
          </div>
          <div className="div-iconos">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="https://github.com/RicardoRdz03"
              target="_blank"
            >
              <i
                id="github"
                style={{ marginRight: "20px" }}
                className="bi bi-github"
              ></i>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="https://www.linkedin.com/in/ricardo-antonio-arteaga-rodr%C3%ADguez-995bbb304"
              target="_blank"
            >
              <i id="github" className="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portada;
