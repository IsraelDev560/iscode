import { useState, useReducer } from 'react';

const initialState = {
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
        if (!state.email) {
            errorsMessages.email = "Você deve inserir um email para prosseguir.";
            setFeedback('')
        }
        if (!state.subject) {
            errorsMessages.subject = "Insira um assunto para prosseguir.";
            setFeedback('')
        }
        if (!state.message) {
            errorsMessages.message = "Insira uma mensagem para prosseguir";
            setFeedback('')
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
        setFeedback('Sucesso, email enviado!')
    }
    return {
        handleChange,
        state,
        handleSubmit,
        feedback,
    }
}