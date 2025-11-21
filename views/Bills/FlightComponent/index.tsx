"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { electricitySchema } from "@/schema/electricity";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface electricity {
  amount: string;
  meterNo: string;
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

function FlightComponent({ type }: { type: string }) {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  const router = useRouter();
  7;
  const form = useForm<electricity>({
    resolver: zodResolver(electricitySchema),
    defaultValues: {
      amount: "",
      meterNo: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  function onSubmit(values: electricity) {
    const payload = {
      debitAccount: selectedAcc,
      provider: selectedProvider,
      ...values,
    };

    console.log(payload);

    router.push(`/account/bills/flight/search`);
  }

  if (!["one-way", "round"].includes(type)) {
    return router.push(`/account/bills/flight/round?type=one-way`);
  }

  return (
    <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
      <FormSelect
        id="debitAccount"
        form={form}
        label="Departure"
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
        id="provider"
        form={form}
        label="Destination"
        name="provider"
        value={selectedProvider}
        options={option}
        onChange={setSelectedProvider}
        searchable={false}
      />

      <CustomInput
        type="date"
        id="meterNo"
        label="Departure Date"
        form={form}
        name="meterNo"
      />
      {type == "round" && (
        <CustomInput
          type="date"
          id="meterName"
          label="Return Date"
          form={form}
          name="amount"
          placeholder="Enter Meter Name"
        />
      )}
      <Button className="w-full">Proceed</Button>
    </CustomForm>
  );
}
export default FlightComponent;
