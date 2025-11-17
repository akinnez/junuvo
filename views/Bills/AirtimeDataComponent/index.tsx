"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { airtimeSchema, dataSchema } from "@/schema/airtimeData";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface airtime {
  type: string;
  debitAccount: string;
  network: string;
  amount: string;
  phone: string;
}

interface data extends airtime {
  plan: string;
}

function AirtelDataComponent() {
  const { type } = useParams();
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedNetwork, setSelectedNetwork] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const defaultAirtimeValues:airtime = {
    type:'',
    amount: '',
    debitAccount: '',
    network: '',
    phone:''
  }

  const defaultDataValues:data = {
    type:'',
    amount: '',
    plan:'',
    debitAccount: '',
    network: '',
    phone:''
  }

  const form = useForm<data | airtime >({
    resolver: zodResolver(type == "airtime" ? airtimeSchema : dataSchema),
    defaultValues: type == "airtime" ? defaultAirtimeValues : defaultDataValues
  });

  const {
    formState: { errors },
  } = form;

  return (
    <CustomForm className="space-y-5" successFunction={() => {}} form={form}>
      <FormSelect
        id="debitAccount"
        form={form}
        label="Select Account to debit"
        name="debitAccount"
        value={selectedAcc}
        options={[]}
        onChange={setSelectedAcc}
        error={errors.debitAccount?.message as string}
        searchable={false}
      />
      <FormSelect
        id="network"
        form={form}
        label="Select Network"
        name="network"
        value={selectedNetwork}
        options={[]}
        onChange={setSelectedNetwork}
        error={errors.network?.message as string}
        searchable={false}
      />

      {
        type == 'data' && 
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
      }
      
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
