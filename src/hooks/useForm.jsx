import { useState, useReducer } from 'react';
import emailjs from '@emailjs/browser';
const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    sucess: "",
    errors: {
        email: "",
        subject: "",
        message: ""
    },
}

const reducer = (state, action) => {
    switch (action.type) {
        case "handleInput":
            return {
                ...state,
                [action.field]: action.payload
            };
        case 'setError':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.field]: action.payload,
                },
            };
        default:
            return state;
    }
}
export const useForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const errorsMessages = {};
    const [feedback, setFeedback] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "handleInput",
            field: e.target.name,
            payload: e.target.value
        });
        if (value.trim()) {
            dispatch({
                type: 'setError',
                field: name,
                payload: ""
            });
        }
    };

    const validate = (state, dispatch) => {
        if (!state.name) {
            errorsMessages.name = "Você deve inserir um nome para prosseguir.";
            setFeedback('');
        }
        if (!state.email) {
            errorsMessages.email = "Você deve inserir um email para prosseguir.";
            setFeedback('');
        }
        if (!state.subject) {
            errorsMessages.subject = "Insira um assunto para prosseguir.";
            setFeedback('');
        }
        if (!state.message) {
            errorsMessages.message = "Insira uma mensagem para prosseguir";
            setFeedback('');
        }

        Object.entries(errorsMessages).forEach(([field, m]) => {
            dispatch({ type: 'setError', field, payload: m });
        });

        return errorsMessages;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsValidation = validate(state, dispatch);
        if (Object.keys(errorsValidation).length > 0) {
            return;
        }

        const templateParams = {
            from_subject: state.subject,
            from_name: state.name,
            message: state.message,
            email: state.email,
        }

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_KEY, templateParams, import.meta.env.VITE_PUBLIC_KEY)
            .then((response) => {
                setFeedback('Sucesso, email enviado!');
                console.log(response.status);
                console.log(response.text);
                dispatch({type: 'handleInput', field: e.target.value, payload: '' })
            }, (err) => {
                console.log(err);
            })
    }
    return {
        handleChange,
        state,
        handleSubmit,
        feedback,
    }
}