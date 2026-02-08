"use client";

import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { Deals } from "../page";
import Link from "next/link";
import { useAppNavigation } from "@/hooks/use-app-navigation";

export default function NoStock() {
  const {
    navigate: { stocks: stockLink },
    appType,
  } = useAppNavigation();
  return (
    <CardPageLayout
      title="Most Popular"
      description="The most commonly traded stocks in the Junuvo community"
      className="max-w-sm space-y-5"
    >
      {stocks.map((stock, idx) => {
        const { abbr, currencyType, icon, isGainOrLoss, label, price, loss } =
          stock;
        return (
          <Link
            key={idx}
            href={`${stockLink(appType)}/details?abbr=${abbr}`}
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
    </CardPageLayout>
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
