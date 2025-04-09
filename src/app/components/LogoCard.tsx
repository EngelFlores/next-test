'use client';

import Image from "next/image";
import React from "react";

type LogoCardProps = {
  label?: string;
  iconUrl?: string;
  onClick?: () => void;
  sizeClass?: string;
  ariaLabel?: string;
};

export const LogoCard: React.FC<LogoCardProps> = ({
  label = "",
  iconUrl = "",
  onClick,
  ariaLabel,
  sizeClass = "w-52 h-12",
}) => {
  return (
    <div onClick={onClick}
      aria-label={ariaLabel}
      className="flex items-center justify-center space-x-2 text-[#9CA3AF] opacity-40 hover:opacity-100 hover:text-gray-800 transition duration-300">
      <div className={`relative ${sizeClass}`}>
        {iconUrl && (
          <Image
            src={iconUrl}
            alt={label}
            fill
            className="object-contain"
          />
        )}
      </div>
    </div>
  );
};
