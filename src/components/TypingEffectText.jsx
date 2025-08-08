/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";

const TypingEffectText = ({ setIsDone }) => {
    const { i18n, t } = useLanguage();
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [fullText, setFullText] = useState("");

    useEffect(() => {
        const updatedText = t("Fundada por Israel apaixonado por inovação, a iSCode nasceu com o propósito de entregar soluções digitais personalizadas para empresas de diferentes tamanhos e segmentos. Ao longo da nossa trajetória, atuamos em projetos que envolvem desde a criação de interfaces intuitivas até sistemas complexos e integrações automatizadas com alto desempenho.\n\nNossa equipe combina conhecimento técnico com visão de negócio, sempre buscando criar soluções que agreguem valor, otimizem processos e proporcionem crescimento real para os nossos clientes. 🚀");
        setFullText(updatedText);
        setDisplayedText("");
        setIndex(0);
        setIsDone(false);
    }, [i18n.language, setIsDone, t]);

    useEffect(() => {
        setIsDone(false);
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 30);
            return () => clearTimeout(timeout);
        } else setIsDone(true);
    }, [index, fullText, setIsDone]);

    return (
        <p className="text-lg leading-relaxed text-black dark:text-gray-300 mx-auto lg:max-w-full transition">
            {displayedText.split(/\n/).map((line, index) => (
                <span key={index}>
                    {line.split(" ").map((word, i) => (
                        <span
                            key={i}
                            className={
                                word.match(/Israel|fullstack|front-end|Vanilla|Potiguar|Digital|freelas|MaisPraTi|Senai|DIO/)
                                    ? "text-[#AE27F9]"
                                    : ""
                            }
                        >
                            {word}{" "}
                        </span>
                    ))}
                    <br />
                </span>
            ))}
        </p>
    );
};

export default TypingEffectText;
