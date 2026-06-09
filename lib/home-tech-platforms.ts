/** Homepage — Tech and Platforms we use (from https://reapmind.com/) */

export type TechPlatformItem = {
  id: string;
  name: string;
  /** Simple Icons slug — https://simpleicons.org */
  icon: string;
  /** Brand hex without # (optional; defaults to white on dark tiles) */
  color?: string;
  /** Local or full URL when CDN slug is unavailable (e.g. AWS, Azure, IBM) */
  iconSrc?: string;
};

export type TechPlatformCategory = {
  id: string;
  title: string;
  shortLabel: string;
  tagline: string;
  accentClass: string;
  borderClass: string;
  items: readonly TechPlatformItem[];
};

export const homeTechPlatforms = {
  eyebrow: "Our Stack",
  title: "Tech and Platforms we use",
  subtitle:
    "Production-grade tools across the full software lifecycle — languages, frameworks, cloud, data, and DevOps.",
  autoPlayMs: 5500,
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      shortLabel: "Languages",
      tagline: "Polyglot engineering for every product surface",
      accentClass: "text-primary",
      borderClass: "border-primary/40 shadow-[0_0_32px_-8px_rgba(26,105,253,0.45)]",
      items: [
        { id: "python", name: "Python", icon: "python", color: "3776AB" },
        { id: "java", name: "Java", icon: "openjdk", color: "437291" },
        { id: "javascript", name: "JavaScript", icon: "javascript", color: "F7DF1E" },
        { id: "cpp", name: "C++", icon: "cplusplus", color: "00599C" },
        { id: "csharp", name: "C#", icon: "csharp", color: "512BD4" },
        { id: "php", name: "PHP", icon: "php", color: "777BB4" },
        { id: "kotlin", name: "Kotlin", icon: "kotlin", color: "7F52FF" },
        { id: "go", name: "Go", icon: "go", color: "00ADD8" },
        { id: "ruby", name: "Ruby", icon: "ruby", color: "CC342D" },
        { id: "swift", name: "Swift", icon: "swift", color: "F05138" },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      shortLabel: "Frameworks",
      tagline: "Modern stacks for web, mobile, and machine learning",
      accentClass: "text-violet-400",
      borderClass: "border-violet-400/40 shadow-[0_0_32px_-8px_rgba(139,92,246,0.4)]",
      items: [
        { id: "react", name: "React", icon: "react", color: "61DAFB" },
        { id: "angular", name: "Angular", icon: "angular", color: "DD0031" },
        { id: "vue", name: "Vue.js", icon: "vuedotjs", color: "4FC08D" },
        { id: "node", name: "Node.js", icon: "nodedotjs", color: "339933" },
        { id: "dotnet", name: ".NET", icon: "dotnet", color: "512BD4" },
        { id: "spring", name: "Spring Boot", icon: "springboot", color: "6DB33F" },
        { id: "rails", name: "Ruby on Rails", icon: "rubyonrails", color: "CC0000" },
        { id: "tensorflow", name: "TensorFlow", icon: "tensorflow", color: "FF6F00" },
        { id: "pytorch", name: "PyTorch", icon: "pytorch", color: "EE4C2C" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Platforms",
      shortLabel: "Cloud",
      tagline: "Enterprise infrastructure at global scale",
      accentClass: "text-cyan-400",
      borderClass: "border-cyan-400/40 shadow-[0_0_32px_-8px_rgba(34,211,238,0.35)]",
      items: [
        { id: "aws", name: "AWS", icon: "amazonaws", color: "FF9900", iconSrc: "/icons/tech/aws.svg" },
        { id: "azure", name: "Azure", icon: "microsoftazure", color: "0078D4", iconSrc: "/icons/tech/azure.svg" },
        { id: "gcp", name: "GCP", icon: "googlecloud", color: "4285F4" },
        { id: "ibm-cloud", name: "IBM Cloud", icon: "ibm", color: "0F62FE", iconSrc: "/icons/tech/ibm.svg" },
        { id: "alibaba", name: "Alibaba Cloud", icon: "alibabacloud", color: "FF6A00" },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      shortLabel: "Databases",
      tagline: "Reliable data layers for every workload",
      accentClass: "text-amber-400",
      borderClass: "border-amber-400/35 shadow-[0_0_32px_-8px_rgba(245,158,11,0.3)]",
      items: [
        { id: "mysql", name: "MySQL", icon: "mysql", color: "4479A1" },
        { id: "postgres", name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
        { id: "mongodb", name: "MongoDB", icon: "mongodb", color: "47A248" },
        { id: "oracle", name: "Oracle", icon: "oracle", color: "F80000" },
        { id: "mssql", name: "MS SQL", icon: "microsoftsqlserver", color: "CC2927" },
        { id: "redis", name: "Redis", icon: "redis", color: "FF4438" },
        { id: "cassandra", name: "Cassandra", icon: "apachecassandra", color: "1287B1" },
      ],
    },
    {
      id: "devops",
      title: "DevOps Tools",
      shortLabel: "DevOps",
      tagline: "Automated pipelines from commit to production",
      accentClass: "text-emerald-400",
      borderClass: "border-emerald-400/35 shadow-[0_0_32px_-8px_rgba(16,185,129,0.3)]",
      items: [
        { id: "git", name: "Git", icon: "git", color: "F05032" },
        { id: "jenkins", name: "Jenkins", icon: "jenkins", color: "D24939" },
        { id: "docker", name: "Docker", icon: "docker", color: "2496ED" },
        { id: "kubernetes", name: "Kubernetes", icon: "kubernetes", color: "326CE5" },
        { id: "ansible", name: "Ansible", icon: "ansible", color: "EE0000" },
        { id: "chef", name: "Chef", icon: "chef", color: "EA1257" },
        { id: "puppet", name: "Puppet", icon: "puppet", color: "FFAE1A" },
      ],
    },
  ] as const satisfies readonly TechPlatformCategory[],
} as const;
