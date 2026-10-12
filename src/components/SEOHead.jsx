import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_DATA } from '../data/seoData';

export default function SEOHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Find matching SEO config for current path
    const seo = SEO_DATA[pathname] || {
      title: 'SUVHUB | Discover, Compare & Drive SUVs',
      description: 'Explore Indian SUV reviews, comparisons, buying guides, and automotive trends at SUVHUB.',
      mainKeyword: 'SUV reviews India',
      relatedKeywords: ['family SUVs', 'car comparisons']
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

    // 4. OpenGraph tags
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:type', pathname.startsWith('/blogs/') ? 'article' : 'website');
    setMetaTag('property', 'og:url', window.location.origin + pathname);

    // 5. Twitter Card tags
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);

    // 6. Schema.org JSON-LD Structured Data for AEO / Rich Snippets
    let scriptTag = document.getElementById('suvhub-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'suvhub-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": pathname.startsWith('/blogs/') ? "BlogPosting" : "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": window.location.origin + pathname,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.origin + pathname
      },
      "publisher": {
        "@type": "Organization",
        "name": "SUVHUB",
        "logo": {
          "@type": "ImageObject",
          "url": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=75"
        }
      },
      "keywords": [seo.mainKeyword, ...seo.relatedKeywords].join(', ')
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
}
