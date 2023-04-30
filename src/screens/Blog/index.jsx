import { Helmet } from "react-helmet";
import Card from "../../components/Card";
import Title from "../../components/Title";
import { articles } from "../../data/articles";
import "./style.css";

export default function Blog() {
    return (
        <div className="blog container">
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Title>Blog</Title>
            <div className="articles">
                {articles.map(article => {
                    return <Card key={article.id} id={article.id} title={article.title} image={article.image.url} />
                })}
            </div>
        </div>
    );
}