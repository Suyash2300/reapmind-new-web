export type HireStackVisual = {
  title: string;
  subtitle: string;
  items: readonly { src: string; label: string }[];
};

export function hireStackAriaLabel(stack: HireStackVisual) {
  const labels = stack.items.map((item) => item.label).join(", ");
  return `${stack.title} with ${labels}`;
}
