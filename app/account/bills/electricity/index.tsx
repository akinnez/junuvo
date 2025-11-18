"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import SelectTypeAddForm from "@/views/SelectTypeAddFormComponent";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const options = [
  {
    id: 1,
    value: "prepaid",
    label: "Prepaid",
  },
  {
    id: 2,
    value: "postpaid",
    label: "Postpaid",
  },
];

function ElectricityComp({ children }: { children: React.ReactNode }) {
  const [val, setValue] = useState<string>(options[0].value);
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.push(path);
    const pathSegments = path.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    setValue(lastSegment);
  }, [path]);

  const handleSelectionChange = (values: string) => {
    router.push(`/account/bills/electricity/${values}`);
    setValue(values);
    console.log("Selected option:", values);
  };
  return (
    <PageLayout
      isBack={false}
      title="Buy Electricity"
      description="Power up your house seamlessly"
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
export default ElectricityComp;
