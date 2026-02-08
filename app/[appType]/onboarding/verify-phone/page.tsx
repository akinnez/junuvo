"use client";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { useSessionStorage } from "@/hooks/use-session-storage";
import { showNotify } from "@/lib/notification";
import { passwordInit } from "@/stores/onBoardingStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignal } from "nabd";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

const PasswordSchema = z.object({
  phone: z.string().regex(/^\d{13}$/, "Password must be exactly 13 digits."),
});

type verifyType = {
  phone: string;
};

function VerifyPhoneNumber() {
  const { setSession } = useSessionStorage();
  const { appType } = useAppNavigation();
  const router = useRouter();
  const loading = useSignal(passwordInit.isPending);
  const form = useForm<verifyType>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: {
      phone: "",
    },
  });
  const {
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: verifyType) => {
    const payload = { phone: `+` + data.phone };
    try {
      const verify = await passwordInit.execute(payload);
      showNotify.success(verify.message);
      setSession("onboarding_phone", JSON.stringify(data.phone));
      router.push("confirmOTP");
    } catch (error: any) {
      showNotify.error(
        error?.message || "Failed to initiate phone verification",
      );
    }
  };
  return (
    <div>
      {/* Back Button */}
      <BackButton needText={false} className="shadow-none!" />

      {/* Header Text */}
      <div className="mb-8 mt-5">
        <h2 className="text-2xl font-bold text-gray-900">
          Verify Phone number
        </h2>
        <p className="text-gray-600 mt-1 text-sm">
          Let&#39;s get your KYC done by providing your Bank Verification Number
          (BVN) and Phone number
        </p>
      </div>

      <div className="mt-5">
        <CustomForm form={form} successFunction={onSubmit}>
          <CustomInput
            control={control}
            name="phone"
            label="Phone Number"
            type="phone"
            maxLength={13}
            readOnly={loading}
            error={errors.phone?.message as string}
            placeholder="Enter your phone number"
          />
          <div>
            <Button
              className="w-full "
              disabled={loading}
              variant={"primary"}
              loading={loading}
            >
              Continue
            </Button>
          </div>
        </CustomForm>
      </div>
    </div>
  );
}

export default VerifyPhoneNumber;
