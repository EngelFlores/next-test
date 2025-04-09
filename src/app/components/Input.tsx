import React from "react";

type InputProps = {
  onClick?: () => void;
  type?: 'email' | 'button' | 'checkbox';
  className?: string;
  ariaLabel?: string;
  placeholder?: string;
  required?: boolean;
  tabIndex?: number;
};

export const Input: React.FC<InputProps> = ({
  type,
  className = '',
  ariaLabel,
  placeholder,
  required,
  tabIndex,
}) => {

  return (
    <input
      aria-label={ariaLabel}
      type={type}
      tabIndex={tabIndex}
      required={required}
      placeholder={placeholder}
      className={`
        w-full rounded-md border 
        border-gray-300 px-4 py-2 
        text-gray-900 shadow-sm 
        focus:ring-2 focus:ring-indigo-500 focus:outline-none
        ${className}
      `}
    />
  );
};
