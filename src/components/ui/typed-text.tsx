"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TypedTextProps = {
  strings: readonly string[];
  className?: string;
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
};

export function TypedText({
  strings,
  className,
  typeSpeed = 40,
  backSpeed = 40,
  backDelay = 500,
}: TypedTextProps) {
  const [display, setDisplay] = React.useState("");
  const stringIndexRef = React.useRef(0);
  const charIndexRef = React.useRef(0);
  const deletingRef = React.useRef(false);

  React.useEffect(() => {
    const tick = () => {
      const i = stringIndexRef.current;
      const current = strings[i] ?? "";
      const deleting = deletingRef.current;

      if (!deleting) {
        charIndexRef.current += 1;
        setDisplay(current.slice(0, charIndexRef.current));

        if (charIndexRef.current >= current.length) {
          deletingRef.current = true;
          return backDelay;
        }
        return typeSpeed;
      }

      charIndexRef.current -= 1;
      setDisplay(current.slice(0, charIndexRef.current));

      if (charIndexRef.current <= 0) {
        deletingRef.current = false;
        stringIndexRef.current = (i + 1) % strings.length;
        charIndexRef.current = 0;
      }
      return backSpeed;
    };

    let timeout: ReturnType<typeof setTimeout>;
    const schedule = (delay: number) => {
      timeout = setTimeout(() => schedule(tick()), delay);
    };
    schedule(typeSpeed);

    return () => clearTimeout(timeout);
  }, [strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span className={cn("inline-block min-w-[2ch]", className)}>
      {display}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-brand align-middle" />
    </span>
  );
}
