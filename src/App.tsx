import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Root from "./pages/root";
import Blog from "./pages/blog";
import Article from "./pages/blog/article";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/blog/article/:id" element={<Article />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
