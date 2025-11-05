// types/menu.ts
export type MenuItem = {
  id: string;
  label: string;
  icon: React.ElementType; // For React Icons
  href?: string;
  isComingSoon?: boolean;
  submenu?: MenuItem[];
};