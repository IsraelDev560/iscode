import { useState } from "react";
import TypingEffectText from "./TypingEffectText";
import { AnimatePresence, motion } from "framer-motion";
export const About = () => {
    const [moreText, setMoreText] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const toggleMoreText = () => {
        if (isDone) return setMoreText(!moreText)
        return setIsDone(false)
    }
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
                    <h2 className="text-3xl mb-2 text-left font-semibold text-black dark:text-white">Olá, eu me chamo  <span className="font-bold text-[#AE27F9]">Israel</span></h2>
                    <h2 className="text-2xl mb-5 text-left font-semibold text-black dark:text-white">Desenvolvedor Web Full Stack e <span className="font-bold text-[#AE27F9]">CEO</span> da iS<span className="font-bold text-[#AE27F9]">Code</span>.</h2>
                    <h2 className='text-2xl font-semibold text-black dark:text-white'>
                        Sobre<span className="text-[#AE27F9]"> mim </span>
                    </h2>

                    <span className='text-lg leading-relaxed'>
                        <TypingEffectText setIsDone={setIsDone} /> <br />
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
                                        Diante disso criei a iS<span className="text-[#AE27F9]">Code</span>, somos especialistas em <span className="text-[#AE27F9]">desenvolvimento Full Stack</span>, criando soluções digitais modernas, eficientes e personalizadas para empresas que desejam crescer com tecnologia.
                                        <br /><br />
                                        Nossa equipe é formada por profissionais apaixonados por inovação, com ampla experiência em projetos que vão desde interfaces responsivas e intuitivas até sistemas robustos e escaláveis. Atuamos tanto no front-end quanto no back-end, utilizando tecnologias atuais do mercado.
                                        <br /><br />
                                        Já desenvolvemos soluções para diversos segmentos — incluindo saúde, educação, direito e comércio — entregando projetos sob medida com foco em performance, usabilidade e resultado. Também acumulamos experiência em empresas como a <span className="text-[#AE27F9]">Potiguar Digital</span> e projetos como o <span className="text-[#AE27F9]">Vanilla</span>, <span className="text-[#AE27F9]">ClosedFun</span>, <span className="text-[#AE27F9]">BarberFlow</span>, que nos permitiram aperfeiçoar ainda mais nosso padrão de qualidade.
                                        <br /><br />
                                        Acreditamos que a tecnologia deve <span className="text-[#AE27F9]">simplificar</span>, <span className="text-[#AE27F9]">escalar</span> e <span className="text-[#AE27F9]">impactar de verdade</span> os negócios dos nossos clientes. Por isso, estamos em constante evolução, sempre prontos para novos desafios e projetos transformadores.
                                    </p>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </span>
                    <button
                        id="skills"
                        onClick={toggleMoreText}
                        className={`
                            ${isDone ? "hover:bg-[#AE27F9] text-[#AE27F9] border border-[#AE27F9] hover:text-white hover:bg-transparent" : "bg-gray-500 border opacity-30 border-gray-500"}
                            p-2 mt-5 lg:max-w-[10vw] max-w-[45vw] mx-auto  
                              rounded-md transition
                            `}
                    >
                        {moreText ? "Leia Menos" : "Leia Mais"}
                    </button>
                </div>
            </div>
        </div>
    )
}