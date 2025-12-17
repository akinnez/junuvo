"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import { downloadSchema } from "@/schema/transaction";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const filterOption: Option[] = [
  {
    label: "All",
    value: "",
  },
  {
    label: "Transfer",
    value: "transfer",
  },
  {
    label: "Deposit",
    value: "deposit",
  },
  {
    label: "Airtime",
    value: "airtime",
  },
  {
    label: "Data",
    value: "data",
  },
];

export default function FilterModal({ closeModal }: { closeModal: any }) {
  const [filterType, setFilterType] = useState("");
  const form = useForm<DownloadFile>({
    resolver: zodResolver(downloadSchema),
    defaultValues: {
      startDate: "",
      endDate: "",
    },
  });

  const onSubmit = () => {
    closeModal();
  };

  return (
    <div className="">
      <FilterButtons setFilterType={setFilterType} />

      <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
        <label
          htmlFor="date"
          className="mb-5 text-xs font-semibold text-gray-700"
        >
          Date
        </label>
        <div className="grid grid-cols-2 gap-3">
          <FilterInputs form={form} name="startDate" />
          <FilterInputs form={form} name="endDate" />
        </div>
        <Button className="!text-button !bg-[#ECF2FE] w-full !py-4">
          Apply
        </Button>
      </CustomForm>
    </div>
  );
}

function FilterInputs({ form, name }: { form: any; name: string }) {
  return (
    <div className="flex items-center px-2 rounded-md border border-[#ccc] w-full">
      <label id={name} htmlFor={name} className="text-xs text-gray-400">
        {name.includes("start") ? "From" : "To"}:
      </label>
      <CustomInput
        id={name}
        label=""
        form={form}
        name={name}
        type="date"
        className="!border-none !px-2  !py-2"
      />
    </div>
  );
}

// filter buttons
function FilterButtons({
  setFilterType,
}: {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [val, setVal] = useState("");
  const handleSelectionChange = (val: string) => {
    setFilterType(val);
    setVal(val);
  };
  return (
    <>
      <label
        id="transaction_type"
        htmlFor="transaction_type"
        className="mb-5 text-xs font-semibold text-gray-700"
      >
        Transaction Type
      </label>
      <div className="flex items-center gap-2 my-3">
        {filterOption.map((option) => (
          <label
            key={option.value}
            onClick={() => handleSelectionChange(option.value)}
            // Tailwind classes for the button appearance
            className={`
              flex-1 flex items-center justify-center py-3 border px-4 text-xs rounded-lg cursor-pointer transition-colors duration-200
              ${
                val === option.value
                  ? "bg-blue-50  text-button font-semibold" // Selected style
                  : "bg-white border-gray-400 text-gray-400 hover:text-button font-medium" // Unselected style
              }
            `}
          >
            {option.label}
          </label>
        ))}
      </div>
    </>
  );
}
