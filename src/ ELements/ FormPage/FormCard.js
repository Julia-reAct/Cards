import React from "react"
import { useForm } from "react-hook-form"
import './FormCard.css'

export default function FormCard() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name</label>
                <input {...register("firstName",
                    { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 20 })} />
            </div>
            <div>
                <label>Last Name</label>
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i, maxLength: 80 })} />
            </div>
            <div>
                <label>Gender</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
            </div>
            <div>
                <label>Profession</label>
                <input {...register("profession", { pattern: /^[A-Za-z]+$/i, maxLength: 80 })}/>
            </div>
            <div>
                <label>Number</label>
                <input type="numberPhone" {...register("numberPhone", { min: 18, max: 99 })} />
            </div>
            <div>
                <label>Social Media</label>
                <input {...register("socialMedia", {maxLength: 80 })} />
            </div>
            <input type="submit" />
        </form>
    )
}