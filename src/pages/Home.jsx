import { Apresentation } from "../components/Apresentation"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { Solutions } from "../components/Solutions"
import { FooterWithLogo } from "../components/FooterWithLogo"
import { Navbar } from "../components/Navbar"
import { Contact } from "../components/Contact"

const FloatingCTA = () => (
  <a 
    href="#contato"
    className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
  >
    Quero automatizar meu negócio!
  </a>
);

export const Home = () => {
    return (
        <div className="flex flex-col justify-between font-sans bg-gray-200 dark:bg-[#0A0A0A] w-full min-h-screen transition">
            <Navbar />
            <Apresentation />
            <About />
            <Skills />
            <Solutions />
            <Contact />
            <FooterWithLogo />
            <FloatingCTA />
        </div>
    )
}