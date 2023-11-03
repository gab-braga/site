import "./style.css";
import { skillsArray } from "../../data/skills";

export default function Skills() {
  return (
    <div className="skills section">
      <div className="container double">
        <div className="left">
          <div className="grid">
            {skillsArray.map((skill: any) => {
              return <img key={skill.title} {...skill} />;
            })}
          </div>
        </div>
        <div className="right">
          <h2 className="title">Habilidades</h2>
        </div>
      </div>
    </div>
  );
}
