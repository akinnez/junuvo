"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useSignal } from "nabd";
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

type BvnFormValues = {
  bvn: string;
  dateOfBirth: string;
  phone: string;
};

const AddBvn = () => {
  const router = useRouter();
  const { openModal, closeModal } = useModal();
  const { appType } = useAppNavigation();
  const name = "Gabriel";

  const handleOpenSettings = () => {
    openModal({
      size: "md",
      component: (
        <SuccessComponentModal
          onClose={closeModal}
          title="Verified"
          description="Thank you for verifying your BVN. You can proceed to verify your phone number"
          buttonText="Verify your Phone Number"
          href={`/${appType}/onboarding/verify-phone`}
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
    formState: { errors },
  } = form;

  const onSubmit = async (data: BvnFormValues) => {
    try {
      await kycVerify.execute(data);
      handleOpenSettings();
    } catch (error: AxiosError | any) {
      const { message } = error;
      showNotify.error(message);
    }
  };

  return (
    <div className="max-w-lg! mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Hi {name},</h2>
        <p className="text-gray-600 text-sm mt-2 font-medium">
          Let&#39;s get your KYC done by providing your Bank Verification Number
          (BVN) and Phone number
        </p>
      </div>

      <CustomForm form={form} successFunction={onSubmit} className="space-y-6">
        <CustomInput
          form={form}
          name="bvn"
          label="BVN"
          placeholder="Enter your BVN"
          type="text"
          maxLength={11}
          error={errors.bvn?.message as string}
        />
        <div>
          <CustomInput
            form={form}
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            type="text"
            maxLength={11}
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
            form={form}
            name="dateOfBirth"
            label="Date of Birth"
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
