import { useState, useEffect } from "react"
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { SwitchDefault } from "./utils/Switch";
import isCodeSvg from '../assets/img/iscode-no-name.svg';
import { AiOutlineGlobal } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

export const Navbar = () => {
    const [isMobile, seIsMobile] = useState(window.innerWidth <= 768);
    const [scrolled, setScrolled] = useState(false);
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const { t, handleChangeLanguage, setIsOpen, isOpen } = useLanguage();

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
        navigate("/")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const infos = [
        { name: `${t('Sobre')}`, link: "#sobre", },
        // { name: "Skills", link: "#skills",  },
        { name: `${t("Projetos")}`, link: "#projetos", },
        { name: `${t("Contato")}`, link: "#contato", },
    ]

    return (
        <nav className={`flex z-50 fixed p-5 top-0 left-0 right-0 shadow-md ${scrolled ? "bg-gray-200 dark:bg-[#0A0A0A]" : 'bg-transparent'}`}
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
                                                <a onClick={scrollTop} href={item.link} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">
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
                        <div className="flex space-x-4 text-black dark:text-white text-xl items-center justify-between">
                            <span onClick={scrollTop} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">Home</span>
                            {infos.map((item, index) => (
                                <p key={index}>
                                    <a onClick={scrollTop} href={item.link} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">
                                        {item.name}
                                    </a>
                                </p>
                            ))}
                            <div className="mt-0.5">
                                <SwitchDefault />
                            </div>
                            <div className='relative flex justify-center items-center space-x-4'>
                                <AiOutlineGlobal className="cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                                {isOpen && (
                                    <div className="absolute border right-0 mt-48 w-40 rounded-md shadow-md z-50">
                                        <ul
                                            className="bg-gray-200 dark:bg-[#0A0A0A] rounded-md"
                                        >
                                            <li onClick={() => handleChangeLanguage('en-US')} className="p-2 hover:text-[#AE27F9] cursor-pointer">English</li>
                                            <li onClick={() => handleChangeLanguage("pt-BR")} className="p-2 hover:text-[#AE27F9] cursor-pointer">Português (Brasil)</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}