"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function SavedBeneficiaryComponent() {
  const data = [
    {
      name: "John Doe",
      bank: "Bank of America",
      accountNo: "1234567890",
      createdAt: "Jan 1, 2023",
      icon: "/path/to/icon1.png",
    },
    {
      name: "Jane Smith",
      bank: "Chase Bank",
      accountNo: "1234567890",
      createdAt: "Feb 15, 2023",
      icon: "/path/to/icon2.png",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <Link
          href={`?saved=true&value=${btoa(JSON.stringify(item))}`}
          key={index}
          className=""
        >
          <div className="flex justify-between py-3 items-center">
            <div>
              <h3 className="font-semibold text-xs text-[#353D48]">
                {item.name}
              </h3>
              <p className="text-[10px] text-gray-500">
                {item.bank}. {item.createdAt}
              </p>
            </div>
            <div className="shawdow-md p-2 rounded-full">
              <Image
                src={item.icon}
                alt={item.bank}
                width={24}
                height={24}
                className="rounded-full w-6 h-6"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default SavedBeneficiaryComponent;
