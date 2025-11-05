"use client";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { addFundSchema } from "@/components/schema/addfund";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";

export default function AddFundComponent() {
  const isPending = false;
  const form = useForm<any>({
    resolver: zodResolver(addFundSchema),
    defaultValues: {
      type: "",
      accountDebit: "",
      accountCredit: "",
      amount: "",
      narration: "",
    },
  });
  const {
    formState: { errors },
  } = form;

  const options = [
    { value: "bankTransfer", label: "Add by Bank Transfer" },
    { value: "conversion", label: "Add by Conversion" },
  ];

  const handleSelectionChange = (value: string) => {
    console.log("Selected option:", value);
    // You would typically use this function to update state in the parent component
  };

  return (
    <CardPageLayout
      title="Add funds as desired"
      description="Select your desired account to make transactions"
      className="max-w-md"
    >
      <CustomForm className="space-y-5" successFunction={() => {}} form={form}>
        {/* <div className="">
          <SelectTypeAddForm
            options={options}
            defaultValue={options[0].value}
            onSelect={handleSelectionChange}
          />
        </div> */}
        <div className="space-y-5">
          <FormSelect
            id="debit-account"
            form={form}
            label="Select Account to debit"
            name="accountDebit"
            options={[]}
            onChange={(e) => console.log(e)}
            error={errors.type?.message as string}
            searchable={false}
          />
          <FormSelect
            id="credit-account"
            form={form}
            label="Select Account to credit"
            name="accountCredit"
            options={[]}
            onChange={(e) => console.log(e)}
            error={errors.type?.message as string}
            searchable={false}
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
        </div>
        <Button className="w-full">Continue</Button>
      </CustomForm>
    </CardPageLayout>
  );
}
