import { projects } from "../../data/projects";
import "./style.css";

export default function Portfolio() {
  return (
    <section className="container">
      <div className="portfolio">
        <h1>Portfólio</h1>
        <div className="portfolio-projects">
          {/* {projects.map((project) => {
          return <div>{project?.title}</div>;
        })} */}
        </div>
      </div>
    </section>
  );
}
