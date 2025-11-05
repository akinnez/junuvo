"use client";
import { useParams } from "next/navigation";

export default function CreateUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { accountType } = useParams();
  // console.log(accountType);

  return (
    <div className="max-w-lg mx-auto flex flex-col gap-5 my-10">
      <div className="text-button bg-avatar text-xs font-semibold py-1 px-2 rounded-full w-fit">
        {`${accountType}`.toUpperCase()} ACCOUNT
      </div>
      {children}
    </div>
  );
}
