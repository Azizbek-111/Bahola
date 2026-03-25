"use client";

import { cn } from "@/lib/utils";

interface LogoIconProps {
  className?: string;
  size?: number;
}

// SVG icon matching refined logo: two left dashes, one top bar, bold checkmark
export function LogoIcon({ className, size = 32 }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top horizontal bar — above checkmark, slightly right */}
      <line x1="20" y1="14" x2="30" y2="14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Left short dash */}
      <line x1="6" y1="36" x2="1" y2="36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Left longer bar */}
      <line x1="10" y1="21" x2="24" y2="21" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Bold checkmark — vertex at bottom-center, right arm up steep */}
      <line x1="2" y1="28" x2="11" y2="28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Bold checkmark — vertex at bottom-center, right arm up steep */}
      <polyline
        points="18,28 25,36 40,15"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

interface LogoTextProps {
  className?: string;
  collapsed?: boolean;
}

// Logo text: "tez" bold + "tekshir" normal
// Pass textColor to override "tekshir" color (e.g. on always-light auth pages)
export function LogoText({ className, collapsed, textColor }: LogoTextProps & { textColor?: string }) {
  if (collapsed) return null;

  return (
    <span className={cn("text-lg tracking-tight whitespace-nowrap", className)}>
      <span className="font-black text-primary">tez</span>
      <span className={cn("font-semibold", textColor || "text-foreground")}>tekshir</span>
    </span>
  );
}

interface LogoProps {
  collapsed?: boolean;
  className?: string;
  iconSize?: number;
}

export function Logo({ collapsed, className, iconSize = 32 }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary shrink-0">
        <LogoIcon size={iconSize} />
      </div>
      <LogoText collapsed={collapsed} />
    </div>
  );
}
