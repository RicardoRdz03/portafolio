import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";

function Navb2() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <nav>
        <Link to="/">
          <h2>Ricardo.</h2>
        </Link>
        <div className="links">
          <Link to="/" style={{ color: "hsla(195, 93%, 48%, 1)" }}>
            Volver al inicio
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navb2;
