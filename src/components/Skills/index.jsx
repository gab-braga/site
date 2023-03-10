import "./style.css";

import IconJs from "../../assets/icons/skills/ICON-JS.svg";
import IconHtml from "../../assets/icons/skills/ICON-HTML.svg";
import IconCss from "../../assets/icons/skills/ICON-CSS.svg";
import IconNode from "../../assets/icons/skills/ICON-NODE.svg";
import IconTs from "../../assets/icons/skills/ICON-TS.svg";
import IconAngular from "../../assets/icons/skills/ICON-ANGULAR.svg";
import IconReact from "../../assets/icons/skills/ICON-REACT.svg";
import IconFirebase from "../../assets/icons/skills/ICON-FIREBASE.svg";
import IconBootstrap from "../../assets/icons/skills/ICON-BOOTSTRAP.svg";
import IconMysql from "../../assets/icons/skills/ICON-MYSQL.svg";
import IconJava from "../../assets/icons/skills/ICON-JAVA.svg";
import IconSpring from "../../assets/icons/skills/ICON-SPRING.svg";

export default function Skills() {

    const skills = [
        { image: IconJs, title: "JavaScript" },
        { image: IconHtml, title: "HTML" },
        { image: IconCss, title: "CSS" },
        { image: IconNode, title: "Node.js" },
        { image: IconTs, title: "TypeScript" },
        { image: IconAngular, title: "Angular" },
        { image: IconReact, title: "React" },
        { image: IconFirebase, title: "Firebase" },
        { image: IconBootstrap, title: "Bootstrap" },
        { image: IconMysql, title: "MySQL" },
        { image: IconJava, title: "Java" },
        { image: IconSpring, title: "Spring" },
    ]

    return (
        <div className="skills section">
            <div className="container double">
                <div className="left">
                    <div className="grid">
                        {skills.map(skill => {
                            return <img src={skill.image} alt={skill.title} title={skill.title} />
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
