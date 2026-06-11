/** Premium client logos — same set as homepage / nodejs-hire (white on dark). */
export const topTechClientLogos = [
  { name: "Bosch", src: "/nodejs-hire/bosch.png" },
  { name: "Oracle", src: "/nodejs-hire/oracle.png" },
  { name: "Disney", src: "/nodejs-hire/disney-client.png" },
  { name: "Siemens", src: "/nodejs-hire/siemens-client.png" },
  { name: "Times Group", src: "/nodejs-hire/client-logos-21.png" },
  { name: "Hyundai", src: "/nodejs-hire/client-logos-6.png" },
  { name: "Zydus", src: "/nodejs-hire/client-logos-23.png" },
  { name: "Paw Space", src: "/nodejs-hire/client-logos-14.png" },
  { name: "Yarnx", src: "/nodejs-hire/client-logos-22.png" },
] as const;

/** Subset for contact / consultation grids (Disney, Siemens, Times, Hyundai, etc.). */
export const topTechConsultationLogos = topTechClientLogos.slice(0, 6);
