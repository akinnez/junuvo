"use client";

import React from "react";
import { MinusCircle, PlusCircle } from "lucide-react";

export default function QuantitySelector({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) {
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="w-full max-w-sm space-y-1.5">
      {/* Label */}
      <label className="block font-semibold text-sm text-gray-900 mb-2">
        Quantity
      </label>

      {/* Control Box */}
      <div className="flex items-center justify-between w-full h-12 px-4 border border-slate-200 rounded-lg bg-white shadow-sm">
        {/* Decrement Button */}
        <button
          onClick={decrement}
          type="button"
          className="transition-colors hover:text-blue-600 active:scale-95 disabled:opacity-30"
          disabled={quantity === 0}
          aria-label="Decrease quantity"
        >
          <MinusCircle className="w-6 h-6 text-slate-500" />
        </button>

        {/* Current Quantity */}
        <span className="text-lg font-medium text-slate-400 tabular-nums">
          {quantity}
        </span>

        {/* Increment Button */}
        <button
          onClick={increment}
          type="button"
          className="transition-colors hover:text-blue-600 active:scale-95"
          aria-label="Increase quantity"
        >
          <PlusCircle className="w-6 h-6 text-slate-500" />
        </button>
      </div>
    </div>
  );
}
