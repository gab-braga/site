import Initial from "../../components/Initial";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Gabriel Braga</title>
            </Helmet>
            <Initial />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}