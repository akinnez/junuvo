import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { AlertTriangle } from "lucide-react";
import { SwitchForm } from "@/components/CustomToggle";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { formattedAmount } from "@/lib/currency-formatter";
import Link from "next/link";
import { useRouter } from "next/navigation";

// --- 1. TYPE DEFINITIONS ---
type ContributionType = "automatic" | "manual";

interface FormInputs extends FieldValues {
  contributionType: ContributionType;
  allowAutoRollover: boolean;
  optOutOfInterest: boolean;
}

const valueChange = ["automatic", "manual"];
// --- 3. MAIN FORM COMPONENT ---
const ContributionSettingsForm: React.FC = () => {
  const router = useRouter();
  const form = useForm<FormInputs>({
    defaultValues: {
      contributionType: "automatic", // Default selection from the image
      allowAutoRollover: false, // Assuming default is on
      optOutOfInterest: false,
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = form;

  // Watch the contribution type to conditionally display the alert
  const contributionType = watch("contributionType");

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log("Form Submitted:", data);
    router.push(`/account/savings/create/smart/summary`);
    // In a real application, you would send this data to an API
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
  };

  const handleBack = () => {
    console.log("Back button clicked");
    // Implement navigation logic here
  };

  return (
    <div className="p-4 sm:p-6 w-full">
      <CustomForm
        form={form}
        successFunction={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-500 block mb-3">
            How do you want to contribute?
          </label>
          <div className="grid grid-cols-2 gap-5">
            {valueChange.map((type, idx) => (
              <label
                key={idx}
                className="flex gap-5 items-center cursor-pointer"
              >
                <CustomInput
                  form={form}
                  name="contributionType"
                  type="radio"
                  value={type}
                  checked={contributionType == type}
                  className="!h-5 !w-5 text-button border-gray-300 focus:ring-button"
                />
                <span className="text-gray-900 capitalize text-sm font-medium">
                  {type}
                </span>
              </label>
            ))}
          </div>
        </div>
        {contributionType === "automatic" && (
          <div
            className="p-4 text-sm bg-[#F9F9FF] rounded-lg border-l-4 border-blue-500 my-5"
            role="alert"
          >
            <AlertTriangle className="w-5 h-5 mr-3 text-red-500 fill-red-100 mb-3" />
            <div className="text-xs">
              <span className="font-semibold text-gray-500">
                You will be debited automatically every
              </span>{" "}
              <span className="font-semibold text-button">
                last day of the month at {8}
              </span>{" "}
            </div>
          </div>
        )}

        <div className="w-full border-1 border-[#E4E7EC] border-dashed bg-[#F6F6F6] rounded-2xl p-5 flex justify-center items-center my-10">
          <div className="w-full space-y-5">
            <div className="flex justify-between items-center mb-5">
              <span className="text-xs text-gray-500">Available Balance</span>
              <Link
                href="#"
                className="text-[10px] !px-2 !py-1 !bg-[#E3EFFC] rounded-4xl font-medium !text-gray-900 hover:text-blue-700 transition duration-150"
              >
                Change
              </Link>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {formattedAmount("NGN", 120000)}
            </p>
          </div>
        </div>

        <div className="space-y-5 pt-5">
          {/* 4. Toggle 1: Allow Auto-Rollover */}

          <SwitchForm
            form={form}
            name="allowAutoRollover"
            label="Allow Auto-Rollover"
            description="Auto-Rollover after savings maturity"
          />
          {/* 5. Toggle 2: Opt out of earning interest */}

          <SwitchForm
            form={form}
            name="optOutOfInterest"
            label="Opt out of earning interest"
            description="Turn off if you do not wish to accumulate interest."
          />
        </div>

        <hr className="border-t border-gray-200 my-5" />
        {/* 6. Navigation Buttons */}
        <div className="grid grid-cols-2 gap-5 pt-6">
          <Button
            type="button"
            onClick={handleBack}
            className="bg-gray-200 !text-black hover:bg-gray-300 transition duration-200 "
          >
            Back
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="transition duration-200"
          >
            {isSubmitting ? "Saving..." : "Next"}
          </Button>
        </div>
      </CustomForm>
    </div>
  );
};

export default ContributionSettingsForm;
