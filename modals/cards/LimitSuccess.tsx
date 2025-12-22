"use client";
import Button from "@/components/Button";
import Link from "next/link";

export default function LimitSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-xl font-semibold text-[#1E1E1E]">
        Spending Limit Increased
      </h3>
      <span className="text-gray-700">You now have higher spending limit</span>
      <div className="my-5">
        <Link href={"/account/dashboard"} onClick={closeModal}>
          <Button size="sm" className="w-full">
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
