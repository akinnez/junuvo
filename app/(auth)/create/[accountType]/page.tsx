"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { useSessionStorage } from "@/hooks/use-session-storage";
import { showNotify } from "@/lib/notification";
import { signupBusinessSchema, signupPersonalSchema } from "@/schema/auth";
import { verifyEmail } from "@/stores/authStore";
import { CreateUser } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignal } from "nabd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface createType extends Omit<CreateUser, "code" | "userType"> {
  email: string;
  dateOfBirth?: string;
}
function CreateProfile() {
  const [accept, setAccept] = useState(false);
  const router = useRouter();
  const { appType, navigate } = useAppNavigation();
  const { setSession } = useSessionStorage();
  const loading = useSignal(verifyEmail.isPending);

  useEffect(() => {
    setSession("app-step", "2");
  });

  const form = useForm<createType>({
    resolver: zodResolver(
      appType != "CUSTOMER_BUSINESS".toLowerCase()
        ? signupPersonalSchema
        : signupBusinessSchema,
    ),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const {
    control,
    formState: { errors },
  } = form;

  const personalLogic = async (val: createType) => {
    const { email, ...data } = val;
    const userData: CreateUser = {
      ...data,
      userType: appType.toUpperCase() as userType,
      code: "",
      ...(val.referralCode && { referralCode: val.referralCode }),
    };
    try {
      const emailVerify = await verifyEmail.execute(email);
      console.log(emailVerify.message);

      showNotify.success(emailVerify.message);
      setSession("create_user", btoa(JSON.stringify(userData)));
      router.push(navigate.createUser(appType) + "/verify_otp");
    } catch (error: any) {
      showNotify.error(
        error.message || "Failed to verify email. Please try again.",
      );
    }
  };

  const businessLogic = async (val: createType) => {
    console.log(val);
    return router.push(navigate.createUser(appType) + "/profile");
    // try {
    //   const emailVerify = await verifyEmail.execute(val.email);
    //   const { success, message } = emailVerify;

    //   if (!success) {
    //     //notification
    //     console.log(message);
    //     return console.log(error);
    //   }
    //   setSession("create_user", val);
    //   return navigate.createUser(appType) + "/profile_pin";
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleProceed = async (val: createType) => {
    let timeout: any;
    // Logic to handle profile creation can be added here
    if (appType != "CUSTOMER_BUSINESS".toLowerCase()) {
      clearTimeout(timeout);
      timeout = setTimeout(() => personalLogic(val), 300);
      return;
    }
    return businessLogic(val);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Let&#39;s get you started</h1>
        <span className="text-gray-400 text-sm">
          Let&#39;s get you started on your {appType} account journey
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <CustomForm form={form} successFunction={handleProceed}>
          <CustomInput
            control={control}
            name="email"
            label="Email Address"
            type="email"
            error={errors.email?.message as string}
            placeholder="Enter your email address"
            className="border-
            none bg-[#F0F2F5] rounded-md"
          />
          <CustomInput
            control={control}
            name="firstName"
            label="First Name"
            error={errors.firstName?.message as string}
            placeholder="Enter your first name"
            className="border-none bg-[#F0F2F5] rounded-md"
          />
          <CustomInput
            control={control}
            name="lastName"
            label="Last Name"
            error={errors.lastName?.message as string}
            placeholder="Enter your last name"
            className="border-none bg-[#F0F2F5] rounded-md"
          />
          <div>
            <CustomInput
              label="Password"
              type="password"
              name="password"
              control={control}
              placeholder="Enter your password"
              error={errors.password?.message as string}
            />
            <span className="text-xs text-gray-600 block">
              Password must have alphanumeric, number, and at least special
              character.
            </span>
          </div>
          {appType == "CUSTOMER_BUSINESS".toLowerCase() && (
            <CustomInput
              control={control}
              name="dateOfBirth"
              label="Date of Birth"
              type="date"
              error={errors.dateOfBirth?.message as string}
            />
          )}
          <CustomInput
            label="Referral Code"
            name="referralCode"
            control={control}
            placeholder="Enter referral code"
            error={errors.referralCode?.message as string}
          />

          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              onClick={(e: any) => setAccept(e.target["checked"])}
            />
            <span className="text-gray-600">
              By clicking Continue, you agree to our{" "}
              <span className="text-[#E20F00]">terms</span> and{" "}
              <span className="text-[#E20F00]">conditions</span>
            </span>
          </div>

          <Button disabled={!accept} loading={loading} className="w-full mt-5">
            Continue
          </Button>
        </CustomForm>
      </div>
    </>
  );
}

export default CreateProfile;
