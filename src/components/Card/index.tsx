import { Link } from "react-router-dom";
import "./style.css";

export default function Card({ id, title, image }: any) {
  return (
    <Link to={`/blog/article/${id}`} className="card">
      <img src={image} alt={title} />
      <div className="card-description">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
