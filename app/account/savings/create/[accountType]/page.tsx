"use client";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
("next/dynamic");

const DynamicFixedSavings = dynamic(() => import("@/views/FixedSavings"), {
  ssr: false,
});
const DynamicSmartSaving = dynamic(
  () => import("@/views/SmartSavingComponent"),
  {
    ssr: false,
  }
);
function CreateSavingsPage() {
  const { accountType } = useParams();
  return (
    <>
      {accountType == "fixed" && (
        <DynamicFixedSavings accountType={accountType} />
      )}
      {accountType == "smart" && (
        <DynamicSmartSaving accountType={accountType} />
      )}
    </>
  );
}
export default CreateSavingsPage;
