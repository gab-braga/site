import { skillsObject } from "./skills";

import imageProject1 from "../assets/images/projects/projeto-01.png";
import imageProject2 from "../assets/images/projects/projeto-02.png";
import imageProject3 from "../assets/images/projects/projeto-03.png";
import imageProject4 from "../assets/images/projects/projeto-04.png";
import imageProject5 from "../assets/images/projects/projeto-05.png";
import imageProject6 from "../assets/images/projects/projeto-06.png";
import imageProject7 from "../assets/images/projects/projeto-07.png";
import imageProject8 from "../assets/images/projects/projeto-08.png";
import imageProject9 from "../assets/images/projects/projeto-09.png";

export const projects = [
    { 
        image: imageProject1,
        title: "Pede Limpeza",
        link: "https://f-gabriel-braga.github.io/pede-limpeza/",
        repository: "https://github.com/F-Gabriel-Braga/pede-limpeza/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"]]
    },
    {
        image: imageProject2,
        title: "Plano Geometrico 2D",
        link: "https://f-gabriel-braga.github.io/plane-geometric-2d/",
        repository: "https://github.com/F-Gabriel-Braga/plane-geometric-2d/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"], skillsObject["bootstrap"]]
    },
    {
        image: imageProject9,
        title: "Collaborators",
        link: "https://f-gabriel-braga.github.io/app-collaborators/",
        repository: "https://github.com/F-Gabriel-Braga/app-collaborators/",
        skills: [skillsObject["angular"], skillsObject["firebase"], skillsObject["ts"]]
    },
    {
        image: imageProject4,
        title: "Ponto de Venda",
        repository: "https://github.com/F-Gabriel-Braga/ponto-de-venda/",
        skills: [skillsObject["java"], skillsObject["mysql"]]
    },
    {
        image: imageProject5,
        title: "Happy (NLW)",
        repository: "https://github.com/F-Gabriel-Braga/happy/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"], skillsObject["node"]]
    },
    {
        image: imageProject6,
        title: "Fast Food Simulator",
        repository: "https://github.com/F-Gabriel-Braga/fast-food-simulator/",
        skills: [skillsObject["java"], skillsObject["mysql"], skillsObject["spring"]]
    },
    {
        image: imageProject7,
        title: "eSports (NLW)",
        repository: "https://github.com/F-Gabriel-Braga/eSports/",
        skills: [skillsObject["node"], skillsObject["react"], skillsObject["ts"]]
    },
    {
        image: imageProject8,
        title: "Music Player",
        link: "https://f-gabriel-braga.github.io/music-player/",
        repository: "https://github.com/F-Gabriel-Braga/music-player/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"]]
    }
];