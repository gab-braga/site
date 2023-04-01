import { Outlet } from "react-router-dom";
import Background from "../../components/Background";
import Header from "../../components/Header";

export default function Root() {
    return (
        <Background>
            <Header />
            <Outlet />
        </Background>
    );
}