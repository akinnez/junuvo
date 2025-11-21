"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import SelectTypeAddForm from "@/views/SelectTypeAddFormComponent";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const options = [
  {
    id: 1,
    value: "one-way",
    label: "One-Way",
  },
  {
    id: 2,
    value: "round",
    label: "Round Trip",
  },
];

function FlightLayoutComp({ children }: { children: React.ReactNode }) {
  const [val, setValue] = useState<string>(options[0].value);
  const path = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const params = path.get("type");
    ``;
    setValue(params as string);

    if (!["one-way", "round"].includes(params as string)) {
      return router.push(`/account/bills/flight/round?type=one-way`);
    }
  }, [path]);

  const handleSelectionChange = (values: string) => {
    router.push(`/account/bills/flight/route?type=${values}`);
    setValue(values);
    console.log("Selected option:", values);
  };
  return (
    <PageLayout
      isBack={false}
      title="Book a Flight"
      description="Enter details to book flights"
    >
      <CardPageLayout
        title="Choose type"
        description="Select your desired type to begin"
        className="max-w-md"
      >
        <SelectTypeAddForm
          options={options}
          defaultValue={val}
          onSelect={handleSelectionChange}
        />
        {children}
      </CardPageLayout>
    </PageLayout>
  );
}
export default FlightLayoutComp;
