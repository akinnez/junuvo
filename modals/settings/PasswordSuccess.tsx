"use client";
import Button from "@/components/Button";
import Link from "next/link";

export default function PasswordSuccess({ closeModal }: { closeModal: any }) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-2xl font-bold text-[#1E1E1E]">Password Changed!</h3>
      <span className="text-gray-700 text-xs">
        You have successfully changed your password
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
