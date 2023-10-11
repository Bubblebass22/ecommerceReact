import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 bg-dark">
        <div className="container-footer">
          <nav className="row">
            <Link
              to="/"
              className="col-12 col-md3 d-flex aling-items-center justify-content-center"
            >
              <img
                src=""
              />
            </Link>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2 "></li>
              <li className="text-center"></li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2 ">Enlaces</li>
              <li>
                <Link to="/alta">Registrarse</Link>
              </li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled ">
              <li className="font-weight-bold mb-2 "></li>
              <li className="text-center">
                Bienvenidos al centro de compras test mas importante de LATAM
              </li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weight-bold mb-2 "></li>
              <li className="text-center">
                Bienvenidos al centro de compras test mas importante de LATAM
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
