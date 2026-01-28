"use client";

import Button from "@/components/Button";
import Link from "next/link";

export default function SMSSubSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-3xl font-bold text-[#1E1E1E]">SMS Subscribed</h3>
      <span className="text-gray-700">
        You have now subscribe to the SMS Alerts
      </span>
      <div className="my-5">
        <Link href={"/${params.appType}dashboard"} onClick={closeModal}>
          <Button size="sm" className="w-full">
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
