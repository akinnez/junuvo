// lib/menu-data.ts
import { MenuItem } from '@/types/menu';
import { LayoutDashboard, Users, CreditCard, PiggyBank, Handshake, Settings, Receipt, Wallet, ArrowDownUp, Banknote, ScrollText } from 'lucide-react';

export const MENU_ITEMS: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  {
    id: 'account-transfers',
    label: 'Account Transfers',
    icon: ArrowDownUp,
    submenu: [
      { id: 'fund-transfer', label: 'Fund Transfer', icon: Wallet, href: '/transfers/fund' },
      { id: 'bank-account', label: 'Bank Account', icon: Banknote, href: '/transfers/bank' },
      { id: 'multiple-transfer', label: 'Multiple Transfer', icon: ScrollText, href: '/transfers/multiple' },
      { id: 'save-beneficiary', label: 'Save Beneficiary', icon: Handshake, href: '/transfers/save' },
    ],
  },
  { id: 'bnpl', label: 'BNPL', icon: CreditCard, isComingSoon: true },
  { id: 'p2p', label: 'P2P', icon: Users, isComingSoon: true },
  { id: 'pay-bills', label: 'Pay Bills', icon: Receipt, submenu: [
    { id: 'electricity', label: 'Electricity', icon: Banknote, href: '/bills/electricity' },
    { id: 'cabletv', label: 'Cable TV', icon: Banknote, href: '/bills/cabletv' },
    { id: 'betting', label: 'Betting', icon: Banknote, href: '/bills/betting' },
    { id: 'flights', label: 'Flights', icon: Banknote, href: '/bills/flights' },
    { id: 'giftcards', label: 'Giftcards', icon: Banknote, href: '/bills/giftcards' },
    { id: 'stocks', label: 'Stocks', icon: Banknote, href: '/bills/stocks' },
  ] },
  { id: 'transactions', label: 'Transactions', icon: ScrollText, href: '/transactions' },
  { id: 'cards', label: 'Cards', icon: CreditCard, href: '/cards' },
  { id: 'savings', label: 'Savings', icon: PiggyBank, href: '/savings' },
  { id: 'loan', label: 'Loan', icon: Handshake, href: '/loan' },
  { id: 'refer-earn', label: 'Refer & earn', icon: Users, href: '/refer' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
];