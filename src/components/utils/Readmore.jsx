/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '../../hooks/useLanguage';

export const ReadMore = ({ item, text, maxLength = 300 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();
    const { t } = useLanguage(); 

    return (
        <span>
            {isExpanded ? text : text.slice(0, maxLength) + (text.length > maxLength ? "..." : "")}
            {text.length > maxLength && (
                <button onClick={() => router.push(`/content/${item.showMore}`)} className="lg:ml-2 underline cursor-pointer">
                    {t(isExpanded ? "Ler menos" : "Ler mais")}
                </button>
            )}
        </span>
    );
};
