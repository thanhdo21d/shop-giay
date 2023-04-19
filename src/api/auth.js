import { instants } from "."

export const signup = () => {
    const uri = ("/user")
    return instants.post(uri)
}

export const signin = () => {
    const uri = ("/user")
    return instants.post(uri)
}