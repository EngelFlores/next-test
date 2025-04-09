import React from "react";
import Link from "next/link";

type InlineLinkProps = {
  ariaLabel?: string;
  href: string;
  pathname?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  tabIndex?: number;
};

export const InlineLink: React.FC<InlineLinkProps> = ({ ariaLabel, href, tabIndex, pathname, children, className = '', variant = 'light', }) => {
  const isActive = pathname === href;
  const baseClasses = `
  rounded-md
  transition-colors
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-offset-2
`;

  const variantClasses =
    variant === 'dark'
      ? `
    text-[#D1D5DB]
    hover:text-white
    focus-visible:ring-white
  `
      : `
    text-[#6B7280]
    hover:text-[#1F2937]
    focus-visible:ring-[#6B7280]
  `;

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      className={`
        ${baseClasses}
        ${variantClasses}
        ${isActive ? 'underline underline-offset-2' : ''}
        ${className}
      `}
    >
      {children}
    </Link>
  );
};
