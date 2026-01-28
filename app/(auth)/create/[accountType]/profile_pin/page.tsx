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
import { useEffect } from "react";
import { verifyEmail, create } from "@/stores/authStore";
import { useSignal } from "nabd";
import Spinner from "@/components/Spinner";
// import { CreateUser } from "@/types/auth";
import { showNotify } from "@/lib/notification";

type PinFormValues = {
  pin: string;
};
const PinSchema = z.object({
  pin: z.string().regex(/^\d{6}$/, "PIN must be exactly 6 digits."),
});
export default function CreatePinPage() {
  const router = useRouter();
  const { setSession, getFromSession } = useSessionStorage();
  const loading = useSignal(verifyEmail.isPending);
  const error = useSignal(verifyEmail.error);
  // const loading_create = useSignal(create.isPending);
  // const error_create = useSignal(create.error);
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
  const dataFromSession = getFromSession("create_user");

  const onSubmit = async (data: PinFormValues) => {
    // const payload:CreateUser = { ...dataFromSession, code: data.pin };
    // try {
    // const { message, success } = await create.execute(payload);
    //   if (success) {
    //     showNotify.success(message);
    //     router.push("transaction_pin");
    //     setSession("app-step", "3");
    //     console.log(message);
    //     return;
    //   }
    //   showNotify.error(error?.message || "Failed to create profile");
    //   return;
    // } catch (error) {
    //  showNotify.error("Something went wrong. Please try again.");
    //   console.log(error);
    // }
    showNotify.error("Functionality Disabled");
    router.push("transaction_pin");
    setSession("app-step", "3");
    alert("PIN validated: " + data.pin);
  };

  const handleResendOTP = async () => {
    const { email } = dataFromSession;
    // Resent OTP Logic goes here
    try {
      const { message, success } = await verifyEmail.execute(email);
      if (success) {
        showNotify.success(message);
        return;
      }
      showNotify.error(error?.message || "Failed to resend OTP");
      return;
    } catch (error) {
      showNotify.error("Something went wrong. Please try again.");
      console.log(error);
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
            type="submit"
            size="md"
            // disabled={loading_create}
            // loading={loading_create}
            className="w-full text-white mt-10"
          >
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
