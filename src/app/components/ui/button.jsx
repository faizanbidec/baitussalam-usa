"use client";

import React from "react";

function cx(...cls) {
  return cls.filter(Boolean).join(" ");
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4";

export const Button = React.forwardRef(function Button(
  { className = "", asChild = false, ...props },
  ref
) {
  const Comp = asChild ? "span" : "button";

  // ✅ Only your own className and base styles will apply — nothing auto-added
  return <Comp ref={ref} className={cx(base, className)} {...props} />;
});
