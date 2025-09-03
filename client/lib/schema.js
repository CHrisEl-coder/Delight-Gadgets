import z, { email } from "zod"

const login = z.object({
    email: z.string().email("Please enter a correct email."),
    password: z.string().min(8, "Password must be a minimum of 8 characters")
});


const signUp = z.object({
    username: z.string().min(6, "username must be atleast 6 letters").max(10, "username cannot exceed 10 letters"),
    cellnumber: z.string().min(10, "cellnumber must be upto 10 characters"),
    state: z.string().min(3, "choose a correct state"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be a minimum of 8 characters"),
    agreed: z.boolean().refine(val => val === true, {message: "Agree to terms to proceed."})
});


export { login, signUp}