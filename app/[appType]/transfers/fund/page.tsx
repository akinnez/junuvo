"use client";
import PageLayout from "@/components/PageLayout";
import AddFundComponent from "@/views/AddFundComponent";

function AddFund() {
  return (
    <PageLayout
      title="Top up account"
      description="Enter amount and select currency to convert to"
      isBack={false}
    >
      <AddFundComponent />
    </PageLayout>
  );
}
export default AddFund;
