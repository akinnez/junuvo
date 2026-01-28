"use client";
import BeneficiaryComponent from "@/views/BeneficiaryComponent";
import SavedBeneficiaryComponent from "@/views/SavedBeneficiaryComponent";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function SavedBeneficiary() {
  const [beneficiary, setBeneficiary] = useState<any>(null);
  const search = useSearchParams();
  let saved = search.get("saved");

  useEffect(() => {
    if (JSON.parse(saved as string) === true) {
      const value = search.get("value");
      if (value) {
        const beneficiary = JSON.parse(atob(value));
        setBeneficiary(beneficiary);
      }
    }
  }, [saved, search]);
  return (
    <>
      {!saved && <SavedBeneficiaryComponent />}
      {saved && <BeneficiaryComponent data={beneficiary} />}
    </>
  );
}
export default SavedBeneficiary;
