'use client';
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "../icons/ChevronDown";

type Option = {
  name: string;
  link: string;
};

type SelectProps = {
  className?: string;
  ariaLabel?: string;
  options: Option[];
};

export const Select: React.FC<SelectProps> = ({
  className = '',
  ariaLabel,
  options,
}) => {
  const [selected, setSelected] = useState<Option>(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`relative w-full max-w-xs ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={toggleDropdown}
        className="text-white bg-[#374151] hover:bg-[#4B5563] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center justify-between w-full"
      >
        {selected.name}
        <ChevronDown className="ml-2 w-4 h-4" />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-[#374151] rounded-lg shadow-sm text-white space-y-1">
          {options.map((option) => (
            <li key={option.name}>
              <a
                href={option.link}
                onClick={() => handleSelect(option)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-[#4B5563] rounded-lg"
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
