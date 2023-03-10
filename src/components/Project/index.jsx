import "./style.css";

export default function Project(props) {
    return (
        <a href={props.link} target="_blank" className="project">
            <img src={props.image} alt={props.title} />
            <div className="gradient">
                <span>{props.title}</span>
            </div>
        </a>
    );
}
