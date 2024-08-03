import React from "react";

function Certificados() {
  return (
    <>
      <section id="certificados" className="seccion-certificados">
        <h1 className="centrar">
          <i className="bi bi-award"></i> Certificados
        </h1>
        <div className="grid-certificado">
          <div className="columna1-certificado">
            <img src="/certificado1.png" alt="" />
          </div>
          <div className="columna2-certificado">
            <h2 style={{ textAlign: "center" }}>
              Responsive Web Design - freeCodeCamp
            </h2>
            <p>{"(Marzo - Abril 2024)"}</p>
            <a
              target="_blank"
              href="https://www.freecodecamp.org/certification/RicardoAntonioArteagaRodriguez/responsive-web-design"
            >
              <button className="btn-solid">
                Ver credencial{" "}
                <i
                  style={{ marginLeft: "3px" }}
                  className="bi bi-box-arrow-up-right"
                ></i>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificados;
