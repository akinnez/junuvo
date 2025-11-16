"use client";
import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const accountTypes = [
  {
    name: "Fixed Savings",
    description:
      "Fixed savings is an effective way to manage liquidity. By committing a lump sum for a specified period, you receive your interest.",
    icon: "/images/users.svg",
    value: "fixed",
  },
  {
    name: "Smart Savings",
    description:
      "Smart Savings is designed to help you get asides funds for emergencies, save towards a specific goal or simply build a financial credit score.",
    icon: "/images/briefcase.svg",
    value: "smart",
  },
  {
    name: "Set Goals",
    description:
      "Set Goals is a disciplined savings plan that encourages the development of a saving habit.",
    icon: "/images/briefcase.svg",
    value: "set-goals",
  },
];

function CreateSavings() {
  const [accountValue, setAccountValue] = useState("");

  const router = useRouter();
  const handleProceed = () => {
    if (accountValue) {
      router.push(`/account/savings/create/${accountValue}`);
    } else {
      alert("Please select an account type to proceed.");
    }
  };
  return (
    <PageLayout
      title="Create Savings plan"
      description="Please provide the required informaton"
    >
      <CardPageLayout
        title="Start with desired plan"
        description="Select your desired account to make transactions"
        className="max-w-md"
      >
        <div className="my-10">
          <div className="max-w-lg mx-auto flex flex-col gap-5 ">
            <div className="flex flex-col gap-4">
              {accountTypes.map((account) => (
                <div
                  key={account.value}
                  className={`shadow rounded-lg py-6 px-5 flex flex-col items-start gap-4 hover:bg-[#E1EDFF] hover:border hover:border-[#7EB0FF] cursor-pointer
                ${
                  accountValue == account.value &&
                  "bg-[#E1EDFF] border border-[#7EB0FF]"
                }
                `}
                  onClick={() => setAccountValue(account.value)}
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="w-9.5 h-9.5 rounded-full bg-avatar flex justify-center items-center">
                      <Image
                        src={account.icon}
                        alt={account.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <div className="p-1 rounded-full bg-[#E3EFFC] text-[#28238A] flex justify-center items-center text-[10px] font-medium">
                      9% Interest
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h2 className="font-bold text-gray-800">{account.name}</h2>
                    <p className="text-xs text-gray-400">
                      {account.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              disabled={!accountValue}
              className="w-full mt-5"
              onClick={handleProceed}
            >
              Proceed
            </Button>
          </div>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
export default CreateSavings;
