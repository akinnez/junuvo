export interface Transaction {
  id: number;
  type: "withdrawal" | "funding" | "shopping";
  label: string;
  date: string;
  amount: number;
}

export interface SettingOption {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  handleClick:()=>void
}