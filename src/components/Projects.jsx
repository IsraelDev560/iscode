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
import { projects } from "../assets/mocks/projects";
import { ReadMore } from "./utils/Readmore";
import { useNavigate } from "react-router-dom";


export const Projects = () => {
    const navigate = useNavigate();
    return (
        <div id="projetos" className="w-full flex flex-col">
            <h2 className="text-black items-left lg:mx-auto flex px-6 my-8 dark:text-white text-4xl font-bold text-center">Projetos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-2 place-items-center lg:max-w-[60%]">
                {projects.map((item, index) => (
                    <Card key={index} className="w-full lg:h-[65vh] bg-transparent max-w-5xl shadow-lg">
                        <CardBody>
                            <div className="flex items-center justify-between">
                                <Typography variant="h4" className="text-gray-800 mb-3 dark:text-white font-semibold">
                                    {item.title}
                                </Typography>
                            </div>
                            <Typography className="text-gray-800 overflow-y-auto scrollbar-hide dark:text-gray-400">
                                {item.desc.length > 100 ? (
                                    <ReadMore text={item.desc} maxLength={100} />
                                ) : (
                                    item.desc
                                )}
                            </Typography>
                            <div className="group mt-5 inline-flex flex-wrap items-center gap-3">
                                {item.icons.map((prop, index) => {
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
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={item.image}
                                className="object-contain w-full h-auto"
                                alt="ui/ux review check"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        </CardHeader>
                       
                        <CardFooter className="mt-5">
                            <Button size="lg" className="text-black bg-gray-400 dark:bg-[#141414FF] dark:text-white" fullWidth={true}>
                                <p onClick={() => navigate(`/content/${item.showMore}`)}>
                                    Ver mais
                                </p>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}