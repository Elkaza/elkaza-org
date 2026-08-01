import type { HTMLAttributes, ReactNode } from "react";

type TypographyProps<T extends HTMLElement> = HTMLAttributes<T> & {
  children: ReactNode;
  className?: string;
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function PageTitle({ children, className = "", ...props }: TypographyProps<HTMLHeadingElement>) {
  return (
    <h1
      className={joinClasses("max-w-4xl break-words text-4xl font-extrabold leading-[1.05] tracking-normal text-main sm:text-5xl md:text-6xl", className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className = "", ...props }: TypographyProps<HTMLHeadingElement>) {
  return (
    <h2
      className={joinClasses("break-words text-2xl font-semibold leading-tight tracking-normal text-main md:text-3xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function CardTitle({ children, className = "", ...props }: TypographyProps<HTMLHeadingElement>) {
  return (
    <h3
      className={joinClasses("break-words text-lg font-semibold leading-tight tracking-normal text-main", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function Eyebrow({ children, className = "", ...props }: TypographyProps<HTMLParagraphElement>) {
  return (
    <p
      className={joinClasses("border-l-2 border-blue-700 pl-3 text-xs font-extrabold uppercase tracking-normal text-blue-800 dark:text-blue-300", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function MetaLabel({ children, className = "", ...props }: TypographyProps<HTMLParagraphElement>) {
  return (
    <p
      className={joinClasses("text-xs font-extrabold uppercase tracking-normal text-muted", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function BodyLarge({ children, className = "", ...props }: TypographyProps<HTMLParagraphElement>) {
  return (
    <p className={joinClasses("break-words text-lg leading-relaxed text-secondary md:text-xl", className)} {...props}>
      {children}
    </p>
  );
}

export function Body({ children, className = "", ...props }: TypographyProps<HTMLParagraphElement>) {
  return (
    <p className={joinClasses("break-words text-base leading-relaxed text-muted", className)} {...props}>
      {children}
    </p>
  );
}
