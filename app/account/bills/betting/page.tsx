"use client";
import Button from "@/components/Button";
// import CustomForm from "@/components/CustomForm";
// import CustomInput from "@/components/CustomInput";
// import FormSelect from "@/components/FormSelect";
import Input from "@/components/Input";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";
// import { electricitySchema } from "@/schema/electricity";
// import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// interface electricity {
//   amount: string;
//   meterNo: string;
// }

const option: Option[] = [
  {
    icon: "/images/icons/bet9ja.svg",
    label: "Bet9ja",
    value: "bet9ja",
  },
  {
    icon: "/images/icons/bangbet.svg",
    label: "BangBet",
    value: "bangbet",
  },
  {
    icon: "/images/icons/nairabet.svg",
    label: "NairaBet",
    value: "nairabet",
  },
];

export default function Betting() {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  //   const router = useRouter();

  //   const form = useForm<electricity>({
  //     resolver: zodResolver(electricitySchema),
  //     defaultValues: {
  //       amount: "",
  //       meterNo: "",
  //     },
  //   });

  //   const {
  //     formState: { errors },
  //   } = form;

  //   function onSubmit(values: electricity) {
  //     const payload = {
  //       debitAccount: selectedAcc,
  //       provider: selectedProvider,
  //       ...values,
  //     };

  //     console.log(payload);

  //     router.push(`/account/bills/summary/electricity`);
  //   }

  return (
    // <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
    <PageLayout
      title="Betting"
      description="Enter details to fund your betting account"
      isBack={false}
    >
      <CardPageLayout
        title="Choose type"
        description="Select your desired type to begin"
        className="max-w-sm"
      >
        <div className="space-y-7">
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
              {
                label: "Current",
                value: "current",
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
            options={option}
            onChange={setSelectedProvider}
            searchable={false}
          />

          <Input
            id="userId"
            label="User Id"
            name="userId"
            placeholder="Enter User ID"
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

          <div className=" border-t border-gray-200 w-full"></div>
          <Link href={`/account/bills/summary/betting`}>
            <Button className="w-full">Proceed</Button>
          </Link>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
