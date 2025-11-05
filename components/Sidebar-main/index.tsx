"use client";

import { useState } from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn utility
import { MENU_ITEMS } from "@/lib/menu-data";
import type { MenuItem } from "@/types/menu";
import Image from "next/image";
import { AccordionComponent } from "../Accordion";

export const NavItem = ({
  item,
  isActive,
}: {
  item: MenuItem;
  isActive: boolean;
}) => {
  const Icon = item.icon;
  const isParent = item.submenu && item.submenu.length > 0;

  // Renders the main link/button for an item
  const renderItemContent = () => (
    <div
      className={cn(
        "flex items-center space-x-3 p-3 rounded-lg transition-colors",
        isActive
          ? "bg-avatar text-gray-900"
          : "hover:bg-avatar hover:text-gray-900" // Highlighting the active link
      )}
    >
      <Icon className="h-5 w-5" />
      <span className="flex-1">{item.label}</span>
      {item.isComingSoon && (
        <span className="text-[8px] bg-button font-semibold text-secondart px-2 py-0.5 rounded-full">
          Coming soon
        </span>
      )}
    </div>
  );

  if (isParent) {
    // If it's a parent, use a button and handle the click to open/close
    return (
      <AccordionComponent item={item} renderItemContent={renderItemContent()} />
    );
  }

  // If it's a regular link (or coming soon)
  if (item.href) {
    return (
      <Link href={item.href} className="block">
        {renderItemContent()}
      </Link>
    );
  }

  // For non-clickable items like 'Coming Soon' if no href
  return <div className="cursor-default">{renderItemContent()}</div>;
};

export function SidebarMain() {
  // Simple state to manage which collapsible menu is open.
  const [openParent, setOpenParent] = useState<string | null>("dashboard");

  const handleParentToggle = (itemId: string) => {
    setOpenParent(openParent === itemId ? null : itemId);
  };

  return (
    <aside className="h-screen bg-primary text-white flex flex-col p-4 shadow-xl">
      <div className="flex items-center justify-center h-16 mb-4">
        <Image
          src={"/images/logo.svg"}
          alt="Auth Background"
          width={150}
          height={42}
          priority
          className=""
        />
      </div>
      {/* </div> */}

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {MENU_ITEMS.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={item.id === openParent} // Check if this is the active parent
          />
        ))}
      </nav>

      {/* --- User Profile Section --- */}
      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer">
          <div className="flex items-center space-x-3">
            <div>
              <p className="font-semibold text-sm">Alison Eye</p>
              <p className="text-xs text-gray-400">@thealisoneye</p>
            </div>
          </div>
          <LogOut className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </aside>
  );
}
