import "./style.css";

export default function Apresentation(props) {
    return (
        <div className="background">
            {props.children}
        </div>
    );
}