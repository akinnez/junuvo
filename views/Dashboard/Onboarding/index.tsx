"use client";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

function Onboarding({ accountType }: { accountType: string }) {
  return (
    <div>
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
      <Link href={`/${accountType}/onboarding/addBVN`}>
        <Button className="w-full mt-4">Complete your KYC</Button>
      </Link>
    </div>
  );
}

export default Onboarding;
