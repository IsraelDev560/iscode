/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReadMore = ({ item, text, maxLength = 300 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
     const navigate = useNavigate();


    return (
        <span>
            {isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "")}
            {text.length > maxLength && (
                <button onClick={() => navigate(`/content/${item.showMore}`)} className="lg:ml-2 underline cursor-pointer">
                    {isExpanded ? " Ler menos" : " Ler mais"}
                </button>
            )}
        </span>
    );
};
