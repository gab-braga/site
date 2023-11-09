import Post from "../../components/post";
import { articles } from "../../data/posts";
import "./style.css";

export default function Blog() {
  return (
    <section className="container">
      <div className="blog">
        <h1>Blog</h1>
        <div className="blog-posts">
          {articles.map((article) => {
            return <Post key={article.id} {...article} />;
          })}
        </div>
      </div>
    </section>
  );
}
