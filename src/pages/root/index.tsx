import { Outlet } from "react-router-dom";
import Background from "../../components/background";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Root() {
  return (
    <Background>
      <Header />
      <Outlet />
      <Footer />
    </Background>
  );
}
