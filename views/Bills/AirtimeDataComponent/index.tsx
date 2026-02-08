"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { formattedAmount } from "@/lib/currency-formatter";
import { airtimeSchema } from "@/schema/airtimeData";
import {
  airtimeProvider,
  dataBundle,
  dataProvider,
} from "@/stores/Bills/airtimeDataStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignal } from "nabd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

type AirtimeOption = {
  billerProviderSlug: string;
  billerProductSlug: string;
  billerProductName: string;
  icon: string;
};
interface airtime {
  amount: string;
  phone: string;
  network: string;
  plan?: string;
}

function AirtelDataComponent({ type }: { type: string }) {
  const [selectedPlans, setSelectedPlans] = useState([]);

  const providersDetails = useSignal(
    type == "airtime" ? airtimeProvider : dataProvider,
  );

  const form = useForm<airtime>({
    resolver: zodResolver(airtimeSchema),
    defaultValues: {
      amount: "",
      phone: "",
      network: "",
      ...(type == "data" && { plan: "" }),
    },
  });

  const {
    control,
    formState: { errors },
  } = form;

  const networkWatch = useWatch({
    control,
    name: "network",
  });

  useEffect(() => {
    if (!networkWatch) {
      setSelectedPlans([]);
      return;
    }
    form.setValue("plan", "");

    try {
      const dataplans: any = dataBundle(networkWatch);
      const plans: Option[] = dataplans?.map((plan: any) => ({
        label: plan.name,
        value: plan.value,
        icon: plan.icon,
      }));
      setSelectedPlans(plans as any);
    } catch (error) {
      console.log(error);
    }
  }, [networkWatch, form]);

  const providersOptions: Option[] = providersDetails?.map(
    (provider: AirtimeOption) => ({
      label: provider.billerProductName,
      value: provider.billerProductSlug,
      icon: provider.icon,
    }),
  );

  const router = useRouter();

  function onSubmit(values: airtime) {
    console.log(values);
  }

  return (
    <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
      <FormSelect
        id="debitAccount"
        control={control}
        label="Select Account to debit"
        name="debitAccount"
        options={[
          {
            label: "Savings",
            value: "savings",
          },
        ]}
        searchable={false}
      />
      <FormSelect
        id="network"
        control={control}
        label="Select Network"
        name="network"
        options={providersOptions}
        searchable={true}
      />

      {type == "data" && (
        <FormSelect
          id="plan"
          control={control}
          label="Data Plan"
          name="plan"
          options={selectedPlans}
          searchable={true}
        />
      )}

      <CustomInput
        id="phone"
        label="Phone Number"
        control={control}
        name="phone"
        placeholder="Enter Phone number"
        error={errors.phone?.message as string}
      />
      <div>
        <CustomInput
          id="amount"
          label="Amount"
          control={control}
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
