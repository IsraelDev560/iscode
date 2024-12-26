import React, { useState, useEffect } from "react";

const TypingEffectText = ({ moreText }) => {
    const fullText = `
        Sou Israel Santos, um desenvolvedor fullstack apaixonado por tecnologia e inovação. Atualmente, atuo como desenvolvedor front-end no projeto Vanilla, onde foco na criação de interfaces modernas, responsivas e dinâmicas, proporcionando uma experiência de usuário fluida e intuitiva.
        `;

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
    }, [index, fullText]);

    return (
        <p className="text-lg leading-relaxed text-black dark:text-white mx-auto max-w-xs transition">
            {displayedText.split(/\n/).map((line, index) => (
                <span key={index}>
                    {line.split(" ").map((word, i) => (
                        <span
                            key={i}
                            className={
                                word.match(/Israel|fullstack|front-end|Vanilla|Potiguar|freelas|MaisPraTi|Senai|DIO/)
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
