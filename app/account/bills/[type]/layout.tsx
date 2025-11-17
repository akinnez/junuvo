import type { Metadata } from "next";
import AirtimeDataComp from ".";

export const metadata: Metadata = {
  title: "Airtime&Date - MyJunuvo ",
  description: "Multiple Transfer",
};

export default function MultipleTransferLayout({
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
