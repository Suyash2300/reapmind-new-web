import { forwardRef, type ButtonHTMLAttributes } from "react";

/** Button that tolerates extension-injected attrs (e.g. fdprocessedid) during hydration. */
export const HydrationButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function HydrationButton(props, ref) {
  return <button ref={ref} suppressHydrationWarning {...props} />;
});
