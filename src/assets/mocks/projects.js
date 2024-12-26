import netflixImage from '../img/projects/netflixImage.png'
import tecStore from '../img/projects/tecstoreImage.png'
import calculator from '../img/projects/calculator.png'

import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaFigma } from "react-icons/fa6";


export const projects = [
    {
        image: netflixImage,
        link: "https://github.com/IsraelDev560/maisprati-repository/tree/main/React/netflix-tmdb",
        title: "Netflix Clone",
        desc: " Um clone da interface da Netflix desenvolvido com React.js, HTML5 e CSS3, utilizando a API do TMDB (The Movie Database) para exibir informações reais sobre filmes e séries. Este projeto recria elementos-chave da experiência da Netflix, como uma interface moderna, carrosséis de filmes e funcionalidade de destaque para exibir conteúdos em evidência.",
        icons: [
            {
                title: 'React',
                icon: FaReact
            },
            {
                title: "HTML",
                icon: FaHtml5
            },
            {
                title: "CSS",
                icon: FaCss3
            }
        ]
    },
    {
        image: tecStore,
        link: "https://github.com/IsraelDev560/landind-page-maisprati",
        title: "Tec Store",
        desc: "Este projeto consiste em uma Landing Page simples e funcional, desenvolvida como parte dos exercícios do curso Desenvolvedor Júnior Full-Stack +praTI. A página foi construída utilizando HTML, CSS e JavaScript, com foco em boas práticas de design responsivo e organização de código.",
        icons: [
            {
                title: 'JavaScrpipt',
                icon: IoLogoJavascript
            },
            {
                title: "HTML",
                icon: FaHtml5
            },
            {
                title: "CSS",
                icon: FaCss3
            }
        ]
    },
    {
        image: calculator,
        link: "https://github.com/IsraelDev560/calculadora?tab=readme-ov-file",
        title: "Calculadora",
        desc: "Este projeto consiste em uma Calculadora simples e funcional com 4 operações matemáticas.",
        icons: [
            {
                title: 'JavaScrpipt',
                icon: IoLogoJavascript
            },
            {
                title: "HTML",
                icon: FaHtml5
            },
            {
                title: "CSS",
                icon: FaCss3
            }
        ]
    },
]