"use client";
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InternetSuccess({ closeModal }: { closeModal: any }) {
  const [val, setVal] = useState("airtime");
  useEffect(() => {
    const billType = sessionStorage.getItem("bill_type");
    if (billType) {
      return setVal(billType);
    }
    return setVal("airtime");
  }, []);
  return (
    <div className="text-center space-y-2">
      <h3 className="text-3xl font-bold text-[#1E1E1E]">Success</h3>
      <span className="text-gray-700">
        <span className="capitalize">{val}</span> purchase was successful
      </span>
      {/* <div className="w-full rounded-md py-3 bg-white border border-gray-200 my-3 text-center">
        <span className="text-xs font-semibold">Token</span>
        <p className="font-medium text-gray-600">0125 - 2334 - 3849 -3849</p>
      </div> */}
      <div className="my-7 grid grid-cols-2 gap-5">
        <Button size="sm" className="!text-[#262626] !bg-[#F0F2F5] w-full">
          Share Receipt
        </Button>
        <Link href={"/account/dashboard"} onClick={closeModal}>
          <Button size="sm" className="w-full">
            Return to dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
