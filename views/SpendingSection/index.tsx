"use client";
import SpendingTrend from "@/components/Dashboard/SpendingTrend";
import StocksSection from "@/components/Dashboard/StocksSection";

const BottomDashboardSection = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Buy Stocks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <StocksSection />
        </div>

        <div className="">
          <SpendingTrend />
        </div>
      </div>
    </div>
  );
};

export default BottomDashboardSection;
