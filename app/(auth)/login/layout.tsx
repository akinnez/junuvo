import { authRoutes } from "@/config/routes";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login - MyJunuvo",
  description: "Login to your account",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { createUser } = authRoutes;
  return (
    <div className="bg-primary flex items-center justify-center py-10 px-5">
      <div className="max-w-[514px] w-full">
        <Image
          src={"/images/logo.svg"}
          alt="Auth Background"
          width={200}
          height={55}
          priority
          className="mb-10 mx-auto"
        />
        {children}

        <div className="mt-6 text-center bg-white/30 p-5 rounded-full text-sm text-white/90 max-w-[265px] w-full mx-auto">
          Don’t have an account?{" "}
          <Link href={createUser} className="!text-[#00ADEF]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
