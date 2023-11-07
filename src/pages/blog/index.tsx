import Card from "../../components/Article";
import Title from "../../components/Title";
import { articles } from "../../data/articles";
import "./style.css";

export default function Blog() {
  return (
    <div className="blog container">
      <Title>Blog</Title>
      <div className="articles">
        {articles.map((article) => {
          return (
            <Card
              key={article.id}
              id={article.id}
              title={article.title}
              image={article.image.url}
            />
          );
        })}
      </div>
    </div>
  );
}
