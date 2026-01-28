"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { smartSavingSchema } from "@/schema/savings";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SmartSavingComponent({ accountType }: { accountType: string }) {
  const [value, setValue] = useState("");
  const form = useForm<any>({
    resolver: zodResolver(smartSavingSchema),
    defaultValues: {
      savingPlan: "",
      amount: "",
    },
  });
  const {
    formState: { errors },
  } = form;

  return (
    <CustomForm className="space-y-5" successFunction={() => {}} form={form}>
      <CustomInput
        id="savingPlan"
        label="Name of savings plan"
        form={form}
        name="savingPlan"
        placeholder="Enter saving plan"
      />

      <CustomInput
        id="targetDate"
        type="date"
        label="Target Date"
        form={form}
        name="targetDate"
        placeholder="Enter target Date"
      />

      <CustomInput
        id="startDate"
        type="date"
        label="Start Date"
        form={form}
        name="startDate"
        placeholder="Enter start Date"
      />

      <FormSelect
        id="periodicity"
        label="How often do you want to save?"
        form={form}
        name="periodicity"
        value={value}
        searchable={false}
        onChange={setValue}
        options={[
          {
            label: "Daily",
            value: "daily",
          },
          {
            label: "Weekly",
            value: "weekly",
          },
          {
            label: "Monthly",
            value: "monthly",
          },
        ]}
        placeholder="Enter amount"
      />
      <CustomInput
        id="suggestContribution"
        label="Suggested contribution"
        form={form}
        name="suggestContribution"
      />
      <Link
        href={`/${params.appType}savings/create/${accountType}/contribution`}
      >
        <Button className="w-full">Continue</Button>
      </Link>
    </CustomForm>
  );
}
export default SmartSavingComponent;
