"use client";

import BackButton from "@/components/BackButton";
import Card from "@/components/Card";

export interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isBack?: boolean;
}

export default function PageLayout({
  children,
  title,
  description,
  isBack = true,
}: PageLayoutProps) {
  return (
    <div className="py-7">
      {isBack && <BackButton />}
      <div className="my-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <span className="text-sm text-gray-500">{description}</span>
      </div>
      <Card className="mt-10">{children}</Card>
    </div>
  );
}
