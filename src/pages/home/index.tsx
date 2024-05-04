import "./style.css";
import github from "../../assets/icons/github.svg";
import curriculum from "../../assets/icons/cv.svg";
import linkedin from "../../assets/icons/linkedin.svg";

import desktop from "../../assets/icons/desktop-tower.svg";
import toolbox from "../../assets/icons/toolbox.svg";
import graduation from "../../assets/icons/graduation-cap.svg";
import wrench from "../../assets/icons/wrench.svg";

import angular from "../../assets/icons/skills/flag-ang.svg";
import bootstrap from "../../assets/icons/skills/flag-boots.svg";
import azure from "../../assets/icons/skills/flag-azure.svg";
import firebase from "../../assets/icons/skills/flag-fire.svg";
import java from "../../assets/icons/skills/flag-java.svg";
import javascript from "../../assets/icons/skills/flag-js.svg";
import typescript from "../../assets/icons/skills/flag-ts.svg";
import node from "../../assets/icons/skills/flag-node.svg";
import spring from "../../assets/icons/skills/flag-spring.svg";
import react from "../../assets/icons/skills/flag-react.svg";
import mysql from "../../assets/icons/skills/flag-mysql.svg";
import tailwind from "../../assets/icons/skills/flag-tailw.svg";
import Repos from "../../components/repos";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [repos, setRepos] = useState<any>([]);
  const REPO_IDS: number[] = [
    738760520, // cine-dev-api
    716273614, // marketplace-api
    713903863, // pokedex-app
    673901950, // weather-app
    695648694, // ideal-chair
    652880343, // terragro
    349505303, // music-player
    384292378, // ponto-de-venda
  ];

  async function fetchRepos() {
    const dataPromise = REPO_IDS.map(async (id) => {
      const { data } = await axios.get(
        `https://api.github.com/repositories/${id}`
      );
      return data;
    });
    return await Promise.all(dataPromise);
  }

  useEffect(() => {
    fetchRepos().then((results) => {
      setRepos(results);
    });
  }, []);

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
                href="https://docs.google.com/document/d/1rpcIfGVL2hzyPV_DR7qWhmf1Iy3MCZzjGKgT89pZUYE/edit?usp=sharing"
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
              Olá, meu nome é <span className="my-name">Gabriel Braga</span>.
              Sou desenvolvedor e professor especialista em construção de site e
              aplicações web.
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
              Com conhecimentos aprimorados em tecnologia sou estudante em
              Ciência da Computação pelo Instituto Federal.
            </p>
          </div>
          <div className="detail-card">
            <img src={wrench} alt="Computer Technician" />
            <h3>Computer Technician</h3>
            <p>
              Possuo vasto conhecimentos para atuar no mercado de trabalho em
              tecnologia.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <h2>Websites and Applications</h2>
        <div className="container">
          <div className="portfolio-repositories">
            {repos.map((repo: any) => (
              <Repos key={repo?.id} {...repo} />
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="skill">
          <h2>Habilidades</h2>
          <div className="skill-list">
            <div className="skill-item">
              <img src={spring} alt="Spring Boot" />
              <h3>Spring Boot</h3>
            </div>
            <div className="skill-item">
              <img src={angular} alt="Angular" />
              <h3>Angular</h3>
            </div>
            <div className="skill-item">
              <img src={node} alt="Node.js" />
              <h3>Node.js</h3>
            </div>
            <div className="skill-item">
              <img src={react} alt="React.js" />
              <h3>React.js</h3>
            </div>
            <div className="skill-item">
              <img src={tailwind} alt="Tailwind CSS" />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="skill-item">
              <img src={bootstrap} alt="Bootstrap" />
              <h3>Bootstrap</h3>
            </div>
            <div className="skill-item">
              <img src={firebase} alt="Firebase" />
              <h3>Firebase</h3>
            </div>
            <div className="skill-item">
              <img src={javascript} alt="JavaScript" />
              <h3>JavaScript</h3>
            </div>
            <div className="skill-item">
              <img src={typescript} alt="TypeScript" />
              <h3>TypeScript</h3>
            </div>
            <div className="skill-item">
              <img src={java} alt="Java" />
              <h3>Java</h3>
            </div>
            <div className="skill-item">
              <img src={mysql} alt="MySQL" />
              <h3>MySQL</h3>
            </div>
            <div className="skill-item">
              <img src={azure} alt="Azure" />
              <h3>Azure</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
