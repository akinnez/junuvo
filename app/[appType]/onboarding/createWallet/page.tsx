"use client";

import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { effect, useSignal } from "nabd";
import CustomForm from "@/components/CustomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/CustomInput";
import { kycVerifySchema } from "@/schema/onboarding";
import { kycVerify } from "@/stores/onBoardingStore";
import { useModal } from "@/hooks/useModal";
import { showNotify } from "@/lib/notification";
import { AxiosError } from "axios";
import SuccessComponentModal from "@/modals/SuccessComponentModal";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { user } from "@/stores/userStore";
import BackButton from "@/components/BackButton";
import { useLocalStorage } from "@/hooks/use-local-storage";

type BvnFormValues = {
  bvn: string;
  dateOfBirth: string;
  phone: string;
};

const AddBvn = () => {
  const { openModal, closeModal } = useModal();
  const {
    appType,
    navigate: { dashboard },
  } = useAppNavigation();
  const { setLocalStorage } = useLocalStorage();
  const { firstName } = useSignal<User>(user);

  const onClose = () => {
    setLocalStorage("isWalletCreated", true);
    closeModal;
  };
  const handleOpenSettings = () => {
    openModal({
      size: "md",
      component: (
        <SuccessComponentModal
          onClose={onClose}
          title="Verified"
          description="Thank you for verifying your BVN."
          buttonText="Proceed to dashboard"
          href={dashboard(appType)}
        />
      ),
    });
  };

  const loading = useSignal(kycVerify.isPending);

  const form = useForm<BvnFormValues>({
    resolver: zodResolver(kycVerifySchema),
    defaultValues: { bvn: "", dateOfBirth: "", phone: "" },
  });
  const {
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: BvnFormValues) => {
    try {
      await kycVerify.execute({ ...data, phone: `+${data.phone}` });
      handleOpenSettings();
    } catch (error: AxiosError | any) {
      showNotify.error(error.message);
    }
  };

  return (
    <div className="max-w-lg! mx-auto">
      <BackButton needText={false} className="shadow-none!" />
      <div className="mb-8 mt-5">
        <h2 className="text-2xl font-bold">Hi {firstName},</h2>
        <p className="text-gray-600 text-sm mt-2 font-medium">
          Let&#39;s get your KYC done by providing your Bank Verification Number
          (BVN) and Phone number
        </p>
      </div>

      <CustomForm form={form} successFunction={onSubmit} className="space-y-6">
        <CustomInput
          control={control}
          name="bvn"
          label="BVN"
          placeholder="Enter your BVN"
          type="text"
          maxLength={11}
          readOnly={loading}
          error={errors.bvn?.message as string}
        />
        <div>
          <CustomInput
            control={control}
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            type="text"
            maxLength={14}
            readOnly={loading}
            error={errors.phone?.message as string}
          />
          <div className="flex items-center text-xs gap-1 mt-1">
            <p className=" text-red-500">**</p>
            <p className="text-gray-400">
              This must be the phone number attached to your BVN
            </p>
          </div>
        </div>

        <div>
          <CustomInput
            control={control}
            name="dateOfBirth"
            label="Date of Birth"
            readOnly={loading}
            placeholder="DD/MM/YY"
            type="date"
            error={errors.dateOfBirth?.message as string}
          />

          <div className="flex items-center text-xs gap-1 mt-1">
            <p className=" text-red-500">**</p>
            <p className="text-gray-400">
              Your date of birth as used on your bvn
            </p>
          </div>
        </div>

        <Button className="w-full" disabled={loading} loading={loading}>
          {loading ? "Submitting..." : "Continue"}
        </Button>
      </CustomForm>
    </div>
  );
};

export default AddBvn;
