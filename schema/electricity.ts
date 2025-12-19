import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const electricitySchema = z.object({
  amount: z.string().min(1, {message: ErrorMessages.required("Amount")}),
  meterNo: z.string().min(1, {message: ErrorMessages.required("Meter Number")}),
});
