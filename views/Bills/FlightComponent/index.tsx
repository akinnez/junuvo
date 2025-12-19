"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { flightSchema } from "@/schema/flight";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface iflight {
  departureDate: string;
  returnDate?: string;
}

// const option: Option[] = [
//   {
//     icon: "/images/flags/eu.svg",
//     label: "MTN",
//     value: "mtn",
//   },
//   {
//     icon: "/images/flags/eu.svg",
//     label: "Airtel",
//     value: "airtel",
//   },
//   {
//     icon: "/images/flags/eu.svg",
//     label: "Glo",
//     value: "glo",
//   },
//   {
//     icon: "/images/flags/eu.svg",
//     label: "9Mobile",
//     value: "9mobile",
//   },
// ];

function FlightComponent({ type }: { type: string }) {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  const router = useRouter();
  const form = useForm<iflight>({
    resolver: zodResolver(flightSchema),
    defaultValues: {
      departureDate: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  function onSubmit(values: any) {
    console.log(values);
    router.push(`/account/bills/flight/search`);
  }

  useEffect(() => {
    if (!["one-way", "round"].includes(type)) {
      return router.push(`/account/bills/flight/route?type=one-way`);
    }
  }, [type]);

  return (
    <CustomForm className="space-y-5" successFunction={onSubmit} form={form}>
      <FormSelect
        id="departure"
        form={form}
        label="Departure"
        name="departure"
        value={selectedAcc}
        options={[
          {
            label: "Lagos",
            value: "lagos",
          },
        ]}
        onChange={setSelectedAcc}
        searchable={false}
      />
      <FormSelect
        id="provider"
        form={form}
        label="Destination"
        name="provider"
        value={selectedProvider}
        options={[
          {
            label: "United State of America",
            value: "usa",
          },
          {
            label: "Egypt",
            value: "egypt",
          },
        ]}
        onChange={setSelectedProvider}
        searchable={true}
      />

      <CustomInput
        type="date"
        id="departureDate"
        label="Departure Date"
        form={form}
        name="departureDate"
      />
      {type == "round" && (
        <CustomInput
          type="date"
          id="returnDate"
          label="Return Date"
          form={form}
          name="returnDate"
        />
      )}
      <Button className="w-full">Proceed</Button>
    </CustomForm>
  );
}
export default FlightComponent;
