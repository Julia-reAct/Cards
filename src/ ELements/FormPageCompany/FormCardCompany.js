import React from "react"
import { useForm } from "react-hook-form"
import './FormCardCompany.css'

export default function FormCardCompany() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name Company</label>
                <input {...register("nameCompany",
                    { required: true, maxLength: 80 })} />
            </div>
            <div>
                <label>Industrial</label>
                <input {...register("industrial", { maxLength: 80 })} />
            </div>
            <div>
                <label>Address</label>
                <input {...register("address", { maxLength: 80 })}/>
            </div>
            <div>
                <label>Number</label>
                <input type="numberPhone" {...register("numberPhone", { min: 18, max: 99 })} />
            </div>
            <div>
                <label>Website</label>
                <input {...register("website", {maxLength: 80 })} />
            </div>
            <div>
                <label>Social Media</label>
                <input {...register("socialMedia", {maxLength: 80 })} />
            </div>
            <input type="submit" />
        </form>
    )
}