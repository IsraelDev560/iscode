import React, { useState } from "react";
import foto from '../assets/img/profile-pic.png'
import TypingEffectText from "./TypingEffectText";
import { AnimatePresence, motion } from "framer-motion";
export const About = () => {
    const [moreText, setMoreText] = useState(false);

    const toggleMoreText = () => setMoreText(!moreText);
    // bg-[#242629]
    return (
        <div className='w-full flex p-4'>
            <div className="text-center items-center justify-center mx-auto mt-5 space-y-2">
                <h2 className="text-xl font-semibold text-black dark:text-white">Olá, eu sou</h2>
                <span className="text-3xl font-bold text-[#AE27F9]">Israel Santos</span>
                <div className='w-full items-center mx-auto max-w-[65vw] max-h-[100vh]'>
                    <img className='w-full h-full my-4 ' src={foto} alt="" />
                </div>

                <h2 className='text-2xl font-semibold text-black dark:text-white'>
                    Sobre<span className="text-[#AE27F9]"> mim </span>
                </h2>

                <span className='text-lg leading-relaxed text-black dark:text-white max-w-xs'>
                    <TypingEffectText moreText={true} />
                    <AnimatePresence>
                        {moreText && (
                            <motion.div
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 200, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className="w-full z-0 text-black dark:text-white max-w-xs"
                            >
                                <p>
                                    No passado, tive a oportunidade de trabalhar como <span className="text-[#AE27F9]">web designer</span> na <span className="text-[#AE27F9]">Potiguar Digital</span>, onde desenvolvi projetos criativos para diferentes nichos de mercado, e também realizei <span className="text-[#AE27F9]">freelas com React.js</span>, entregando soluções sob medida para diversos clientes. Essas experiências me ajudaram a consolidar minhas habilidades técnicas e minha capacidade de resolver problemas com eficiência. <br /><br />

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

                <button onClick={toggleMoreText} className='p-3 text-white border border-[#AE27F9] hover:text-[#AE27F9] hover:bg-transparent bg-[#AE27F9] rounded-md transition'>
                    {moreText ? "Leia Menos" : "Leia Mais"}
                </button>
                {/* <h2 className='text-xl text-black dark:text-white text-center'>Minhas redes Sociais</h2> */}
            </div>
        </div>
    )
}