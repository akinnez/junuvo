"use client";
import Button from "@/components/Button";
// import CustomForm from "@/components/CustomForm";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { CustomSelect } from "@/components/Select";

// import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";

const option: Option[] = [
  {
    label: "None",
    value: "0",
  },
  {
    label: "One",
    value: "1",
  },
  {
    label: "Two",
    value: "2",
  },
  {
    label: "Three",
    value: "3",
  },
  {
    label: "Four",
    value: "4",
  },
];

function SearchFlightComponent() {
  const [selectedAdult, setSelectedAdult] = useState<string>("");
  const [selectedChildren, setSelectedChildren] = useState<string>("");
  const [selectedInfants, setSelectedInfants] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");

  const router = useRouter();

  // const form = useForm<electricity>({
  //   resolver: zodResolver(electricitySchema),
  //   defaultValues: {
  //     class: "firstClass",
  //   },
  // });

  // const {
  //   formState: { errors },
  // } = form;

  function onSubmit() {
    const totalPassanger =
      Number(selectedAdult) +
      Number(selectedChildren) +
      Number(selectedInfants);
    sessionStorage.setItem("flightAppN", String(totalPassanger));

    // const payload = {
    //   debitAccount: selectedAcc,
    //   provider: selectedProvider,
    //   ...values,
    // };

    // console.log(payload);

    router.push(`/${params.appType}bills/flight/tickets`);
  }

  return (
    <PageLayout
      title="Book a Flight"
      description="Enter details to book flights"
    >
      <CardPageLayout
        title="Indicate Passenger count"
        description="Select your desired type to begin"
        className="max-w-md"
      >
        <div className="space-y-5">
          <CustomSelect
            id="adults"
            label="Adults"
            name="adults"
            value={selectedAdult}
            options={option}
            onChange={setSelectedAdult}
            searchable={false}
          />
          <CustomSelect
            id="children"
            label="Children"
            name="children"
            value={selectedChildren}
            options={option}
            onChange={setSelectedChildren}
            searchable={false}
          />
          <CustomSelect
            id="infants"
            label="Infants"
            name="infants"
            value={selectedInfants}
            options={option}
            onChange={setSelectedInfants}
            searchable={false}
          />
          <CustomSelect
            id="class"
            label="Class Type"
            name="class"
            value={selectedClass}
            options={[
              { label: "First Class", value: "firstClass" },
              { label: "Econony", value: "economy" },
            ]}
            onChange={setSelectedClass}
            searchable={false}
          />
          <Button className="w-full" onClick={onSubmit}>
            Proceed
          </Button>
        </div>
      </CardPageLayout>
    </PageLayout>
  );
}
export default SearchFlightComponent;
