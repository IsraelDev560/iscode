import { useState } from 'react';

export const ReadMore = ({ text, maxLength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <span>
            {isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "")}
            {text.length > maxLength && (
                <button onClick={toggleReadMore} className="lg:ml-2 underline cursor-pointer">
                    {isExpanded ? " Ler menos" : " Ler mais"}
                </button>
            )}
        </span>
    );
};
