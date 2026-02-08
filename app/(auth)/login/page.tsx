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
import { useSignal } from "nabd";
import { showNotify } from "@/lib/notification";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { user } from "@/stores/userStore";

type loginType = {
  email: string;
  password: string;
};

function Login() {
  const { forgotPassword } = authRoutes;

  const loading = useSignal(loginUser.isPending);

  const { setLocalStorage } = useLocalStorage();
  const {
    navigate: { dashboard },
  } = useAppNavigation();

  const router = useRouter();
  const form = useForm<loginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    control,
    formState: { errors },
  } = form;

  const login = async (val: loginType) => {
    const payload = { ...val };
    try {
      const userData = await loginUser.execute(payload);
      const { data, message } = userData;
      showNotify.success(message);
      const {
        accessToken,
        meta: { userType, isWalletCreated },
      } = data;

      setLocalStorage("token", accessToken);
      setLocalStorage("isWalletCreated", isWalletCreated);
      return router.push(dashboard(userType.toLowerCase() as userType));
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
              control={control}
              name="email"
              label="Email Address"
              type="email"
              error={errors.email?.message as string}
              placeholder="Enter your email address"
              className="border-none bg-[#F0F2F5] rounded-md"
            />
            <CustomInput
              control={control}
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
