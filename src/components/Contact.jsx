import { useState, useReducer } from "react";
import { Form } from "./utils/Form"
import { useForm } from "../hooks/useForm";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaThreads } from "react-icons/fa6";

export const Contact = () => {

    const links = [
        { icon: FaLinkedin, link: "https://www.linkedin.com/in/israelsantoss/" },
        { icon: FaGithub, link: "https://github.com/IsraelDev560" },
        { icon: SiGmail, link: "https://mailto:devisrael560@gmail.com" },
        { icon: FaInstagram, link: 'https://www.instagram.com/is.codess/' },
        { icon: FaThreads, link: "https://www.threads.net/@is.codess" }
    ]

    const { state, feedback, handleChange, handleSubmit } = useForm();
    return (
        <div id="contato" className="flex-col w-full mx-auto items-center justify-center flex p-4">
            <Form state={state} feedback={feedback} handleChange={handleChange} actionForm={handleSubmit} />

            <h4 className="mt-8 mb-2 font-semibold text-3xl text-black dark:text-white">Ou pelas redes sociais</h4>

            <div className="flex space-x-4 justify-center w-full">
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
                    )
                })}
            </div>
        </div>
    )
}