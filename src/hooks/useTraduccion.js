import { useState } from "react";

export function useTraduccion() {
  const traducir = {
    es: {
      inicio: "Inicio",
      sobremi: "Sobre mí",
      proyectos: "Proyectos",
      certificados: "Certificados",
      hola: "Hola, soy Ricardo",
      cv: "Descargar CV",
      contacto: "Contactame",
    },
    en: {
      inicio: "Home",
      sobremi: "About me",
      proyectos: "Projects",
      certificados: "Certificates",
      hola: "Hi, I'm Ricardo",
      cv: "Download CV",
      contacto: "Contact me",
    },
  };

  const [lenguaje, setLenguaje] = useState("es");

  const t = traducir[lenguaje];
  return { t, lenguaje, setLenguaje };
}
