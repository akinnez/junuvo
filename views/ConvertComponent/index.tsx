"use client";
import Input from "@/components/Input";
import Card from "@/components/Card";
import InputDropdown from "@/components/InputDropdown";
import { formattedAmount } from "@/lib/currency-formatter";
import { X, Minus, Equal } from "lucide-react";
import React, { useState } from "react";
import Button from "@/components/Button";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CurrencyType } from "@/types/currencyType";

export default function ConvertComponent() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [amountReceived, setAmountReceived] = useState<string>("NGN");

  return (
    <CardPageLayout
      description="Select your desired account to make transactions"
      title="Choose account to begin"
      isBack={false}
    >
      <CurrencyOption
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        amountReceived={amountReceived}
        setAmountReceived={setAmountReceived}
      />
    </CardPageLayout>
  );
}

export function CurrencyOption({
  selectedCurrency,
  setSelectedCurrency,
  amountReceived,
  setAmountReceived,
}: {
  selectedCurrency: string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
  amountReceived: string;
  setAmountReceived: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="">
      <InputDropdown
        id={1}
        label="Amount to convert"
        bal={true}
        selectOption={selectedCurrency}
        setSelectOption={setSelectedCurrency}
      />
      <Card className="space-y-4 my-5">
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-400">
            Conversion fee
          </span>
          <span className="text-sm font-semibold text-gray-800 flex gap-1 items-center">
            <Minus className="h-4 w-4" />{" "}
            {formattedAmount(selectedCurrency as CurrencyType, 0)}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-400">
            Amount we&#39;ll convert
          </span>
          <span className="text-sm font-semibold text-gray-800 flex gap-1 items-center">
            <Equal className="h-4 w-4" />{" "}
            {formattedAmount(selectedCurrency as CurrencyType, 0)}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-xs font-medium text-gray-400">
            Today&#39;s rate
          </span>
          <span className="text-sm font-semibold text-gray-800 flex gap-1 items-center">
            <X className="h-4 w-4" />{" "}
            {formattedAmount(selectedCurrency as CurrencyType, 0)}
          </span>
        </p>
      </Card>
      <InputDropdown
        id={2}
        bal={false}
        label="Amount you will receive"
        selectOption={amountReceived}
        setSelectOption={setAmountReceived}
      />

      <div className="my-5">
        <Input
          label="Narration"
          placeholder="Enter your details"
          className=""
        />
      </div>
      <Button className="w-full">Continue</Button>
    </div>
  );
}
