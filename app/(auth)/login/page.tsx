"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { loginSchema } from "@/schema/auth";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";
import { authRoutes } from "@/config/routes";
import { loginUser } from "@/stores/authStore";
import Link from "next/link";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { effect, useSignal } from "nabd";
import { showNotify } from "@/lib/notification";

type loginType = {
  email: string;
  password: string;
};

function Login() {
  const { forgotPassword } = authRoutes;
  const navigate = useRouter();

  const loading = useSignal(loginUser.isPending);
  const errordata = useSignal(loginUser.error);

  const { appType } = useAppNavigation();

  const router = useRouter();
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    formState: { errors },
  } = form;

  effect(() => {
    console.log(loading);
  });

  const login = async (val: loginType) => {
    const payload = { ...val };
    try {
      const userToken = await loginUser.execute(payload);
      const { data, message } = userToken;
      console.log(data);
    } catch (error: any) {
      showNotify.error(error.message || "An error occurred during login.");
    }
  };

  return (
    <>
      <div className="mx-auto p-8 border border-gray-300 rounded-2xl shadow-lg bg-secondary">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1B1818]">Welcome</h1>
          <span className="leading-6 text-gray-500">
            Fill in your details to login
          </span>
        </div>
        <div className="mt-5">
          <CustomForm form={form} successFunction={login}>
            <CustomInput
              form={form}
              name="email"
              label="Email Address"
              type="email"
              error={errors.email?.message as string}
              placeholder="Enter your email address"
              className="border-none bg-[#F0F2F5] rounded-md"
            />
            <CustomInput
              form={form}
              label="Password"
              name="password"
              type="password"
              error={errors.password?.message as string}
              placeholder="Enter your password"
              className="border-none bg-[#F0F2F5] rounded-md"
            />
            <div className="flex justify-end my-5">
              <Link
                href={forgotPassword}
                className="text-sm text-gray-900 font-semibold"
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <Button
                className="w-full "
                disabled={loading}
                variant={"primary"}
                loading={loading}
              >
                Login
              </Button>
            </div>
          </CustomForm>
        </div>
      </div>
    </>
  );
}

export default Login;
