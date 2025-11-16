"use client";

import BackButton from "@/components/BackButton";
import Card from "@/components/Card";

export interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isBack?: boolean;
  isCardAllow?: boolean;
}

export default function PageLayout({
  children,
  title,
  description,
  isBack = true,
  isCardAllow = true,
}: PageLayoutProps) {
  return (
    <div className="py-7">
      {isBack && <BackButton />}
      <div className="my-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-sm text-gray-500">{description}</span>
      </div>
      {isCardAllow && <Card className="mt-10">{children}</Card>}
      {!isCardAllow && <div className="mt-10">{children}</div>}
    </div>
  );
}
