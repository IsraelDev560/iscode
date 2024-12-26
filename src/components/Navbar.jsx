import React, { useState, useEffect, useReducer } from "react"
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { SwitchDefault } from "./utils/Switch";
import isCodeSvg from '../assets/img/iscode-no-name.svg';

export const Navbar = () => {
    const [isMobile, seIsMobile] = useState(window.innerWidth <= 768);
    const [scrolled, setScrolled] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    useEffect(() => {
        const handleResize = () => seIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const infos = [
        { name: "Sobre", link: "#sobre", action: "" },
        { name: "Skills", link: "#skills", action: "" },
        { name: "Projetos", link: "#projetos", action: "" },
        { name: "Contato", link: "#contato", action: "" },
    ]

    return (
        <nav className={`flex z-50 fixed p-5 top-0 left-0 right-0 shadow-md ${scrolled ? "bg-gray-50 dark:bg-[#0A0A0A]" : 'bg-transparent'}`}
        >
            <div className="flex w-full">
                {isMobile ? (
                    <div className="flex justify-between w-full">
                         <div className="flex space-x-4 items-center">
                            <img onClick={scrollTop} className="w-8 cursor-pointer" src={isCodeSvg} alt={"SVG ISCODE"} />
                            <h2 onClick={scrollTop} className="text-xl cursor-pointer font-bold text-black dark:text-white">
                                iS<span className="text-[#AE27F9]">Code</span>
                            </h2>
                        </div>
                        <div className="text-left space-x-4 items-center w-full justify-end flex">
                            <SwitchDefault />
                            {menu ? (<IoMdClose onClick={toggleMenu} className="justify-end text-black dark:text-white text-2xl cursor-pointer transition" />) : (<IoMdMenu onClick={toggleMenu} className="justify-end text-black dark:text-white text-2xl cursor-pointer transition" />)}
                        </div>

                        <AnimatePresence>
                            {menu && (
                                <motion.div
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={{ y: 4, opacity: 1 }}
                                    exit={{ y: 200, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    className="w-full z-0 text-black dark:text-white top-16 right-0 absolute"
                                >
                                    <ul className="flex space-y-4 p-5 bg-gray-50 dark:bg-[#0C0C0CFF] w-full shadow-md justify-end flex-col text-right text-black dark:text-white text-lg">
                                        <span onClick={scrollTop} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">Home</span>
                                        {infos.map((item, index) => (
                                            <li key={index}>
                                                <a onClick={item.action} href={item.link} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="flex justify-between w-full">
                        <div className="w-xs flex space-x-4 items-center">
                            <img onClick={scrollTop} className="w-10 cursor-pointer" src={isCodeSvg} alt={"SVG ISCODE"} />
                            <h2 onClick={scrollTop} className="text-xl cursor-pointer font-bold text-black dark:text-white">
                                iS<span className="text-[#AE27F9]">Code</span>
                            </h2>
                        </div>
                        <ul className="flex space-x-4 text-black dark:text-white text-xl justify-between">
                            <span onClick={scrollTop} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">Home</span>
                            {infos.map((item, index) => (
                                <li key={index}>
                                    <a onClick={item.action} href={item.link} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <div className="mt-0.5">
                                <SwitchDefault />
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}