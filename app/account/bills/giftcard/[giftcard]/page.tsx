"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import QuantitySelector from "@/components/QuantitySelector";
import { CustomSelect } from "@/components/Select";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const amountOption: Option[] = [
  { label: "500 Credits", value: "500" },
  { label: "1000 Credits", value: "1000" },
  { label: "1500 Credits", value: "1500" },
];
const accountOption: Option[] = [
  { label: "Savings", value: "savings" },
  { label: "Current", value: "current" },
  { label: "Fixed", value: "fixed" },
];

export default function GiftCardDetails() {
  const [quantity, setQuantity] = useState<number>(0);
  const [amount, setAmount] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const { giftcard } = useParams();

  return (
    <PageLayout
      title={"Card Details"}
      description={"Review your transaction details"}
    >
      <CardPageLayout
        title={`Card details`}
        description={`Here is the summary of the transaction to be made`}
        className="max-w-sm"
      >
        <div className="space-y-5">
          <div className="space-y-5 text-center">
            <p className="font-medium text-sm text-gray-500">You are buying</p>
            <h5 className="text-tertiary font-semibold">{giftcard}</h5>
            <div className={`text-center space-y-4 cursor-pointer`}>
              <Image
                src={`/images/icons/${giftcard}.svg`}
                alt={`${giftcard}`}
                width={156}
                height={100}
                className="shadow rounded-xl mx-auto"
              />
              <span className="text-tertiary">{giftcard}</span>
            </div>
          </div>

          <CustomSelect
            id="amount"
            name="amount"
            label="Amount Type"
            value={amount}
            onChange={setAmount}
            options={amountOption}
          />
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <CustomSelect
            id="account"
            name="account"
            label="Select Account to debit"
            value={account}
            onChange={setAccount}
            options={accountOption}
          />
          <Input
            id="amount"
            name="amount"
            label="Amount"
            placeholder="Enter Amount"
          />

          <Link href={`${giftcard}/recipient`}>
            <Button className="w-full">Proceed</Button>
          </Link>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
