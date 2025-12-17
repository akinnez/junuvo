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
  showNotice?: boolean;
  buttonFn?: () => void;
  buttonLabel?: React.ReactNode;
  notice?: string;
  buttonStyle?: string;
}

export default function PageLayout({
  children,
  title,
  description,
  isBack = true,
  isCardAllow = true,
  showButton = false,
  showNotice = false,
  buttonFn,
  buttonLabel,
  buttonStyle,
  notice,
}: PageLayoutProps) {
  return (
    <div className="py-7">
      {isBack && <BackButton />}
      <div className="flex justify-between items-center">
        <div className="my-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <span className="text-sm text-gray-500">{description}</span>
        </div>

        {/* Resolve this */}
        {showButton && (
          <Button size="sm" onClick={buttonFn} className={buttonStyle}>
            {buttonLabel}
          </Button>
        )}
        {showNotice && !showButton && (
          <div className="bg-button/5 p-1">
            <h1 className="text-xs font-semibold">Important</h1>
            <span className="text-xs text-gray-500">{notice}</span>
          </div>
        )}
      </div>
      {isCardAllow && <Card className="mt-10">{children}</Card>}
      {!isCardAllow && <div className="mt-10">{children}</div>}
    </div>
  );
}
