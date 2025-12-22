import React from "react";

interface ICard extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
function Card({ children, className }: ICard) {
  return (
    <div
      className={
        "w-full p-6 md:p-10 !bg-white shadow-xl rounded-2xl border border-gray-100 " +
        className
      }
    >
      {children}
    </div>
  );
}
export default Card;
