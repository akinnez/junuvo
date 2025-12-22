import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

function Onboarding() {
  return (
    <div>
      <Image
        src="/images/access_control.png"
        alt="onboarding"
        width={250}
        height={250}
        className="mx-auto mb-6"
      />
      <h1 className="text-2xl font-bold text-center mb-4 px-10">
        Welcome to the future of banking
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Let&#39;s get you started by completing your KYC
      </p>
      <Link href={"/account/onboarding/addBVN"}>
        <Button className="w-full mt-6">Complete your KYC</Button>
      </Link>
    </div>
  );
}

export default Onboarding;
