import "./style.css";
import github from "../../assets/icons/github-icon.svg";
import curriculum from "../../assets/icons/file-icon.svg";
import linkedin from "../../assets/icons/linkedin-icon.svg";

export default function Initial() {
  return (
    <div className="initial section">
      <div className="intro-container">
        <span className="full-name">Oi sou Gabriel Braga</span>
        <div className="aux">
          <h1>
            Full Stack
            <br />
            Developer
          </h1>
          <div className="links">
            <a href="https://github.com/f-gabriel-braga">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://drive.google.com/file/d/1nmtkyp4kDegTCLq_O8JIaFN98MqZdHmj/view?usp=sharing">
              <img src={curriculum} alt="Currículo" />
            </a>
            <a href="https://www.linkedin.com/in/f-gabriel-braga/">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <span className="details">
          Tenho 21 anos sou Professor Full Stack com
          <br />
          mais de 1 ano de experiência.
        </span>
      </div>
    </div>
  );
}
