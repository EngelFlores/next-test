'use client';
import React from "react";

type NavButtonSecondaryProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
  tabIndex?: number;
};

export const NavButtonSecondary: React.FC<NavButtonSecondaryProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  tabIndex
}) => {
  return (
    <button
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      type={type}
      className={`
        p-2 rounded-full 
        bg-[#F3F4F6]
        text-[#4F46E5]
        hover:bg-[#E5E7EB]
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B7280]
        ${className}
      `}
    >
      {children}
    </button>
  );
};
