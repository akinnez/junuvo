"use client";
import { useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { changeCurrentStep } from "@/signal_store/services/shared-service";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type PinFormValues = {
  pin: string;
};
const PinSchema = z.object({
  pin: z.string().regex(/^\d{6}$/, "PIN must be exactly 6 digits."),
});
export default function CreatePinPage() {
  const router = useRouter();
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

  const onSubmit = (data: PinFormValues) => {
    router.push("transaction_pin");
    changeCurrentStep(3);
    alert("PIN validated: " + data.pin);
  };

  const handleResendOTP = () => {
    // Resent OTP Logic goes here
    alert("OTP Resend Successfully");
  };
  return (
    <div className="md:h-[calc(100vh-5rem)] flex justify-center md:items-center">
      <div className="my-10 md:my-0">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Verify OTP</h1>
          <span className="text-sm text-gray-500">
            OTP will be sent to registered email address
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-gray-400 text-sm my-3 font-semibold">
              Enter OTP
            </label>

            <InputOTP
              maxLength={6}
              value={pin}
              onChange={(val) => setValue("pin", val, { shouldValidate: true })}
            >
              <InputOTPGroup>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="h-10 w-10 md:h-14 md:w-14 mx-1 md:mx-2 border border-gray-300 rounded-md"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {errors.pin && (
              <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>
            )}
          </div>
          <div className="flex gap-x-3 text-sm">
            <p className="text-gray-400">Didn’t receive the code?</p>
            <div
              className="text-button cursor-pointer font-semibold"
              onClick={handleResendOTP}
            >
              Resend here
            </div>
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
    </div>
  );
}
