import "./style.css";
import star from "../../assets/icons/star.svg";

export default function Repos({
  name,
  language,
  homepage,
  has_pages,
  created_at,
  stargazers_count,
  html_url,
}: any) {
  function formatName(name: any) {
    return name?.replaceAll("-", " ");
  }

  function formatYear(date: any) {
    return new Date(date).getFullYear();
  }

  return (
    <div className="repo">
      <div className="repo-top">
        <span className="repo-year">{formatYear(created_at)}</span>
        <span className="repo-star">
          {stargazers_count}
          <img src={star} alt="ícone strela" width="20" height="20" />
        </span>
      </div>
      <a href={html_url} target="_blank">
        <h3>{formatName(name)}</h3>
      </a>
      <p className="repo-lang">{language}</p>
      <div className="repo-option">
        <a href={html_url} target="_blank">
          Source
        </a>
        {has_pages && (
          <a href={homepage} target="_blank">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
