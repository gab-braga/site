import "./style.css";
import Perfil from "../../assets/images/PERFIL.jpg";

export default function Presentation() {
    return (
        <div className="presentation section">
            <div className="container">
                <h3>
                    <strong>Gabriel</strong> tem 21 anos é desenvolvedor autodidata. Ama tecnologia e procura aperfeiçoar-se, diariamente.
                </h3>
                <img src={Perfil} alt="Foto de Gabriel Braga" />
            </div>
        </div>
    );
}
