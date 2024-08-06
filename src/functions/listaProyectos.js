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
      titulo: `${t.p3t}`,
      img: "/3.png",
      descripcion: `${t.p3d}`,
      github: "https://github.com/RicardoRdz03/Dashboard-Frontend",
      pagina: "https://ricardordz03.github.io/Dashboard-Frontend/",
      tec: ["HTML", "CSS"],
    },
    {
      id: 4,
      titulo: `${t.p4t}`,
      img: "/4.png",
      descripcion: `${t.p4d}`,
      github: "https://github.com/RicardoRdz03/crud-react-node-mysql-bootstrap",
      pagina: "https://crud-react-node-mysql.netlify.app/",
      tec: ["React", "MySQL", "Express.js", "Bootstrap"],
    },
    {
      id: 5,
      titulo: `${t.p5t}`,
      img: "/5.png",
      descripcion: `${t.p5d}`,
      github: "https://github.com/RicardoRdz03/veterinaria-web",
      pagina: "https://veterinaria-rick.netlify.app/",
      tec: ["React", "TailwindCSS"],
    },
    {
      id: 6,
      titulo: `${t.p6t}`,
      img: "/6.png",
      descripcion: `${t.p6d}`,
      github: "https://github.com/RicardoRdz03/portafolio",
      pagina: "https://rick-portafolio.netlify.app/",
      tec: ["React"],
    },
  ];

  return projects;
}
