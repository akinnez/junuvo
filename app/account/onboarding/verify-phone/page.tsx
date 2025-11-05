"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
// import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";

type verifyType = {
  phone: string;
};

function VerifyPhoneNumber() {
  const isPending = false;
  const form = useForm<verifyType>({
    // resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
    },
  });
  const {
    formState: { errors },
  } = form;
  return (
    <div>
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => console.log("Go back action")}
          className="flex items-center text-gray-500 hover:text-indigo-600 transition duration-150"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
        </button>
      </div>

      {/* Header Text */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Verify Phone number
        </h2>
        <p className="text-gray-600 mt-1 text-sm">
          Let&#39;s get your KYC done by providing your Bank Verification Number
          (BVN) and Phone number
        </p>
      </div>

      <div className="mt-5">
        <CustomForm form={form} successFunction={() => {}}>
          <CustomInput
            form={form}
            name="phone"
            label="Phone Number"
            type="phone"
            error={errors.phone?.message as string}
            placeholder="Enter your phone number"
          />
          <div>
            <Button
              className="w-full "
              // disabled={isPending}
              variant={"primary"}
              // loading={isPending}
            >
              Login
            </Button>
          </div>
        </CustomForm>
      </div>
    </div>
  );
}

export default VerifyPhoneNumber;
