import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router';
function Update() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.patch("http://localhost:3006/update", data)
            .then(resp => {
                console.log(resp)
                const { data, message, success } = resp.data;
                if (success) {
                    reset()
                    alert(message)
                }
            }
            )
    };
    return (
        <div>
            <h1>Update page</h1>
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <input type="text" name="email" placeholder="enter your email" {...register("email")} />
                <input type="text" name="updatedPassword" placeholder="enter your updated password" {...register("updatedPassword")} />
                <button type="submit">submit</button>
            </form>


        </div>
    )
}

export default Update
