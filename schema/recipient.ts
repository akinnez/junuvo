import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const recipientSchema = z.object({
  type: z.string().min(1, {message: ErrorMessages.required("type")}),
  bankName: z.string().min(1, {message: ErrorMessages.required("account Debit")}),
  accountName: z.string().min(1, {message: ErrorMessages.required("account name")}),
  amount: z.string().min(1, {message: ErrorMessages.required("amount")}),
  narration: z.string().min(1, {message: ErrorMessages.required("narration")}),
});
