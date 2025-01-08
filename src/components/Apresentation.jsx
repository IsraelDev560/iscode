import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import image from '../assets/img/wired-lineal-69-eye-hover-blink.gif';
import { Atom } from './utils/Atom';

export const Apresentation = () => {

    const links = [
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/israelsantoss/" },
        { icon: FaGithub, link: "https://github.com/IsraelDev560" },
        { icon: SiGmail, link: "mailto:devisrael560@gmail.com?subject=[CONTATO VIA LINK]" },
    ]

    return (
        <div className="flex flex-col justify-between lg:flex-row w-full sm:max-w-3xl lg:max-w-5xl mt-32 lg:items-start items-center mx-auto p-6 md:p-6 xl:p-0">
            <div className="text-left text-black dark:text-white space-y-2">
                <p className="text-3xl font-bold">Bem-vindo(a) ao</p>
                <h2 className="text-4xl font-bold text-black dark:text-white z-10">
                    iS<span className="text-[#AE27F9]">Code</span>
                </h2>
                <p className="z-10 relative py-6 text-lg text-gray-900 dark:text-gray-400 lg:max-w-lg">
                    Onde linhas de código ganham vida! Nossa missão é criar experiências digitais únicas, feitas sob medida para você. Junte-se a nós e faça parte dessa jornada tecnológica.
                </p>
                <div className="flex space-x-4 justify-start w-full">
                    {links.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black dark:text-white my-5 text-4xl hover:text-[#AE27F9] transition hover:-translate-y-1 hover:scale-110 duration-300"
                            >
                                <IconComponent />
                            </a>
                        );
                    })}
                </div>
            </div>
            <div id='sobre' className='relative w-full max-w-xs lg:top-14 my-8 lg:right-24 flex h-[20vw] justify-center z-10'>
                <Atom />
                {/* <img className='w-full h-auto max-w-xs' src={image} alt="" /> */}
            </div>
            <div className='absolute z-[0] w-[45%] h-[45%] bg-gradient-to-r from-pink-200 right-2 dark:bg-gradient-to-r dark:from-indigo-500 blur-3xl rounded-full' />
        </div>
    )
}