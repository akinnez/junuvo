"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { airtimeSchema } from "@/schema/airtimeData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface airtime {
  amount: string;
  phone: string;
}

const option: Option[] = [
  {
    icon: "/images/flags/eu.svg",
    label: "MTN",
    value: "mtn",
  },
  {
    icon: "/images/flags/eu.svg",
    label: "Airtel",
    value: "airtel",
  },
  {
    icon: "/images/flags/eu.svg",
    label: "Glo",
    value: "glo",
  },
  {
    icon: "/images/flags/eu.svg",
    label: "9Mobile",
    value: "9mobile",
  },
];

function AirtelDataComponent({ type }: { type: string }) {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const router = useRouter();

  const form = useForm<airtime>({
    resolver: zodResolver(airtimeSchema),
    defaultValues: {
      amount: "",
      phone: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  function onSubmit(values: airtime) {
    const payload = {
      debitAccount: selectedAcc,
      plan: selectedPlan,
      network: selectedNetwork,
      ...values,
    };

    console.log(payload);

    router.push(`/account/bills/summary/internet/${type}`);
  }

  return (
    <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
      <FormSelect
        id="debitAccount"
        form={form}
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
      <FormSelect
        id="network"
        form={form}
        label="Select Network"
        name="network"
        value={selectedNetwork}
        options={option}
        onChange={setSelectedNetwork}
        searchable={false}
      />

      {type == "data" && (
        <FormSelect
          id="plan"
          form={form}
          label="Data Plan"
          name="plan"
          value={selectedPlan}
          options={[]}
          onChange={setSelectedPlan}
          searchable={false}
        />
      )}

      <CustomInput
        id="phone"
        label="Phone Number"
        form={form}
        name="phone"
        placeholder="Enter Phone number"
        error={errors.phone?.message as string}
      />
      <div>
        <CustomInput
          id="amount"
          label="Amount"
          form={form}
          name="amount"
          placeholder="Enter amount"
          error={errors.amount?.message as string}
        />
        <div>{}</div>
      </div>
      <Button className="w-full">Continue</Button>
    </CustomForm>
  );
}
export default AirtelDataComponent;
