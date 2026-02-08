import { useAppNavigation } from "@/hooks/use-app-navigation";
import QuickActionCard, {
  QuickAction,
} from "../../components/Dashboard/QuickActionCard";
import Link from "next/link";

function StocksSection() {
  const {
    appType,
    navigate: { stocks },
  } = useAppNavigation();

  const stocksCard: QuickAction[] = [
    {
      id: 1,
      icon: "/images/flags/us.svg",
      label: "US Stocks",
      link: stocks(appType),
    },
    {
      id: 2,
      icon: "/images/flags/ng.svg",
      label: "Nigerian Stocks",
      link: stocks(appType),
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5">
      {stocksCard.map((stock) => (
        <Link href={stock.link || ""} key={stock.id}>
          <QuickActionCard
            icon={stock.icon}
            label={stock.label}
            id={stock.id}
            iconStyle="rounded-sm lg h-6 w-6"
            iconStyleCont="rounded-full h-12.5 w-12.5 bg-[#FFF2E7] flex justify-center items-center"
          />
        </Link>
      ))}
    </div>
  );
}
export default StocksSection;
