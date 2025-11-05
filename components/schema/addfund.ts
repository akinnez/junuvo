import z from "zod";
import { ErrorMessages } from "../constants/ErrorMessages";

export const addFundSchema = z.object({
  type: z.string().min(1, {message: ErrorMessages.required("type")}),
  accountDebit: z.string().min(1, {message: ErrorMessages.required("account Debit")}),
  accountCredit: z.string().min(1, {message: ErrorMessages.required("account Credit")}),
  amount: z.string().min(1, {message: ErrorMessages.required("amount")}),
  narration: z.string().min(1, {message: ErrorMessages.required("narration")}),
});
