import { Apresentation } from "../components/Apresentation"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { FooterWithLogo } from "../components/FooterWithLogo"
import { Navbar } from "../components/Navbar"
import { Contact } from "../components/Contact"

export const Home = () => {
    return (
        <div className="flex flex-col justify-between font-sans bg-gray-50 dark:bg-[#0A0A0A] w-full min-h-screen transition">
            <Navbar />
            <Apresentation />
            <About />
            <Skills />
            <Projects />
            <Contact/>
            <FooterWithLogo />
        </div>
    )
}