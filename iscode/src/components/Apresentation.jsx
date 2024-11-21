import React, { useEffect, useState } from 'react'
import foto from '../assets/img/profile-pic.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import TypingEffectText from './TypingEffectText';
import TechnologyCarousel from './TechnologyCarousel';

export const Apresentation = () => {
    // const [scrollY, setOnScroll] = useState(0);
    const [moreText, setMoreText] = useState(false);

    const toggleMoreText = () => setMoreText(!moreText);

    // useEffect(() => {
    //     const toggleSection = () => setOnScroll(window.scrollY);
    //     window.addEventListener('scroll', toggleSection);
    //     return () => window.removeEventListener('scroll', toggleSection)
    // }, [])

    const links = [
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/israelsantoss/" },
        { icon: FaGithub, link: "https://github.com/IsraelDev560" },
        { icon: SiGmail, link: "https://mailto:devisrael560@gmail.com" },
    ]

    return (
        <div className="flex flex-col mt-32 items-center mx-auto">
            <div className="text-center text-white space-y-2">
                <p className="text-2xl">Bem-vindo(a) ao</p>
                <h2 className="text-4xl font-bold text-white z-10">
                    iS<span className="text-[#AE27F9]">Code</span>
                </h2>
                <p className="text-lg max-w-xs">
                    Onde linhas de código ganham vida! Nossa missão é criar experiências digitais únicas, feitas sob medida para você. Junte-se a nós e faça parte dessa jornada tecnológica.
                </p>
            </div>
            <div className='w-full mx-auto'>
                <TechnologyCarousel />
            </div>

            <div className="text-center items-center justify-center mx-auto mt-10 space-y-2">
                <h2 className="text-2xl font-semibold text-white">Desenvolvedor <span className="text-[#AE27F9]">Full Stack</span></h2>
                <div className='w-full items-center mx-auto max-w-[65vw] max-h-[100vh]'>
                    <img className='w-full h-full' src={foto} alt="" />
                </div>

                <h2 id='sobre' className='text-2xl font-semibold text-white'>
                    Sobre<span className="text-[#AE27F9]"> mim </span>
                </h2>

                <p className='text-lg leading-loose text-white max-w-xs'>
                    <TypingEffectText moreText={true} />
                    <AnimatePresence>
                        {moreText && (
                            <motion.div
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 200, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className="w-full z-0 text-white"
                            >
                                <p>
                                    No passado, tive a oportunidade de trabalhar como <span className="text-[#AE27F9]">web designer</span> na <span className="text-[#AE27F9]">Potiguar Digital</span>, onde desenvolvi projetos criativos para diferentes nichos de mercado, e também realizei <span className="text-[#AE27F9]">freelas com React.js</span>, entregando soluções sob medida para diversos clientes. Essas experiências me ajudaram a consolidar minhas habilidades técnicas e minha capacidade de resolver problemas com eficiência. <br /><br />

                                    Ao longo da minha jornada, me qualifiquei por meio de cursos importantes, como
                                    <span className="text-[#AE27F9]"> Desenvolvedor Fullstack Júnior</span> na <span className="text-[#AE27F9]">MaisPraTi</span>,
                                    <span className="text-[#AE27F9]"> Programador Web</span> no <span className="text-[#AE27F9]">Senai</span>, e
                                    <span className="text-[#AE27F9]"> Java & Spring</span> pela <span className="text-[#AE27F9]">DIO</span>.
                                    <br /><br />
                                    Essas formações foram fundamentais para construir minha base sólida em desenvolvimento web e aprofundar meus conhecimentos em tecnologias atuais.

                                    Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades e crescer ainda mais como profissional, criando soluções que realmente façam a diferença. 🚀
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </p>

                <button onClick={toggleMoreText} className='p-3 text-white border border-[#AE27F9] hover:text-[#AE27F9] hover:bg-transparent bg-[#AE27F9] rounded-md transition'>
                    {moreText ? "Leia Menos" : "Leia Mais"}
                </button>

                <div className="flex space-x-4 justify-center">
                    {links.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white my-5 text-4xl hover:text-[#AE27F9] transition"
                            >
                                <IconComponent />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}