import { Apresentation } from "../components/Apresentation";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { FooterWithLogo } from "../components/FooterWithLogo";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between font-sans bg-gray-200 dark:bg-[#0A0A0A] w-full min-h-screen transition">
      <Navbar />
      <Apresentation />
      <About />
      <Projects />
      <Contact />
      <FooterWithLogo />
    </div>
  );
}
