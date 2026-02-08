import z from "zod";
import { ErrorMessages } from "../components/constants/ErrorMessages";

export const loginSchema = z.object({
  email: z.email({
    pattern: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
    abort: true,
    error: ErrorMessages.invalidEmail
  }).min(1, {message: ErrorMessages.required("Email")}),
 password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
});

export const signupBusinessSchema = z.object({
  firstName: z.string().min(1, {message: ErrorMessages.required("First Name")}),
  lastName: z.string().min(1, {message: ErrorMessages.required("Last Name")}),
  dateOfBirth: z.string().min(1, {message: ErrorMessages.required("Date of Birth")}),
  referralCode:z.string().optional(),
  email: z.email({
    pattern: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
    abort: true,
    error: ErrorMessages.invalidEmail
  }).min(1, {message: ErrorMessages.required("Email")}),
 password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
});


export const signupPersonalSchema = z.object({
  firstName: z.string().min(1, {message: ErrorMessages.required("First Name")}),
  lastName: z.string().min(1, {message: ErrorMessages.required("Last Name")}),
  email: z.email({
    pattern: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
    abort: true,
    error: ErrorMessages.invalidEmail
  }).min(1, {message: ErrorMessages.required("Email")}),
  referralCode:z.string().optional(),
 password: z.string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Password must contain at least one special character" })
});
