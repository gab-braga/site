import "./style.css";

import IconGitHub from "../../assets/icons/networking/ICON-GITHUB.svg";
import IconInstagram from "../../assets/icons/networking/ICON-INSTAGRAM.svg";
import IconLinkedIn from "../../assets/icons/networking/ICON-LINKEDIN.svg";

export default function Contact(props) {
    return (
        <div className="contact section">
            <div className="container double">
                <div className="left">
                    <h2 className="title">Fale comigo</h2>
                </div>
                <div className="right">
                    <div>
                        <span>
                            gabrielbraga0712@gmail.com
                        </span>
                        <div className="networking">
                            <a href="https://github.com/F-Gabriel-Braga" target="_blank">
                                <img src={IconGitHub} alt="GitHub" />
                                </a>
                            <a href="https://www.instagram.com/_gabriel_bra/" target="_blank">
                                <img src={IconInstagram} alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/f-gabriel-braga/" target="_blank">
                                <img src={IconLinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}