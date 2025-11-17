// components/SpendingTrend.tsx
import { CustomSelect } from "@/components/Select";
import { formattedAmount } from "@/lib/currency-formatter";
import { DollarSign, Wallet } from "lucide-react"; // Example icons for visual flair

// Define the data for the trend display
interface TrendData {
  moneyIn: number;
  moneyOut: number;
  currencySymbol: string;
}

const trendData: TrendData = {
  moneyIn: 40000,
  moneyOut: 40000,
  currencySymbol: "NGN", // Assuming Naira based on the image's context
};

const SpendingTrend = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md h-full">
      <h3 className="text-lg font-semibold mb-4">Spending Trend</h3>
      {/* Month Filter (Select Component) */}
      <CustomSelect
        value="this-month"
        onChange={() => {}}
        id="trend"
        name="SpendingTrend"
        label=""
        searchable={false}
        placeholder="Select Month"
        options={[
          { value: "this-month", label: "This Month" },
          { value: "last-month", label: "Last Month" },
          { value: "last-90-days", label: "Last 90 Days" },
        ]}
        className="w-[140px] !p-1 text-sm"
      />
      {/* Money In/Money Out Legend and Values */}
      <div className="space-y-3 mt-5">
        {/* Money In */}
        <div className="flex gap-10">
          <div>
            <div className="flex items-center">
              {/* Green Dot Legend */}
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              <p className="text-sm font-medium text-gray-700">Money In</p>
            </div>
            <p className="text-xl  text-green-500">
              {formattedAmount(trendData.currencySymbol, trendData.moneyOut)}
            </p>
          </div>

          {/* Money Out */}
          <div>
            <div className="flex items-center">
              {/* Red Dot Legend */}
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              <p className="text-sm font-medium text-gray-700">Money Out</p>
            </div>
            <p className="text-xl text-red-500">
              {formattedAmount(trendData.currencySymbol, trendData.moneyOut)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingTrend;
