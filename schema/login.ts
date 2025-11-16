import z from "zod";
import { ErrorMessages } from "../components/constants/ErrorMessages";

export const loginSchema = z.object({
  email: z.email({
    pattern: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
    abort: true,
    error: ErrorMessages.invalidEmail
  }).min(1, {message: ErrorMessages.required("Email")}),
  password: z.string().min(1, {message: ErrorMessages.required("Password")
})});
