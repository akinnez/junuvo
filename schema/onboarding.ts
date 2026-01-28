import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const kycVerifySchema = z.object({
  bvn: z.string().min(1, {message: ErrorMessages.required("BVN")}).max(11, {message: "BVN must be at most 11 characters"}),
  phone: z.string().min(1, {message: ErrorMessages.required("Phone Number")}).max(11, {message: "Phone Number must be at most 11 characters"}),
  dateOfBirth: z.string().min(1, {message: ErrorMessages.required("Date of Birth")
})});