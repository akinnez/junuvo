"use client";
import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { formattedAmount } from "@/lib/currency-formatter";
import { CurrencyType } from "@/types/currencyType";
import SummaryOverview from "@/views/SummaryOverview";
import Link from "next/link";

const data = {
  destination: "Multiple transfer",
  accountNo: "1234567890",
  fees: 5,
  amount: 20000,
  createdAt: "2024-06-15T10:30:00Z",
  currency: "USD",
  recipients: 5,
};

function RecipientSummary() {
  return (
    <PageLayout title="Summary" description="Review your transaction details">
      <SummaryOverview
        amount={data.amount}
        createdAt={data.createdAt}
        destination={data.destination}
        currency={data.currency as CurrencyType}
      >
        <Card className="space-y-5 !px-5 !bg-gray-200 !shadow-none !rounded-sm">
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Type</span>
            <span className="text-sm  font-semibold text-[#232323] flex gap-1 items-center">
              Multiple
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              No. of recipients
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.recipients}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Account Number
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.accountNo}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Fees</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount(data.currency as CurrencyType, data.fees)}
            </span>
          </p>

          <div className="mt-5">
            <Link
              href={""}
              className="!text-button text-center text-xs w-full block font-semibold"
            >
              View recipients
            </Link>
          </div>
        </Card>
      </SummaryOverview>
    </PageLayout>
  );
}

export default RecipientSummary;
