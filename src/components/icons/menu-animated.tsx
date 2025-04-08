import type { SVGProps } from "react";

export default function MenuAnimatedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Navigation menu"
      {...props}
    >
      <path
        d="M4 12L20 12"
        className="-translate-y-[7px] origin-center transition-all duration-200 ease-in-out group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
      />
      <path
        d="M4 12H20"
        className="origin-center transition-all duration-200 ease-in-out group-aria-expanded:rotate-45"
      />
      <path
        d="M4 12H20"
        className="origin-center translate-y-[7px] transition-all duration-200 ease-in-out group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
      />
    </svg>
  );
}
