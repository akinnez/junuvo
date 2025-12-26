"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";

import AccountOverview from "@/views/Dashboard/AccountOverview";
import Onboarding from "@/views/Dashboard/Onboarding";
import PayBillsSection from "@/views/Dashboard/PayBillsOverview";
import BottomDashboardSection from "@/views/SpendingSection";
import { Folder } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [kyc, setKYC] = useState(false);

  useEffect(() => {
    const getKYC = JSON.parse(
      sessionStorage.getItem("onboarding_kyc") as string
    );
    if (getKYC) {
      setKYC(getKYC as boolean);
    }
  }, []);

  if (!kyc) {
    return (
      <div className="flex justify-center items-center">
        <Card className="max-w-sm">
          <div className="flex justify-center mb-6">
            <div className="flex gap-1 items-center">
              <h1 className="text-sm">Welcome</h1>
              <p className="font-bold">Gabriel</p>
            </div>
          </div>
          <Onboarding />
        </Card>
      </div>
    );
  }
  return (
    <div className="pt-5 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-sm text-gray-600">Good Morning,</p>
          <h2 className="flex items-center gap-3 font-bold text-2xl text-gray-900">
            Gabriel
            <div className="bg-[#CFE9FF] text-button rounded-full py-1 px-2 text-xs font-semibold">
              Tier 1
            </div>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Button>Budget Account</Button>
          <Button
            className="!border !border-button !bg-white !text-button"
            icon={
              <Image
                src={`/images/icons/walletPlus.svg`}
                alt="icon"
                width={20}
                height={20}
              />
            }
          >
            Convert Funds
          </Button>
        </div>
      </div>
      <div className="my-5 grid grid-cols-3">
        <Card className="!shadow !p-5 col-span-2">
          <div className="flex items-center gap-5">
            <Folder size={24} className="fill-[#BEE2FF] text-[#BEE2FF]" />
            <p className="text-sm font-semibold text-gray-600">
              Gabriel Ogunsua | Jununo MFB | 0123456789
            </p>
            <div className="flex gap-5">
              <h3 className="flex items-center gap-2 text-xs font-medium text-gray-900">
                <Image
                  src={`/images/icons/Copy.png`}
                  alt="icon"
                  width={16}
                  height={16}
                />{" "}
                Copy
              </h3>
              <h3 className="flex items-center gap-2 text-xs font-medium text-gray-900">
                <Image
                  src={`/images/icons/Share.png`}
                  alt="icon"
                  width={16}
                  height={16}
                />{" "}
                Share
              </h3>
            </div>
          </div>
        </Card>
        <div className="flex items-center justify-end ">
          <button className="text-button font-medium cursor-pointer text-lg">
            See all accounts
          </button>
        </div>
      </div>
      <AccountOverview />
      <PayBillsSection />
      <BottomDashboardSection />
    </div>
  );
}
