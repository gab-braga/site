import { Outlet } from "react-router-dom";
import Background from "../../components/Background";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Root() {
  return (
    <Background>
      <Header />
      <Outlet />
      <Footer />
    </Background>
  );
}
