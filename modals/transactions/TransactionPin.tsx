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

type PinFormValues = {
  pin: string;
};

const PinSchema = z.object({
  pin: z.string().regex(/^\d{4}$/, "PIN must be exactly 4 digits."), // Enforce 4 digits
});

export default function TransactionPin({
  closeModal,
  Component,
}: {
  closeModal: any;
  Component: any;
}) {
  const { openModal, closeModal: exitModal } = useModal();
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PinFormValues>({
    resolver: zodResolver(PinSchema),
    defaultValues: { pin: "" },
  });

  const pin = watch("pin");

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: <Component closeModal={closeModal} />,
    });
  };

  const onSubmit = (data: PinFormValues) => {
    closeModal;
    handleOpenSettings();
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-xl font-bold">Enter Transaction PIN</h1>
        <span className="text-xs text-gray-500">
          Enter your transactional PIN to perform this transaction
        </span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
        <div className="w-full px-5">
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

        <Button
          type="submit"
          size="md"
          disabled={isSubmitting}
          className="w-full text-white mt-10"
        >
          Proceed
        </Button>
      </form>
    </div>
  );
}
