import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const downloadSchema = z.object({
  startDate: z.string().min(1, {message: ErrorMessages.required("Start Date")}),
  endDate: z.string().min(1, {message: ErrorMessages.required("End Date")}),
});
