import React, { useEffect } from "react";
import { listaProyectos } from "../functions/listaProyectos";
import AOS from "aos";
import Navb2 from "../components/Navb2";
import Footer from "../components/Footer";
import { useTraduccion } from "../context/TraduccionesContext";

function TodosProyectos() {
  const { t } = useTraduccion();
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);
  const projects = listaProyectos();
  return (
    <>
      <Navb2 />
      <section className="seccion-proyectos">
        <h1 className="centrar">
          <i className="bi bi-code-slash"></i> {t.tproyectos}
        </h1>
        {projects.map((proyecto) => {
          return (
            <div data-aos="fade-up" key={proyecto.id}>
              <div
                style={{
                  marginBottom: "30px",
                  backgroundColor: "rgb(6, 18, 27)",
                  padding: "20px",
                  borderRadius: "9px",
                }}
                className="grid-proyectos"
              >
                <div className="columna1-proyectos">
                  <img src={proyecto.img} alt="imagen" />
                </div>
                <div className="columna2-proyectos">
                  <h2>{proyecto.titulo}</h2>
                  <div className="etiquetas">
                    {proyecto.tec.map((tag) => {
                      return (
                        <span
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
            </div>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default TodosProyectos;
