import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import { fixedSavingSchema } from "@/schema/savings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InterestRateCard from "../../InterestRateCard";
import Link from "next/link";

function FixedSavings({ accountType }: { accountType?: string }) {
  const form = useForm<any>({
    resolver: zodResolver(fixedSavingSchema),
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
        id="amount"
        label="How much do you want to fix"
        form={form}
        name="amount"
        placeholder="Enter amount"
      />

      <CustomInput
        id="startDate"
        type="date"
        label="Start Date"
        form={form}
        name="startDate"
        placeholder="Enter Start Date"
      />

      <CustomInput
        id="endDate"
        type="date"
        label="End Date"
        form={form}
        name="endDate"
        placeholder="Enter End Date"
        // error={errors}
      />
      {<InterestRateCard />}

      <Link href={`${accountType}/balance`}>
        <Button className="w-full">Proceed</Button>
      </Link>
    </CustomForm>
  );
}
export default FixedSavings;
