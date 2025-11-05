import QuickActionCard, { QuickAction } from "./QuickActionCard";

const stocks: QuickAction[] = [
  {
    id: 1,
    icon: "/images/flags/us.svg",
    label: "US Stocks",
  },
  {
    id: 2,
    icon: "/images/flags/ng.svg",
    label: "Nigerian Stocks",
  },
];
function StocksSection() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {stocks.map((stock) => (
        <QuickActionCard
          key={stock.id}
          icon={stock.icon}
          label={stock.label}
          id={stock.id}
          iconStyle="rounded-sm lg h-6 w-6"
          iconStyleCont="rounded-full h-12.5 w-12.5 bg-[#FFF2E7] flex justify-center items-center"
        />
      ))}
    </div>
  );
}
export default StocksSection;
