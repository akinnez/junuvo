"use client";

import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import { ChevronRight, Copy, Share2 } from "lucide-react";
import Link from "next/link";

export default function ReferAndEarn() {
  return (
    <PageLayout
      title="Referrals"
      description="Invite your friends snd family to enjoy Retrust with your referral code"
      isCardAllow={false}
      isBack={false}
    >
      <div className="grid grid-cols-2 gap-10">
        <Card className="!bg-primary !text-white">
          <div className="text-center mb-7">
            <p className=" font-bold text-white text-2xl">
              Introducing Referral Bonus
            </p>
            <span className="text-[10px] text-gray-100 font-semibold">
              Share your referral code and get funds when whoever you refer
              signs up and receive some funds
            </span>
          </div>
          <div className="flex justify-between text-[10px]">
            <div className="text-center ">
              <span className="text-gray-100">Referral code</span>
              <div className="flex gap-4 text-xs font-semibold font items-center p-2 bg-white rounded-sm text-[#353D48]">
                CQ53HSNX999 <Copy size={16} className="text-[#353D48]" />
              </div>
            </div>
            <div className="text-center">
              <span className="!text-gray-100 font-bold">Referral Link</span>
              <p className="text-gray-100 font-semibold mb-1">
                https://join.junuvo.com/adyayy23288hafdanc
              </p>
              <div className="flex justify-center">
                <div className="flex gap-4 text-xs font-semibold font items-center p-2 bg-white rounded-sm text-[#353D48]">
                  Invite a customer{" "}
                  <Share2 size={16} className="text-[#353D48]" />
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div>
          <p className="text-[10px] text-gray-500 font-semibold">
            REFERRAL CAMPAIGN
          </p>
          <Card className="!py-5 !px-3 my-4 !shadow">
            <h1 className="text-xs font-semibold text-tertiary flex justify-between items-center">
              Business Banking Referrals
              <Link href={"/account/refer/details"}>
                <ChevronRight size={14} />
              </Link>
            </h1>
            <div className="mt-2">
              <span className="text-[10px] text-[#989898] font-semibold">
                Total Earnings
              </span>
              <h5 className="font-bold text-xs text-button">
                {formattedAmount("NGN", 19000)}
              </h5>
            </div>
            <h1 className="text-[10px] font-medium text-gray-500 flex justify-between items-center mt-5">
              Campaign expires in
              <span className="font-extrabold">8 months</span>
            </h1>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
