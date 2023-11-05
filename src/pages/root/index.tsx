import "./style.css";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
