import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from '../src/entry-server.jsx';
import { SEO_DATA } from '../src/data/seoData.js';
import { BLOGS } from '../src/data/blogsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const BASE_URL =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  process.env.APP_URL ||
  'https://suvhub.vercel.app';

async function prerender() {
  console.log('🚀 Starting SUVHUB Static Pre-rendering...');

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html not found at ${templatePath}. Run vite build first.`);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  // All routes to statically pre-render
  const routes = Object.keys(SEO_DATA);
  console.log(`📑 Pre-rendering ${routes.length} pages...`);

  let successCount = 0;

  for (const url of routes) {
    const seo = SEO_DATA[url] || {
      title: 'SUVHUB | SUV Reviews, Comparisons & Guides India',
      description: 'Explore in-depth SUV reviews, head-to-head comparisons, and practical family buying guides tailored for Indian road conditions.',
      mainKeyword: 'SUV reviews India',
      relatedKeywords: ['best family SUVs', 'SUV car comparisons']
    };

    const canonicalUrl = `${BASE_URL}${url === '/' ? '/' : url}`;
    const isBlog = url.startsWith('/blogs/') && url !== '/blogs';
    const blog = isBlog ? BLOGS.find((b) => `/blogs/${b.slug}` === url) : null;

    // 1. Render React tree to HTML
    const appHtml = render(url);

    // 2. Build structured data JSON-LD
    let structuredData;
    if (url === '/') {
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SUVHUB',
        url: `${BASE_URL}/`,
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
          target: `${BASE_URL}/blogs?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      };
    } else if (isBlog && blog) {
      structuredData = {
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
          url: `${BASE_URL}/about`
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
      };
    } else {
      structuredData = {
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
      };
    }

    // 3. Inject meta tags and prerendered content into template
    let pageHtml = rawTemplate;

    // Title
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);

    // Description
    if (pageHtml.includes('<meta name="description"')) {
      pageHtml = pageHtml.replace(
        /<meta name="description" content=".*?"\s*\/?>/i,
        `<meta name="description" content="${seo.description}" />`
      );
    } else {
      pageHtml = pageHtml.replace(
        '</head>',
        `  <meta name="description" content="${seo.description}" />\n  </head>`
      );
    }

    // Prepare SEO tags to inject into <head>
    const ogType = isBlog ? 'article' : 'website';
    const seoTags = [
      `    <link rel="canonical" href="${canonicalUrl}" />`,
      `    <meta name="keywords" content="${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}" />`,
      `    <meta property="og:title" content="${seo.title}" />`,
      `    <meta property="og:description" content="${seo.description}" />`,
      `    <meta property="og:type" content="${ogType}" />`,
      `    <meta property="og:url" content="${canonicalUrl}" />`,
      `    <meta property="og:site_name" content="SUVHUB" />`,
      `    <meta name="twitter:card" content="summary_large_image" />`,
      `    <meta name="twitter:title" content="${seo.title}" />`,
      `    <meta name="twitter:description" content="${seo.description}" />`,
      `    <script type="application/ld+json" id="suvhub-jsonld">\n${JSON.stringify(structuredData, null, 2)}\n    </script>`
    ].join('\n');

    // Remove old OG/Twitter tags if present in template to avoid duplicates
    pageHtml = pageHtml
      .replace(/<meta property="og:title" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta property="og:description" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta property="og:type" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta property="og:url" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta property="og:site_name" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta name="twitter:card" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta name="twitter:title" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta name="twitter:description" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<link rel="canonical" href=".*?"\s*\/?>\n?/gi, '')
      .replace(/<meta name="keywords" content=".*?"\s*\/?>\n?/gi, '')
      .replace(/<script type="application\/ld\+json".*?<\/script>\n?/gis, '');

    // Inject SEO tags right before </head>
    pageHtml = pageHtml.replace('</head>', `${seoTags}\n  </head>`);

    // Inject rendered React app into <div id="root"></div>
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 4. Save to dist directory structure
    if (url === '/') {
      fs.writeFileSync(path.resolve(distDir, 'index.html'), pageHtml, 'utf-8');
    } else {
      const pageDir = path.resolve(distDir, url.slice(1));
      fs.mkdirSync(pageDir, { recursive: true });
      fs.writeFileSync(path.resolve(pageDir, 'index.html'), pageHtml, 'utf-8');

      // Also write direct .html file for hosts that resolve /blogs/best-suvs.html directly
      fs.writeFileSync(`${pageDir}.html`, pageHtml, 'utf-8');
    }

    successCount++;
    console.log(`  ✓ Pre-rendered: ${url} (length: ${pageHtml.length} chars)`);
  }

  console.log(`✨ Successfully pre-rendered ${successCount} pages with static HTML and SEO metadata!`);
}

prerender().catch((err) => {
  console.error('❌ Pre-rendering failed:', err);
  process.exit(1);
});
