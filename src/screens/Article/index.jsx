import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import { articles } from "../../data/articles";
import "./style.css";
import { useEffect, useState } from "react";

export default function Article() {

    const { id } = useParams();

    const [article, setArticle] = useState(null);
    const [publishedIn, setPublishedIn] = useState("00/00/00 00:00");

    useEffect(() => {
        const found = articles.find(a => a.id === id);
        setArticle(found);
        setPublishedIn(new Date(found.publishedIn).toLocaleDateString());
    }, [id]);

    return (
        <div className="article container">
            {article === null ?
                <h1>Loading...</h1> :
                <>
                    <Title>{article?.title}</Title>
                    <div className="article-body">
                        {article.image && (
                            <div className="article-image">
                                <span>{article.image?.legend}</span>
                                <img src={article.image?.url} alt={article?.title} />
                            </div>
                        )}
                        {article?.paragraphs.map((paragraph) => {
                            return paragraph;
                        })}
                        {article.video && (
                            <div className="article-video">
                                <span>Confira o video:</span>
                                {article?.video}
                            </div>
                        )}
                        <div className="article-info">
                            <span className="author">{article?.author}</span>
                            <span className="published-in">{publishedIn}</span>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}