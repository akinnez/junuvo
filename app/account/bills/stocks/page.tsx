"use client";

import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import SearchStock from "@/modals/bills/stocks/SearchStock";
import { ArrowDown, ArrowUp, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function StockExchange() {
  const { closeModal, openModal } = useModal();
  const handleOpenSearchStock = () => {
    openModal({
      title: "Search Stocks",
      size: "md",
      component: <SearchStock closeModal={closeModal} />,
    });
  };

  return (
    <PageLayout
      title="Stocks"
      description="What card would you like to buy?"
      isBack={false}
      showButton={true}
      buttonLabel="Search Stocks"
      buttonFn={handleOpenSearchStock}
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

export function Deals({
  icon,
  label,
  currencyType,
  abbr,
  isGainOrLoss,
  priceLossOrGain: loss,
  price,
}: {
  label: string;
  icon: string;
  currencyType: "NGN" | "USD";
  abbr: string;
  price: string;
  isGainOrLoss: string;
  priceLossOrGain: string;
}) {
  return (
    <div className="flex justify-between items-center p-2 shadow">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full shadow">
          <Image src={icon} alt={label} width={24} height={24} />
        </div>
        <div className="">
          <h3 className="text-gray-800 text-xs font-medium">{label}</h3>
          <span className="text-gray-400 text-[10px]">{abbr}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <h3 className="text-xs  text-tertiary font-semibold">
            {formattedAmount(currencyType, price)}
          </h3>
          <span
            className={`flex gap-1 items-center text-[8px] font-semibold ${
              isGainOrLoss == "gain" ? "text-success" : "text-error"
            }`}
          >
            {isGainOrLoss == "gain" ? (
              <ArrowUp size={10} />
            ) : (
              <ArrowDown size={10} />
            )}
            {loss}
          </span>
        </div>
        <ChevronRight size={16} />
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
