"use client";
import { useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
import { useSessionStorage } from "@/hooks/use-session-storage";

type PinFormValues = {
  pin: string;
};
const PinSchema = z.object({
  pin: z.string().regex(/^\d{6}$/, "PIN must be exactly 6 digits."),
});
export default function ConfirmOTP() {
  const router = useRouter();
  const { getFromSession } = useSessionStorage();
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
  const dataFromSession = getFromSession("onboarding_phone");

  const onSubmit = (data: PinFormValues) => {
    router.push("/${params.appType}dashboard");
    // alert("OTP validated: " + data.pin);
  };

  const handleResendOTP = () => {
    // Resent OTP Logic goes here
    alert("OTP Resend Successfully");
  };
  return (
    <div>
      <BackButton />

      {/* Header Text */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Enter OTP</h2>
        <p className="text-gray-600 mt-1 text-sm">
          A 6-digit OTP was shared to{" "}
          <span className="font-semibold">+23481******625</span>. Input here to
          continue
        </p>
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
                  className="h-10 w-10 mx-1 md:mx-2 border border-gray-300 rounded-md"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
          {errors.pin && (
            <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>
          )}
        </div>
        <div className="flex gap-x-1 text-sm text-center items-center">
          <p className="text-gray-400">Resend Code in </p>
          <p className="text-red-500">00:60s</p>
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
