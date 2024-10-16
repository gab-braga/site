import "./style.css";
import Card from "../../components/card";
import { projects } from "../../data/projects";

export default function Portfolio() {
  return (
    <section className="container">
      <div className="projects">
        <h1>Portfólio</h1>
        <div className="projects-list">
          {projects.map((proj: any, idx: number) => (
            <Card {...proj} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
