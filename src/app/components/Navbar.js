import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          FactorTek
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial_solutions">
                FINANCIAL SOLUTIONS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial_solutions">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial_solutions">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial_solutions">
                REFFERALS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial_solutions">
                GET STARTED
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/financial_solutions">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
