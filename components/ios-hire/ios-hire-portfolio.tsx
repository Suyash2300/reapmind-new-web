"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHirePortfolio() {
  const { portfolio } = iosHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{portfolio.title}</h2>
          <p className="mt-6 text-para text-white/65">{portfolio.subtitle}</p>
        </motion.div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 scrollbar-none sm:-mx-6 sm:px-6">
          {portfolio.items.map((item, i) => (
            <PortfolioCaseLink
              key={item.title}
              href={item.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="w-[min(88vw,380px)] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950"
            >
              <div className="relative aspect-[4/3] bg-[#f5f5f5]">
                <Image src={item.image} alt={item.title} fill className="object-contain p-4" sizes="380px" />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{item.category}</span>
                <h3 className="mt-2 text-h4 font-bold text-white">{item.title}</h3>
              </div>
            </PortfolioCaseLink>
          ))}
        </div>
      </div>
    </section>
  );
}
