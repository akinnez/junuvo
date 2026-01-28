"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { ReactNode } from "react";

interface SuccessModalProps {
  title: string;
  description: string;
  buttonText?: string;
  href?: string;
  onClose: () => void;
  icon?: ReactNode; // Optional: In case you want to pass a checkmark icon later
}

export default function SuccessComponentModal({
  title,
  description,
  buttonText = "Continue",
  href,
  onClose,
  icon,
}: SuccessModalProps) {
  const Content = (
    <div className="text-center space-y-2 p-4">
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}

      <h3 className="text-2xl font-bold text-[#1E1E1E]">{title}</h3>

      <p className="text-gray-700 text-sm">{description}</p>

      <div className="pt-4">
        {href ? (
          <Link href={href} className="w-full">
            <Button size="sm" className="w-full" onClick={onClose}>
              {buttonText}
            </Button>
          </Link>
        ) : (
          <Button size="sm" className="w-full" onClick={onClose}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );

  return Content;
}
