import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const airtimeSchema = z.object({
  amount: z.string().min(1, {message: ErrorMessages.required("amount")}),
  phone: z.string().min(1, {message: ErrorMessages.required("Phone Number")}),
  network: z.string().min(1, {message: ErrorMessages.required("Phone Number")}),
  plan: z.string().optional()
});