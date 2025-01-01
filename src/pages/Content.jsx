import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../assets/mocks/projects";
import { Navbar } from "../components/Navbar"
import { IoMdArrowRoundBack } from "react-icons/io";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import { CarouselDefault } from "../components/utils/CarouselDefault";

export const Content = () => {
    const navigate = useNavigate();
    const { pageId } = useParams();
    const page = projects.find(project => project.showMore === pageId);

    if (!page) {
        console.error("Page not found");
    }

    return (
        <div className="flex flex-col justify-between font-sans bg-gray-50 dark:bg-[#0A0A0A] w-full min-h-screen transition">
            <Navbar />
            <div className="flex flex-col p-2 mt-20 items-center mx-auto">
                <Card className="w-full bg-gray-200 dark:bg-[#1D1C1CFF] max-w-6xl shadow-lg">
                    <div className="mb-3 text-left mt-2 ml-2 flex items-center justify-bewteen space-x-4">
                        <IoMdArrowRoundBack onClick={() => navigate(-1)} className="text-white ml-1 text-xl cursor-pointer" />
                        <Typography variant="h4" className="text-gray-800 dark:text-white font-semibold">
                            {page.title}
                        </Typography>
                    </div>
                    <div className="p-2">
                        <CarouselDefault media={page.moreMedia} />
                    </div>
                    <CardBody>
                        <Typography className="text-gray-800 lg:max-h-[13vh] overflow-y-auto scrollbar-hide dark:text-gray-400">
                            {page.desc}
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
                    <CardFooter className="pt-1">
                        <Button size="lg" className="text-black bg-gray-400 dark:bg-[#141414FF] dark:text-white" fullWidth={true}>
                            <a href={page.link} rel="noreferrer" target="__blank">
                                Repositorio
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}