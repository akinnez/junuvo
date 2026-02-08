"use client";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { effect } from "nabd";
import dynamic from "next/dynamic";

const DynamicOnboarding = dynamic(
  () => import("@/views/Dashboard/Onboarding"),
  { ssr: false },
);
const DynamicDashboard = dynamic(() => import("@/views/Dashboard"), {
  ssr: false,
});

export default function Dashboard() {
  const { getFromLocal } = useLocalStorage();

  const kyc = getFromLocal("isWalletCreated");

  effect(() => {
    console.log("KYC Status:", kyc);
  });

  if (!kyc) return <DynamicOnboarding />;
  return <DynamicDashboard />;
}
