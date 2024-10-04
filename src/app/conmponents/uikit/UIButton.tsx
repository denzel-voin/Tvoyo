import clsx from "clsx";
import type { ReactNode } from "react";

interface UIButton {
  children: ReactNode;
  size: "md" | "lg";
  variant: "default" | "primary";
}

export const UIButton = ({ children, size, variant }: UIButton) => {
  const buttonClassName = clsx(
    "btn",
    {
      md: "btn_md",
      lg: "btn_lg",
    }[size],
    {
      default: "btn_default",
      primary: "btn_primary",
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
};
