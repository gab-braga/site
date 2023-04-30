import Initial from "../../components/Initial";
import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Gabriel Braga - Desenvolvedor Fullstack" />
                <meta property="og:description" content="Descrubra quem sou e conheça meus projetos." />
                <meta property="og:image" content="https://github.com/F-Gabriel-Braga/site/blob/master/src/assets/images/logo/banner.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:url" content="http://f-gabriel-braga.github.io/site" />
                <meta property="og:site_name" content="Gabriel Braga" />
            </Helmet>
            <Initial />
            <Presentation />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}