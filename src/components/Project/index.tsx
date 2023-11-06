import "./style.css";
import gitHubIcon from "../../assets/icons/skills/github.svg";
import viewIcon from "../../assets/icons/networking/ICON-VIEW.svg";

export default function Project({
  image,
  title,
  link,
  repository,
  skills,
}: any) {
  return (
    <div className="portfolio-project">
      <img src={image} alt={title} />
      <div className="project-access">
        <a href={repository} target="_blank" className="link-access">
          <img src={gitHubIcon} alt="GitHub" />
        </a>
        {link && (
          <a href={link} target="_blank" className="link-access">
            <img src={viewIcon} alt="Visualizar página" />
          </a>
        )}
      </div>
      <div className="project-description">
        <span className="project-title">{title}</span>
        <div className="content-badge">
          {skills.map((skill: any) => (
            <span key={skill.title} title={skill.title} className="badge">
              <img src={skill.icon} alt={skill.title} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
