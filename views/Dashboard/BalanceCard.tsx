// src/types/dashboard.ts or simply inside BalanceCard.tsx

export interface BalanceCardProps {
  currencyName: string;
  currencyCode: "NGN" | "USD" | "EUR";
  flag: string;
  amount: number;
  ledgerBalance: string;
  virtualAccount: string;
  // Custom Tailwind class for the unique background color
  bgColorClass: string;
}

// components/BalanceCard.tsx
import Card from "@/components/Card";
import Button from "@/components/Button";
import { Copy } from "lucide-react"; // Example Lucide icons
import Image from "next/image";
import { formattedAmount } from "@/lib/currency-formatter";
import { CurrencyType } from "@/types/currencyType";
import Link from "next/link";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { useModal } from "@/hooks/useModal";
import FundAccount from "@/modals/dashboard/FundTransfer";

// Note: You would import the BalanceCardProps interface here
// or define it directly above the component.

const BalanceCard: React.FC<BalanceCardProps> = ({
  currencyName,
  currencyCode,
  virtualAccount,
  flag,
  amount,
  ledgerBalance,
  bgColorClass,
}) => {
  const {
    appType,
    navigate: { transactions },
  } = useAppNavigation();
  // Function to format the number to a locale string with the currency symbol
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal({
      title: "Fund Account",
      size: "md",
      component: <FundAccount closeModal={closeModal} />,
    });
  };

  return (
    // The main card container with dynamic background color
    <Card
      className={`text-primary !bg-primary w-full shadow-lg border-none bg-[url('/images/tiles.svg')] !p-0 }`}
    >
      <div className={`${bgColorClass} rounded-2xl`}>
        <div className="p-5">
          {/* Header - Currency Name and Flag */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs text-gray-400 font-medium">
              {currencyName}
            </h3>
            <Image
              alt="flag"
              src={flag} // Default to NG flag if none provided
              width={27}
              height={27}
              className="rounded-full"
            />

            {/* Use a flag emoji or SVG */}
          </div>

          {/* Balance Amount */}
          <h3 className="text-3xl font-semibold mb-2 tracking-wide text-secondary">
            {formattedAmount(currencyCode as CurrencyType, amount)}
          </h3>

          {/* Ledger Balance and Details */}
          <div className="text-sm opacity-80 mb-6 text-secondary">
            <p className="text-[10px]">Ledger Balance:: {ledgerBalance}</p>
            <div className="flex items-center mt-1">
              <span className="text-xs mr-2">{virtualAccount}</span>
              <span className="text-[8px] mr-2">Tap to copy</span>
              <Copy className="w-3 h-3 text-secondary" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-x-4 space-x-4">
            <Button
              size="sm"
              className="flex-1 bg-white !text-button hover:bg-gray-100 font-bold text-sm! w-full"
              onClick={handleOpenModal}
            >
              Fund Account
            </Button>
            <Link href={transactions(appType)} className="">
              <Button
                size="sm"
                className="flex-1 bg-primary/50 text-white hover:bg-white/20 font-bold text-sm! w-full"
              >
                History
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BalanceCard;
