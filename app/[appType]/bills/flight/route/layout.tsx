import FlightLayoutComp from "@/views/Bills/FlightLayoutComp";
import type { Metadata } from "next";
import { Suspense } from "react";

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
    <Suspense>
      <FlightLayoutComp>
        <div className="py-5">{children}</div>
      </FlightLayoutComp>
    </Suspense>
  );
}
