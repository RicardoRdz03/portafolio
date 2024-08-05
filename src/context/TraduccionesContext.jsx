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
      tproyectos: "Proyectos",
      p1t: "PelisenHD - FullStack",
      p1d: "Página web de peliculas y series creada en React con creación y consumo de propia API",
      p2t: "Login - FullStack",
      p2d: "Login responsivo funcional con página de inicio de sesión, página de registro y sesión de usuarios",
      btnmas: "Ver más proyectos...",
      tcertificado: "Certificados",
      fecha: "(Marzo - Abril 2024)",
      btncertificado: "Ver certificado",
      tcontacto: "Contacto",
      nombre: "Nombre",
      correo: "Correo",
      mensaje: "Mensaje",
      btnenviar: "Enviar",
      contactar: "O puedes contactarme directamente a mi correo:",
      copiar: "Copiar correo",
      copiar2: "¡Copiado!",
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
      tproyectos: "Projects",
      p1t: "PelisenHD - FullStack",
      p1d: "Movie and series website created in React with creation and consumption of its own API",
      p2t: "Login - FullStack",
      p2d: "Functional responsive login with login page, registration page and user session",
      btnmas: "See more projects...",
      tcertificado: "Certificates",
      fecha: "(March - April 2024)",
      btncertificado: "See certificate",
      tcontacto: "Contact",
      nombre: "Name",
      correo: "Email",
      mensaje: "Message",
      btnenviar: "Send",
      contactar: "Or you can contact me directly at my email:",
      copiar: "Copy email",
      copiar2: "¡Copied!",
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
