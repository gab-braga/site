import "./style.css";
import github from "../../assets/icons/github.svg";
import curriculum from "../../assets/icons/cv.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export default function Home() {
  return (
    <>
      <section className="container">
        <div className="intro">
          <div className="intro-container">
            <div className="intro-list-link">
              <a
                href="https://www.linkedin.com/in/f-gabriel-braga/"
                target="_blank"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/f-gabriel-braga" target="_blank">
                <img src={github} alt="GitHub" />
              </a>
              <a
                href="https://drive.google.com/file/d/1nmtkyp4kDegTCLq_O8JIaFN98MqZdHmj/view?usp=sharing"
                target="_blank"
              >
                <img src={curriculum} alt="Currículo" />
              </a>
            </div>
            <h1 className="intro-title">
              Full Stack
              <span>Developer</span>
            </h1>
            <p className="intro-text">
              Olá, meu nome é Gabriel Braga. Sou desenvolvedor e professor
              especialista em construção de site e aplicações web.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
