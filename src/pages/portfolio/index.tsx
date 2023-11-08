import { projects } from "../../data/projects";
import "./style.css";
import Card from "../../components/card";

export default function Portfolio() {
  return (
    <section className="container">
      <div className="projects">
        <h1>Portfólio</h1>
        <div className="projects-list">
          {projects.map((proj: any) => (
            <Card {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
