import React, { useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";


import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./app/components/Navbar";
import Home from "./app/pages/Home";
import "./App.css";
import Demands from "./app/pages/Demands";
import Modal from "./app/components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState(<></>)
  return (
    <div className="App text-primary">      
      <Router>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          {children}
        </Modal>
        <Navbar />
        <Routes>
          <Route path="/demands" element={<Demands childrenModal={setChildren} setShowModal={setShowModal} showModal={()=>setShowModal(true)}/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
