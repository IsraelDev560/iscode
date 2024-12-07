import React, { useState, useEffect } from "react"
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

export const Navbar = () => {
    const [isMobile, seIsMobile] = useState(window.innerWidth <= 768);
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    useEffect(() => {
        const handleResize = () => seIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const infos = [
        { name: "Home", link: "#home" },
        { name: "Sobre", link: "#sobre" },
        { name: "Contato", link: "#contato" },
        { name: "Skills", link: "#skills" },
        { name: "Projetos", link: "#projetos" },
    ]

    return (
        <nav className="flex fixed p-5 top-0 left-0 right-0 shadow-md"
        >
            <div className="flex w-full">
                {isMobile ? (
                    <div className="flex justify-between w-full">
                        <h2 className="text-xl font-bold text-white z-10">
                            iS<span className="text-[#AE27F9]">Code</span>
                        </h2>
                        {menu ? (<IoMdClose onClick={toggleMenu} className="justify-end text-white text-2xl cursor-pointer transition" />) : (<IoMdMenu onClick={toggleMenu} className="justify-end text-white text-2xl cursor-pointer transition" />)}

                        <AnimatePresence>
                        {menu && (
                            <motion.div
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: 10, opacity: 1 }}
                                exit={{ y: 200, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                className="w-full z-0 text-white top-16 right-0 absolute"
                            >
                                <ul className="flex space-y-4 p-5 bg-[#0C0C0CFF] w-full shadow-md justify-end flex-col text-right text-white text-lg">
                                    {infos.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.link} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">
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
                        <h2 className="text-xl font-bold text-white">
                            iS<span className="text-[#AE27F9]">Code</span>
                        </h2>
                        <ul className="flex space-x-4 text-white text-xl justify-between">
                            {infos.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="hover:text-[#AE27F9] transition cursor-pointer hover:underline">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}