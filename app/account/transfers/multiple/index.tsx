"use client";
import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import SelectTypeAddForm from "@/views/SelectTypeAddFormComponent";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const options = [
  {
    id: 1,
    value: "newRecipient",
    label: "New Recipient",
  },
  {
    id: 2,
    value: "savedBeneficiary",
    label: "Saved Beneficiary",
  },
  {
    id: 3,
    value: "savedGroup",
    label: "Saved Group",
  },
];

function MultipleComponent({ children }: { children: React.ReactNode }) {
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
    router.push(`/account/transfers/multiple/${values}`);
    setValue(values);
    console.log("Selected option:", values);
  };
  return (
    <PageLayout
      isBack={false}
      title="Top up account"
      description="Enter amount and select currency to convert to"
    >
      <CardPageLayout
        title="Add funds as desired"
        description="Select your desired account to make transactions"
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
export default MultipleComponent;
