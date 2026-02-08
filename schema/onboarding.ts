import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const kycVerifySchema = z.object({
  bvn: z.string().min(1, {message: ErrorMessages.required("BVN")}).max(11, {message: "BVN must be at most 11 characters"}).regex(/^\d+$/, { message: "BVN must be a number" }),
  phone: z.string().min(1, {message: ErrorMessages.required("Phone Number")}).max(14, {message: "Phone Number must be at most 14 characters"}) .regex(/^\d+$/, { message: "Phone Number must be a number" }),
  dateOfBirth: z.string().min(1, {message: ErrorMessages.required("Date of Birth")
})});