import { skillsObject } from "./skills";

import image1 from "../assets/images/projects/projeto-01.png";
import image2 from "../assets/images/projects/projeto-02.png";
import image3 from "../assets/images/projects/projeto-03.png";
import image4 from "../assets/images/projects/projeto-04.png";
import image5 from "../assets/images/projects/projeto-05.png";
import image6 from "../assets/images/projects/projeto-06.png";
import image7 from "../assets/images/projects/projeto-07.png";
import image8 from "../assets/images/projects/projeto-08.png";
import image9 from "../assets/images/projects/projeto-09.png";
import image10 from "../assets/images/projects/projeto-10.png"; // pacman
import image11 from "../assets/images/projects/projeto-11.png"; // quiz
import image12 from "../assets/images/projects/projeto-12.png"; // weather
import image13 from "../assets/images/projects/projeto-13.png"; // terragro

export const projects = [
    {
        image: image4,
        title: "Ponto de Venda",
        repository: "https://github.com/F-Gabriel-Braga/ponto-de-venda/",
        skills: [skillsObject["java"], skillsObject["mysql"]]
    },
    {
        image: image6,
        title: "Fast Food Simulator",
        repository: "https://github.com/F-Gabriel-Braga/fast-food-simulator/",
        skills: [skillsObject["java"], skillsObject["mysql"], skillsObject["spring"]]
    },
    {
        image: image13,
        title: "Terragro",
        link: "https://f-gabriel-braga.github.io/terragro/",
        repository: "https://github.com/F-Gabriel-Braga/terragro/",
        skills: [skillsObject["react"]]
    },
    {
        image: image2,
        title: "Plano Geometrico 2D",
        link: "https://f-gabriel-braga.github.io/plane-geometric-2d/",
        repository: "https://github.com/F-Gabriel-Braga/plane-geometric-2d/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"], skillsObject["bootstrap"]]
    },
    {
        image: image3,
        title: "Galaxy",
        link: "https://f-gabriel-braga.github.io/app-galaxy/",
        repository: "https://github.com/F-Gabriel-Braga/app-galaxy/",
        skills: [skillsObject["angular"]]
    },
    {
        image: image9,
        title: "Collaborators",
        link: "https://f-gabriel-braga.github.io/app-collaborators/",
        repository: "https://github.com/F-Gabriel-Braga/app-collaborators/",
        skills: [skillsObject["angular"], skillsObject["firebase"], skillsObject["ts"]]
    },
    {
        image: image8,
        title: "Music Player",
        link: "https://f-gabriel-braga.github.io/music-player/",
        repository: "https://github.com/F-Gabriel-Braga/music-player/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"]]
    },
    {
        image: image12,
        title: "Weather App",
        link: "https://f-gabriel-braga.github.io/weather-app/",
        repository: "https://github.com/F-Gabriel-Braga/weather-app/",
        skills: [skillsObject["angular"]]
    },
    {
        image: image11,
        title: "Quiz",
        link: "https://f-gabriel-braga.github.io/quiz-js/",
        repository: "https://github.com/F-Gabriel-Braga/quiz-js/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"]]
    },
    {
        image: image10,
        title: "Pac-Man",
        repository: "https://github.com/F-Gabriel-Braga/pacman/",
        skills: []
    },
    { 
        image: image1,
        title: "Pede Limpeza",
        link: "https://f-gabriel-braga.github.io/pede-limpeza/",
        repository: "https://github.com/F-Gabriel-Braga/pede-limpeza/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"]]
    },
    {
        image: image5,
        title: "Happy (NLW)",
        repository: "https://github.com/F-Gabriel-Braga/happy/",
        skills: [skillsObject["html"], skillsObject["css"], skillsObject["js"], skillsObject["node"]]
    },
    {
        image: image7,
        title: "eSports (NLW)",
        repository: "https://github.com/F-Gabriel-Braga/eSports/",
        skills: [skillsObject["node"], skillsObject["react"], skillsObject["ts"]]
    }
];