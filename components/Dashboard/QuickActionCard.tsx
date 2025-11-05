// src/types/dashboard.ts

export interface QuickAction {
  id: number;
  label: string;
  icon: string;
  iconStyle?: string;
  iconStyleCont?: string;
}

import Card from "@/components/Card";
import Image from "next/image";
// Assuming you have imported the QuickAction interface

const QuickActionCard: React.FC<QuickAction> = ({
  label,
  icon: Icon,
  iconStyle,
  iconStyleCont,
}) => {
  return (
    // Card with a subtle hover effect
    <Card className="w-full hover:shadow-primary hover:shadow transition-shadow cursor-pointer !p-5">
      <div className="">
        {/* Icon Wrapper (The Colored Circle) */}
        <div className={`mb-5 mt-3 ${iconStyleCont}`}>
          <Image
            alt="icon"
            src={Icon}
            width={40}
            height={40}
            className={`${iconStyle}`}
          />
        </div>

        {/* Label */}
        <p className="text-sm font-medium text-gray-700">{label}</p>
      </div>
    </Card>
  );
};

export default QuickActionCard;
