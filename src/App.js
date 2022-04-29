import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";


import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./app/components/Navbar";
import Home from "./app/pages/Home";
import FinancialSolutions from "./app/pages/FinancialSolutions";
import "./App.css";

function App() {
  return (
    <div className="App text-primary">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/financial_solutions" element={<FinancialSolutions />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
