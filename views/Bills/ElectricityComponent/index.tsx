// "use client";
// import Button from "@/components/Button";
// import CustomForm from "@/components/CustomForm";
// import CustomInput from "@/components/CustomInput";
// import FormSelect from "@/components/FormSelect";
// import { electricitySchema } from "@/schema/electricity";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// interface electricity {
//   amount: string;
//   meterNo: string;
// }

// const option: Option[] = [
//   {
//     icon: "/images/IBDEC.jpeg",
//     label: "IBEDC",
//     value: "ibedc",
//   },
// ];

// function ElectricityComponent({ type }: { type: string }) {
//   const [selectedAcc, setSelectedAcc] = useState<string>("");
//   const [selectedProvider, setSelectedProvider] = useState<string>("");

//   const router = useRouter();

//   const form = useForm<electricity>({
//     resolver: zodResolver(electricitySchema),
//     defaultValues: {
//       amount: "",
//       meterNo: "",
//     },
//   });

//   const {
//     formState: { errors },
//   } = form;

//   useEffect(() => {
//     sessionStorage.setItem("bill_type", type);
//   }, [type]);

//   function onSubmit(values: electricity) {
//     const payload = {
//       debitAccount: selectedAcc,
//       provider: selectedProvider,
//       ...values,
//     };

//     console.log(payload);

//     router.push(`/${params.appType}bills/summary/electricity`);
//   }

//   return (
//     <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
//       <FormSelect
//         id="debitAccount"
//         form={form}
//         label="Select Account to debit"
//         name="debitAccount"
//         value={selectedAcc}
//         options={[
//           {
//             label: "Savings",
//             value: "savings",
//           },
//         ]}
//         onChange={setSelectedAcc}
//         searchable={false}
//       />
//       <FormSelect
//         id="provider"
//         form={form}
//         label="Select Provider"
//         name="provider"
//         value={selectedProvider}
//         options={option}
//         onChange={setSelectedProvider}
//         searchable={false}
//       />

//       <CustomInput
//         id="meterNo"
//         label="Meter Number"
//         form={form}
//         name="meterNo"
//         placeholder="Enter Meter Number"
//         error={errors.meterNo?.message as string}
//       />
//       {type == "postpaid" && (
//         <CustomInput
//           id="meterName"
//           label="Meter Name"
//           form={form}
//           name="meterName"
//           placeholder="Enter Meter Name"
//         />
//       )}
//       <div>
//         <CustomInput
//           id="amount"
//           label="Amount"
//           form={form}
//           name="amount"
//           placeholder="Enter amount"
//           error={errors.amount?.message as string}
//         />
//         <div>{}</div>
//       </div>
//       <Button className="w-full">Continue</Button>
//     </CustomForm>
//   );
// }
// export default ElectricityComponent;

"use client";
import Button from "@/components/Button";

import Input from "@/components/Input";
import { CustomSelect } from "@/components/Select";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// interface electricity {
//   amount: string;
//   meterNo: string;
// }

const option: Option[] = [
  {
    icon: "/images/IBDEC.jpeg",
    label: "IBEDC",
    value: "ibedc",
  },
];

export default function ElectricityComponent({ type }: { type: string }) {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  const router = useRouter();

  //   const form = useForm<electricity>({
  //     resolver: zodResolver(electricitySchema),
  //     defaultValues: {
  //       amount: "",
  //       meterNo: "",
  //     },
  //   });

  //   const {
  //     formState: { errors },
  //   } = form;

  //   function onSubmit(values: electricity) {
  //     const payload = {
  //       debitAccount: selectedAcc,
  //       provider: selectedProvider,
  //       ...values,
  //     };

  //     console.log(payload);

  //     router.push(`/${params.appType}bills/summary/electricity`);
  //   }

  return (
    // <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
    <>
      <CustomSelect
        id="debitAccount"
        label="Select Account to debit"
        name="debitAccount"
        value={selectedAcc}
        options={[
          {
            label: "Savings",
            value: "savings",
          },
        ]}
        onChange={setSelectedAcc}
        searchable={false}
      />
      <CustomSelect
        id="provider"
        label="Select Provider"
        name="provider"
        value={selectedProvider}
        options={option}
        onChange={setSelectedProvider}
        searchable={false}
      />

      <Input
        id="meterNo"
        label="Meter Number"
        name="meterNo"
        placeholder="Enter Meter Number"
      />
      {type == "postpaid" && (
        <Input
          id="meterName"
          label="Meter Name"
          name="meterName"
          placeholder="Enter Meter Name"
        />
      )}
      <div>
        <Input
          id="amount"
          label="Amount"
          name="amount"
          placeholder="Enter amount"
        />
        <div className="flex justify-end text-button font-medium text-xs">
          Avail Bal: N220.00
        </div>
      </div>
      <Link href={`/${params.appType}bills/summary/electricity`}>
        <Button className="w-full">Continue</Button>
      </Link>
    </>
  );
}
