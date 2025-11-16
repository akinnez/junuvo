import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const saveBeneficiarySchema = z.object({
  bankName: z.string().min(1, {message: ErrorMessages.required("account Debit")}),
  accountName: z.string().min(1, {message: ErrorMessages.required("account name")}),
  accountN0: z.string().min(1, {message: ErrorMessages.required("amount")}),
  beneficiaryAlias: z.string().min(1, {message: ErrorMessages.required("narration")}),
});
