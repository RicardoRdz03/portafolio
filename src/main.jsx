import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@flaticon/flaticon-uicons/css/all/all.css";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { TraduccionesProvider } from "./context/TraduccionesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TraduccionesProvider>
      <App />
    </TraduccionesProvider>
  </React.StrictMode>
);
