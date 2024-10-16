import "./style.css";
import { Outlet } from "react-router-dom";
import Header from "../../elememts/header";
import Footer from "../../elememts/footer";

export default function Root() {
  return (
    <div className="root">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
