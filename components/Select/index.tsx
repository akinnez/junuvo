"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { ChevronDown, Check, } from "lucide-react";
import Image from "next/image";
import SearchInput from "../SearchInput";

/**
 * --- 1. Type Definitions ---
 */

// Define props for the CustomSelect component
export type CustomSelectProps = {
  id: string;
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
  value?: string | undefined; // Controlled value
  onChange: (value: string) => void;
  // Custom classes for styling different parts
  header?: string;
  className?: string; // Wrapper class
  buttonClass?: string; // Select button class
  listClass?: string; // Dropdown list container class
  disabled?: boolean;
  searchable?: boolean;
  required?: boolean;
  // Optional custom renderers for flexibility
  renderOption?: (option: Option, isSelected: boolean) => React.ReactNode;
};

// Default rendering for an option, leveraging the Option's icon property
const DefaultOptionRenderer = (option: Option, isSelected: boolean) => (
  <div className="flex items-center justify-between px-3 py-2 text-gray-700">
    <div className="flex items-center space-x-3">
      {/* Conditionally render the icon if provided */}
      {option.icon && (
        <Image
          alt="icon"
          width={20}
          height={20}
          src={option.icon}
          className="rounded-full h-5 w-5"
        />
      )}
      {/* Label is treated as ReactNode for flexibility */}
      <span className="truncate">{option.label}</span>
    </div>
    {isSelected && (
      <Check className="w-5 h-5 text-indigo-600" aria-hidden="true" />
    )}
  </div>
);

/**
 * --- 2. Custom Select (Combobox) Component ---
 */

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  name,
  label,
  header,
  options,
  placeholder = "Select an option",
  value,
  onChange,
  className = "",
  buttonClass = "",
  listClass = "",
  disabled = false,
  searchable = true,
  required,
  renderOption = DefaultOptionRenderer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");

  const comboboxRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Determine the currently selected option object
  const selectedOption = useMemo(
    () => options.find((opt) => opt.value === value),
    [options, value]
  );

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options;
    const lowerSearchTerm = searchTerm.toLowerCase();

    return options.filter((opt) => {
      // Prioritize searching on the string version of the label/value
      const labelText =
        typeof opt.label === "string"
          ? opt.label.toLowerCase()
          : String(opt.value).toLowerCase();

      return labelText.includes(lowerSearchTerm);
    });
  }, [options, searchTerm]);

  // Reset active index when filtered options change
  useEffect(() => {
    if (isOpen) {
      const selectedIndex = filteredOptions.findIndex(
        (opt) => opt.value === value
      );
      // Set active index to selected item, or the first item if nothing is selected
      setActiveIndex(
        selectedIndex >= 0 ? selectedIndex : filteredOptions.length > 0 ? 0 : -1
      );
    }
  }, [filteredOptions, isOpen, value]);

  // Focus the search input when the dropdown opens
  useEffect(() => {
    if (isOpen && searchable) {
      // Use a short delay to ensure the element is visible before focusing
      const timer = setTimeout(() => searchInputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, searchable]);

  // --- Interaction Handlers ---

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setSearchTerm(""); // Clear search on close
      buttonRef.current?.focus();
    }
  }, [isOpen]);

  const handleSelect = useCallback(
    (option: Option) => {
      if (option.disabled) return;
      onChange(option.value);
      setIsOpen(false);
      setSearchTerm("");
      buttonRef.current?.focus();
    },
    [onChange]
  );

  // // Handle clearing the selected value
  // const handleClear = useCallback(
  //   (e: React.MouseEvent) => {
  //     e.stopPropagation(); // Prevent button click handler from toggling dropdown
  //     onChange("");
  //     buttonRef.current?.focus();
  //   },
  //   [onChange]
  // );

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboboxRef.current &&
        !comboboxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation logic
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const listItems = filteredOptions.length;

      // Key: Escape - Close dropdown
      if (event.key === "Escape") {
        setIsOpen(false);
        setSearchTerm("");
        buttonRef.current?.focus();
        return;
      }

      // Key: Enter - Select option
      if (event.key === "Enter" && isOpen && activeIndex >= 0) {
        event.preventDefault();
        handleSelect(filteredOptions[activeIndex]);
        return;
      }

      // Key: Space on button - Open/Close dropdown
      if (event.key === " " && event.target === buttonRef.current && !isOpen) {
        event.preventDefault();
        setIsOpen(true);
        setActiveIndex(filteredOptions.length > 0 ? 0 : -1);
        return;
      }

      if (listItems === 0) return;

      // Key: Arrow Down/Up for navigation
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setActiveIndex(event.key === "ArrowDown" ? 0 : listItems - 1);
        } else {
          let newIndex;
          if (event.key === "ArrowDown") {
            newIndex = (activeIndex + 1) % listItems;
          } else {
            newIndex = (activeIndex - 1 + listItems) % listItems;
          }
          setActiveIndex(newIndex);
          listRef.current?.children[newIndex]?.scrollIntoView({
            block: "nearest",
          });
        }
        return;
      }
    },
    [isOpen, activeIndex, filteredOptions, handleSelect]
  );

  // --- Rendering Logic ---

  // ARIA attributes for the active item
  const activeId = activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined;

  const currentLabelDisplay = selectedOption ? (
    <div className="flex gap-x-3 items-center">
      {selectedOption.icon && (
        <Image
          alt="icon"
          width={20}
          height={20}
          src={selectedOption.icon as string}
          className="rounded-full h-5 w-5"
        />
      )}
      {selectedOption.label}
    </div>
  ) : (
    <span className="text-gray-500">{placeholder}</span>
  );

  return (
    <div
      className={`relative flex flex-col space-y-1 ${className}`}
      ref={comboboxRef}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-x-2"
        >
          {label} {required && <sup className="text-red-600">*</sup>}
        </label>
      )}

      {/* Combobox Button - The main control */}
      <button
        id={id}
        name={name}
        ref={buttonRef}
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-controls={isOpen ? `${id}-list` : undefined}
        aria-haspopup="listbox"
        aria-activedescendant={activeId}
        className={`
          flex justify-between items-center w-full text-left
          border rounded-md p-4 shadow-sm transition-all duration-150 group
          ${
            disabled
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-white text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          }
          ${isOpen ? "ring-2 ring-primary border-primary" : "border-gray-400"}
          ${buttonClass}
        `}
      >
        <span className="truncate flex-1">{currentLabelDisplay}</span>

        {/* Clear Button (Optional) */}
        {/* {selectedOption && !disabled && (
          <div
            onClick={handleClear}
            className="p-1 rounded-full text-gray-500 hover:text-red-500 hover:bg-gray-100 transition-colors duration-150"
            aria-label="Clear selection"
          >
            <X className="w-4 h-4" />
          </div>
        )} */}

        {/* Dropdown Icon */}
        <ChevronDown
          className={`w-4 h-4 ml-2 transition-transform text-gray-400 group-hover:text-indigo-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Options List Container */}
      {isOpen && (
        <div
          className={`absolute z-20 top-[calc(100%+4px)] w-full bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-in fade-in-0 slide-in-from-top-1 ${listClass}`}
          // Match the width of the parent combobox container
          style={{ minWidth: comboboxRef.current?.offsetWidth }}
        >
          {/* Optional Header section  */}
          {header && (
            <div className="text-tertiary font-semibold mb-3">{header}</div>
          )}
          {/* Optional Search Input */}
          {searchable && (
            <SearchInput label={label} searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchInputRef={searchInputRef} />
          )}

          <ul
            id={`${id}-list`}
            ref={listRef}
            role="listbox"
            tabIndex={-1} // Focusable by script only
            className="max-h-60 overflow-y-auto p-1 "
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, index) => {
                const isSelected = opt.value === value;
                const isActive = index === activeIndex;

                return (
                  <li
                    key={opt.value}
                    id={`${id}-option-${index}`}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={opt.disabled}
                    onClick={() => handleSelect(opt)}
                    className={`
                      cursor-pointer rounded-lg transition-colors duration-100 text-sm
                      ${
                        opt.disabled
                          ? "text-gray-400 cursor-not-allowed bg-gray-50"
                          : "text-primary"
                      }
                      ${
                        isActive
                          ? "bg-indigo-50 ring-1 ring-primary"
                          : "hover:bg-gray-100"
                      }
                      ${
                        isSelected && !isActive
                          ? "bg-indigo-100 font-medium"
                          : ""
                      }
                    `}
                    // Mouse events manage activeIndex when hovering/moving mouse
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(-1)}
                  >
                    {/* Render the option content using the custom renderer */}
                    {renderOption(opt, isSelected)}
                  </li>
                );
              })
            ) : (
              <li className="p-3 text-gray-500 text-center text-sm">
                No results found for "
                <span className="font-semibold">{searchTerm}</span>"
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
