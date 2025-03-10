import netflixImage from '../img/projects/netflixImage.png';
import netflixImage1 from '../img/projects/netflix/netflix1.png';
import netflixImage2 from '../img/projects/netflix/netflix2.png';
import netflixImage3 from '../img/projects/netflix/netflix3.png';
import netflixImage4 from '../img/projects/netflix/netflix4.png';
import netflixImage5 from '../img/projects/netflix/netflix5.png';
import tecStore from '../img/projects/tecstoreImage.png';
import tecStore2 from '../img/projects/tecstore/tecstore-2.png';
import tecStore3 from '../img/projects/tecstore/tecstore-3.png';
import calculator from '../img/projects/calculator-2.png';
import calculator1 from '../img/projects/calculator/calculator1.png';
import calculator2 from '../img/projects/calculator/calculator2.png';
import calculator3 from '../img/projects/calculator/calculator3.png';
import calculator4 from '../img/projects/calculator/calculator4.png';
import calculator5 from '../img/projects/calculator/calculator5.png';
import ortolab from '../img/projects/ortolab/ortolab.png';
import ortolab1 from '../img/projects/ortolab/ortolab1.png';
import ortolab2 from '../img/projects/ortolab/ortolab2.png';
import ortolab3 from '../img/projects/ortolab/ortolab3.png';
import spotify from '../img/projects/spotify/spotify.png'
import spotify2 from '../img/projects/spotify/spotify2.png'
import spotify3 from '../img/projects/spotify/spotify3.png'
import spotify4 from '../img/projects/spotify/spotify4.png'
import spotify5 from '../img/projects/spotify/spotify5.png'
import vanilla from '../img/projects/vanilla/vanilla.png'

import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaGitAlt, FaFigma } from "react-icons/fa6";


export const projects = [
    {
        image: "/closedfun/closedfunpost1.png",
        moreMedia: [
            { type: 'image', link: "/closedfun/closedfunpost1.png" },
        ],
        title: "ClosedFun",
        showMore: 'Closedfun',
        conclued: false,
        realProject: true, 
        "desc": "ClosedFun é uma plataforma interativa desenvolvida para proporcionar uma experiência imersiva em entretenimento digital. O projeto combina tecnologia moderna com uma interface intuitiva, permitindo aos usuários explorarem conteúdos exclusivos, participarem de eventos e interagirem de forma dinâmica. Construído com Next, TypeScript e TailwindCSS, o ClosedFun prioriza performance, usabilidade e escalabilidade. Durante o desenvolvimento, foram aplicadas técnicas avançadas de otimização e integração para garantir uma experiência fluida e responsiva. Este projeto reforça minha expertise em desenvolvimento web, criação de interfaces interativas e implementação de soluções escaláveis.",
        icons: [
            {
                title: 'Next',
                icon: RiNextjsFill
            },
            {
                title: 'React',
                icon: FaReact
            },
            {
                title: "Typescript",
                icon: SiTypescript
            },
            {
                title: "HTML",
                icon: FaHtml5
            },
            {
                title: "TailwindCss",
                icon: RiTailwindCssFill
            }
        ]
    },
    {
        image: vanilla,
        moreMedia: [
            { type: 'image', link: vanilla },
        ],
        title: "Vanilla App",
        showMore: 'vanillapp',
        conclued: false,
        realProject: true, 
        desc: "Este projeto, desenvolvido com Expo, React Native e TypeScript, é uma aplicação mobile chamada Vanilla, projetada para oferecer uma experiência de mensagens intuitiva e funcional. Ele incorpora funcionalidades como troca de mensagens em tempo real, pré-visualizações dinâmicas de mensagens, suporte a grupos e gerenciamento de conversas, com um foco especial em performance e organização do código. Durante o desenvolvimento, apliquei conceitos avançados de gerenciamento de estado e integração com APIs futuras, garantindo escalabilidade e usabilidade para milhares de usuários. Este projeto foi uma excelente oportunidade para consolidar habilidades em desenvolvimento mobile, interfaces interativas e uso eficiente de TypeScript em um ambiente React Native.",
        icons: [
            {
                title: 'React Native',
                icon: FaReact
            },
            {
                title: "Typescript",
                icon: SiTypescript
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
        conclued: false, 
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
        moreMedia: [
            { type: 'image', link: tecStore },
            { type: 'image', link: tecStore2 },
            { type: 'image', link: tecStore3 },
        ],
        link: "https://github.com/IsraelDev560/landind-page-maisprati",
        deploy: "https://israeldev560.github.io/landind-page-maisprati/",
        title: "Tec Store",
        showMore: "tecstore",
        conclued: true, 
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
        image: ortolab,
        moreMedia: [
            { type: 'image', link: ortolab },
            { type: 'image', link: ortolab1 },
            { type: 'image', link: ortolab2 },
            { type: 'image', link: ortolab3 },
        ],
        link: "https://github.com/IsraelDev560/ortolab-definitive",
        deploy: "https://ortolab.netlify.app//",
        title: "Ortolab",
        showMore: 'ortolab',
        conclued: true, 
        desc: "Ortolab é um site voltado para a área ortopédica que ajuda usuários a identificar e entender possíveis dores musculoesqueléticas. Com uma interface intuitiva, o site apresenta um boneco interativo onde o usuário pode clicar em diferentes partes do corpo para receber dicas e informações sobre dores específicas.",
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
        image: spotify,
        moreMedia: [
            { type: 'image', link: spotify },
            { type: 'image', link: spotify2 },
            { type: 'image', link: spotify3 },
            { type: 'image', link: spotify4 },
            { type: 'image', link: spotify5 },
        ],
        link: "https://github.com/IsraelDev560/spotify-cl",
        deploy: "https://israeldev560.github.io/spotify-cl/",
        title: "Spotify",
        showMore: 'spotify',
        conclued: true,
        desc: "Este projeto é um clone visual do Spotify desenvolvido para aprimorar habilidades em HTML, CSS e JavaScript. Ele apresenta uma interface moderna e responsiva, com elementos inspirados no design original do Spotify, incluindo seções como 'Música para todos', 'O que o Spotify tem?' e 'Fácil'. As funcionalidades foram criadas com foco em design interativo e navegação fluida, proporcionando uma experiência realista de um site de música. O projeto inclui animações, responsividade e um layout visualmente atraente.",
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
    // {
    //     image: calculator,
    //     moreMedia: [
    //         { type: 'image', link: calculator1 },
    //         { type: 'image', link: calculator2 },
    //         { type: 'image', link: calculator3 },
    //         { type: 'image', link: calculator4 },
    //         { type: 'image', link: calculator5 },
    //     ],
    //     link: "https://github.com/IsraelDev560/calculadora?tab=readme-ov-file",
    //     deploy: "https://israeldev560.github.io/calculadora/",
    //     title: "Calculadora",
    //     showMore: 'calculator',
    //     conclued: true,
    //     desc: "Este projeto consiste em uma calculadora simples e funcional com 4 operações matemáticas.",
    //     icons: [
    //         {
    //             title: 'JavaScrpipt',
    //             icon: IoLogoJavascript
    //         },
    //         {
    //             title: "HTML",
    //             icon: FaHtml5
    //         },
    //         {
    //             title: "CSS",
    //             icon: FaCss3
    //         }
    //     ]
    // },
]