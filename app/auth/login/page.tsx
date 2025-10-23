"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Router } from "next/router"
import { routes } from "@/routes";
import { loginSchema } from "@/components/schema";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import Button from "@/components/Button";

type loginType = {
  email: string;
  password: string;
};

function Login() {
  // const navigate = Router;
  const isPending = false;
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

  // const { mutate, isPending } = useMutation({
  //   mutationFn: signin,
  // });

  // const login = async (val: any) => {
  //   const { responseHandler } = await import("@/lib/helper");

  //   mutate(val, {
  //     onError(error) {
  //       return responseHandler(error);
  //     },
  //     onSuccess(data) {
  //       const defaultRoute = determineDefaultRoute(
  //         sideMenuLinks,
  //         data?.permission,
  //       );
  //       data?.permission?.length != 0 && responseHandler(data);
  //       navigate(defaultRoute);
  //     },
  //   });
  // };

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
          <CustomForm form={form} successFunction={() => {}}>
            <CustomInput
              form={form}
              name="email"
              label="Email Address"
              type="email"
              error={errors.email?.message as string}
              placeholder="Enter your email address"
            />
            <CustomInput
              form={form}
              label="Password"
              name="password"
              type="password"
              error={errors.password?.message as string}
              placeholder="Enter your password"
            />
            <div className="flex justify-end my-5">
              <a
                href={routes.forgotPassword}
                className="text-sm text-gray-900 font-semibold"
              >
                Forgot Password?
              </a>
            </div>
            <div>
              <Button
                className="w-full "
                disabled={isPending}
                variant={"primary"}
                loading={isPending}
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
