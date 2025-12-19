import { ErrorMessages } from "@/components/constants/ErrorMessages";
import z from "zod";

export const flightSchema = z.object({
  departureDate: z.string().min(1, {message: ErrorMessages.required("Departure Date")}),
  returnDate: z.string().optional(),
});
