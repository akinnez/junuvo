"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import SelectTypeAddForm from "@/views/SelectTypeAddFormComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

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
  const { appType, getPath } = useAppNavigation();

  useEffect(() => {
    const params = path.get("type");
    ``;
    setValue(params as string);

    if (!["one-way", "round"].includes(params as string)) {
      return router.push(getPath("flight", "one-way"));
    }
  }, [path]);

  const handleSelectionChange = (values: string) => {
    router.push(getPath("flight", values));
    setValue(values);
  };

  return (
    <Suspense>
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
    </Suspense>
  );
}
export default FlightLayoutComp;
