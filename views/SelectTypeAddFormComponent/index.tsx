import React, { useEffect, useState } from "react";

// Define the structure for each option
interface SelectOption {
  value: string;
  label: string;
}

// Define the props for the component
interface SelectTypeProps {
  options: SelectOption[];
  defaultValue: string;
  onSelect: (value: string) => void;
}

const SelectTypeAddForm: React.FC<SelectTypeProps> = ({
  options,
  defaultValue,
  onSelect,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  const handleSelection = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <div className="">
      <p className="text-gray-700 text-sm font-semibold mb-2">Select Type</p>
      <div className="flex gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            // Tailwind classes for the button appearance
            className={`
              flex-1 flex items-center justify-center p-4 rounded-lg cursor-pointer transition-colors duration-200
              ${
                selectedValue === option.value
                  ? "bg-blue-50 border-2 border-button shadow-md text-button" // Selected style
                  : "bg-secondary border border-gray-300 hover:border-button/80 text-gray-800" // Unselected style
              }
            `}
          >
            {/* The actual hidden radio input */}
            <input
              type="radio"
              name="selectType"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleSelection(option.value)}
              className="hidden" // Hide the default radio button
            />

            {/* Custom Radio Button Circle (Mimicking the default look) */}
            <div
              className={`
                w-5 h-5 rounded-full mr-3 flex items-center justify-center border-2 
                ${
                  selectedValue === option.value
                    ? "border-button bg-secondary"
                    : "border-gray-400 bg-secondary"
                }
              `}
            >
              {selectedValue === option.value && (
                <div className="w-2.5 h-2.5 rounded-full bg-button"></div> // Inner dot for selected
              )}
            </div>

            {/* Label Text */}
            <span className="text-sm font-medium whitespace-nowrap">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectTypeAddForm;
