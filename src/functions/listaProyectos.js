import { useTraduccion } from "../context/TraduccionesContext";

export function listaProyectos() {
  const { t } = useTraduccion();
  const projects = [
    {
      id: 1,
      titulo: `${t.p1t}`,
      img: "/7.png",
      descripcion: `${t.p1d}`,
      github: "https://github.com/RicardoRdz03/reproductorMusica80s",
      pagina: "https://ricardordz03.github.io/reproductorMusica80s/",
      tec: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      titulo: `${t.p2t}`,
      img: "/1.png",
      descripcion: `${t.p2d}`,
      github: "https://github.com/RicardoRdz03/Peliculas-Series",
      pagina: "https://peli-series-rick.netlify.app/",
      tec: ["React", "MySQL", "Express.js"],
    },
    {
      id: 3,
      titulo: `${t.p3t}`,
      img: "/2.png",
      descripcion: `${t.p3d}`,
      github: "https://github.com/RicardoRdz03/Login-responsivo---Full-Stack",
      pagina: "https://login-responsive-rick.netlify.app/",
      tec: ["React", "MySQL", "Express.js", "TailwindCSS"],
    },
    {
      id: 4,
      titulo: `${t.p4t}`,
      img: "/3.png",
      descripcion: `${t.p4d}`,
      github: "https://github.com/RicardoRdz03/Dashboard-Frontend",
      pagina: "https://ricardordz03.github.io/Dashboard-Frontend/",
      tec: ["HTML", "CSS"],
    },
    {
      id: 5,
      titulo: `${t.p5t}`,
      img: "/4.png",
      descripcion: `${t.p5d}`,
      github: "https://github.com/RicardoRdz03/crud-react-node-mysql-bootstrap",
      pagina: "https://crud-react-node-mysql.netlify.app/",
      tec: ["React", "MySQL", "Express.js", "Bootstrap"],
    },
    {
      id: 6,
      titulo: `${t.p6t}`,
      img: "/5.png",
      descripcion: `${t.p6d}`,
      github: "https://github.com/RicardoRdz03/veterinaria-web",
      pagina: "https://veterinaria-rick.netlify.app/",
      tec: ["React", "TailwindCSS"],
    },
    {
      id: 7,
      titulo: `${t.p7t}`,
      img: "/6.png",
      descripcion: `${t.p7d}`,
      github: "https://github.com/RicardoRdz03/portafolio",
      pagina: "https://rick-portafolio.netlify.app/",
      tec: ["React"],
    },
  ];

  return projects;
}
