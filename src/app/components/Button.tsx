import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
  variant?: 'light' | 'dark';
  tabIndex?: number;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  variant = 'dark',
  tabIndex,
}) => {

  const baseClasses = `
  text-sm font-medium
  rounded-md
  px-[33px] py-[13px]
  transition-colors
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-offset-2
`;

  const variantClasses =
    variant === 'light'
      ? `
    bg-white
    text-[#4F46E5]
    hover:bg-[#F3F4F6] text-[#6366F1]
    focus-visible:ring-[#6B7280]
  `
      : `
    bg-[#6366F1B2]
    text-white
    hover:bg-[#6366F1]
    focus-visible:ring-[#6B7280]
  `;

  return (
    <button
      type={type}
      tabIndex={tabIndex}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        ${baseClasses}
        ${variantClasses}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
