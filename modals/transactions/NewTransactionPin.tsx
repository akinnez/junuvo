"use client";
import { useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Button from "@/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useModal } from "@/hooks/useModal";
import PinSuccess from "./PinSuccess";

type PinFormValues = {
  pin: string;
  confirm_pin: string;
};

const PinSchema = z
  .object({
    pin: z.string().regex(/^\d{4}$/, "PIN must be exactly 4 digits."), // Enforce 4 digits
    confirm_pin: z
      .string()
      .regex(/^\d{4}$/, "Confirm PIN must be exactly 4 digits."), // Enforce 4 digits
  })
  // 🔑 Add the refinement for cross-field validation
  .refine((data) => data.pin === data.confirm_pin, {
    message: "PINs do not match.",
    path: ["confirm_pin"], // This tells react-hook-form to apply the error to the confirm_pin field
  });

export default function NewTransactionPin({ closeModal }: { closeModal: any }) {
  const { openModal } = useModal();
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PinFormValues>({
    resolver: zodResolver(PinSchema),
    defaultValues: { pin: "", confirm_pin: "" },
  });

  const pin = watch("pin");
  const confirm_pin = watch("confirm_pin");

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: <PinSuccess closeModal={closeModal} />,
    });
  };

  const onSubmit = (data: PinFormValues) => {
    closeModal;
    handleOpenSettings();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
        <div className="w-full px-5">
          <label className="block text-gray-800 text-sm my-3 font-semibold">
            New PIN
          </label>
          <InputOTP
            maxLength={4}
            value={pin}
            onChange={(val) => setValue("pin", val, { shouldValidate: true })}
          >
            <InputOTPGroup className="!flex !gap-7 w-full">
              {[0, 1, 2, 3].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="h-14 w-14 border border-gray-300 rounded-md"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {errors.pin && (
            <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>
          )}
        </div>
        <div className="w-full px-5">
          <label className="block text-gray-800 text-sm my-3 font-semibold">
            Confirm New PIN
          </label>
          <InputOTP
            maxLength={4}
            value={confirm_pin}
            onChange={(val) =>
              setValue("confirm_pin", val, { shouldValidate: true })
            }
          >
            <InputOTPGroup className="!flex !gap-7 w-full">
              {[0, 1, 2, 3].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="h-14 w-14 border border-gray-300 rounded-md"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {errors.confirm_pin && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirm_pin.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          size="md"
          disabled={isSubmitting}
          className="w-full text-white mt-10"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
