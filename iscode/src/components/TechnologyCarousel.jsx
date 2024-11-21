import React, { useState, useEffect, useRef } from "react";
import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

const techs = [
    { name: "React", icon: FaReact },
    { name: "Java", icon: FaJava },
    { name: "SpringBoot", icon: BiLogoSpringBoot },
];

const TechnologyCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const isDragging = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % techs.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (e) => {
        isDragging.current = true;
        touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
    }

    const handleTouchEnd = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const touchDelta = touchStartX.current - touchEndX.current;

        if (touchDelta > 50) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % techs.length);
        } else if (touchDelta < -50) {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? techs.length - 1 : prevIndex - 1
            );
        }
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches ? e.touches[0].clientX : e.clientX;
    }

    return (
        <div className="relative w-full max-w-lg mx-auto mt-10 h-[25vh] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
        >
            {/* Contêiner dos Slides */}
            <div
                className="flex transition-transform duration-500 ease-in-out"

                style={{
                    transform: `translateX(-${currentIndex * 100}%)`, // Move para o slide atual
                }}
            >
                {techs.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center text-[#AE27F9]"
                            style={{ width: "100%" }} // Cada slide ocupa 100% da área visível
                        >
                            <IconComponent className="text-6xl mb-4" />
                            <p className="text-xl font-bold">{item.name}</p>
                        </div>
                    );
                })}
            </div>

            {/* Indicadores de Navegação */}
            <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
                {techs.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-[#AE27F9]" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default TechnologyCarousel;
