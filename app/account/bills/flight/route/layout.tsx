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
    <FlightLayoutComp>
      <div className="py-5">{children}</div>
    </FlightLayoutComp>
  );
}
