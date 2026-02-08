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
import BackButton from "@/components/BackButton";
import { useSessionStorage } from "@/hooks/use-session-storage";
import { confirmPhoneVerify } from "@/stores/onBoardingStore";
import { showNotify } from "@/lib/notification";
import { useAppNavigation } from "@/hooks/use-app-navigation";

type PinFormValues = {
  pin: string;
};
const PinSchema = z.object({
  pin: z.string().regex(/^\d{5}$/, "PIN must be exactly 5 digits."),
});
export default function ConfirmOTP() {
  const router = useRouter();
  const {
    appType,
    navigate: { createWallet },
  } = useAppNavigation();

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

  const onSubmit = async (data: PinFormValues) => {
    try {
      const { message } = await confirmPhoneVerify.execute({ code: data.pin });
      showNotify.success(message);
      router.push(createWallet(appType));
    } catch (error: any) {
      showNotify.error(error);
    }
  };

  const handleResendOTP = () => {
    // Resent OTP Logic goes here
    alert("OTP Resend Successfully");
  };
  return (
    <div>
      <BackButton needText={false} className="shadow-none!" />

      {/* Header Text */}
      <div className="mb-8 mt-5">
        <h2 className="text-2xl font-bold text-gray-900">Enter OTP</h2>
        <p className="text-gray-600 mt-1 text-sm">
          A 5-digit OTP was shared to{" "}
          <span className="font-semibold">{`${dataFromSession}`}</span>. Input
          here to continue
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-gray-400 text-sm my-3 font-semibold">
            Enter OTP
          </label>

          <InputOTP
            maxLength={5}
            value={pin}
            onChange={(val) => setValue("pin", val, { shouldValidate: true })}
          >
            <InputOTPGroup>
              {[0, 1, 2, 3, 4].map((i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="h-14 w-14 mx-1 md:mx-2 border border-gray-300 rounded-md"
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
