"use client";

import Card from "@/components/Card";
import { formattedAmount } from "@/lib/currency-formatter";
import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Deals } from "../page";

export default function HasStock() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div className="text-center bg-white py-3">
          <span className="text-xs text-gray-500">
            Stocks Portfolio Balance
          </span>
          <h2 className="font-bold text-tertiary text-xl">
            {formattedAmount("USD", 12.34)}
          </h2>
          <p className="text-xs text-gray-500">
            Your portfolio lost {formattedAmount("USD", 0)} and is up 0% today
          </p>
        </div>
        <div className="flex justify-between bg-white py-3">
          <div className="w-full flex flex-col items-center justify-center">
            <h2>{formattedAmount("USD", 12.34)}</h2>
            <p className="text-xs text-gray-500">Total invested</p>
          </div>
          <div className="w-[1px] h-10 border-r border-tertiary my-auto"></div>
          <div className="w-full flex flex-col items-center justify-center">
            <h2>{formattedAmount("USD", 12.34)}</h2>
            <p className="text-xs text-gray-500">Total Gain</p>
          </div>
        </div>
      </div>
      <div className="my-10 grid grid-cols-2 gap-10">
        <Card className="!shadow">
          <div className="mb-5">
            <h1 className="font-bold text-lg ">Pending Orders</h1>
            <span className="text-xs text-gray-500">
              These orders will be executed when the market opens. it will be
              executed at the price of the stock at market open, which may
              change from the current price.
            </span>
          </div>
          <div className="space-y-7">
            {stocksPending.map((stock, idx) => {
              const {
                abbr,
                currencyType,
                icon,
                isGainOrLoss,
                label,
                price,
                loss,
              } = stock;
              return (
                <Link
                  key={idx}
                  href={`/${params.appType}bills/stocks/details?abbr=${abbr}`}
                  className="block"
                >
                  <Deals
                    icon={icon}
                    abbr={abbr}
                    currencyType={currencyType as "NGN" | "USD"}
                    isGainOrLoss={isGainOrLoss}
                    label={label}
                    priceLossOrGain={loss as string}
                    price={price}
                  />
                </Link>
              );
            })}
          </div>
        </Card>
        <Card className="!shadow">
          <div className="mb-5">
            <h1 className="font-bold text-lg ">Most Popular</h1>
            <span className="text-xs text-gray-500">
              The most commonly traded stocks in the Junuvo community.
            </span>
          </div>
          <div className="space-y-7">
            {stocks.map((stock, idx) => {
              const {
                abbr,
                currencyType,
                icon,
                isGainOrLoss,
                label,
                price,
                loss,
              } = stock;
              return (
                <Link
                  key={idx}
                  href={`/${params.appType}bills/stocks/details?abbr=${abbr}`}
                  className="block"
                >
                  <Deals
                    key={idx}
                    icon={icon}
                    abbr={abbr}
                    currencyType={currencyType as "NGN" | "USD"}
                    isGainOrLoss={isGainOrLoss}
                    label={label}
                    priceLossOrGain={loss as string}
                    price={price}
                  />
                </Link>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

const stocks = [
  {
    icon: "/images/icons/www.png",
    label: "American Airlines Group Inc",
    abbr: "AAL",
    price: "23.67",
    currencyType: "USD",
    isGainOrLoss: "loss",
    loss: "0.08",
  },
  {
    icon: "/images/icons/chart.svg",
    label: "American Airlines Group Inc",
    abbr: "AAL",
    price: "23.67",
    currencyType: "USD",
    isGainOrLoss: "gain",
    loss: "0.08",
  },
  {
    icon: "/images/icons/smartphone.png",
    label: "American Airlines Group Inc",
    abbr: "AAL",
    price: "23.67",
    currencyType: "USD",
    isGainOrLoss: "loss",
    loss: "0.08",
  },
];
const stocksPending = [
  {
    icon: "/images/icons/www.png",
    label: "American Airlines Group Inc",
    abbr: "AAL",
    price: "23.67",
    currencyType: "USD",
    isGainOrLoss: "loss",
    loss: "0.08",
  },
];
