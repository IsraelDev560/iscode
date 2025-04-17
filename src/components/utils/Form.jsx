import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useLanguage } from "../../hooks/useLanguage";

export function Form({ actionForm, state, handleChange, feedback, loading }) {
    const { t } = useLanguage();
    return (
        <Card className="w-full flex mx-auto" color="transparent" shadow={false}>
            <Typography variant="h4" className="mx-auto text-4xl mt-8 text-black dark:text-white">
                {t("Entre em")} <span className="text-[#AE27F9]">{t("contato")}</span> {t("conosco")}
            </Typography>
            <form onSubmit={actionForm} className="mt-8 mb-2 w-full max-w-3xl mx-auto">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" className="text-black dark:text-white -mb-3">
                        {t("Seu Nome")}
                    </Typography>
                    <Input
                        size="lg"
                        name="name"
                        type="name"
                        maxLength={100}
                        value={state.name}
                        placeholder={t("ex: Paulo Santos")}
                        onChange={(e) => handleChange(e)}
                        className=" !border-t-blue-gray-400 focus:!border-t-gray-900 text-black dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    {state.errors.name && <p className="text-red-500">{t(state.errors.name)}</p>}
                    <Typography variant="h6" className="text-black dark:text-white -mb-3">
                        {t("Seu Email")}
                    </Typography>
                    <Input
                        size="lg"
                        name="email"
                        maxLength={50}
                        type="email"
                        value={state.email}
                        placeholder={t("name@mail.com")}
                        onChange={(e) => handleChange(e)}
                        className=" !border-t-blue-gray-400 focus:!border-t-gray-900 text-black dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    {state.errors.email && <p className="text-red-500">{t(state.errors.email)}</p>}
                    <Typography variant="h6" className="text-black dark:text-white -mb-3">
                        {t("Assunto")}
                    </Typography>
                    <Input
                        size="lg"
                        name="subject"
                        type="text"
                        maxLength={35}
                        value={state.subject}
                        placeholder={t("ex: PROPOSTA")}
                        onChange={(e) => handleChange(e)}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    {state.errors.subject && <p className="text-red-500">{t(state.errors.subject)}</p>}
                    <Typography variant="h6" className="text-black dark:text-white -mb-3">
                        {t("Mensagem")}
                    </Typography>
                    <Textarea
                        type="textarea"
                        size="lg"
                        name="message"
                        maxLength={560}
                        value={state.message}
                        placeholder={t("Olá iSCode eu gostaria...")}
                        onChange={(e) => handleChange(e)}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    {state.errors.message && <p className="text-red-500">{t(state.errors.message)}</p>}
                </div>
                {feedback && <p className="text-green-500">{t(feedback)}</p>}
                {loading ? (
                    <Button className="mt-6" fullWidth>
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 mr-2 border-t-4 border-[#AE27F9]">
                            </div>
                            <p className="text-[#AE27F9] text-base font-semibold">{t("Carregando...")}</p>
                        </div>
                    </Button>
                ) : (
                    <Button type="submit" className="mt-6" fullWidth>
                        {t("Enviar")}
                    </Button>
                )}
            </form>
        </Card >
    );
}