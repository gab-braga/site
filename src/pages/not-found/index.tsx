import "./style.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>
        <span>404</span> <strong id="not-found-message"></strong>
      </h1>
      <Link to="/" className="back">
        Home
      </Link>
    </div>
  );
}
