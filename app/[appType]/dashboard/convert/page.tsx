"use client";
import PageLayout from "@/components/PageLayout";
import ConvertComponent from "@/views/ConvertComponent";

export default function Convert() {
  return (
    <PageLayout
      title="Convert Funds"
      description="Enter amount and select currency to convert to"
    >
      <ConvertComponent />
    </PageLayout>
  );
}
