import React, { useEffect } from "react";
import Navb from "../components/Navb";
import Portada from "../components/Portada";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";
import Certificados from "../components/Certificados";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";

function PaginaPrincipal() {
  return (
    <>
      <Navb />
      <Portada />
      <SobreMi />
      <Proyectos />
      <Certificados />
      <Contacto />
      <Footer />
    </>
  );
}

export default PaginaPrincipal;
