"use client";
import Button from "@/components/Button";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import FormSelect from "@/components/FormSelect";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { flightSchema } from "@/schema/flight";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface iflight {
  departureDate: string;
  returnDate?: string;
}

function FlightComponent() {
  const [selectedAcc, setSelectedAcc] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("");

  const searchParams = useSearchParams();
  const params = searchParams.get("type");

  const { appType } = useAppNavigation();

  useEffect(() => {
    params && sessionStorage.setItem("bill_type", params);
  }, [params]);

  const router = useRouter();
  const form = useForm<iflight>({
    resolver: zodResolver(flightSchema),
    defaultValues: {
      departureDate: "",
    },
  });

  const {
    control,
    formState: { errors },
  } = form;

  function onSubmit(values: any) {
    console.log(values);
    router.push(`/${appType}/bills/flight/search`);
  }

  useEffect(() => {
    if (!["one-way", "round"].includes(params as string)) {
      return router.push(`/${appType}/bills/flight/route?type=one-way`);
    }
  }, [params]);

  return (
    <CustomForm className="space-y-7" successFunction={onSubmit} form={form}>
      <FormSelect
        id="departure"
        control={control}
        label="Departure"
        name="departure"
        options={[
          {
            label: "Lagos",
            value: "lagos",
          },
        ]}
        searchable={false}
      />
      <FormSelect
        id="provider"
        control={control}
        label="Destination"
        name="provider"
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
        searchable={true}
      />

      <CustomInput
        type="date"
        id="departureDate"
        label="Departure Date"
        control={control}
        name="departureDate"
      />
      {params == "round" && (
        <CustomInput
          type="date"
          id="returnDate"
          label="Return Date"
          control={control}
          name="returnDate"
        />
      )}
      <Button className="w-full">Proceed</Button>
    </CustomForm>
  );
}
export default FlightComponent;
