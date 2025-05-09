import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export const ChevronDown = (props: IconProps) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.23431 5.83429C4.54673 5.52187 5.05327 5.52187 5.36569 5.83429L8 8.46861L10.6343 5.83429C10.9467 5.52187 11.4533 5.52187 11.7657 5.83429C12.0781 6.14671 12.0781 6.65324 11.7657 6.96566L8.56569 10.1657C8.25327 10.4781 7.74673 10.4781 7.43431 10.1657L4.23431 6.96566C3.9219 6.65324 3.9219 6.14671 4.23431 5.83429Z" fill="white" />
  </svg>
);
