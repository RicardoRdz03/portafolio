import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const TraduccionesContext = createContext();

// Proveedor de contexto
export const TraduccionesProvider = ({ children }) => {
  const traducir = {
    es: {
      inicio: "Inicio",
      sobremi: "Sobre mi",
      proyectos: "Proyectos",
      certificados: "Certificados",
      hola: "Hola, soy Ricardo",
      cv: "Descargar CV",
      contacto: "Contactame",
      tsobremi: "Sobre mí",
      csobremi:
        "Tengo 23 años, estudié Ingeniería en Sistemas computacionales, cuento con conocimientos en desarrollo web y experiencia práctica en HTML, CSS, JavaScript, React, Node.js, y otras tecnologías relevantes. Apasionado por la programación y el aprendizaje continuo, con habilidades para trabajar tanto de manera individual como en equipo. Siempre estoy dispuesto a aprender algo nuevo.",
    },
    en: {
      inicio: "Home",
      sobremi: "About me",
      proyectos: "Projects",
      certificados: "Certificates",
      hola: "Hi, I'm Ricardo",
      cv: "Download CV",
      contacto: "Contact me",
      tsobremi: "About me",
      csobremi:
        "I am 23 years old, I studied Computer Systems Engineering, I have knowledge in web development and practical experience in HTML, CSS, JavaScript, React, Node.js, and other relevant technologies. Passionate about programming and continuous learning, with skills to work both individually and in teams. I am always willing to learn something new.",
    },
  };

  const [lenguaje, setLenguaje] = useState("es");

  const t = traducir[lenguaje];

  return (
    <TraduccionesContext.Provider value={{ t, lenguaje, setLenguaje }}>
      {children}
    </TraduccionesContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useTraduccion = () => useContext(TraduccionesContext);
