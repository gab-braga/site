import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [message, setMessage] = useState("Not Found");
  const [animationStarted, setAnimationStarted] = useState(false);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function animation() {
    setMessage("");
    const str = "Not Found";
    for (let c of str) {
      console.log(c);
      setMessage((message) => message + c);
      await sleep(500);
    }
  }

  return (
    <div className="container not-found">
      <h1>
        <span>404</span> {message}
      </h1>
      <Link to="/" className="back">
        Home
      </Link>
    </div>
  );
}
