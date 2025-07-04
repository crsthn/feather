import type { SVGProps } from 'react';
const BaseUI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    aria-label="Base UI"
    viewBox="0 0 17 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M9.5 7.015A.477.477 0 0 0 9 7.5V23a8 8 0 0 0 .5-15.985ZM8 9.8V23c-4.418 0-8-3.94-8-8.8V1c4.418 0 8 3.94 8 8.8Z" />
  </svg>
);
export default BaseUI;
