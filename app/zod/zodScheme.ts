import {z} from "zod"

export const zodScheme=z.object({
    fullname:z.string().min(4,{message:"Enter your name"}),
    password:z.string().min(4,{message:"Create a password"}),
    email:z.string().email({message:"Enter an email"})
})