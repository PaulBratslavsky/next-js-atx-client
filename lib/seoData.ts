interface SEOMetadata {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
}

interface PageSEO {
    [key: string]: SEOMetadata;
}

const siteUrl = 'http://localhost:3000';

export const seoData: PageSEO = {
    home: {
        title: 'Next.js ATX - Austin Monthly Meetup',
        description: 'Join us for a monthly meetup to learn and share your skills.',
        keywords: ['home', 'welcome', 'main'],
        canonicalUrl: siteUrl,
    },
    contact: {
        title: 'Contact Us | Next.js ATX',
        description: 'Get in touch with us for inquiries or support.',
        keywords: ['contact', 'support', 'inquiries'],
        canonicalUrl: `${siteUrl}/contact`,
    },
    blog: {
        title: 'Blog | Next.js ATX',
        description: 'Read our latest articles and stay updated with our blog.',
        keywords: ['blog', 'articles', 'news'],
        canonicalUrl: `${siteUrl}/blog`,
    },
    portfolio: {
        title: 'Portfolio | Next.js ATX',
        description: 'Explore our portfolio of projects and works.',
        keywords: ['portfolio', 'projects', 'works'],
        canonicalUrl: `${siteUrl}/portfolio`,
    },
};

export const getPortfolioProjectSEO = (id: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Portfolio | Next.js ATX`,
    description: excerpt,
    keywords: ['portfolio', 'project', title.toLowerCase()],
    canonicalUrl: `${siteUrl}/portfolio/${id}`,
});

export const getBlogPostSEO = (slug: string, title: string, excerpt: string): SEOMetadata => ({
    title: `${title} | Blog | Next.js ATX`,
    description: excerpt,
    keywords: ['blog', 'article', ...title.toLowerCase().split(' ')],
    canonicalUrl: `${siteUrl}/blog/${slug}`,
});