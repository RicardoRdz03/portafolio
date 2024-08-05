import { useTraduccion } from "../context/TraduccionesContext";

export function listaProyectos() {
  const { t } = useTraduccion();
  const projects = [
    {
      id: 1,
      titulo: `${t.p1t}`,
      img: "/1.png",
      descripcion: `${t.p1d}`,
      github: "https://github.com/RicardoRdz03",
      pagina: "https://peli-series-rick.netlify.app/",
      tec: ["React", "MySQL", "Express.js"],
    },
    {
      id: 2,
      titulo: `${t.p2t}`,
      img: "/2.png",
      descripcion: `${t.p2d}`,
      github: "https://github.com/RicardoRdz03/Login-responsivo---Full-Stack",
      pagina: "https://login-responsive-rick.netlify.app/",
      tec: ["React", "MySQL", "Express.js", "TailwindCSS"],
    },
    {
      id: 3,
      titulo: "Admin Dashboard - Frontend",
      img: "/3.png",
      descripcion:
        "Página web de un panel de administración utilizando solo HTML y CSS con un estilo limpio y una buena paleta de colores",
      github: "https://github.com/RicardoRdz03/Dashboard-Frontend",
      pagina: "https://ricardordz03.github.io/Dashboard-Frontend/",
      tec: ["HTML", "CSS"],
    },
    {
      id: 4,
      titulo: "CRUD Gestion de empleados - FullStack",
      img: "/4.png",
      descripcion:
        "Página web realizada con Node.js estableciendo conexión con una base de datos, muestra en pantalla los datos, puede agregar, eliminar y modificar.",
      github: "https://github.com/RicardoRdz03/crud-react-node-mysql-bootstrap",
      pagina: "https://crud-react-node-mysql.netlify.app/",
      tec: ["React", "MySQL", "Express.js", "Bootstrap"],
    },
    {
      id: 5,
      titulo: "Veterinaria - Frontend",
      img: "/5.png",
      descripcion: "Página web frontend responsiva de una veterinaria ficticia",
      github: "https://github.com/RicardoRdz03/veterinaria-web",
      pagina: "https://veterinaria-rick.netlify.app/",
      tec: ["React", "TailwindCSS"],
    },
    {
      id: 6,
      titulo: "Portafolio web",
      img: "/6.png",
      descripcion:
        "Portafolio web personal que muestra diversas secciones como habilidades, los proyectos realizados etc.",
      github: "https://github.com/RicardoRdz03/veterinaria-web",
      pagina: "https://veterinaria-rick.netlify.app/",
      tec: ["React"],
    },
  ];

  return projects;
}
