// components/AccountOverview.tsx

import BalanceCard, {
  BalanceCardProps,
} from "@/views/Dashboard/BalanceCard";

const AccountOverview = () => {
  // Define the data for each card
  const cardsData: BalanceCardProps[] = [
    {
      currencyName: "Naira Balance",
      currencyCode: "NGN",
      flag: "/images/flags/ng.svg",
      amount: 140000,
      ledgerBalance: "140000",
      bgColorClass: "bg-button/70", // Custom dark blue/purple
    },
    {
      currencyName: "Dollar Balance",
      currencyCode: "USD",
      flag: "/images/flags/us.svg",
      amount: 140000,
      ledgerBalance: "140000",
      bgColorClass: "bg-[#5A03AE95]", // Custom medium purple
    },
    {
      currencyName: "Euro Balance",
      currencyCode: "EUR",
      flag: "/images/flags/eu.svg",
      amount: 140000,
      ledgerBalance: "140000",
      bgColorClass: "bg-button/90", // Custom slightly lighter blue/purple
    },
  ];

  return (
    <div className="flex space-x-4">
      {cardsData.map((data) => (
        <BalanceCard key={data.currencyCode} {...data} />
      ))}
    </div>
  );
};

export default AccountOverview;
