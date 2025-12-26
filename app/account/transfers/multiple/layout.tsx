import type { Metadata } from "next";
import MultipleComponent from ".";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Multiple Transfer - MyJunuvo ",
  description: "Multiple Transfer",
};

export default function MultipleTransferLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <MultipleComponent>
        <div className="py-5">{children}</div>
      </MultipleComponent>
    </Suspense>
  );
}
