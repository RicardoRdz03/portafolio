import { useState } from "react";
import { Link } from "react-router-dom";
import { useTraduccion } from "../context/TraduccionesContext";

function Contacto() {
  const { t } = useTraduccion();
  const email = "ricardo.arteaga.rdz@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reiniciar el mensaje después de 2 segundos
  };
  return (
    <>
      <section id="contacto" className="seccion-contacto">
        <h1
          style={{ textAlign: "center", paddingLeft: "0" }}
          className="centrar"
        >
          <i className="bi bi-at"></i> {t.tcontacto}
        </h1>
        <div className="email-section">
          <form
            action="https://formsubmit.co/ricardo.arteaga.rdz@gmail.com"
            method="POST"
          >
            <input name="Nombre" placeholder={t.nombre} type="text" />
            <input name="Correo" placeholder={t.correo} type="email" />
            <textarea name="Mensaje" placeholder={t.mensaje} id=""></textarea>
            <button type="submit" className="btn-outlined">
              {t.btnenviar} <i className="bi bi-send"></i>
            </button>
          </form>
          <p>{t.contactar}</p>
          <div className="email-container">
            <p id="email-text">{email}</p>
            <button
              onClick={handleCopy}
              className={`copy-button ${copied ? "copied" : ""}`}
            >
              {copied ? `${t.copiar2}` : `${t.copiar}`}
            </button>
          </div>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="https://github.com/RicardoRdz03"
            target="_blank"
          >
            <i
              style={{ fontSize: "xx-large", marginRight: "30px" }}
              className="bi bi-github"
            ></i>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="https://www.linkedin.com/in/ricardo-antonio-arteaga-rodr%C3%ADguez-995bbb304"
            target="_blank"
          >
            <i style={{ fontSize: "xx-large" }} className="bi bi-linkedin"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Contacto;
