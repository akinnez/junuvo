import PageLayout from "@/components/PageLayout";
import { CardPageLayout } from "@/components/PageLayout/CardPageLayout";
import AirtimeDataComp from "@/views/Bills/AirtimeLayoutComp";
import FlightLayoutComp from "@/views/Bills/FlightLayoutComp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight - MyJunuvo ",
  description: "Multiple Transfer",
};

export default function FlightLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout
      title="Passenger Details"
      description="Enter details to book flights"
      showNotice={true}
      notice="Enter name as mentioned on your passport or Government approved IDs."
    >
      <CardPageLayout
        title="Select to see details"
        description="Select your desired type to begin"
      >
        <div className="py-5">{children}</div>
      </CardPageLayout>
    </PageLayout>
  );
}
