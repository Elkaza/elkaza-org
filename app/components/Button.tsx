"use client";
import Link from "next/link";
import React from "react";

type Variant = "filled" | "outline" | "ghost";
type Size = "sm" | "md";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = Common & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = Common & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

function classes(variant: Variant, size: Size) {
  const base = "inline-flex items-center justify-center rounded-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]";
  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-sm md:text-base",
  };
  const variants: Record<Variant, string> = {
    filled: "text-[var(--on-primary)]" + " " + "bg-[var(--primary)] hover:brightness-95",
    outline: "border border-[var(--primary)] text-[var(--primary)] hover:bg-[#f1f3f4] dark:hover:bg-[#2a2a2a]",
    ghost: "text-[var(--primary)] hover:bg-[#f1f3f4] dark:hover:bg-[#2a2a2a]",
  };
  return `${base} ${sizes[size]} ${variants[variant]}`;
}

export default function Button(props: ButtonProps | LinkProps) {
  if ("href" in props) {
    const { variant = "filled", size = "md", className = "", children, href, ...linkRest } = props as LinkProps & Required<Pick<LinkProps, "variant" | "size" | "className" | "children" | "href">>;
    const cls = `${classes(variant, size)} ${className}`;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }
  const { variant = "filled", size = "md", className = "", children, ...btnRest } = props as ButtonProps & Required<Pick<ButtonProps, "variant" | "size" | "className" | "children">>;
  const cls = `${classes(variant, size)} ${className}`;
  return (
    <button className={cls} {...btnRest}>
      {children}
    </button>
  );
}
