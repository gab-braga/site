import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="container menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active menu-item" : "menu-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "active menu-item" : "menu-item"
          }
        >
          Portfólio
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "active menu-item" : "menu-item"
          }
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
}
