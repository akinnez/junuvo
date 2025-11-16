"use client";
import React from "react";
// Assuming lucide-react icons are available in a standard Next.js setup
import {
  Plus,
  ListChecks,
  AlertCircle,
  CheckCircle,
  Watch,
} from "lucide-react";
import { formattedAmount } from "@/lib/currency-formatter";
import Card from "@/components/Card";
import Button from "@/components/Button";

// --- 1. Type Definitions ---

/** Defines the structure for a single transaction item. */
interface Transaction {
  id: number;
  type: "Withdrawal" | "Top up";
  time: string;
  amount: number;
  status: "failed" | "success"; // Represents the icon/color state
}

/** Defines the structure for the overall dashboard data. */
interface DashboardData {
  balance: number;
  percentageToSave: number;
  recentTransactions: Transaction[];
}

// --- 2. Mock Data ---

const mockData: DashboardData = {
  balance: 120000.0,
  percentageToSave: 2,
  recentTransactions: [
    // Note: I'm interpreting the red icon/color as a 'failed' or 'pending' state
    // and the green as 'success' for clarity, based on the visual evidence.
    {
      id: 1,
      type: "Withdrawal",
      time: "11:23 AM",
      amount: 100000.0,
      status: "failed",
    },
    {
      id: 2,
      type: "Withdrawal",
      time: "11:23 AM",
      amount: 5000.0,
      status: "failed",
    },
    {
      id: 3,
      type: "Top up",
      time: "11:23 AM",
      amount: 100000.0,
      status: "success",
    },
  ],
};

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const isFailed = transaction.status === "failed";
  const iconColor = isFailed
    ? " !bg-[#FEE4E2] !border !border-[#FEF3F2]"
    : "text-green-500";
  const amountColor = isFailed ? "text-gray-900" : "text-green-600";
  const Icon = isFailed ? AlertCircle : CheckCircle;

  return (
    <div className="flex justify-between items-center py-4 border-b last:border-b-0 border-gray-100">
      {/* Left side: Icon, Type, Time */}
      <div className="flex items-center space-x-3">
        {/* Icon Circle */}
        <div
          className={`p-2 rounded-full ${iconColor} bg-opacity-10 bg-current`}
        >
          <Icon className="w-5 h-5 text" />
        </div>
        {/* Text Details */}
        <div>
          <p className="font-semibold text-gray-800">{transaction.type}</p>
          <p className="text-xs text-gray-500 mt-0.5">{transaction.time}</p>
        </div>
      </div>

      {/* Right side: Amount */}
      <div className="text-right">
        <p className={`font-semibold text-sm ${amountColor}`}>
          {formattedAmount("NGN", transaction.amount)}
        </p>
      </div>
    </div>
  );
};

// --- 5. Main Dashboard Component ---

const SavingPlanDetails: React.FC = () => {
  const { balance, percentageToSave, recentTransactions } = mockData;

  return (
    <div className="p-4 sm:p-6">
      <div className="w-full">
        {/* --- Section 1: Savings Balance & Percentage --- */}
        <Card className="!shadow !p-4 !rounded-md">
          <div className="text-center">
            <p className="text-xs font-medium text-gray-900">Savings Balance</p>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">
              {formattedAmount("NGN", balance)}
            </h1>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-gray-600">Percentage to save</p>
            <p className="text-xs font-semibold text-[#231F20]">
              {percentageToSave}%
            </p>
          </div>
        </Card>

        {/* --- Section 2: Action Buttons --- */}
        <div className="grid grid-cols-2 gap-5 mt-6 mb-8">
          {/* Withdraw Button */}
          <Button
            icon={<Plus className="w-5 h-5" />}
            size="sm"
            className="transition duration-200"
          >
            Withdraw
          </Button>

          {/* Edit Button */}
          <Button
            size="sm"
            icon={<ListChecks className="w-5 h-5" />}
            className="bg-secondary border border-[#BBD5FC] !text-gray-600 hover:bg-transparent transition duration-200"
          >
            Edit
          </Button>
        </div>

        {/* --- Section 3: Recent Transactions Header --- */}
        <div className="flex justify-between items-baseline mb-4 mt-8">
          <h2 className="text-lg font-bold text-gray-800">
            Recent Transactions
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition duration-200"
          >
            See all
          </a>
        </div>

        {/* --- Section 4: Transactions List --- */}
        <div className="space-y-0">
          {recentTransactions.map((t) => (
            <TransactionItem key={t.id} transaction={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavingPlanDetails;
