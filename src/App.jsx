import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Root from './screens/Root';
import Blog from './screens/Blog';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
