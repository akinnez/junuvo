"use client";
import Button from "@/components/Button";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { useSessionStorage } from "@/hooks/use-session-storage";
import { showNotify } from "@/lib/notification";

const accountTypes = [
  {
    name: "Personal Account",
    description:
      "Savings account is a basic type of deposit account that enables you to deposit your money while typically earning a small to modest amount of interest",
    icon: "/images/users.svg",
    value: "personal",
  },
  {
    name: "Corporate Account",
    description:
      "It allows you to deposit and withdraw money as often as you need to, and it provides you with a range of services to help you manage your finances.",
    icon: "/images/briefcase.svg",
    value: "business",
  },
];

export default function Create() {
  const { navigate } = useAppNavigation();
  const router = useRouter();
  const [accountValue, setAccountValue] = useState("");
  const { setSession } = useSessionStorage();

  useEffect(() => {
    setSession("app-step", "1");
  });
  const handleProceed = () => {
    if (accountValue) {
      setSession("app-step", "2");
      router.push(navigate.createUser(accountValue));
    } else {
      showNotify.error("Please select an account type to proceed.");
    }
  };

  return (
    <div className="my-10">
      <div className="max-w-lg mx-auto flex flex-col gap-5 ">
        <div>
          <h1 className="text-3xl font-bold">Select your desired account</h1>
          <span className="text-gray-400 text-sm">
            Select your desired account
          </span>
        </div>
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
              <div className="w-9.5 h-9.5 rounded-full bg-avatar flex justify-center items-center">
                <Image
                  src={account.icon}
                  alt={account.name}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="space-y-1">
                <h2 className="font-bold text-gray-800">{account.name}</h2>
                <p className="text-xs text-gray-400">{account.description}</p>
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
  );
}
