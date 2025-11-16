import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import { smartSavingSchema } from "@/schema/savings";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function SmartSavingComponent() {
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

      <CustomInput
        id="periodicity"
        label="How often do you want to save?"
        form={form}
        name="periodicity"
        placeholder="Enter amount"
      />
      <CustomInput
        id="suggestContribution"
        label="Suggested contribution"
        form={form}
        name="suggestContribution"
      />

      <Button className="w-full">Continue</Button>
    </CustomForm>
  );
}
export default SmartSavingComponent;
