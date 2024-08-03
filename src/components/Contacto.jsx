import React, { useState } from "react";

function Contacto() {
  const email = "ricardo.arteaga.rdz@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reiniciar el mensaje después de 2 segundos
  };
  return (
    <>
      <section className="seccion-contacto">
        <h1 className="centrar">
          <i className="bi bi-at"></i> Contacto
        </h1>
        <div className="copy-email-containe">
          <p className="email-text"> {email}</p>
          <button
            onClick={handleCopy}
            className={`copy-button ${copied ? "copied" : ""}`}
          >
            {copied ? "¡Copiado!" : "Copiar correo"}
          </button>
        </div>
      </section>
    </>
  );
}

export default Contacto;
