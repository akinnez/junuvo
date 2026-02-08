"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import AccountOverview from "./AccountOverview";
import PayBillsSection from "./PayBillsOverview";
import BottomDashboardSection from "../SpendingSection";
import { Folder } from "lucide-react";
import Card from "@/components/Card";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { useSignal } from "nabd";
import { user } from "@/stores/userStore";
import { wallet } from "@/stores/walletStore";

export default function Dashboard() {
  const wallets = useSignal<Wallet[]>(wallet);
  const {
    virtualAccount: { bankName, accountName, accountNumber },
  } = wallets[0];
  const {
    appType,
    navigate: { accountDetails, convertFunds },
  } = useAppNavigation();
  const { firstName, accountTier } = useSignal<User>(user);

  return (
    <div className="pt-5 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-sm text-gray-600">Good Morning,</p>
          <h2 className="flex items-center gap-3 font-bold text-2xl text-gray-900">
            {firstName}{" "}
            <div className="bg-[#CFE9FF] text-button rounded-full py-1 px-2 text-xs font-semibold">
              {accountTier?.type.replace("_", " ")}
            </div>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Button>Budget Account</Button>
          <Link href={convertFunds(appType)}>
            <Button
              className="!border !border-button !bg-white !text-button"
              icon={
                <Image
                  src={`/images/icons/walletPlus.svg`}
                  alt="icon"
                  width={20}
                  height={20}
                />
              }
            >
              Convert Funds
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-5 grid grid-cols-3">
        <Card className="!shadow !p-5 col-span-2">
          <div className="flex items-center gap-x-3.5">
            <Folder size={24} className="fill-[#BEE2FF] text-[#BEE2FF]" />
            <p className="text-xs font-semibold text-gray-600">
              {accountName} | {bankName} | {accountNumber}
            </p>
            <div className="flex gap-5">
              <h3 className="flex items-center gap-2 text-xs font-medium text-gray-900">
                <Image
                  src={`/images/icons/Copy.png`}
                  alt="icon"
                  width={16}
                  height={16}
                />{" "}
                Copy
              </h3>
              <h3 className="flex items-center gap-2 text-xs font-medium text-gray-900">
                <Image
                  src={`/images/icons/Share.png`}
                  alt="icon"
                  width={16}
                  height={16}
                />{" "}
                Share
              </h3>
            </div>
          </div>
        </Card>
        <div className="flex items-center justify-end ">
          <Link
            href={accountDetails(appType)}
            className="text-button! font-medium cursor-pointer text-lg"
          >
            See all accounts
          </Link>
        </div>
      </div>
      <AccountOverview />
      <PayBillsSection />
      <BottomDashboardSection />
    </div>
  );
}
