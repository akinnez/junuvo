"use client";

import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import { Tv, Tv2, TvMinimal, TvMinimalPlay } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function BusinessReferralDetails() {
  const [activeTab, setActiveTab] = useState("Invitees");

  return (
    <PageLayout
      title="Business Banking Referrals"
      description="Here is the details of your savings"
    >
      <CardPageLayout
        title="Business Banking Referrals"
        description="Here is the details of your profile"
        className="max-w-sm"
      >
        <div className="py-3 px-5 bg-blue-50 text-[10px] flex items-center gap-x-2 rounded-lg mb-5">
          Expires in{" "}
          <span className="text-xs font-bold text-gray-800">8 months</span>
        </div>
        <div className="text-[10px] space-y-3 my-5">
          <h4 className="font-semibold text-gray-500">How to earn</h4>
          <div className="flex justify-between ">
            <p className="text-gray-700">Single Transaction Limit</p>
            <p className="font-bold text-tertiary">
              {formattedAmount("NGN", 0)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Daily Transaction Limit</p>
            <p className="font-bold text-tertiary">
              {formattedAmount("NGN", 0)}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 p-2 bg-white">
          {tabs.map((tab) => (
            <Button
              key={tab}
              size="sm"
              className={` ${
                activeTab === tab
                  ? "!text-button !bg-blue-50 !font-bold  !rounded-sm"
                  : "!text-gray-500 !bg-white !font-semibold"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
        <div>
          {activeTab == "Invitees" && <div className="p-20"></div>}
          {activeTab == "Earnings" && (
            <div className="py-10">
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex justify-center items-center">
                  <Image
                    src={"/images/icons/chart.svg"}
                    alt="icon"
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-tertiary font-semibold">
                    Earnings so far
                  </span>
                  <h5 className="font-bold text-xs text-button">
                    {formattedAmount("NGN", 19000)}
                  </h5>
                </div>
              </div>
              <div className="mt-7">
                <h3 className="font-semibold text-[10px] text-gray-500">
                  CAMPAIGN EARNINGS
                </h3>
                <div className="p-20"></div>
              </div>
            </div>
          )}
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}

const tabs = ["Invitees", "Earnings"];
