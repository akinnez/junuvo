"use client";

import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useModal } from "@/hooks/useModal";
import { formattedAmount } from "@/lib/currency-formatter";
import BuyStock from "@/modals/bills/stocks/BuyStock";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function StockDetails() {
  const { closeModal, openModal } = useModal();

  const handleBuyShare = () => {
    openModal({
      title: "Buy AAG",
      description: `Available Amount: ${formattedAmount("USD", 0)}`,
      size: "sm",
      component: <BuyStock closeModal={closeModal} />,
    });
  };
  return (
    <div className="py-7">
      <BackButton />
      <div className="flex gap-5 items-center my-5">
        <div className="h-16 w-16 rounded-full justify-center items-center p-1 bg-error/5">
          <Image
            src={"/images/icons/www.png"}
            alt="www"
            width={60}
            height={60}
            className="h-15 w-15 rounded-full"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold">American Airlines Group Inc</h3>
          <p className="text-sm text-gray-500 font-semibold">
            {formattedAmount("USD", 23.56)}
          </p>
          <span className="text-[10px] text-error font-semibold">{`(-1.40%)`}</span>
        </div>
      </div>
      <Card>
        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-gray-800 font-bold mb-2">
              About American Airlines Group Inc
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed mb-8">
              Intuitive smart beta strategy. Equal weighting results in a tilt
              away from mega cap and growth stocks and toward smaller cap and
              value stocks.
            </p>

            <h3 className="text-xs text-gray-800 font-bold mb-4">Stats</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-gray-100 pb-2 text-xs text-gray-800 font-medium"
                >
                  <span>{stat.label}</span>
                  <span>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#fbbf24" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    vertical={false}
                    strokeDasharray="3 3"
                    stroke="#f0f0f0"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis hide domain={["auto", "auto"]} />
                  <Tooltip cursor={false} content={() => null} />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#fbbf24"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div>
          <Button className="w-1/2 my-6" onClick={handleBuyShare}>
            Buy
          </Button>
        </div>
      </Card>
    </div>
  );
}

const stats = [
  { label: "Open", value: "23.20" },
  { label: "Volume", value: "23.20" },
  { label: "High", value: "23.20" },
  { label: "Avg Vol", value: "23.20" },
  { label: "Low", value: "23.20" },
  { label: "Mkt Cap", value: "23.20" },
  { label: "52 Wk High", value: "23.20" },
  { label: "P/E Ratio", value: "23.20" },
  { label: "52 Wk Low", value: "23.20" },
  { label: "Div/Yield", value: "23.20" },
];

const data = [
  { name: "1H", price: 20 },
  { name: "1D", price: 35 },
  { name: "1W", price: 25 },
  { name: "1M", price: 45 },
  { name: "1Y", price: 30 },
  { name: "All", price: 50 },
  { name: "", price: 40 },
];
