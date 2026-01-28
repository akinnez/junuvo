"use client";
import Button from "@/components/Button";
import Link from "next/link";

export default function ErrorSubmitSuccess({
  closeModal,
}: {
  closeModal: any;
}) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-xl font-bold text-[#1E1E1E]">Error Submited</h3>
      <span className="text-gray-700 text-xs">
        Your transaction error submission was successful
      </span>
      <div className="my-5">
        <Link href={"/${params.appType}dashboard"}>
          <Button size="sm" className="w-full" onClick={closeModal}>
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
