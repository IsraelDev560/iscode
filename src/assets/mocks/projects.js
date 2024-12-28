import netflixImage from '../img/projects/netflixImage.png'
import netflixImage1 from '../img/projects/netflix/netflix1.png'
import netflixImage2 from '../img/projects/netflix/netflix2.png'
import netflixImage3 from '../img/projects/netflix/netflix3.png'
import netflixImage4 from '../img/projects/netflix/netflix4.png'
import netflixImage5 from '../img/projects/netflix/netflix5.png'
import tecStore from '../img/projects/tecstoreImage.png'
import calculator from '../img/projects/calculator-2.png'

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
        moreMedia: [
            { type: 'image', link: netflixImage },
            { type: 'image', link: netflixImage1 },
            { type: 'image', link: netflixImage2 },
            { type: 'image', link: netflixImage3 },
            { type: 'image', link: netflixImage4 },
            { type: 'image', link: netflixImage5 },
        ],
        link: "https://github.com/IsraelDev560/maisprati-repository/tree/main/React/netflix-tmdb",
        title: "Netflix Clone",
        showMore: 'netflix',
        desc: "Um clone da interface da Netflix desenvolvido com React.js, HTML5 e CSS3, utilizando a API do TMDB (The Movie Database) para exibir informações reais sobre filmes e séries. Este projeto recria elementos-chave da experiência da Netflix, como uma interface moderna, carrosséis de filmes e funcionalidade de destaque para exibir conteúdos em evidência.",
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
        moreMedia: [{ type: 'image', link: tecStore }],
        link: "https://github.com/IsraelDev560/landind-page-maisprati",
        title: "Tec Store",
        showMore: "tecstore",
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
        moreMedia: [{ type: 'image', link: calculator }],
        link: "https://github.com/IsraelDev560/calculadora?tab=readme-ov-file",
        title: "Calculadora",
        showMore: 'calculator',
        desc: "Este projeto consiste em uma calculadora simples e funcional com 4 operações matemáticas.",
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