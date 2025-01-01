import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import TechnologyCarousel from './TechnologyCarousel';

export const Apresentation = () => {
    const [moreText, setMoreText] = useState(false);

    const links = [
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/israelsantoss/" },
        { icon: FaGithub, link: "https://github.com/IsraelDev560" },
        { icon: SiGmail, link: "https://mailto:devisrael560@gmail.com" },
    ]

    return (
        <div className="flex flex-col mt-32 items-center mx-auto">
            <div className="text-center text-black dark:text-white space-y-2">
                <p className="text-2xl">Bem-vindo(a) ao</p>
                <h2 className="text-4xl font-bold text-black dark:text-white z-10">
                    iS<span className="text-[#AE27F9]">Code</span>
                </h2>
                <p className="text-lg max-w-xs">
                    Onde linhas de código ganham vida! Nossa missão é criar experiências digitais únicas, feitas sob medida para você. Junte-se a nós e faça parte dessa jornada tecnológica.
                </p>
            </div>
            <div className="flex space-x-4 justify-center">
                {links.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black dark:text-white my-5 text-4xl hover:text-[#AE27F9] transition"
                        >
                            <IconComponent />
                        </a>
                    );
                })}
            </div>
            <div className='w-full mx-auto'>
                <TechnologyCarousel />
            </div>
        </div>
    )
}