/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TypingEffectText = ({ setIsDone }) => {
    const fullText = `No passado, tive a oportunidade de trabalhar como Web Designer na Potiguar Digital, onde desenvolvi projetos criativos para diferentes nichos de mercado. Também realizei freelas com Next.js e React.js, entregando soluções sob medida para diversos clientes. Essas experiências me ajudaram a consolidar minhas habilidades técnicas e minha capacidade de resolver problemas com eficiência.

Ao longo da minha jornada, me qualifiquei por meio de cursos importantes, como Desenvolvedor Fullstack Júnior na MaisPraTi, Programador Web no Senai e Backend em Java pela DIO.

Essas formações foram fundamentais para construir minha base sólida em desenvolvimento web e aprofundar meus conhecimentos em tecnologias atuais. Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades e crescer ainda mais como profissional, criando soluções que realmente façam a diferença. 🚀`;

    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 30); 
            return () => clearTimeout(timeout);
        }
        console.log("teste");
        setIsDone(true);
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
