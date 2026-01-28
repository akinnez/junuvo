"use client";
import Button from "@/components/Button";
import Link from "next/link";

export default function AccountCreatedSuccess({
  closeModal,
}: {
  closeModal: any;
}) {
  return (
    <div className="text-center space-y-2">
      <h3 className="text-2xl font-bold text-[#1E1E1E]">Account created</h3>
      <span className="text-gray-700 text-xs">
        Proceed to login to enjoy limitless features
      </span>
      <div className="my-5">
        <Link href={"/login"}>
          <Button size="sm" className="w-full" onClick={closeModal}>
            Proceed to Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
