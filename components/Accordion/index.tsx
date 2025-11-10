"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuItem } from "@/types/menu";
import { NavItem } from "../Sidebar-main";
import { useState } from "react";

export function AccordionComponent({
  item,
  renderItemContent,
}: {
  item: MenuItem;
  renderItemContent?: React.ReactNode;
}) {
  const [openParent, setOpenParent] = useState<string | null>("dashboard");

  const handleParentToggle = (itemId: string) => {
    setOpenParent(openParent === itemId ? null : itemId);
  };

  return (
    <Accordion type="single" collapsible={true} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="">{renderItemContent}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-5 text-balance">
          {item.submenu!.map((subItem) => (
            <div
              key={subItem.id}
              onClick={() => handleParentToggle(subItem.label)}
            >
              <NavItem
                key={subItem.id}
                item={subItem}
                isActive={subItem.label === openParent}
              />
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
