import { SettingOption, Transaction } from "@/types/card";

export const transactions: Transaction[] = [
  {
    id: 1,
    type: "withdrawal",
    label: "Card Withdrawal",
    date: "23 Nov",
    amount: 4,
  },
  {
    id: 2,
    type: "shopping",
    label: "Amazon Shopping",
    date: "23 Nov",
    amount: -2,
  },
  { id: 3, type: "funding", label: "Card Funding", date: "23 Nov", amount: 3 },
];