import React from "react";

type NavButtonPrimaryProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
  tabIndex?: number;
};

export const NavButtonPrimary: React.FC<NavButtonPrimaryProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  tabIndex,
}) => {
  return (
    <button
      tabIndex={tabIndex}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`
        bg-[#4F46E5]
        text-[#FFFFFF] text-sm font-medium px-4 py-2
        rounded-md
        hover:bg-[#4338CA]
        transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6B7280]
        ${className}
      `}
    >
      {children}
    </button>
  );
};
