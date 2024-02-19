import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfólio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="https://github.com/f-gabriel-braga" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_gabriel_bra/" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/f-gabriel-braga/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="footer-copy">
          Copyright &copy; 2023 <strong>Gabriel Braga</strong>. Alguns direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
