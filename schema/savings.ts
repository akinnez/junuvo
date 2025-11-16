import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const fixedSavingSchema = z.object({
  savingPlan: z.string().min(1, {message: ErrorMessages.required("account name")}),
  amount: z.string().min(1, {message: ErrorMessages.required("amount")}),
  startDate: z.string().min(1, {message: ErrorMessages.required("start date")}),
  endDate: z.string().min(1, {message: ErrorMessages.required("end date")}),
});
export const smartSavingSchema = z.object({
  savingPlan: z.string().min(1, {message: ErrorMessages.required("account name")}),
  amount: z.string().min(1, {message: ErrorMessages.required("amount")}),
  startDate: z.string().min(1, {message: ErrorMessages.required("start date")}),
  targetDate: z.string().min(1, {message: ErrorMessages.required("target date")}),
  periodicity: z.string().min(1, {message: ErrorMessages.required("Period to save")}),
  suggestContribution: z.string().min(1, {message: ErrorMessages.required("suggested contribution")}),
});
