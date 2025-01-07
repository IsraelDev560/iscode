import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaFigma } from "react-icons/fa6";

export const Skills = () => {

    const skills = [
        { name: "Javascript", icon: IoLogoJavascript },
        { name: 'Java', icon: FaJava },
        { name: "Typescript", icon: SiTypescript  },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3 },
        { name: "React", icon: FaReact },
        { name: "SpringBoot", icon: BiLogoSpringBoot },
        { name: "Git", icon: FaGitAlt },
        { name: "Figma", icon: FaFigma },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: "Bootstrap", icon: FaBootstrap },
        { name: 'MySQL', icon: GrMysql },
    ]

    return (
        <div className="mt-12">
            <h2 className="text-black dark:text-white text-4xl font-bold text-center">Skills</h2>
            <div className="w-full lg:max-w-7xl my-8 mx-auto gap-5 lg:grid-cols-4 grid grid-cols-2">
                {skills.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            className="w-full flex flex-col justify-center space-y-2 mx-auto items-center text-black dark:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#AE27F9]"
                            key={index}
                        >
                            <IconComponent className="text-7xl" />
                            <p className="text-2xl font-bold">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}