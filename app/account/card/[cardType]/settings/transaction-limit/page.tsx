"use client";

import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const LimitSettings = () => {
  const [webLimit, setWebLimit] = useState(200000);
  const maxLimit = 200000;

  const { cardType } = useParams();

  return (
    <PageLayout title={"Set Transaction Limit"} description="">
      <CardPageLayout
        title={"Transaction Limit"}
        description="Update your limit"
        className="max-w-sm"
      >
        <div className="">
          {/* Account Limit Section */}
          <section className="mb-10">
            <h2 className="text-xs font-bold mb-2 text-gray-800">
              Account Limit
            </h2>
            <p className="text-[10px] text-gray-800 mb-2">
              The daily limit for your account tier type for card and in-app
              transactions is {formattedAmount("NGN", 200000)}
            </p>
            <button className="text-button text-[10px] font-semibold hover:underline">
              Upgrade account limit
            </button>
          </section>

          {/* Channel Limit Section */}
          <section className="mb-10">
            <h2 className="text-xs  text-gray-800 font-bold mb-2">
              Channel Limit
            </h2>
            <p className="text-gray-800 text-[10px] mb-6 font-medium">
              Adjust the slider below to set your preferred limit for Junuvo
              card{" "}
              <span className="font-bold text-gray-800">
                5087 37** **** 3456
              </span>
            </p>

            {/* Dashed Divider */}
            <div className="border-t border-dashed border-gray-300 mb-6"></div>

            {/* Slider Component */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-button font-semibold text-[10px]">
                  Web Daily Limit
                </span>
                <span className="text-button font-semibold text-[10px]">
                  {formattedAmount("NGN", webLimit)}
                </span>
              </div>

              <div className="relative pt-1">
                <div className="flex justify-between text-[10px] text-gray-500 mb-2">
                  <span>min</span>
                  <span>max</span>
                </div>

                <input
                  type="range"
                  min="0"
                  max={maxLimit}
                  step="1000"
                  value={webLimit}
                  onChange={(e) => setWebLimit(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#005da3] slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #005da3 0%, #005da3 ${
                      (webLimit / maxLimit) * 100
                    }%, #e5e7eb ${(webLimit / maxLimit) * 100}%, #e5e7eb 100%)`,
                  }}
                />

                <div className="flex justify-between text-sm text-gray-500 mt-2 font-medium">
                  <span>{formattedAmount("NGN", 0)}</span>
                  <span>{formattedAmount("NGN", maxLimit)}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Save Button */}
          <Link
            href={`/account/card/${cardType}/settings/transaction-limit/kyc`}
          >
            <Button className="w-full">Save</Button>
          </Link>

          {/* Custom Styles for the Range Input Thumb */}
          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              height: 24px;
              width: 24px;
              border-radius: 50%;
              background: #ffffff;
              border: 4px solid #005da3;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              cursor: pointer;
            }
            input[type="range"]::-moz-range-thumb {
              height: 24px;
              width: 24px;
              border-radius: 50%;
              background: #ffffff;
              border: 4px solid #005da3;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              cursor: pointer;
            }
          `}</style>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
};

export default LimitSettings;
