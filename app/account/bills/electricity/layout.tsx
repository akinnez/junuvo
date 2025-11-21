import { Metadata } from "next";
import ElectricityComp from ".";

export const metadata: Metadata = {
  title: "Electricity - MyJunuvo ",
  description: "Electricity Payment Plan",
};

export default function ElectricityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ElectricityComp>
      <div className="py-5">{children}</div>
    </ElectricityComp>
  );
}
