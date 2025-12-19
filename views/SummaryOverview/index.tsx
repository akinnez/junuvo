"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { formattedAmount } from "@/lib/currency-formatter";

export default function SummaryOverview({
  amount,
  createdAt,
  destination,
  currency = "NGN",
  children,
  className,
  handleSubmit,
}: {
  amount?: string | number;
  createdAt?: string;
  destination?: string;
  currency?: string;
  className?: string;
  children: React.ReactNode;
  handleSubmit?: () => void;
}) {
  return (
    <CardPageLayout
      title="Transaction Summary"
      description="Here is the summary of the transaction to be made"
      className="max-w-sm"
    >
      <div className="text-center space-y-3 mb-5">
        <p className="text-xs text-gray-600 font-medium">You are sending</p>
        <span className="block font-semibold text-[#232323]">
          {destination}
        </span>
        <span className="text-xs block text-gray-600 font-medium">
          {createdAt}
        </span>
        <span className="block text-4xl font-bold text-[#232323]">
          {formattedAmount(currency, amount as string)}
        </span>
      </div>
      <Card
        className={`space-y-10 my-5 !shadow-none border-y border-x-0 rounded-none ${className}`}
      >
        {children}
      </Card>
      <Button className="w-full" onClick={handleSubmit}>
        Proceed
      </Button>
    </CardPageLayout>
  );
}
