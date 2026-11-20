import type { SVGProps } from "react";

const Flutter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#47C5FB"
      d="M148.6 15.4L43 121l33.8 33.8 139.4-139.4H148.6z"
    />
    <path
      fill="#47C5FB"
      d="M148.6 142.6L97.9 193.3l33.8 33.8 50.7-50.7-33.8-33.8z"
    />
    <path
      fill="#0E47A1"
      d="M76.8 214.3l33.8 33.8 105.6-105.6h-67.6L76.8 214.3z"
    />
    <path
      fill="#00569E"
      d="M148.6 142.6l-33.8 33.8 33.8 33.8 33.8-33.8-33.8-33.8z"
    />
  </svg>
);

export { Flutter };