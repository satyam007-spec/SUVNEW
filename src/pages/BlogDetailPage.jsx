import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../data/blogsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  Clock,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  Bookmark,
  Compass,
  List,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find blog matching slug or id
  const blog = BLOGS.find((b) => b.slug === slug || String(b.id) === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (blog) {
      document.title = `${blog.title} | SUVHUB`;
    } else {
      document.title = `Blog Not Found | SUVHUB`;
    }
  }, [blog]);

  if (!blog) {
    return (
      <main className="min-h-screen bg-[#0B0D0F] flex items-center justify-center px-4">
        <div className="bg-[#15181C] border border-[#2A2F35] rounded-xl p-10 max-w-md text-center">
          <Compass className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2 font-heading">Article Not Found</h1>
          <p className="text-sm text-[#A7ADB4] mb-6">
            The SUV article you are searching for does not exist or has been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#D32F2F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 10 Blogs</span>
          </Link>
        </div>
      </main>
    );
  }

  // Related blogs
  const relatedBlogs = BLOGS.filter((b) => b.id !== blog.id).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <article className="min-h-screen bg-[#0B0D0F] pb-24 text-[#A7ADB4]">
      {/* 1. SEMANTIC BREADCRUMB NAVIGATION */}
      <nav aria-label="Breadcrumb" className="bg-[#15181C] border-b border-[#2A2F35] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <ol className="flex items-center space-x-2 text-[#A7ADB4]">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-[#5A626C] shrink-0" />
            <li>
              <Link to="/blogs" className="hover:text-white transition-colors">
                SUV Blogs
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-[#5A626C] shrink-0" />
            <li className="text-white font-medium truncate max-w-[220px] sm:max-w-xs" aria-current="page">
              {blog.title}
            </li>
          </ol>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/blogs')}
              className="inline-flex items-center gap-1.5 text-xs text-[#A7ADB4] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E53935]" />
              <span>All 10 Blogs</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1B1F24] border border-[#2A2F35] text-xs font-medium text-[#A7ADB4] hover:text-white transition-colors"
              title="Copy article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#A7ADB4]" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 2. ARTICLE HEADER */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
          <Bookmark className="w-3 h-3" />
          <span>{blog.category}</span>
        </div>

        {/* Single H1 on Page */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.2] mb-5">
          {blog.title}
        </h1>

        <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed mb-6 font-normal">
          {blog.excerpt}
        </p>

        {/* Metadata bar */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-[#2A2F35] text-xs text-[#A7ADB4]">
          <div className="flex items-center gap-1.5 text-white font-medium">
            <User className="w-4 h-4 text-[#E53935]" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#A7ADB4]" />
            <time dateTime="2026-10-15">{blog.date}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#A7ADB4]" />
            <span>{blog.readTime}</span>
          </div>
          {blog.lastUpdated && (
            <div className="flex items-center gap-1.5 text-[#E53935] bg-[#1E1214] px-2.5 py-0.5 rounded border border-[#E53935]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Updated: {blog.lastUpdated}</span>
            </div>
          )}
        </div>
      </header>

      {/* 3. HERO IMAGE WITH SEMANTIC FIGURE & FIGCAPTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <figure className="rounded-2xl overflow-hidden border border-[#2A2F35] shadow-2xl bg-[#15181C]">
          <ImageWithFallback
            src={blog.image}
            alt={`${blog.title} - comprehensive automotive guide visual`}
            aspectRatio="aspect-[16/9]"
            maxWidth={1200}
            className="w-full h-auto object-cover"
          />
          {blog.imageCaption && (
            <figcaption className="p-3 text-xs text-[#A7ADB4] bg-[#15181C] border-t border-[#2A2F35] text-center italic">
              {blog.imageCaption}
            </figcaption>
          )}
        </figure>
      </div>

      {/* 4. MAIN ARTICLE BODY CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TABLE OF CONTENTS */}
        <nav
          aria-label="Table of Contents"
          className="bg-[#15181C] border border-[#2A2F35] rounded-xl p-6 mb-10 shadow-lg shadow-black/20"
        >
          <div className="flex items-center gap-2 mb-4 text-white font-heading font-bold text-lg border-b border-[#2A2F35] pb-3">
            <List className="w-5 h-5 text-[#E53935]" />
            <span>Table of Contents: In This Guide</span>
          </div>
          <ol className="space-y-2 text-sm">
            {blog.specsTable && (
              <li>
                <a
                  href="#specifications-breakdown"
                  className="text-[#E53935] hover:underline flex items-center gap-2 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                  <span>Technical Specifications & Comparison Breakdown</span>
                </a>
              </li>
            )}
            {blog.prosAndCons && (
              <li>
                <a
                  href="#pros-and-cons"
                  className="text-[#E53935] hover:underline flex items-center gap-2 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                  <span>Practical Advantages & Disadvantages (Pros & Cons)</span>
                </a>
              </li>
            )}
            {blog.sections.map((sec, sIdx) => (
              <li key={sIdx}>
                <a
                  href={`#${sec.id || `section-${sIdx}`}`}
                  className="text-[#A7ADB4] hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A626C]" />
                  <span>{sec.heading}</span>
                </a>
              </li>
            ))}
            {blog.buyerProfile && (
              <li>
                <a
                  href="#buyer-profile"
                  className="text-[#E53935] hover:underline flex items-center gap-2 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                  <span>Ideal Buyer Profile & Who Should Look Elsewhere</span>
                </a>
              </li>
            )}
          </ol>
        </nav>

        {/* FACTUAL SPECIFICATIONS / COMPARISON TABLE */}
        {blog.specsTable && (
          <section
            id="specifications-breakdown"
            className="my-10 bg-[#15181C] border border-[#2A2F35] rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#E53935]" />
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {blog.specsTable.title}
              </h2>
            </div>
            <p className="text-xs text-[#A7ADB4] mb-4">
              Verified manufacturer technical specifications, ARAI test reports, and real-world Indian road metrics.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B1F24] border-b border-[#2A2F35] text-white">
                    {blog.specsTable.columns.map((col, cIdx) => (
                      <th key={cIdx} className="p-3 font-semibold uppercase tracking-wider text-[11px] text-[#D1D5DB]">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2A2F35]">
                  {blog.specsTable.rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? 'bg-[#15181C]' : 'bg-[#181C20] hover:bg-[#1E2328] transition-colors'}
                    >
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`p-3 ${cellIdx === 0 ? 'font-semibold text-white' : 'text-[#A7ADB4]'}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* PROS AND CONS SECTION */}
        {blog.prosAndCons && (
          <section id="pros-and-cons" className="my-10 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-heading border-l-4 border-[#E53935] pl-3 py-0.5">
              Practical Advantages and Disadvantages: Indian Road Reality
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pros */}
              <div className="bg-[#15181C] border border-emerald-900/40 rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-3 font-heading">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Practical Advantages (Pros)</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7ADB4]">
                  {blog.prosAndCons.pros.map((pro, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-[#15181C] border border-[#E53935]/40 rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-2 text-[#E53935] font-bold mb-3 font-heading">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span>Practical Limitations (Cons)</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#A7ADB4]">
                  {blog.prosAndCons.cons.map((con, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] mt-1.5 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ARTICLE SECTIONS WITH AEO HEADINGS */}
        <div className="space-y-12 my-10">
          {blog.sections.map((section, idx) => (
            <section key={idx} id={section.id || `section-${idx}`} className="space-y-4 scroll-mt-20">
              <h2 className="text-2xl sm:text-2xl font-bold text-white font-heading tracking-tight border-l-4 border-[#E53935] pl-3 py-0.5">
                {section.heading}
              </h2>
              <div className="text-[#A7ADB4] text-base leading-relaxed space-y-3 font-normal">
                {section.content.split('\n\n').map((paragraph, pIdx) => {
                  // Direct Answer highlighting for AEO
                  if (paragraph.startsWith('Answer:')) {
                    const answerBody = paragraph.replace('Answer:', '').trim();
                    return (
                      <div
                        key={pIdx}
                        className="p-4 bg-[#1B1F24] border-l-4 border-[#E53935] rounded-r-lg text-white font-medium text-sm sm:text-base leading-relaxed shadow-sm"
                      >
                        <span className="text-[#E53935] font-bold block text-xs uppercase tracking-wider mb-1">
                          Direct Answer Summary:
                        </span>
                        {answerBody}
                      </div>
                    );
                  }

                  // Bullet point list parsing
                  if (paragraph.includes('•')) {
                    const lines = paragraph.split('\n');
                    return (
                      <div
                        key={pIdx}
                        className="space-y-2 my-4 bg-[#15181C]/70 border border-[#2A2F35] p-5 rounded-xl"
                      >
                        {lines.map((line, lIdx) => {
                          if (line.startsWith('•')) {
                            return (
                              <div key={lIdx} className="flex items-start gap-2.5 text-sm text-[#A7ADB4]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] mt-2 shrink-0" />
                                <span className="leading-relaxed">{line.replace('•', '').trim()}</span>
                              </div>
                            );
                          }
                          return (
                            <p key={lIdx} className="text-white font-semibold text-sm mb-2">
                              {line}
                            </p>
                          );
                        })}
                      </div>
                    );
                  }

                  return (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* BUYER PROFILE BOX */}
        {blog.buyerProfile && (
          <aside
            id="buyer-profile"
            aria-label="Buyer Recommendation"
            className="my-10 bg-[#15181C] border border-[#2A2F35] rounded-xl p-6 shadow-xl"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Info className="w-5 h-5 text-[#E53935]" />
              <h2 className="text-xl font-bold text-white font-heading">
                Buyer Profile: Should You Buy This Vehicle?
              </h2>
            </div>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-[#18201D] border border-emerald-900/40 rounded-lg">
                <span className="text-emerald-400 font-bold block mb-1 uppercase tracking-wider text-[11px]">
                  Ideal Buyer Match:
                </span>
                <p className="text-[#D1D5DB]">{blog.buyerProfile.idealFor}</p>
              </div>
              <div className="p-4 bg-[#231517] border border-[#E53935]/30 rounded-lg">
                <span className="text-[#E53935] font-bold block mb-1 uppercase tracking-wider text-[11px]">
                  Consider Alternative Categories If:
                </span>
                <p className="text-[#D1D5DB]">{blog.buyerProfile.notIdealFor}</p>
              </div>
            </div>
          </aside>
        )}

        {/* CONTEXTUAL INTERNAL NAVIGATION LINKS */}
        <section className="my-10 p-6 bg-[#15181C] border border-[#2A2F35] rounded-xl">
          <h3 className="text-base font-bold text-white font-heading mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#E53935]" />
            <span>Explore More Guides on SUVHUB</span>
          </h3>
          <p className="text-xs text-[#A7ADB4] mb-4">
            Continue researching your next vehicle with our comprehensive car reviews and head-to-head comparisons:
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              to="/blogs/best-suvs-for-indian-families"
              className="px-3 py-1.5 rounded bg-[#1B1F24] border border-[#2A2F35] text-white hover:border-[#E53935] transition-colors"
            >
              Family SUV Buying Guide
            </Link>
            <Link
              to="/blogs/mahindra-xuv700-vs-tata-harrier"
              className="px-3 py-1.5 rounded bg-[#1B1F24] border border-[#2A2F35] text-white hover:border-[#E53935] transition-colors"
            >
              XUV700 vs Tata Harrier Test
            </Link>
            <Link
              to="/blogs/hyundai-creta-vs-kia-seltos"
              className="px-3 py-1.5 rounded bg-[#1B1F24] border border-[#2A2F35] text-white hover:border-[#E53935] transition-colors"
            >
              Hyundai Creta vs Kia Seltos
            </Link>
            <Link
              to="/blogs/petrol-vs-diesel-suv"
              className="px-3 py-1.5 rounded bg-[#1B1F24] border border-[#2A2F35] text-white hover:border-[#E53935] transition-colors"
            >
              Petrol vs Diesel Running Cost
            </Link>
            <Link
              to="/blogs/mahindra-scorpio-n-review"
              className="px-3 py-1.5 rounded bg-[#1B1F24] border border-[#2A2F35] text-white hover:border-[#E53935] transition-colors"
            >
              Mahindra Scorpio-N Everyday Review
            </Link>
            <Link
              to="/blogs/toyota-fortuner-why-is-it-still-so-popular"
              className="px-3 py-1.5 rounded bg-[#1B1F24] border border-[#2A2F35] text-white hover:border-[#E53935] transition-colors"
            >
              Toyota Fortuner Durability
            </Link>
          </div>
        </section>

        {/* TAGS */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="pt-6 border-t border-[#2A2F35]">
            <h4 className="text-xs uppercase tracking-wider text-[#A7ADB4] font-semibold mb-3">
              Related Topics & Keywords
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md bg-[#1B1F24] border border-[#E53935]/40 text-xs text-white font-medium">
                #{blog.mainKeyword}
              </span>
              {blog.relatedKeywords.map((rk, rkIdx) => (
                <span
                  key={rkIdx}
                  className="px-3 py-1 rounded-md bg-[#15181C] border border-[#2A2F35] text-xs text-[#A7ADB4]"
                >
                  #{rk}
                </span>
              ))}
              {blog.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-md bg-[#15181C] border border-[#2A2F35] text-xs text-[#A7ADB4]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* AUTHOR & EDITORIAL TRANSPARENCY SECTION */}
        <aside
          aria-label="Editorial Transparency"
          className="mt-10 p-6 rounded-xl bg-[#15181C] border border-[#2A2F35] shadow-lg"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#E53935]/10 border border-[#E53935]/30 flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-[#E53935]" />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-bold text-white font-heading">{blog.author}</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#1B1F24] text-[#E53935] font-semibold uppercase tracking-wider">
                  {blog.authorRole || 'Editorial Desk'}
                </span>
              </div>
              <p className="text-xs text-[#A7ADB4] leading-relaxed">
                {blog.authorBio ||
                  'Evaluating Indian passenger vehicles based on verified dimensions, real fuel efficiency, and structural crash safety.'}
              </p>
              <p className="text-[11px] text-[#5A626C] pt-2 border-t border-[#2A2F35]">
                <strong className="text-[#A7ADB4]">Editorial Methodology:</strong> All dimensions, seating capacities, and fuel consumption comparisons on SUVHUB are gathered from verified ARAI test filings, Bharat NCAP publications, and real-world test driving on Indian roads.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* 5. RELATED BLOGS SECTION */}
      <section
        aria-label="Related SUV Articles"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 mt-16 border-t border-[#2A2F35]"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#E53935] font-bold">
              Continue Reading
            </span>
            <h3 className="text-2xl font-bold text-white font-heading mt-1">
              Related SUV Articles
            </h3>
          </div>
          <Link
            to="/blogs"
            className="text-xs font-semibold text-[#A7ADB4] hover:text-white uppercase tracking-wider flex items-center gap-1"
          >
            <span>Browse All 10 Articles</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E53935]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedBlogs.map((rel) => (
            <article
              key={rel.id}
              className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <figure className="relative overflow-hidden">
                <ImageWithFallback
                  src={rel.image}
                  alt={`${rel.title} article card visual`}
                  aspectRatio="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-500 w-full"
                  maxWidth={550}
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#0B0D0F]/85 backdrop-blur-sm border border-[#2A2F35] text-[#E53935] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                  {rel.category}
                </span>
              </figure>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-[#A7ADB4] mb-1.5">
                    <Clock className="w-3 h-3 text-[#E53935]" />
                    <span>{rel.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#A7ADB4] mt-2 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2A2F35]">
                  <Link
                    to={`/blogs/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E53935] transition-colors"
                  >
                    <span>Read Full {rel.title.split(':')[0]}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
