"use client";

import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useSearchParams } from "next/navigation";
import { Deals } from "../page";
import { Suspense } from "react";

export default function StockExchangeSearch() {
  return (
    <Suspense>
      <StockExchange />
    </Suspense>
  );
}
function StockExchange() {
  const search = useSearchParams();
  const result = search.get("type") ?? "";

  return (
    <PageLayout
      title={<span className="capitalize">{result}</span>}
      description="Companies powering your next trip"
    >
      <CardPageLayout
        title="Most Popular"
        description="The most commonly traded stocks in the Junuvo community"
        className="max-w-sm space-y-5"
      >
        {stocks.map((stock, idx) => {
          const { abbr, currencyType, icon, isGainOrLoss, label, price, loss } =
            stock;
          return (
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
          );
        })}
      </CardPageLayout>
    </PageLayout>
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
