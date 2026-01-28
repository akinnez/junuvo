// lib/menu-data.ts
import { MenuItem } from '@/types/menu';
import { LayoutDashboard, Users, CreditCard, PiggyBank, Handshake, Settings, Receipt, Wallet, ArrowDownUp, Banknote, ScrollText } from 'lucide-react';

export const MENU_ITEMS = (appType:string)=>{
  const MENU_ITEM: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: `/${appType}/dashboard` },
  {
    id: 'account-transfers',
    label: 'Account Transfers',
    icon: ArrowDownUp,
    submenu: [
      { id: 'fund-transfer', label: 'Fund Transfer', icon: Wallet, href: `/${appType}/transfers/fund` },
      { id: 'bank-account', label: 'Bank Account', icon: Banknote, href: `/${appType}/transfers/bank` },
      { id: 'multiple-transfer', label: 'Multiple Transfer', icon: ScrollText, href: `/${appType}/transfers/multiple/newRecipient` },
      { id: 'save-beneficiary', label: 'Save Beneficiary', icon: Handshake, href: `/${appType}/transfers/beneficiary` },
    ],
  },
...(appType === "personal"
      ? [
           { id: 'bnpl', label: 'BNPL', icon: CreditCard, isComingSoon: true },
  { id: 'p2p', label: 'P2P', icon: Users, isComingSoon: true },
        ]
      : []
      ),

...(appType === "business"
      ? [
           { id: 'pos', label: 'POS', icon: CreditCard, isComingSoon: true },
           { id: 'cheque', label: 'Cheque Management', icon: CreditCard, href: `/${appType}/cheque`},
        ]
      : []
      ),
  { id: 'pay-bills', label: 'Pay Bills', icon: Receipt, submenu: [
    { id: 'airtime', label: 'Airtime & Data', icon: Banknote, href: `/${appType}/bills/internet/airtime` },
    { id: 'electricity', label: 'Electricity', icon: Banknote, href: `/${appType}/bills/electricity/prepaid` },
    { id: 'cabletv', label: 'Cable TV', icon: Banknote, href: `/${appType}/bills/cabletv` },
    { id: 'betting', label: 'Betting', icon: Banknote, href: `/${appType}/bills/betting` },
    { id: 'flights', label: 'Flights', icon: Banknote, href: `/${appType}/bills/flight/route?type=one-way` },
    { id: 'giftcards', label: 'Giftcards', icon: Banknote, href: `/${appType}/bills/giftcard` },
    { id: 'stocks', label: 'Stocks', icon: Banknote, href: `/${appType}/bills/stocks` },
  ] },
  { id: 'transactions', label: 'Transactions', icon: ScrollText, href: `/${appType}/transactions`},
  { id: 'cards', label: 'Cards', icon: CreditCard, href: `/${appType}/card/virtual` },
  { id: 'savings', label: 'Savings', icon: PiggyBank, href: `/${appType}/savings` },
  { id: 'loan', label: 'Loan', icon: Handshake, href: `/${appType}/loan` },
  { id: 'refer-earn', label: 'Refer & earn', icon: Users, href: `/${appType}/refer` },
  { id: 'settings', label: 'Settings', icon: Settings, href: `/${appType}/settings` },
];

return MENU_ITEM
}