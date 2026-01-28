import Sidebar, { SidebarFooter, SidebarTop } from "@/components/Sidebar";
import Stepper from "@/components/Stepper";
import AccountCreationTopBar from "@/components/TopBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create User - MyJunuvo",
  description: " Create a new user account",
};

export default function CreateUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:grid md:grid-cols-3 min-h-screen !w-full">
      <div className={`md:col-span-1 hidden md:block sticky top-0 h-screen`}>
        <Sidebar />
      </div>

      <div className=" md:hidden sticky top-0 z-10 !w-full ">
        <AccountCreationTopBar />
      </div>
      <div className="p-5 md:!hidden">
        <SidebarTop />
      </div>
      {/* Stepper for mobile */}
      <div className="flex justify-center md:hidden px-1">
        <Stepper />
      </div>

      <div className="p-5 col-span-3 md:col-span-2 ">
        {children}
        <div className="md:hidden flex justify-center">
          <SidebarFooter />
        </div>
      </div>
    </div>
  );
}
