"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { recipientSchema } from "@/components/schema/addfund";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

function RecipientDetailsComponent() {
  const [selectedBank, setSelectedBank] = useState<string>("USD");

  const form = useForm<any>({
    resolver: zodResolver(recipientSchema),
    defaultValues: {
      type: "",
      accountCredit: "",
      amount: "",
      narration: "",
    },
  });
  const {
    formState: { errors },
  } = form;

  return (
    <CustomForm className="space-y-5" successFunction={() => {}} form={form}>
      <FormSelect
        id="bank_name"
        form={form}
        label="Bank Name"
        name="bankName"
        value={selectedBank}
        options={[]}
        onChange={setSelectedBank}
        error={errors.type?.message as string}
        searchable={false}
      />
      <CustomInput
        id="accountNumber"
        label="Account Number"
        form={form}
        name="accountNumber"
        placeholder="Enter account number"
      />
      <CustomInput
        id="accountName"
        label="Account Name"
        form={form}
        name="accountName"
        placeholder="Enter account name"
      />
      <div>
        <CustomInput
          id="amount"
          label="Amount"
          form={form}
          name="amount"
          placeholder="Enter amount"
        />
        <div>{}</div>
      </div>
      <CustomInput
        id="narration"
        label="Narration"
        form={form}
        name="narration"
        placeholder="Enter narration"
      />
      <Button className="w-full">Continue</Button>
    </CustomForm>
  );
}
export default RecipientDetailsComponent;
