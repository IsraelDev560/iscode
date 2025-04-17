import { FaReact } from "react-icons/fa";
// import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
// import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
// import { FaGitAlt, FaFigma } from "react-icons/fa6";


export const projects = [
    {
        image: "/closedfun/closedfunpost1.png",
        moreMedia: [
            { type: 'image', link: "/closedfun/closedfunpost1.png" },
        ],
        title: "ClosedFun",
        showMore: 'closedfun',
        conclued: false,
        // realProject: true, 
        desc: `ClosedFun é uma plataforma interativa desenvolvida pela iSCode, com o objetivo de oferecer uma experiência imersiva em entretenimento digital. O projeto integra tecnologia de ponta com uma interface intuitiva, permitindo que os usuários acessem conteúdos exclusivos, participem de eventos virtuais e interajam de forma dinâmica com a plataforma.

Construído com Next.js, TypeScript e TailwindCSS, o ClosedFun foi projetado com foco em performance, usabilidade e escalabilidade. Durante o desenvolvimento, aplicamos técnicas avançadas de otimização e integração, garantindo uma experiência fluida e responsiva em diferentes dispositivos.

Esse projeto reforça o compromisso da iSCode com a entrega de soluções digitais inovadoras, interativas e orientadas à experiência do usuário, sempre aliando design moderno com tecnologia robusta.`,
        icons: [
            {
                title: 'Next.js',
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
                title: "JavaScript",
                icon: IoLogoJavascript
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
        image: '/vanilla/vanilla.png',
        moreMedia: [
            { type: 'image', link: '/vanilla/vanilla.png' },
        ],
        title: "Vanilla App",
        showMore: 'vanillapp',
        conclued: false,
        // realProject: true, 
        desc: `Vanilla é uma aplicação mobile desenvolvida pela iSCode, com foco em oferecer uma experiência de mensagens fluida, funcional e altamente escalável. Utilizando Expo, React Native e TypeScript, o projeto foi concebido para atender usuários que demandam agilidade, organização e interatividade em suas comunicações diárias.

A plataforma conta com recursos como mensagens em tempo real, pré-visualização dinâmica, suporte a grupos e gerenciamento completo de conversas, mantendo a performance como prioridade. Durante o desenvolvimento, foram implementadas práticas avançadas de gerenciamento de estado e integração com APIs futuras, assegurando robustez e adaptabilidade para uma base crescente de usuários.

O Vanilla representa o compromisso da iSCode com a entrega de soluções mobile modernas, bem estruturadas e preparadas para escalar com eficiência, mantendo sempre a experiência do usuário como pilar central do projeto.`,
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
        image: '/ortolab/ortolab.png',
        moreMedia: [
            { type: 'image', link: '/ortolab/ortolab.png' },
            { type: 'image', link: '/ortolab/ortolab1.png' },
            { type: 'image', link: '/ortolab/ortolab2.png' },
            { type: 'image', link: '/ortolab/ortolab3.png' },
        ],
        link: "https://github.com/IsraelDev560/ortolab-definitive",
        deploy: "https://ortolab.netlify.app//",
        title: "Ortolab",
        showMore: 'ortolab',
        conclued: true, 
        desc: `Ortolab é uma plataforma web desenvolvida pela iSCode para o segmento ortopédico, com o objetivo de auxiliar usuários na identificação e compreensão de dores musculoesqueléticas. A solução conta com uma interface intuitiva e um boneco interativo, permitindo que o usuário clique em diferentes regiões do corpo para acessar dicas e informações específicas sobre cada tipo de dor.

Com foco na experiência do usuário, o Ortolab foi projetado para ser uma ferramenta prática e educativa, facilitando o acesso à informação de forma visual, acessível e eficiente. Esse projeto reforça a atuação da iSCode no desenvolvimento de soluções digitais para a área da saúde, aliando tecnologia e funcionalidade com propósito claro: informar, orientar e cuidar.`,
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