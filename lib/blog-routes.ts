/** Maps insight-card / legacy paths to canonical blog slugs in blog-post-content */

export const blogSlugAliases: Record<string, string> = {
  "ai-agent-development-cost-for-hr-industry":
    "how-much-does-it-cost-to-develop-an-ai-agent-for-the-human-resource-industry",
  "ai-agent-development-cost-2025": "how-much-does-it-cost-to-develop-an-ai-agent-in-2025",
  "why-your-enterprise-needs-a-custom-intranet-portal":
    "why-your-enterprise-needs-a-custom-intranet-portal-and-how-to-build-one-that-actually-works",
  "how-to-build-an-ai-powered-language-learning-app":
    "how-to-build-an-ai-powered-language-learning-app-features-process-costs-2025-guide",
};

export function resolveBlogSlug(slug: string): string {
  const normalized = slug.replace(/^\/+|\/+$/g, "");
  return blogSlugAliases[normalized] ?? normalized;
}
