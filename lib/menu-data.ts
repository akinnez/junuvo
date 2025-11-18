// lib/menu-data.ts
import { MenuItem } from '@/types/menu';
import { LayoutDashboard, Users, CreditCard, PiggyBank, Handshake, Settings, Receipt, Wallet, ArrowDownUp, Banknote, ScrollText } from 'lucide-react';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/account/dashboard' },
  {
    id: 'account-transfers',
    label: 'Account Transfers',
    icon: ArrowDownUp,
    submenu: [
      { id: 'fund-transfer', label: 'Fund Transfer', icon: Wallet, href: '/account/transfers/fund' },
      { id: 'bank-account', label: 'Bank Account', icon: Banknote, href: '/account/transfers/bank' },
      { id: 'multiple-transfer', label: 'Multiple Transfer', icon: ScrollText, href: '/account/transfers/multiple/newRecipient' },
      { id: 'save-beneficiary', label: 'Save Beneficiary', icon: Handshake, href: '/account/transfers/beneficiary' },
    ],
  },
  { id: 'bnpl', label: 'BNPL', icon: CreditCard, isComingSoon: true },
  { id: 'p2p', label: 'P2P', icon: Users, isComingSoon: true },
  { id: 'pay-bills', label: 'Pay Bills', icon: Receipt, submenu: [
    { id: 'airtime', label: 'Airtime & Data', icon: Banknote, href: '/account/bills/airtime' },
    { id: 'electricity', label: 'Electricity', icon: Banknote, href: '/account/bills/electricity' },
    { id: 'cabletv', label: 'Cable TV', icon: Banknote, href: '/bills/cabletv' },
    { id: 'betting', label: 'Betting', icon: Banknote, href: '/bills/betting' },
    { id: 'flights', label: 'Flights', icon: Banknote, href: '/bills/flights' },
    { id: 'giftcards', label: 'Giftcards', icon: Banknote, href: '/bills/giftcards' },
    { id: 'stocks', label: 'Stocks', icon: Banknote, href: '/bills/stocks' },
  ] },
  { id: 'transactions', label: 'Transactions', icon: ScrollText, href: '/account/transactions' },
  { id: 'cards', label: 'Cards', icon: CreditCard, href: '/account/cards' },
  { id: 'savings', label: 'Savings', icon: PiggyBank, href: '/account/savings' },
  { id: 'loan', label: 'Loan', icon: Handshake, href: '/account/loan' },
  { id: 'refer-earn', label: 'Refer & earn', icon: Users, href: '/account/refer' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/account/settings' },
];