"use client";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import SelectTypeAddForm from "@/views/SelectTypeAddFormComponent";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PageLayout from "@/components/PageLayout";
import { useSearchParams, useRouter } from "next/navigation";

const BeneficiaryComponent = dynamic(
  () => import("@/views/BeneficiaryComponent")
);
const SavedBeneficiaryComponent = dynamic(
  () => import("@/views/SavedBeneficiaryComponent")
);

function Beneficiary() {
  const [values, setValues] = useState<string>("newBeneficiary");
  const [beneficiary, setBeneficiary] = useState<any>(null);

  const router = useRouter();
  const search = useSearchParams();
  let saved = search.get("saved");

  const isPending = false;

  const options = [
    { id: 1, value: "newBeneficiary", label: "New Beneficiary" },
    { id: 2, value: "savedBeneficiary", label: "Saved Beneficiary" },
  ];

  useEffect(() => {
    if (values === "savedBeneficiary" && JSON.parse(saved as string) === true) {
      setValues("savedBeneficiary");
      const value = search.get("value");
      if (value) {
        const beneficiary = JSON.parse(atob(value));
        setBeneficiary(beneficiary);
      }
    }
  }, [saved, search]);

  const handleSelectionChange = (value: string) => {
    setValues(value);
    if (value === "newBeneficiary") {
      router.replace("/account/transfers/bank");
    }
    // You would typically use this function to update state in the parent component
  };

  return (
    <PageLayout
      title="Top up account"
      description="Enter amount and select currency to convert to"
      isBack={false}
    >
      <CardPageLayout
        title="Add funds as desired"
        description="Select your desired account to make transactions"
        className="max-w-md"
      >
        <div className="">
          <SelectTypeAddForm
            options={options}
            defaultValue={values}
            onSelect={handleSelectionChange}
          />
        </div>

        {values == "newBeneficiary" && <BeneficiaryComponent />}
        {values == "savedBeneficiary" && !saved && (
          <SavedBeneficiaryComponent />
        )}
        {saved && <BeneficiaryComponent data={beneficiary} />}
      </CardPageLayout>
    </PageLayout>
  );
}
export default Beneficiary;
