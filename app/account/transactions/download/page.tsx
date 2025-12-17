"use client";

import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import PageLayout from "@/components/PageLayout";

import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useModal } from "@/hooks/useModal";
import StatementAccount from "@/modals/transactions/StatementAccount";
import { downloadSchema } from "@/schema/transaction";
import { zodResolver } from "@hookform/resolvers/zod";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const options: Option[] = [
  { label: "PDF", value: "pdf" },
  { label: "CSV", value: "csv" },
];

export default function DownloadTransactions() {
  const [val, setVal] = useState("pdf");
  const [selectedAcc, setSelectedAcc] = useState<string>("");

  const { openModal, closeModal } = useModal();
  const { id } = useParams();

  const handleSelectionChange = (val: string) => {
    setVal(val);
  };

  const form = useForm<DownloadFile>({
    resolver: zodResolver(downloadSchema),
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  const handleOpenSettings = () => {
    openModal({
      size: "sm",
      component: <StatementAccount closeModal={closeModal} />,
    });
  };

  const onSubmit = (value: DownloadFile) => {
    const payload = {
      type: val,
      ...value,
    };

    handleOpenSettings();
  };

  return (
    <PageLayout
      title="Generate Statement"
      description="Review your transaction details"
      showButton={true}
      //   buttonFn={}
      buttonStyle="!bg-[#231F20]"
      buttonLabel={
        <Link href={`/account/transactions/${id}/report`}>
          <div className="text-white flex items-center gap-3">
            <DownloadIcon className="h-4 w-4" />
            Report Transaction
          </div>
        </Link>
      }
    >
      <CardPageLayout
        title="Generate your statement"
        description="Here is the summary of the transaction to be made"
        className="max-w-sm"
      >
        {/* new component */}
        <div className="grid grid-cols-2 mb-5">
          {options.map((option) => (
            <label
              key={option.value}
              onClick={() => handleSelectionChange(option.value)}
              // Tailwind classes for the button appearance
              className={`
              flex-1 flex items-center justify-center py-3 px-2.5 text-xs  cursor-pointer transition-colors duration-200
              ${
                val === option.value
                  ? "bg-blue-50  text-button font-bold" // Selected style
                  : "bg-white text-gray-800 hover:text-button font-semibold " // Unselected style
              }
            `}
            >
              {option.label}
            </label>
          ))}
        </div>
        <CustomForm
          className="space-y-5"
          successFunction={onSubmit}
          form={form}
        >
          <FormSelect
            id="account"
            form={form}
            label="Select Account"
            name="debitAccount"
            value={selectedAcc}
            options={[
              {
                label: "Current",
                value: "current",
              },
              {
                label: "Savings",
                value: "savings",
              },
            ]}
            onChange={setSelectedAcc}
            searchable={false}
          />

          <CustomInput
            id="startDate"
            label="Start Date"
            form={form}
            name="startDate"
            type="date"
            placeholder="DD/MM/YY"
            error={errors.startDate?.message as string}
          />
          <div>
            <CustomInput
              id="endDate"
              label="End Date"
              form={form}
              name="endDate"
              type="date"
              placeholder="DD/MM/YY"
              error={errors.endDate?.message as string}
            />
          </div>
          <Button className="w-full">Generate Statement</Button>
        </CustomForm>
      </CardPageLayout>
    </PageLayout>
  );
}
