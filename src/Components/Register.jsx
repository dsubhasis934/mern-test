import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router';
function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post("http://localhost:3006/signup", data)
            .then(resp => {
                const { data, message, success } = resp.data;
                if (success) {
                    navigate('/login')
                }
            }
            )
    };
    return (
        <div>
            <h1>register page</h1>
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <input type="text" name="email" placeholder="enter your email" {...register("email")} />
                <input type="text" name="password" placeholder="enter your password" {...register("password")} />
                <button type="submit">submit</button>
            </form>


        </div>
    )
}

export default Register
