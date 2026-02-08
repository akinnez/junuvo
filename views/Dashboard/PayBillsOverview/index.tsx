// components/PayBillsSection.tsx
import QuickActionCard, {
  QuickAction,
} from "@/components/Dashboard/QuickActionCard";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import Link from "next/link";

const PayBillsSection = () => {
  const {
    appType,
    navigate: { airtime, prepaid, cable, betting, giftcard },
    getPath,
  } = useAppNavigation();

  // The list of actions and their data
  const actionsData: QuickAction[] = [
    {
      id: 1,
      label: "Top Up",
      icon: "/images/bills/PhoneCall.png",
      link: airtime(appType),
    },
    {
      id: 2,
      label: "Pay Electricity",
      icon: "/images/bills/bulb.png",
      link: prepaid(appType),
    },
    {
      id: 3,
      label: "Pay Subscription",
      icon: "/images/bills/sub.png",
      link: cable(appType),
    },
    {
      id: 4,
      label: "Book Flights",
      icon: "/images/bills/airplane.png",
      link: getPath("flight", "one-way"),
    },
    {
      id: 5,
      label: "Betting",
      icon: "/images/bills/QrCode.png",
      link: betting(appType),
    },
    {
      id: 6,
      label: "Giftcards",
      icon: "/images/bills/gift-box.png",
      link: giftcard(appType),
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Pay bills</h2>

      {/* Tailwind Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {actionsData.map((action) => (
          <Link key={action.id} href={action?.link || ""}>
            <QuickActionCard
              label={action.label}
              icon={action.icon}
              id={action.id} // Added id to satisfy the interface, though not used in the Card itself
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PayBillsSection;
