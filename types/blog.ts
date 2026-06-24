export interface BlogPostMeta {
  key: string;
  value: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  link: string;
  pubDate: string;
  date: string;
  creator: string;
  content: string;
  excerpt: string;
  status: string;
  type: string;
  categories: string[];
  tags: string[];
  meta: BlogPostMeta[];
}

export interface BlogFilterOptions {
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
}
