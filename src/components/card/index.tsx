import { Link } from "react-router-dom";
import "./style.css";

export default function Card({ urlRepo, name, image, stacks, year }: any) {
  return (
    <Link to={urlRepo} className="card">
      <img src={image} alt={name} className="card-cover" />
      <div className="card-overlay">
        <div className="card-stacks">
          {stacks.map((stack: any) => (
            <span className="card-tag">{stack}</span>
          ))}
        </div>
        <div className="card-info">
          <h3 className="card-name">{name}</h3>
          <span className="card-year">{year}</span>
        </div>
      </div>
    </Link>
  );
}
