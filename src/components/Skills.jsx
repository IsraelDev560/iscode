import { FaReact, FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

export const Skills = () => {

    const skills = [
        { name: "Javascript", icon: IoLogoJavascript },
        { name: 'Java', icon: FaJava },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3 },
        { name: "React", icon: FaReact },
        { name: "SpringBoot", icon: BiLogoSpringBoot },
        { name: "Tailwind", icon: RiTailwindCssFill },
        { name: 'MySQL', icon: GrMysql },
    ]

    return (
        <div id="skills" className="mt-6">
            <h2 className="text-white text-4xl font-bold text-center">Skills</h2>
            <div className="w-full max-w-2xl my-8 mx-auto gap-2 lg:grid-cols-4 grid grid-cols-2">
                {skills.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            className="w-full flex flex-col justify-center space-y-2 mx-auto items-center text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-[#AE27F9]"
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