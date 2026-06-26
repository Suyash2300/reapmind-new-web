import { Metadata } from 'next';
import { ImmersiveTravelClient } from './ImmersiveTravelClient';

/* ─── SEO ─────────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'How AR is Transforming Travel & Tourism Industry? | ReapMind Innovations',
  description:
    'Discover how AR VR is transforming travel and tourism, offering enhanced experiences through cutting-edge tools and apps.',
  keywords: [
    'AR VR travel',
    'immersive technology tourism',
    'augmented reality travel apps',
    'virtual reality tourism',
    'AR travel experience',
    'immersive technology',
    'ReapMind Innovations',
  ],
  alternates: {
    canonical:
      'https://reapmind.com/how-is-immersive-technology-reshaping-travel-and-tourism/',
  },
  openGraph: {
    title: 'How AR is Transforming Travel & Tourism Industry?',
    description:
      'Discover how AR VR is transforming travel and tourism, offering enhanced experiences through cutting-edge tools and apps.',
    url: 'https://reapmind.com/how-is-immersive-technology-reshaping-travel-and-tourism/',
    siteName: 'ReapMind Innovations',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'How AR is Transforming Travel & Tourism Industry?',
      },
    ],
    type: 'article',
    publishedTime: '2024-07-17T00:00:00Z',
    authors: ['ReapMind Innovations'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AR is Transforming Travel & Tourism Industry?',
    description:
      'Discover how AR VR is transforming travel and tourism, offering enhanced experiences through cutting-edge tools and apps.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How AR is Transforming Travel & Tourism Industry?',
  description:
    'Discover how AR VR is transforming travel and tourism, offering enhanced experiences through cutting-edge tools and apps.',
  image:
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80',
  datePublished: '2024-07-17T00:00:00Z',
  dateModified: '2024-07-17T00:00:00Z',
  author: { '@type': 'Organization', name: 'ReapMind Innovations' },
  publisher: {
    '@type': 'Organization',
    name: 'ReapMind Innovations',
    logo: {
      '@type': 'ImageObject',
      url: 'https://reapmind.com/wp-content/uploads/2024/07/reapmind-logo.svg',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reapmind.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://reapmind.com/blogs/' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How AR is Transforming Travel & Tourism Industry?',
        item: 'https://reapmind.com/how-is-immersive-technology-reshaping-travel-and-tourism/',
      },
    ],
  },
};

export default function ImmersiveTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ImmersiveTravelClient />
    </>
  );
}
