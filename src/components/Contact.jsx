import { useState, useReducer } from "react";
import { Form } from "./utils/Form"
import { useForm } from "../hooks/useForm";

export const Contact = () => {
    const {state, feedback, handleChange, handleSubmit} = useForm();
    return (
        <div className="w-full mx-auto items-center justify-center flex p-4">
            <Form state={state} feedback={feedback} handleChange={handleChange} actionForm={handleSubmit} />
        </div>
    )
}