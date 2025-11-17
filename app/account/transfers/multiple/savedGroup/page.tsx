'use client'
import Button from "@/components/Button";
import Link from "next/link";

function SavedTranferGroup() {
  return (
    <div className="space-y-5 px-10">
      <p className="flex justify-between">
        <span className="text-sm font-medium text-gray-600">Group</span>
        <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
          New Group
        </span>
      </p>
      <p className="flex justify-between">
        <span className="text-sm font-medium text-gray-600">
          No of recipients
        </span>
        <span className="text-sm font-semibold text-[#232323] flex gap-1 items-center">
          2
        </span>
      </p>
      <Link href={"/account/transfers/saved-group"}>
        <Button className="w-full mt-4">Continue</Button>
      </Link>
    </div>
  );
}

export default SavedTranferGroup;
