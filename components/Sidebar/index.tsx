"use client";
import { routes } from "@/routes";
import Stepper from "../Stepper";
import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="bg-primary min-h-screen z-10 sm:px-3 lg:px-14">
      <div className="py-7 ">
        <div>
          <Image
            src={"/images/logo.svg"}
            alt="Auth Background"
            width={150}
            height={42}
            priority
            className=""
          />
        </div>
        <div className="flex flex-col py-7">
          <SidebarTop />
          <Stepper />
          <div className={`absolute bottom-5`}>
            <SidebarFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

export function SidebarFooter() {
  return (
    <div className="py-5 px-7 rounded-full bg-primary md:bg-white/30 text-sm text-white/90 max-w-[224px] w-full mx-auto md:mx-0">
      Already a member?{" "}
      <Link href={routes.loginUser} className="!text-button">
        Login
      </Link>
    </div>
  );
}

export function SidebarTop() {
  return (
    <div className="text-primary md:text-secondary">
      <h1 className="font-bold text-2xl">Create an account</h1>
      <span className="text-sm">
        Provide the details for each section to get started
      </span>
    </div>
  );
}
