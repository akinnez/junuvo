import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuItem } from "@/types/menu";
import { NavItem } from "../Sidebar-main";

export function AccordionComponent({
  item,
  renderItemContent,
}: {
  item: MenuItem;
  renderItemContent?: React.ReactNode;
}) {
  return (
    <Accordion type="single" collapsible={true} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="">{renderItemContent}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 px-5 text-balance">
          {item.submenu!.map((subItem) => (
            <NavItem
              key={subItem.id}
              item={subItem}
              isActive={subItem.label === "Fund Transfer"}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
