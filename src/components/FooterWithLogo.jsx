import { Typography } from "@material-tailwind/react";
import { useLanguage } from "../hooks/useLanguage";
import { Link, useNavigate } from "react-router-dom";

export function FooterWithLogo() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToSection = (section) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src="/iscode-no-name.svg" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection('sobre')}
              className="font-normal transition-colors hover:text-purple-500 text-black dark:text-white focus:text-purple-500"
            >
              {t("Sobre")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection('solucoes')}
              className="font-normal transition-colors hover:text-purple-500 text-black dark:text-white focus:text-purple-500"
            >
              {t("Soluções")}
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => scrollToSection('contato')}
              className="font-normal transition-colors hover:text-purple-500 text-black dark:text-white focus:text-purple-500"
            >
              {t("Contato")}
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border border-gray-300 dark:border-[#242629]" />
      <Typography className="text-center text-black dark:text-white font-semibold">
        &copy; {new Date().getFullYear()} iS<span className="text-[#AE27F9]">Code</span>
      </Typography>
    </footer>
  );
}