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
      p1t: "Reproductor de música 80's - Frontend",
      p1d: "Reproductor de música funcional con el uso de eventos de JavaScript, puede reproducir, pausar, pasar a la siguiente canción o a la anterior, y navegar hacia adelante o hacia atras en la duración de la canción por medio de la barra deslizable.",
      p2t: "PelisenHD - FullStack",
      p2d: "Página web de peliculas y series creada en React con creación y consumo de propia API",
      p3t: "Login - FullStack",
      p3d: "Login responsivo funcional con página de inicio de sesión, página de registro y sesión de usuarios",
      p4t: "Admin Dashboard - Frontend",
      p4d: "Página web de un panel de administración utilizando solo HTML y CSS con un estilo limpio y una buena paleta de colores",
      p5t: "CRUD Gestión de empleados - FullStack",
      p5d: "Página web realizada con Node.js estableciendo conexión con una base de datos, muestra en pantalla los datos, puede agregar, eliminar y modificar.",
      p6t: "Veterinaria - Frontend",
      p6d: "Página web frontend responsiva de una veterinaria ficticia",
      p7t: "Portafolio web",
      p7d: "Portafolio web personal que muestra diversas secciones como habilidades, los proyectos realizados etc.",
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
      p1t: "80's Music player",
      p1d: "Functional music player with the use of JavaScript events, you can play, pause, skip to the next or previous song, and navigate forward or backward in the song duration using the slider bar.",
      p2t: "PelisenHD - FullStack",
      p2d: "Movie and series website created in React with creation and consumption of its own API",
      p3t: "Login - FullStack",
      p3d: "Functional responsive login with login page, registration page and user session",
      p4t: "Admin Dashboard - Frontend",
      p4d: "An admin panel web page using only HTML and CSS with a clean style and a good color palette.",
      p5t: "CRUD employee management - FullStack",
      p5d: "Web page made with Node.js establishing a connection with a database, displays the data on the screen, can add, delete and modify.",
      p6t: "Vet - Frontend",
      p6d: "Responsive frontend website of a fictitious veterinarian",
      p7t: "Web Portfolio",
      p7d: "Personal web portfolio that shows various sections such as skills, projects carried out, etc.",
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
