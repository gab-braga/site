import "./style.css";
import github from "../../assets/icons/github.svg";
import curriculum from "../../assets/icons/cv.svg";
import linkedin from "../../assets/icons/linkedin.svg";

import desktop from "../../assets/icons/desktop-tower.svg";
import toolbox from "../../assets/icons/toolbox.svg";
import graduation from "../../assets/icons/graduation-cap.svg";
import wrench from "../../assets/icons/wrench.svg";

export default function Home() {
  return (
    <>
      <section className="container">
        <div className="intro">
          <div className="intro-container up">
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

      <section className="container up">
        <div className="detail">
          <div className="detail-card">
            <img src={desktop} alt="FullStack Developer" />
            <h3>FullStack Developer</h3>
            <p>
              Profissional no desenvolvimento de web sites com React.js,
              Angular, Node.js e Spring.
            </p>
          </div>
          <div className="detail-card">
            <img src={toolbox} alt="Instructor/teacher" />
            <h3>Instructor Teacher</h3>
            <p>
              Ajudando outras pessoas a conquistar habilidades sólidas em
              desenvolvimento web.
            </p>
          </div>
          <div className="detail-card">
            <img src={graduation} alt="Computer Student" />
            <h3>Computer Student</h3>
            <p>
              Com conhecimentos sólidos em tecnologia sou estudante em Ciência
              da Computação pelo Instituto Federal.
            </p>
          </div>
          <div className="detail-card">
            <img src={wrench} alt="Especialist Informatec" />
            <h3>Especialist Informatec</h3>
            <p>
              Possuo vasto conhecimentos para atuar no mercado de trabalho em
              tecnologia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
