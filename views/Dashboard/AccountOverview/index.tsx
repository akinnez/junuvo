// components/AccountOverview.tsx

import { wallet } from "@/stores/walletStore";
import BalanceCard from "@/views/Dashboard/BalanceCard";
import { useSignal } from "nabd";

const AccountOverview = () => {
  const wallets = useSignal(wallet);

  // Define the data for each card

  const cardsData = wallets?.map((data) => ({
    id: data.id,
    currencyName: "Naira Balance",
    currencyCode: "NGN",
    flag: "/images/flags/ng.svg",
    amount: data.availableBalance,
    ledgerBalance: data.availableBalance,
    virtualAccount: data.virtualAccount.accountNumber,
    bgColorClass: "bg-button/70",
  }));
  // const cardsData = [
  //   {
  //     currencyName: "Naira Balance",
  //     currencyCode: "NGN",
  //     flag: "/images/flags/ng.svg",
  //     amount: 140000,
  //     ledgerBalance: "140000",
  //     virtualAccount: 0,
  //     bgColorClass: "bg-button/70", // Custom dark blue/purple
  //   },
  //   {
  //     currencyName: "Dollar Balance",
  //     currencyCode: "USD",
  //     flag: "/images/flags/us.svg",
  //     amount: 140000,
  //     virtualAccount: 0,
  //     ledgerBalance: "140000",
  //     bgColorClass: "bg-[#5A03AE95]", // Custom medium purple
  //   },
  //   {
  //     currencyName: "Euro Balance",
  //     currencyCode: "EUR",
  //     flag: "/images/flags/eu.svg",
  //     amount: 140000,
  //     virtualAccount: 0,
  //     ledgerBalance: "140000",
  //     bgColorClass: "bg-button/90", // Custom slightly lighter blue/purple
  //   },
  // ];

  return (
    <div className="grid grid-cols-3 gap-x-4 space-x-4">
      {cardsData?.map((data: any) => (
        <BalanceCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default AccountOverview;
