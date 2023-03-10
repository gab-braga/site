import Project from "../Project";
import { projects } from "../../data/projects.js";
import "./style.css";

export default function Projects() {
    return (
        <div className="projects section">
            <div className="container">
                <h2 className="title">Projetos</h2>
                <div className="grid">
                    {projects.map(project => {
                        return <Project image={project.image} title={project.title} link={project.link} />
                    })}
                </div>
            </div>
        </div>
    );
}
