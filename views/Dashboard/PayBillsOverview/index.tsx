// components/PayBillsSection.tsx
import QuickActionCard, {
  QuickAction,
} from "@/components/Dashboard/QuickActionCard";

// The list of actions and their data
const actionsData: QuickAction[] = [
  {
    id: 1,
    label: "Top Up",
    icon: "/images/bills/PhoneCall.png",
  },
  {
    id: 2,
    label: "Pay Electricity",
    icon: "/images/bills/bulb.png",
  },
  {
    id: 3,
    label: "Pay Subscription",
    icon: "/images/bills/sub.png",
  },
  {
    id: 4,
    label: "Book Flights",
    icon: "/images/bills/airplane.png",
  },
  {
    id: 5,
    label: "Betting",
    icon: "/images/bills/QrCode.png",
  },
  {
    id: 6,
    label: "Giftcards",
    icon: "/images/bills/gift-box.png",
  },
];

const PayBillsSection = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Pay bills</h2>

      {/* Tailwind Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {actionsData.map((action) => (
          <QuickActionCard
            key={action.id}
            label={action.label}
            icon={action.icon}
            id={action.id} // Added id to satisfy the interface, though not used in the Card itself
          />
        ))}
      </div>
    </section>
  );
};

export default PayBillsSection;
