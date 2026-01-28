"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { formattedAmount } from "@/lib/currency-formatter";
import { airtimeSchema } from "@/schema/airtimeData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface airtime {
  amount: string;
  phone: string;
}
function DataLLabelComponent({
  label,
  amount,
}: {
  label: string;
  amount: string;
}) {
  return (
    <div className="flex justify-between items-center w-full font-medium text-xs">
      <p>{label}</p>
      <p className="bg-[#ECF0FE] py-1 px-3 rounded-full ml-5">
        {formattedAmount("NGN", amount)}
      </p>
    </div>
  );
}
const dataOption: Option[] = [
  {
    label: <DataLLabelComponent label="MTN 100MB - 7 Days" amount="200" />,
    value: "weekly100m",
  },
  {
    label: <DataLLabelComponent label="MTN 200MB - 30 Days" amount="200" />,
    value: "monthly200m",
  },
  {
    label: <DataLLabelComponent label="MTN 500MB - 30 Days" amount="1000" />,
    value: "monthly500m",
  },
  {
    label: <DataLLabelComponent label="MTN 1GB - 7 Days" amount="1500" />,
    value: "weekly1g",
  },
  {
    label: <DataLLabelComponent label="MTN 1GB - 30 Days" amount="1500" />,
    value: "monthly1g",
  },
  {
    label: <DataLLabelComponent label="MTN 2GB - 7 Days" amount="1500" />,
    value: "weekly2g",
  },
];

const option: Option[] = [
  {
    icon: "/images/bills/mtn.png",
    label: "MTN",
    value: "mtn",
  },
  {
    icon: "/images/bills/airtel.png",
    label: "Airtel",
    value: "airtel",
  },
  {
    icon: "/images/bills/glo.png",
    label: "Glo",
    value: "glo",
  },
  {
    icon: "/images/bills/9mobile.png",
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

    router.push(`/${params.appType}bills/summary/internet/${type}`);
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
          options={dataOption}
          onChange={setSelectedPlan}
          searchable={true}
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
