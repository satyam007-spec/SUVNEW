import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_DATA } from '../data/seoData';
import { BLOGS } from '../data/blogsData';

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Find matching SEO config for current path
    const seo = SEO_DATA[pathname] || {
      title: 'SUVHUB | SUV Reviews, Comparisons & Guides India',
      description: 'Explore in-depth SUV reviews, head-to-head comparisons, and practical family buying guides tailored for Indian road conditions.',
      mainKeyword: 'SUV reviews India',
      relatedKeywords: ['best family SUVs', 'SUV car comparisons']
    };

    // 1. Title rule: strictly between 30-60 characters
    document.title = seo.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Meta description: 120-160 characters
    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'keywords', `${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`);

    // 4. Canonical URL
    const canonicalUrl = window.location.origin + (pathname === '/' ? '/' : pathname);
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 5. Image selection
    const isBlog = pathname.startsWith('/blogs/') && pathname !== '/blogs';
    const blog = isBlog ? BLOGS.find((b) => `/blogs/${b.slug}` === pathname) : null;
    const rawImage = blog ? blog.image : '/images/mahindra-xuv700.webp';
    const ogImage = rawImage.startsWith('http') ? rawImage : `${window.location.origin}${rawImage}`;

    // 6. OpenGraph tags
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:type', isBlog ? 'article' : 'website');
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:site_name', 'SUVHUB');
    setMetaTag('property', 'og:image', ogImage);

    // 7. Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 8. Schema.org JSON-LD Structured Data
    let scriptTag = document.getElementById('suvhub-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'suvhub-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [];

    if (pathname === '/') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SUVHUB',
        url: window.location.origin + '/',
        description: seo.description,
        publisher: {
          '@type': 'Organization',
          name: 'SUVHUB',
          logo: {
            '@type': 'ImageObject',
            url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=75'
          }
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${window.location.origin}/blogs?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      });
    } else if (isBlog && blog) {
      // BlogPosting Schema
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        headline: blog.title,
        description: blog.excerpt,
        image: [blog.image],
        datePublished: '2026-10-15T00:00:00+05:30',
        dateModified: '2026-10-15T00:00:00+05:30',
        author: {
          '@type': 'Organization',
          name: blog.author || 'SUVHUB Editorial Team',
          url: `${window.location.origin}/about`
        },
        publisher: {
          '@type': 'Organization',
          name: 'SUVHUB',
          logo: {
            '@type': 'ImageObject',
            url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=75'
          }
        },
        keywords: `${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`
      });

      // BreadcrumbList Schema
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${window.location.origin}/`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'SUV Blogs',
            item: `${window.location.origin}/blogs`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: blog.title,
            item: canonicalUrl
          }
        ]
      });
    } else {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: seo.title,
        description: seo.description,
        url: canonicalUrl,
        publisher: {
          '@type': 'Organization',
          name: 'SUVHUB'
        },
        keywords: `${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`
      });
    }

    scriptTag.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
  }, [pathname]);

  return null;
}
