"use client";
import Input from "@/components/Input";

import { CustomSelect } from "@/components/Select";
import { formattedAmount } from "@/lib/currency-formatter";
import { useState } from "react";

const data = {
  currency: "NGN",
  amount: 12000,
  recipientNo: 2,
  fees: 5,
};

export default function DebitAccountComponent({ type }: { type: string }) {
  const [value, setValue] = useState("");
  return (
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
          {formattedAmount("NGN", data.amount)}
        </span>
      </p>
      <p className="flex justify-between">
        <span className="text-sm font-medium text-gray-600">Fees</span>
        <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
          {formattedAmount("NGN", data.fees)}
        </span>
      </p>

      <CustomSelect
        id="debit"
        label="Select Account to debit"
        name="account"
        options={[
          {
            label: "Savings",
            value: "savings",
          },
        ]}
        value={value}
        onChange={setValue}
        searchable={false}
      />
      {type === "saved" && value && (
        <Input label="Amount" placeholder="Enter amount" />
      )}
    </div>
  );
}
