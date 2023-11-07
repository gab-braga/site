import { Link } from "react-router-dom";
import "./style.css";

export default function Post({ id, title, image }: any) {
  return (
    <Link to={`/blog/article/${id}`} className="post">
      <img src={image?.url} alt={title} />
      <div className="post-description">
        <h2>{title}</h2>
      </div>
    </Link>
  );
}
