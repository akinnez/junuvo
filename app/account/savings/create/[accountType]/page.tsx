"use client";

import FixedSavings from "@/views/FixedSavings";
import SmartSavingComponent from "@/views/SmartSavingComponent";
import { useParams } from "next/navigation";

function CreateSavingsPage() {
  const { accountType } = useParams();
  return (
    <>
      {accountType == "fixed" && <FixedSavings />}
      {accountType == "smart" && <SmartSavingComponent />}
    </>
  );
}
export default CreateSavingsPage;
