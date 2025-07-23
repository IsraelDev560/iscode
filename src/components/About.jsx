import { useState } from "react";
import TypingEffectText from "./TypingEffectText";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
export const About = () => {
    const [moreText, setMoreText] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const { t } = useLanguage();
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
                    <h2 className="text-3xl mb-2 text-left font-semibold text-black dark:text-white">
                        {t("Prazer, somos a")} iS<span className="font-bold text-[#AE27F9]">Code</span>
                    </h2>

                    <h2 className="text-2xl mb-5 text-left font-semibold text-black dark:text-white">
                        {t("Uma empresa especializada em")} <span className="font-bold text-[#AE27F9]">desenvolvimento Full Stack</span> {t("e")} <span className="font-bold text-[#AE27F9]">automações inteligentes</span>.
                    </h2>

                    <h2 className="text-2xl font-semibold text-black dark:text-white">
                        {t("Sobre")}<span className="text-[#AE27F9]"> {t("nós")} </span>
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

                                        {t("Atuamos em duas frentes principais:")} <span className="text-[#AE27F9]">desenvolvimento de sistemas web e mobile</span> {t("e")} <span className="text-[#AE27F9]">automação de processos com n8n, bots e integrações de API</span>.

                                        <br /><br />

                                        {t("Já entregamos projetos robustos para setores como saúde, educação, entretenimento e jurídico. Trabalhamos com tecnologias modernas e com um padrão de qualidade que visa performance, segurança e usabilidade.")}

                                        <br /><br />

                                        {t("Nossos destaques incluem projetos como")} <span className="text-[#AE27F9]">ClosedFun</span> {t("e")} <span className="text-[#AE27F9]">Vanilla</span> — {t("todos desenvolvidos com foco em experiência do usuário, escalabilidade e entrega de valor real.")}

                                        <br /><br />

                                        {t("Acreditamos que a tecnologia deve")} <span className="text-[#AE27F9]">{t("simplificar")}</span>, <span className="text-[#AE27F9]">{t("automatizar")}</span> {t("e")} <span className="text-[#AE27F9]">{t("impulsionar resultados")}</span>. {t("Por isso, unimos código e estratégia para transformar ideias em soluções que realmente fazem a diferença.")}

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
                        {t(moreText ? "Ler menos" : "Ler mais")}
                    </button>
                </div>
            </div>
        </div>
    )
}