import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const bettingSchema = z.object({
  amount: z.string().min(1, {message: ErrorMessages.required("Amount")}).regex(/^\d+(\.\d{1,2})?$/, { message: "Amount must be a valid number with up to 2 decimal places" }),
  service: z.string().min(1, {message: ErrorMessages.required("Service")}),
  accountId: z.string().min(1, {message: ErrorMessages.required("Account ID")}).regex(/^\d+$/, { message: "Account ID must be a number" }),
walletId: z.string().min(1, {message: ErrorMessages.required("Wallet ID")}).regex(/^\d+$/, { message: "Wallet ID must be a number" }),
}); 