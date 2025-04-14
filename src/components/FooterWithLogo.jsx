import { Typography } from "@material-tailwind/react";
import isCodeSvg from '../assets/img/iscode-no-name.svg'
import { useLanguage } from "../hooks/useLanguage";

export function FooterWithLogo() {
  const { t } = useLanguage();
  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src={isCodeSvg} alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#sobre"
              color="blue-gray"
              className="font-normal transition-colors hover:text-purple-500 text-black dark:text-white focus:text-purple-500"
            >
              {t("Sobre")}
            </Typography>
          </li>
          {/* <li>
            <Typography
              as="a"
              href="#skills"
              color="blue-gray"
              className="font-normal transition-colors hover:text-purple-500 text-black dark:text-white focus:text-purple-500"
            >
              Skills
            </Typography>
          </li> */}
          <li>
            <Typography
              as="a"
              href="#projetos"
              color="blue-gray"
              className="font-normal transition-colors hover:text-purple-500 text-black dark:text-white focus:text-purple-500"
            >
              {t("Projetos")}
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#contato"
              color="blue-gray"
              className="font-normal  transition-colors hover:text-purple-500 text-black dark:text-white focus:text-purple-500"
            >
              {t("Contato")}
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border border-gray-300 dark:border-[#242629]" />
      <Typography className="text-center text-black dark:text-white font-semibold">
        &copy; 2025 iS<span className="text-[#AE27F9]">Code</span>
      </Typography>
    </footer>
  );
}