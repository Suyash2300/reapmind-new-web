type NsMetricsStripProps = {
  items: readonly { value: string; label: string }[];
};

export function NsMetricsStrip({ items }: NsMetricsStripProps) {
  return (
    <div className="border-b border-white/[0.06] bg-[#050505]">
      <div className="container-app">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/[0.06] md:py-0">
          {items.map((item) => (
            <div key={item.label} className="md:px-6 md:py-10 md:first:pl-0 md:last:pr-0">
              <dt className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/35 sm:text-xs">
                {item.label}
              </dt>
              <dd className="mt-2 text-[clamp(1.5rem,3vw,2.25rem)] font-bold tabular-nums tracking-tight text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
