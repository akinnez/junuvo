"use client";

import BackButton from "@/components/BackButton";
import Card from "@/components/Card";
import Button from "../Button";

export interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isBack?: boolean;
  isCardAllow?: boolean;
  showButton?: boolean;
  buttonFn?: () => void;
  buttonLabel?: string;
  buttonStyle?: string;
}

export default function PageLayout({
  children,
  title,
  description,
  isBack = true,
  isCardAllow = true,
  showButton = false,
  buttonFn,
  buttonLabel,
  buttonStyle,
}: PageLayoutProps) {
  return (
    <div className="py-7">
      {isBack && <BackButton />}
      <div className="flex justify-between items-center">
        <div className="my-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <span className="text-sm text-gray-500">{description}</span>
        </div>
        {showButton && (
          <Button onClick={buttonFn} className={buttonStyle}>
            {buttonLabel}
          </Button>
        )}
      </div>
      {isCardAllow && <Card className="mt-10">{children}</Card>}
      {!isCardAllow && <div className="mt-10">{children}</div>}
    </div>
  );
}
