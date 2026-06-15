"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { teamConfig } from "@/lib/team-config";

const AVATAR_SIZE =
  "h-[9.5rem] w-[9.5rem] sm:h-[10.5rem] sm:w-[10.5rem] lg:h-[11.5rem] lg:w-[11.5rem]";

/** Leadership row — matches live site (3 experts, one row) */
const expertMembers = [
  teamConfig.members[0],
  teamConfig.members[1],
  teamConfig.members[3],
];

export function TeamGrid() {
  return (
    <section className="section-app bg-surface-dark py-16 sm:py-20">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-display font-bold tracking-tight text-white">Our Experts</h2>
        </FadeIn>

        <ul className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-10">
          {expertMembers.map((member, i) => (
            <li key={member.name}>
              <FadeIn delay={i * 0.08} className="flex flex-col items-center text-center">
                <div
                  className={`relative shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 ${AVATAR_SIZE}`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 152px, 184px"
                  />
                </div>
                <h3 className="mt-5 text-h5 font-bold text-white sm:text-h4">{member.name}</h3>
                <p className="mt-1.5 max-w-[14rem] text-sm text-white/65 sm:text-para">
                  {member.role}
                </p>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
