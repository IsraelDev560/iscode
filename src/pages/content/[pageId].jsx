import { useRouter } from "next/router";
import { projects } from "../assets/mocks/projects";
import { Navbar } from "../components/Navbar"
import { IoMdArrowRoundBack } from "react-icons/io";
import {
    Card,
    // CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    // IconButton,
} from "@material-tailwind/react";
import { CarouselDefault } from "../components/utils/CarouselDefault";
import { useLanguage } from "../hooks/useLanguage";

export default function Content() {
    const router = useRouter();
    const { pageId } = router.query;
    const page = projects.find(project => project.showMore === pageId);

    if (!page) {
        console.error("Page not found");
    }
    const { t } = useLanguage();

    return (
        <div className="flex flex-col justify-between font-sans bg-gray-200 dark:bg-[#0A0A0A] w-full min-h-screen h-full transition">
            <Navbar />
            <div className="flex flex-col p-2 mt-20 items-center mx-auto">
                <Card className="w-full bg-transparent max-w-6xl shadow-lg">
                    <div className="mb-3 text-left mt-2 ml-2 flex items-center justify-bewteen space-x-4">
                        <IoMdArrowRoundBack onClick={() => router.back()} className="text-black dark:text-white ml-1 text-xl cursor-pointer" />
                        <Typography variant="h4" className="text-black dark:text-white font-semibold">
                            {t("Voltar")}
                        </Typography>
                    </div>
                    <div className="p-2">
                        <CarouselDefault media={page.moreMedia} />
                    </div>
                    <CardBody>
                        <Typography variant="h4" className="text-gray-800 mb-2 dark:text-white font-semibold">
                            {page.title}
                        </Typography>
                        <Typography variant="h6" className="text-gray-700 dark:text-gray-400 mb-2 font-semibold">
                            Status: {page.conclued ? <span className="text-green-600">{t("Concluido")}.</span> : <span className="text-red-500">{t("Em Desenvolvimento")}</span>}
                        </Typography>
                        {/* <Typography variant="h6" className="text-gray-700 dark:text-gray-400 mb-2 font-semibold">
                            Projeto Real: {page.realProject ? <span className="text-green-600">Sim</span> : <span className="text-red-500">Não</span>}
                        </Typography> */}
                        <Typography className="text-gray-800 overflow-y-auto scrollbar-hide dark:text-gray-400">
                            {t(page.desc)}
                        </Typography>
                        <div className="group mt-5 inline-flex flex-wrap items-center gap-3">
                            {page.icons.map((prop, index) => {
                                const IconElement = prop.icon;
                                return (
                                    <Tooltip key={index} content={prop.title}>
                                        <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 dark:bg-gray-200/5 p-3 text-gray-900 dark:text-white transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                            <IconElement />
                                        </span>
                                    </Tooltip>
                                )
                            })}
                        </div>
                    </CardBody >
                    <CardFooter className="pt-1 space-y-2">
                        {page.link ? (
                            <Button size="lg" className="text-black bg-gray-400 dark:bg-[#141414FF] dark:text-white" fullWidth={true}>
                                <a href={page.link} rel="noreferrer" target="__blank">
                                    {t("Repositório")}
                                </a>
                            </Button>
                        ) : (
                            <Button size="lg" className={`text-black bg-red-400 dark:text-white`} disabled fullWidth={true}>
                                <p>
                                    {t("Repositório indisponível")}
                                </p>
                            </Button>
                        )}
                        {page.deploy ? (
                            <Button size="lg" className={`text-black bg-gray-400 dark:bg-[#141414FF] dark:text-white`} fullWidth={true}>
                                <a href={page.deploy} rel="noreferrer" target="__blank">
                                    Deploy
                                </a>
                            </Button>
                        ) : (
                            <Button size="lg" className={`text-black bg-red-400 dark:text-white`} disabled fullWidth={true}>
                                <p>
                                    {t("Deploy indisponível")}
                                </p>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
