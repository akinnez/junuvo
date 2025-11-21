import AirtimeDataComp from "@/views/Bills/AirtimeLayoutComp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtime&Date - MyJunuvo ",
  description: "Multiple Transfer",
};

export default function AirtimeDataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AirtimeDataComp>
      <div className="py-5">{children}</div>
    </AirtimeDataComp>
  );
}
