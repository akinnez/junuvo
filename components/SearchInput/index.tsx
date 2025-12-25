"use client";
import { Search } from "lucide-react";
import { RefObject, useRef } from "react";

export default function SearchInput({
  label,
  searchTerm,
  searchInputRef,
  setSearchTerm,
}: {
  label?: string;
  searchTerm: string;
  searchInputRef?: RefObject<HTMLInputElement | null>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="p-2 border border-gray-100 flex items-center space-x-2 rounded-md">
      <Search className="w-4 h-4 text-gray-400 ml-1" />
      <input
        ref={searchInputRef}
        type="text"
        placeholder={`Search ${label}...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-1 text-sm border-none focus:ring-0 focus:outline-none"
        aria-label={`Search ${label} options`}
      />
    </div>
  );
}
