import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const airtimeSchema = z.object({
  type: z.string().min(1, {message: ErrorMessages.required("type")}),
  debitAccount: z.string().min(1, {message: ErrorMessages.required("Account Debit")}),
  network: z.string().min(1, {message: ErrorMessages.required("Network")}),
  amount: z.string().min(1, {message: ErrorMessages.required("amount")}),
  phone: z.string().min(1, {message: ErrorMessages.required("Phone Number")}),
});

export const dataSchema = z.object({
  type: z.string().min(1, {message: ErrorMessages.required("type")}),
  debitAccount: z.string().min(1, {message: ErrorMessages.required("Account Debit")}),
  plan: z.string().min(1, {message: ErrorMessages.required("Data Plan")}),
  network: z.string().min(1, {message: ErrorMessages.required("Network")}),
  amount: z.string().min(1, {message: ErrorMessages.required("amount")}),
  phone: z.string().min(1, {message: ErrorMessages.required("Phone Number")}),
});
