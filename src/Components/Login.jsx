import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router';
function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post("http://localhost:3006/login", data)
            .then(resp => {
                console.log(resp)
                const { data, message, success } = resp.data;
                if (success) {
                    console.log(data)
                    navigate('/users')
                }
            }
            )
    };
    return (
        <>
            <div>
                <h1>login page</h1>
                <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <input type="text" name="email" placeholder="enter your email" {...register("email")} />
                    <input type="text" name="password" placeholder="enter your password" {...register("password")} />
                    <button type="submit">submit</button>
                </form>


            </div>
        </>
    )
}

export default Login
