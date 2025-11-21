"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import FormSelect from "@/components/FormSelect";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
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

function SearchFlightComponent() {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  const router = useRouter();

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

    router.push(`/account/bills/summary/electricity`);
  }

  return (
    <PageLayout
      title="Book a Flight"
      description="Enter details to book flights"
    >
      <CardPageLayout
        title="Indicate Passenger count"
        description="Select your desired type to begin"
        className="max-w-md"
      >
        <CustomForm
          className="space-y-5"
          successFunction={onSubmit}
          form={form}
        >
          <FormSelect
            id="debitAccount"
            form={form}
            label="Adults"
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
            label="Children"
            name="provider"
            value={selectedProvider}
            options={option}
            onChange={setSelectedProvider}
            searchable={false}
          />
          <FormSelect
            id="provider"
            form={form}
            label="Infants"
            name="provider"
            value={selectedProvider}
            options={option}
            onChange={setSelectedProvider}
            searchable={false}
          />
          <FormSelect
            id="provider"
            form={form}
            label="Class Type"
            name="provider"
            value={selectedProvider}
            options={option}
            onChange={setSelectedProvider}
            searchable={false}
          />
          <Button className="w-full">Proceed</Button>
        </CustomForm>
      </CardPageLayout>
    </PageLayout>
  );
}
export default SearchFlightComponent;
