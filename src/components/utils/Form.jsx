import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export function Form({ actionForm, state, handleChange, feedback }) {
    return (
        <Card className="w-full flex mx-auto" color="transparent" shadow={false}>
            <Typography variant="h4" className="mx-auto text-4xl mt-8 text-black dark:text-white">
                Entre em <span className="text-[#AE27F9]">contato</span> conosco
            </Typography>
            <form onSubmit={actionForm} className="mt-8 mb-2 w-full max-w-3xl mx-auto">
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" className="text-black dark:text-white -mb-3">
                        Seu Email
                    </Typography>
                    <Input
                        size="lg"
                        name="email"
                        type="email"
                        value={state.email}
                        placeholder="name@mail.com"
                        onChange={(e) => handleChange(e)}
                        className=" !border-t-blue-gray-400 focus:!border-t-gray-900 text-black dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    {state.errors.email && <p className="text-red-500">{state.errors.email}</p>}
                    <Typography variant="h6" className="text-black dark:text-white -mb-3">
                        Assunto
                    </Typography>
                    <Input
                        size="lg"
                        name="subject"
                        type="text"
                        value={state.subject}
                        placeholder="ex: PROPOSTA"
                        onChange={(e) => handleChange(e)}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    {state.errors.subject && <p className="text-red-500">{state.errors.subject}</p>}
                    <Typography variant="h6" className="text-black dark:text-white -mb-3">
                        Mensagem
                    </Typography>
                    <Input
                        type="text"
                        size="lg"
                        name="message"
                        value={state.message}
                        placeholder="Olá iSCode eu gostaria..."
                        onChange={(e) => handleChange(e)}
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-black dark:text-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    {state.errors.message && <p className="text-red-500">{state.errors.message}</p>}
                </div>
                {feedback && <p className="text-green-500">{feedback}</p>}
                <Button type="submit" className="mt-6" fullWidth>
                    Enviar
                </Button>
            </form>
        </Card>
    );
}