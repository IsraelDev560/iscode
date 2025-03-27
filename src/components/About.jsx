import React, { useState } from "react";
import foto from '../assets/img/profile-pic.png'
import TypingEffectText from "./TypingEffectText";
import { AnimatePresence, motion } from "framer-motion";
export const About = () => {
    const [moreText, setMoreText] = useState(false);

    const toggleMoreText = () => setMoreText(!moreText);
    // bg-[#242629]
    return (
        <div className='flex flex-col lg:mt-12 w-full sm:max-w-3xl lg:max-w-5xl lg:items-start items-center mx-auto p-6 md:p-6 xl:p-0'>
            <div className="text-left flex w-full flex-col lg:flex-row lg:w-full text-black dark:text-white space-y-2">
                <div className='absolute z-0 w-[45%] h-[45%] bg-gradient-to-r from-pink-200 left-10 dark:bg-gradient-to-r dark:from-indigo-500 blur-3xl rounded-full' />
                <div className="mx-auto">
                    {/* <div className='w-full mx-auto items-center sm:max-w-[65vw] max-w-[85vw] lg:max-w-[31vw] max-h-[100vh]'>
                        <img className='w-full relative z-1 h-full my-4' src={foto} alt="My Photo" />
                    </div> */}

                </div>
                <div className="w-full z-1 relative flex flex-col ">
                    <h2 className="text-3xl mb-2 text-left font-semibold text-black dark:text-white">Olá, sou  <span className="font-bold text-[#AE27F9]">Israel</span></h2>
                    <h2 className="text-2xl mb-5 text-left font-semibold text-black dark:text-white">Desenvolvedor Full Stack.</h2>
                    <h2 className='text-2xl font-semibold text-black dark:text-white'>
                        Sobre<span className="text-[#AE27F9]"> mim </span>
                    </h2>

                    <span className='text-lg leading-relaxed'>
                        <TypingEffectText moreText={true} />
                        <AnimatePresence>
                            {moreText && (
                                <motion.div
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 200, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    className="w-full relative z-0 text-black dark:text-gray-300 lg:max-w-full "
                                >

                                    <p>
                                        No passado, tive a oportunidade de trabalhar como <span className="text-[#AE27F9]">Web Designer</span> na <span className="text-[#AE27F9]">Potiguar Digital</span>, onde desenvolvi projetos criativos para diferentes nichos de mercado, e também realizei <span className="text-[#AE27F9]">freelas com Next.js, React.js</span>, entregando soluções sob medida para diversos clientes. Essas experiências me ajudaram a consolidar minhas habilidades técnicas e minha capacidade de resolver problemas com eficiência. <br /><br />

                                        Ao longo da minha jornada, me qualifiquei por meio de cursos importantes, como
                                        <span className="text-[#AE27F9]"> Desenvolvedor Fullstack Júnior</span> na <span className="text-[#AE27F9]">MaisPraTi</span>,
                                        <span className="text-[#AE27F9]"> Programador Web</span> no <span className="text-[#AE27F9]">Senai</span>, e
                                        <span className="text-[#AE27F9]"> Backend em Java</span> pela <span className="text-[#AE27F9]">DIO</span>.
                                        <br /><br />
                                        Essas formações foram fundamentais para construir minha base sólida em desenvolvimento web e aprofundar meus conhecimentos em tecnologias atuais.

                                        Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades e crescer ainda mais como profissional, criando soluções que realmente façam a diferença. 🚀
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </span>
                    <button id="skills" onClick={toggleMoreText} className='p-2 mt-5 lg:max-w-[10vw] max-w-[45vw] mx-auto text-white border border-[#AE27F9] hover:text-[#AE27F9] hover:bg-transparent bg-[#AE27F9] rounded-md transition'>
                        {moreText ? "Leia Menos" : "Leia Mais"}
                    </button>
                </div>
                {/* <h2 className='text-xl text-black dark:text-white text-center'>Minhas redes Sociais</h2> */}
            </div>
        </div>
    )
}