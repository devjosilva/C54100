import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import "../index.css";
import logo from "./../assets/logo.png";
import { NavLink } from "react-router-dom";
/*Todo:
Generar nuevo CSS
*/
export const NavBar = () => {
  return (
    <header className="header">
      <nav className="navegador navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink to="/inicio" className="navbar-brand">
            <img className="imagenLogo rounded" src={logo} alt="logo" />
          </NavLink>
          <div>
            <h2 className="tituloHeader d-none">Inicio</h2>
          </div>
          <button
            className="navbar-toggler bg-light custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100 justify-content-end">
              <li className="nav-item">
                <NavLink to="/inicio" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/n osotros" className="nav-link">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/servicios active" className="nav-link">
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/galeria" className="nav-link">
                  Galeria
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contacto" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
            <NavLink to="/servicios">
              <Badge badgeContent={5} color="secondary">
                <ShoppingCart color="white" />
              </Badge>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};
