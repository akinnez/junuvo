"use client";

import { PageLayoutProps } from "..";

export function CardPageLayout({
  children,
  title,
  description,
  className,
}: PageLayoutProps & { className?: string }) {
  return (
    <div className="grid grid-cols-3 rounded-xl">
      <div className="col-span-1 space-y-1.5">
        <h3 className="text-gray-900 font-bold">{title}</h3>
        <span className="text-gray-500 font-semibold !text-xs">
          {description}
        </span>
      </div>
      <div className={`col-span-2 w-full mx-auto  ${className}`}>
        {children}
      </div>
    </div>
  );
}
