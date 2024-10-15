import React from "react";
import { useTraduccion } from "../context/TraduccionesContext";
import { Link } from "react-router-dom";

function Certificados() {
  const { t } = useTraduccion();

  const certificados = [
    {
      id: 1,
      imagen: "/certificado1.png",
      titulo: "Responsive Web Design",
      instituto: "freeCodeCamp",
      fecha: "Marzo - Abril 2024",
      link: "https://www.freecodecamp.org/certification/RicardoAntonioArteagaRodriguez/responsive-web-design",
    },
    {
      id: 2,
      imagen: "/certificado2.png",
      titulo: "Networking Basics",
      instituto: "Cisco Nerworking Academy",
      fecha: "Agosto - Septiembre 2024",
      link: "https://www.credly.com/badges/35a913cf-36f8-40f7-9ea5-6da860347b2b/public_url",
    },
  ];

  return (
    <>
      <section id="certificados" className="seccion-certificados">
        <h1 className="centrar">
          <i className="bi bi-award"></i> {t.tcertificado}
        </h1>
        <div className="grid-certificados">
          {certificados.map((certificado, index) => {
            return (
              <div key={index} className="columna1-certificados">
                <img
                  style={{ marginBottom: "30px" }}
                  height={200}
                  src={certificado.imagen}
                  alt={certificado.titulo}
                />
                <h2 style={{ textAlign: "center" }}>{certificado.titulo}</h2>
                <h3>{certificado.instituto}</h3>
                <p style={{ margin: "0" }}>{certificado.fecha}</p>
                <Link to={certificado.link} target="_blank">
                  <button className="btn-solid">
                    Ver certificado <i className="bi bi-box-arrow-up-right"></i>
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Certificados;
