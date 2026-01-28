"use client";
import Button from "@/components/Button";
import Link from "next/link";

export default function PhysicalCardCreation({
  closeModal,
}: {
  closeModal: any;
}) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-xl font-semibold text-[#1E1E1E]">
        Card is on its way
      </h3>
      <span className="text-gray-700 text-xs">
        Our contact personnel will contact you for the delivery of your card
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
