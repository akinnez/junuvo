import type { Metadata } from "next";
import MultipleComponent from ".";

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
    <MultipleComponent>
      <div className="py-5">{children}</div>
    </MultipleComponent>
  );
}
