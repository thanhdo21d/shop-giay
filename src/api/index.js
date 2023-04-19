
import axios from "axios"
import * as Yup from "yup"
export const instants = axios.create({
        baseURL : 'http://localhost:3000'
})
   
export const signupSchema = Yup.object({
    email: Yup.string().required().trim(),
    password: Yup.string().required().trim(),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")]).required().trim(),
})
export const signinSchema = Yup.object({
    email: Yup.string().required().trim(),
    password: Yup.string().required().trim(),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")]).required().trim(),
})