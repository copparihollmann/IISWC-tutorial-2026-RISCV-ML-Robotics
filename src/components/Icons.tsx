import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

export function ExternalIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M14 5h5v5M10 14 19 5M19 13v6H5V5h6" /></svg>;
}

export function CalendarIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" /></svg>;
}

export function ClockIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}

export function LocationIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function PersonIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>;
}

export function CheckIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="m5 12 4 4L19 6" /></svg>;
}

export function ChevronIcon(props: IconProps) {
  return <svg {...baseProps} {...props}><path d="m8 10 4 4 4-4" /></svg>;
}
