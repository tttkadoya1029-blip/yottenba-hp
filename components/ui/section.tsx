import { PropsWithChildren } from "react";

export function Section({
  id,
  className = "",
  children,
}: PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
