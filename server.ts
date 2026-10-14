import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer as createViteServer } from 'vite';
import { SEO_DATA } from './src/data/seoData.js';
import { BLOGS } from './src/data/blogsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';
const PORT = 3000;

async function startServer() {
  const app = express();

  let vite: any;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true, port: PORT, host: '0.0.0.0' },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));
  }

  // Handle all HTML document requests with Server-Side Rendering
  app.use('*', async (req, res, next) => {
    const rawUrl = req.originalUrl || req.url;
    const url = rawUrl.split('?')[0];

    // Skip API, assets, or static asset extensions
    if (
      url.startsWith('/@') ||
      url.startsWith('/assets') ||
      url.startsWith('/src') ||
      url.includes('.')
    ) {
      return next();
    }

    try {
      let template: string;
      let render: any;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(rawUrl, template);
        const serverEntry = await vite.ssrLoadModule('/src/entry-server.jsx');
        render = serverEntry.render;
      } else {
        // In production, check for pre-rendered file in dist
        const cleanPath = url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`;
        const directHtml = path.resolve(__dirname, 'dist', cleanPath);
        if (fs.existsSync(directHtml)) {
          return res.status(200).set({ 'Content-Type': 'text/html' }).send(fs.readFileSync(directHtml, 'utf-8'));
        }
        template = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8');
        const serverEntry = await vite.ssrLoadModule('/src/entry-server.jsx');
        render = serverEntry.render;
      }

      // Render React tree to HTML
      const appHtml = render(url);

      // Determine SEO metadata
      const seo = (SEO_DATA as Record<string, any>)[url] || {
        title: 'SUVHUB | SUV Reviews, Comparisons & Guides India',
        description: 'Explore in-depth SUV reviews, head-to-head comparisons, and practical family buying guides tailored for Indian road conditions.',
        mainKeyword: 'SUV reviews India',
        relatedKeywords: ['best family SUVs', 'SUV car comparisons']
      };

      const host = req.get('host') || 'suvhub.vercel.app';
      const protocol = req.protocol || 'https';
      const canonicalUrl = `${protocol}://${host}${url === '/' ? '/' : url}`;
      const isBlog = url.startsWith('/blogs/') && url !== '/blogs';
      const blog = isBlog ? BLOGS.find((b) => `/blogs/${b.slug}` === url) : null;
      const ogImage = blog
        ? blog.image
        : 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80';

      // Build structured data
      const schemas: any[] = [];
      if (url === '/') {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SUVHUB',
          url: `${protocol}://${host}/`,
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
            target: `${protocol}://${host}/blogs?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        });
      } else if (isBlog && blog) {
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
            url: `${protocol}://${host}/about`
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

        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${protocol}://${host}/`
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'SUV Blogs',
              item: `${protocol}://${host}/blogs`
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

      const ogType = isBlog ? 'article' : 'website';
      const jsonLdContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas, null, 2);

      const seoTags = [
        `    <link rel="canonical" href="${canonicalUrl}" />`,
        `    <meta name="keywords" content="${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}" />`,
        `    <meta property="og:title" content="${seo.title}" />`,
        `    <meta property="og:description" content="${seo.description}" />`,
        `    <meta property="og:type" content="${ogType}" />`,
        `    <meta property="og:url" content="${canonicalUrl}" />`,
        `    <meta property="og:site_name" content="SUVHUB" />`,
        `    <meta property="og:image" content="${ogImage}" />`,
        `    <meta name="twitter:card" content="summary_large_image" />`,
        `    <meta name="twitter:title" content="${seo.title}" />`,
        `    <meta name="twitter:description" content="${seo.description}" />`,
        `    <meta name="twitter:image" content="${ogImage}" />`,
        `    <script type="application/ld+json" id="suvhub-jsonld">\n${jsonLdContent}\n    </script>`
      ].join('\n');

      let pageHtml = template;
      pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);

      if (pageHtml.includes('<meta name="description"')) {
        pageHtml = pageHtml.replace(
          /<meta name="description" content=".*?"\s*\/?>/i,
          `<meta name="description" content="${seo.description}" />`
        );
      } else {
        pageHtml = pageHtml.replace('</head>', `  <meta name="description" content="${seo.description}" />\n  </head>`);
      }

      pageHtml = pageHtml
        .replace(/<meta property="og:title" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta property="og:description" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta property="og:type" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta property="og:url" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta property="og:site_name" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta property="og:image" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta name="twitter:card" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta name="twitter:title" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta name="twitter:description" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta name="twitter:image" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<link rel="canonical" href=".*?"\s*\/?>\n?/gi, '')
        .replace(/<meta name="keywords" content=".*?"\s*\/?>\n?/gi, '')
        .replace(/<script type="application\/ld\+json".*?<\/script>\n?/gis, '');

      pageHtml = pageHtml.replace('</head>', `${seoTags}\n  </head>`);
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      res.status(200).set({ 'Content-Type': 'text/html' }).send(pageHtml);
    } catch (e: any) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error('SSR render error:', e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚗 SUVHUB Server running on http://0.0.0.0:${PORT} (SSR enabled)`);
  });
}

startServer();
