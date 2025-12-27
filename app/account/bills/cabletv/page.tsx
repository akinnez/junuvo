"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
import Link from "next/link";
import { useState } from "react";

export default function CableTv() {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  return (
    <PageLayout
      title="Buy TV Subscription"
      description="Power up your house seamlessly"
      isBack={false}
    >
      <CardPageLayout
        title="Choose type"
        description="Select your desired type to begin"
        className="max-w-sm space-y-5"
      >
        <>
          <CustomSelect
            id="debitAccount"
            label="Select Account to debit"
            name="debitAccount"
            value={selectedAcc}
            options={[
              {
                label: "Savings",
                value: "savings",
              },
            ]}
            onChange={setSelectedAcc}
            searchable={false}
          />
          <CustomSelect
            id="provider"
            label="Select Provider"
            name="provider"
            value={selectedProvider}
            options={optionAccount}
            onChange={setSelectedProvider}
            searchable
          />
          <CustomSelect
            id="package"
            label="Select Package"
            name="package"
            value={selectedPackage}
            options={optionPackage}
            onChange={setSelectedPackage}
            searchable
          />

          <div>
            <Input
              id="amount"
              label="Amount"
              name="amount"
              placeholder="Enter amount"
            />
            <div className="flex justify-end text-button font-medium text-xs">
              Avail Bal: N220.00
            </div>
          </div>
          <Link href={`/account/bills/summary/cabletv`}>
            <Button className="w-full">Continue</Button>
          </Link>
        </>
      </CardPageLayout>
    </PageLayout>
  );
}

const optionAccount = [
  { label: "GOTV", value: "gotv", icon: "/images/icons/gotv.png" },
  { label: "DSTV", value: "dstv", icon: "/images/icons/dstv.png" },
  {
    label: "STARTIMES",
    value: "startimes",
    icon: "/images/icons/startime.png",
  },
];

const optionPackage: Option[] = [
  {
    label: <LabelTag label="BASIC" price={2000} />,
    value: "2000",
  },
  {
    label: <LabelTag label="COMPACT" price={2000} />,
    value: "1000",
  },
];

function LabelTag({ label, price }: { label: string; price: string | number }) {
  return (
    <div className="w-full min-w-[320px] flex justify-between items-center text-xs font-medium">
      {label}
      <div className="py-1 px-3 rounded-full bg-[#ECF0FE] text-button font-semibold">
        {price}
      </div>
    </div>
  );
}
