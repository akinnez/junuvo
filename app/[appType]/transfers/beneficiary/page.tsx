"use client";

import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { saveBeneficiarySchema } from "@/schema/saveBeneficiary";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function SavedBeneficiary() {
  const form = useForm<any>({
    resolver: zodResolver(saveBeneficiarySchema),
    defaultValues: {
      bank: "",
      accountNo: "",
      accountName: "",
      beneficiaryAlias: "",
    },
  });
  const {
    formState: { errors },
  } = form;
  return (
    <PageLayout
      title="Save Beneficiary"
      description="Enter recipient’s details"
      isBack={false}
    >
      <CardPageLayout
        title="Add funds as desired"
        description="Select your desired account to make transactions"
      >
        <CustomForm
          className="space-y-5 max-w-md"
          successFunction={() => {}}
          form={form}
        >
          <FormSelect
            id="bank"
            form={form}
            label="Bank Name"
            name="bank"
            placeholder="Select Bank Name"
            options={[]}
            onChange={(e) => console.log(e)}
            error={errors.type?.message as string}
            searchable={false}
          />
          <CustomInput
            id="accountNo"
            label="Account Number"
            form={form}
            name="accountNo"
            placeholder="Enter account number"
          />

          <CustomInput
            id="accountName"
            label="Account Name"
            form={form}
            name="accountName"
            placeholder="Enter account name"
          />
          <CustomInput
            id="beneficiaryAlias"
            label="Beneficiary’s Alias"
            form={form}
            name="beneficiaryAlias"
            placeholder="Enter Beneficiary’s Alias"
          />

          <Button className="w-full">Continue</Button>
        </CustomForm>
      </CardPageLayout>
    </PageLayout>
  );
}
export default SavedBeneficiary;
