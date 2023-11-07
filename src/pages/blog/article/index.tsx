import { useParams } from "react-router-dom";
import { articles } from "../../../data/articles";
import "./style.css";
import { useEffect, useState } from "react";

export default function Article() {
  const { id } = useParams();

  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    const found: any = articles.find((a) => a.id === id);
    setArticle(found);
  }, [id]);

  function formatDate(ms: number) {
    return new Date(ms).toLocaleDateString();
  }

  return (
    <div className="article container">
      {article === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{article?.title}</h1>
          <div className="article-body">
            {article?.image && (
              <div className="article-image">
                <span>{article.image?.legend}</span>
                <img src={article.image?.url} alt={article?.title} />
              </div>
            )}
            <div className="article-content">
              {article?.paragraphs.map((paragraph: string) => {
                return paragraph;
              })}
            </div>
            {article.video && (
              <div className="article-video">
                <span>Confira o video:</span>
                <div className="article-video-container">{article?.video}</div>
              </div>
            )}
            <div className="article-info">
              <span className="article-author">{article?.author}</span>
              <span className="article-date">
                {formatDate(article?.publishedIn)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
