import fs from 'node:fs';
import { BLOGS } from '../src/data/blogsData.js';

console.log('Running comprehensive SEO & Static Source verification on all 10 blogs...');
let allPassed = true;

for (const blog of BLOGS) {
  const filePath = `dist/blogs/${blog.slug}/index.html`;
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: Missing ${filePath}`);
    allPassed = false;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');

  const checks = {
    'H1 tag': content.includes('<h1'),
    'Table of Contents': content.includes('Table of Contents'),
    'Specs Table': content.includes('<table'),
    'Figure/Figcaption': content.includes('<figure') && content.includes('<figcaption'),
    'Breadcrumbs': content.includes('aria-label="Breadcrumb"'),
    'BlogPosting JSON-LD': content.includes('"@type": "BlogPosting"'),
    'BreadcrumbList JSON-LD': content.includes('"@type": "BreadcrumbList"'),
    'GSC tag 1': content.includes('rjgpW7Ucd8gKi2nq3K3sSmUNyxxVzHWFIggZbf7BGg8'),
    'GSC tag 2': content.includes('rFsozkGyIzrV21L2CEh1L0w86CRXI7VVhA6PF3I-RpE'),
    'Main Keyword': content.includes(blog.mainKeyword),
    'File length > 40k': content.length > 40000
  };

  const failed = Object.entries(checks).filter(([_, pass]) => !pass).map(([name]) => name);
  if (failed.length > 0) {
    console.error(`FAIL: ${blog.slug} failed checks: ${failed.join(', ')}`);
    allPassed = false;
  } else {
    console.log(`✓ PASS: ${blog.slug} (${content.length} bytes, all 11 checks passed)`);
  }
}

// Homepage checks
const homePath = 'dist/index.html';
const homeContent = fs.readFileSync(homePath, 'utf8');
const homeChecks = {
  'H1 tag': homeContent.includes('<h1'),
  'WebSite JSON-LD': homeContent.includes('"@type": "WebSite"'),
  'GSC tag 1': homeContent.includes('rjgpW7Ucd8gKi2nq3K3sSmUNyxxVzHWFIggZbf7BGg8'),
  'GSC tag 2': homeContent.includes('rFsozkGyIzrV21L2CEh1L0w86CRXI7VVhA6PF3I-RpE'),
  'File length > 40k': homeContent.length > 40000
};
const homeFailed = Object.entries(homeChecks).filter(([_, pass]) => !pass).map(([name]) => name);
if (homeFailed.length > 0) {
  console.error(`FAIL: Homepage failed checks: ${homeFailed.join(', ')}`);
  allPassed = false;
} else {
  console.log(`✓ PASS: Homepage (${homeContent.length} bytes, all 5 checks passed)`);
}

// Sitemap & Robots
if (!fs.existsSync('public/sitemap.xml')) {
  console.error('FAIL: Missing public/sitemap.xml');
  allPassed = false;
} else {
  console.log('✓ PASS: public/sitemap.xml verified');
}

if (!fs.existsSync('public/robots.txt')) {
  console.error('FAIL: Missing public/robots.txt');
  allPassed = false;
} else {
  console.log('✓ PASS: public/robots.txt verified');
}

if (allPassed) {
  console.log('\n🎉 ALL VERIFICATION CHECKS PASSED PERFECTLY!');
} else {
  process.exit(1);
}
