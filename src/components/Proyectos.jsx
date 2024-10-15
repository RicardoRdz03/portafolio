import React from "react";
import { listaProyectos } from "../functions/listaProyectos";
import { Link } from "react-router-dom";
import { useTraduccion } from "../context/TraduccionesContext";

function Proyectos() {
  const { t } = useTraduccion();
  const projects = listaProyectos();

  return (
    <>
      <section id="proyectos" className="seccion-proyectos">
        <h1 className="centrar">
          <i className="bi bi-code-slash"></i> {t.tproyectos}
        </h1>
        {projects.slice(0, 2).map((proyecto) => {
          return (
            <div
              style={{ marginBottom: "50px" }}
              key={proyecto.id}
              className="grid-proyectos"
            >
              <div className="columna1-proyectos">
                <img src={proyecto.img} alt="imagen" />
              </div>
              <div className="columna2-proyectos">
                <h2>{proyecto.titulo}</h2>
                <div className="etiquetas">
                  {proyecto.tec.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          fontSize: "small",
                          marginRight: "5px",
                          marginTop: "5px",
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <p>{proyecto.descripcion}</p>
                <div>
                  <a target="_blank" href={proyecto.github}>
                    <button
                      style={{ marginRight: "15px" }}
                      className="btn-solid"
                    >
                      <i
                        style={{ fontSize: "large", marginRight: "5px" }}
                        className="bi bi-github"
                      ></i>
                      Code
                    </button>
                  </a>
                  <a target="_blank" href={proyecto.pagina}>
                    <button className="btn-outlined">
                      <i
                        style={{ fontSize: "large", marginRight: "5px" }}
                        className="bi bi-link-45deg"
                      ></i>
                      Preview
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{ display: "flex", justifyContent: "center", margin: "auto" }}
        >
          <a href="/proyectos">
            <button
              style={{ width: "250px", margin: "auto" }}
              className="btn-solid"
            >
              {t.btnmas}
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Proyectos;
