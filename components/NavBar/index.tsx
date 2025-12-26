import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white h-[70px] border-b border-secondary flex justify-end items-center px-5">
      <div className="h-8 w-8 relative z-0 flex items-center justify-center">
        <Bell className="h-7 w-7 fill-gray-500 text-gray-500" />
        <div className="absolute top-0 right-0 text-[10px] text-white bg-[#F56630] h-4 w-4 rounded-full flex justify-center items-center">
          4
        </div>
      </div>
    </header>
  );
}
