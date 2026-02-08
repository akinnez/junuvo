"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { user } from "@/stores/userStore";
import { effect, useSignal } from "nabd";
import Image from "next/image";
import Link from "next/link";

function Onboarding() {
  const {
    appType,
    navigate: { verifyPhone },
  } = useAppNavigation();

  const { firstName } = useSignal<User>(user);
  return (
    <div>
      <div className="flex justify-center items-center py-10">
        <Card className="max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 items-center">
              <h1 className="text-sm">Welcome</h1>
              <p className="font-bold capitalize">{firstName}</p>
            </div>
          </div>
          <Image
            src="/images/access_control.png"
            alt="onboarding"
            width={250}
            height={250}
            className="mx-auto"
          />
          <h1 className="text-[22px] font-bold text-center mb-2 px-10">
            Welcome to the future of banking
          </h1>
          <p className="text-center text-gray-500 text-xs">
            Let&#39;s get you started by completing your KYC
          </p>

          <Link href={verifyPhone(appType)}>
            <Button className="w-full mt-4">Complete your KYC</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Onboarding;
