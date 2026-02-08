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
import { useSessionStorage } from "@/hooks/use-session-storage";
import { useEffect, useState } from "react";
import { verifyEmail } from "@/stores/authStore";
import { useSignal } from "nabd";
import Spinner from "@/components/Spinner";
import { CreateUser } from "@/types/auth";
import { showNotify } from "@/lib/notification";

type PinFormValues = {
  pin: string;
};
const PinSchema = z.object({
  pin: z.string().regex(/^\d{5}$/, "PIN must be exactly 5 digits."),
});
export default function CreatePinPage() {
  const router = useRouter();
  const [load, setLoading] = useState(false);
  const { setSession, getFromSession } = useSessionStorage();

  const loading = useSignal(verifyEmail.isPending);
  const error = useSignal(verifyEmail.error);

  useEffect(() => {
    setSession("app-step", "2");
  });
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PinFormValues>({
    resolver: zodResolver(PinSchema),
    defaultValues: { pin: "" },
  });

  const pin = watch("pin");
  const dataFromSession = JSON.parse(
    atob(getFromSession("create_user") || "{}"),
  );

  const onSubmit = async (data: PinFormValues) => {
    setLoading(true);
    const payload: CreateUser = { ...dataFromSession, code: data.pin };
    setSession("create_user", btoa(JSON.stringify(payload)));
    setSession("app-step", "3");
    router.push("transaction_pin");
    setLoading(false);
  };

  const handleResendOTP = async () => {
    const { email } = dataFromSession;
    // Resent OTP Logic goes here
    try {
      const { message } = await verifyEmail.execute(email);
      showNotify.success(message);
      return;
    } catch (error: any) {
      showNotify.error(error?.message || "Failed to resend OTP");
    }
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
              maxLength={5}
              value={pin}
              onChange={(val) => setValue("pin", val, { shouldValidate: true })}
            >
              <InputOTPGroup>
                {[0, 1, 2, 3, 4].map((i) => (
                  <InputOTPSlot
                    key={i}
                    index={i}
                    className="h-12 w-12 md:h-16 md:w-16 mx-1 md:mx-2 border border-gray-300 rounded-md text-base md:text-lg"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
            {errors.pin && (
              <p className="text-red-500 text-xs mt-1">{errors.pin.message}</p>
            )}
          </div>
          <div className="flex gap-x-3 text-sm">
            <p className="text-gray-400">Didn&#39;t receive the code?</p>
            <div
              className="text-button cursor-pointer font-semibold"
              onClick={handleResendOTP}
            >
              {!error ? (
                <>
                  {loading ? (
                    <span className="text-success text-xs">
                      Sending...
                      <Spinner width={16} height={16} />
                    </span>
                  ) : (
                    "Resend here"
                  )}
                </>
              ) : (
                <span
                  className="text-error text-xs cursor-pointer hover:underline"
                  onClick={handleResendOTP}
                >
                  {error.message}... try again
                </span>
              )}
            </div>
          </div>
          <Button
            loading={load}
            type="submit"
            size="md"
            className="w-full text-white mt-10"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
