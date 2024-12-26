import { useState } from 'react';

export const ReadMore = ({ text, maxLength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <span>
            {/* Se isExpanded for true, mostra o texto completo. Caso contrário, corta o texto em maxLength */}
            {isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? '...' : '')}
            {text.length > maxLength && ( // Só exibe o botão se o texto for maior que maxLength
                <button onClick={toggleReadMore} className="ml-2 underline cursor-pointer">
                    {isExpanded ? " Ler menos" : " Ler mais"}
                </button>
            )}
        </span>
    );
};
