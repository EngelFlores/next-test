import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const Menu = (props: IconProps) => (
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 1H17M1 7H17M1 13H17" stroke="#9CA3AF" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);
