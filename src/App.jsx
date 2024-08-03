import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import TodosProyectos from "./pages/TodosProyectos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/proyectos" element={<TodosProyectos />} />
      </Routes>
    </Router>
  );
}

export default App;
