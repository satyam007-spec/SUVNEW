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
  Compass
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
      <div className="min-h-screen bg-[#0B0D0F] flex items-center justify-center px-4">
        <div className="bg-[#15181C] border border-[#2A2F35] rounded-xl p-10 max-w-md text-center">
          <Compass className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2 font-heading">Article Not Found</h2>
          <p className="text-sm text-[#A7ADB4] mb-6">
            The SUV article you are searching for does not exist or has been moved.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All 10 Blogs</span>
          </Link>
        </div>
      </div>
    );
  }

  // Get 3 related blogs
  const relatedBlogs = BLOGS.filter((b) => b.id !== blog.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Top breadcrumb & navigation bar */}
      <div className="bg-[#15181C] border-b border-[#2A2F35] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#E53935]" />
            <span>Back to Blogs</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#1B1F24] border border-[#2A2F35] text-xs font-medium text-[#A7ADB4] hover:text-white transition-colors"
              title="Copy article link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-green-500">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
          <Bookmark className="w-3 h-3" />
          <span>{blog.category}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.2] mb-6">
          {blog.title}
        </h1>

        <p className="text-base sm:text-lg text-[#A7ADB4] leading-relaxed mb-6 font-normal">
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
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#A7ADB4]" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl overflow-hidden border border-[#2A2F35] shadow-2xl bg-[#15181C]">
          <ImageWithFallback
            src={blog.image}
            alt={blog.title}
            aspectRatio="aspect-[16/9]"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sections */}
        <div className="space-y-10">
          {blog.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-2xl font-bold text-white font-heading tracking-tight border-l-4 border-[#E53935] pl-3 py-0.5">
                {section.heading}
              </h2>
              <div className="text-[#A7ADB4] text-base leading-relaxed space-y-3 font-normal">
                {section.content.split('\n\n').map((paragraph, pIdx) => {
                  // Check if paragraph contains bullet items
                  if (paragraph.includes('•')) {
                    const lines = paragraph.split('\n');
                    return (
                      <div key={pIdx} className="space-y-2 my-4 bg-[#15181C]/70 border border-[#2A2F35] p-5 rounded-xl">
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

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="pt-8 mt-12 border-t border-[#2A2F35]">
            <h4 className="text-xs uppercase tracking-wider text-[#A7ADB4] font-semibold mb-3">
              Related Topics
            </h4>
            <div className="flex flex-wrap gap-2">
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

        {/* Academic Project Note */}
        <div className="mt-10 p-5 rounded-xl bg-[#15181C] border border-[#2A2F35] flex items-start gap-3 text-xs text-[#A7ADB4]">
          <div className="w-2 h-2 rounded-full bg-[#E53935] mt-1.5 shrink-0" />
          <p>
            <strong className="text-white">Editorial Transparency:</strong> This review is part of the SUVHUB college research project. Specifications and observations are designed to help prospective buyers understand practical considerations without commercial bias.
          </p>
        </div>
      </div>

      {/* Related Blogs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 mt-16 border-t border-[#2A2F35]">
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
            <span>All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E53935]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedBlogs.map((rel) => (
            <div
              key={rel.id}
              className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={rel.image}
                  alt={rel.title}
                  aspectRatio="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0B0D0F]/85 backdrop-blur-sm border border-[#2A2F35] text-[#E53935] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                  {rel.category}
                </span>
              </div>

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
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
