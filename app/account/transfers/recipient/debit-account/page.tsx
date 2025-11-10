"use client";
import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import { formattedAmount } from "@/lib/currency-formatter";

export default function Recipient() {
  const data = {
    currency: "NGN",
    amount: 12000,
    recipientNo: 2,
    fees: 5,
  };
  return (
    <PageLayout
      title="Account to debit"
      description="Review your transaction details"
    >
      <CardPageLayout
        title="Primary account to debit"
        description="Here is the list of recipients"
        className="max-w-md"
      >
        <div className="space-y-4">
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Group</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              New Group
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              No of recipients
            </span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {data.recipientNo}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Amount</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount(data.currency, data.amount)}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-sm font-medium text-gray-600">Fees</span>
            <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
              {formattedAmount(data.currency, data.fees)}
            </span>
          </p>

          <CustomSelect
            id="debit"
            label="Select Account to debit"
            name="account"
            options={[]}
            value=""
            onChange={() => {}}
            searchable={false}
          />
        </div>

        <Button className="w-full mt-5">Proceed</Button>
      </CardPageLayout>
    </PageLayout>
  );
}
