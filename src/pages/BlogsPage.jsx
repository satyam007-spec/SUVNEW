import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BLOGS, CATEGORIES } from '../data/blogsData';
import ImageWithFallback from '../components/ImageWithFallback';
import { Search, Clock, Calendar, ArrowRight, X, Sparkles, Filter } from 'lucide-react';

export default function BlogsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Sync state if search params change externally (e.g., clicking footer link)
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Featured blog is Blog #1 or the first matching item
  const featuredBlog = BLOGS[0];

  // Filtered blogs matching search and category
  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((blog) => {
      // Category match
      const categoryMatch =
        selectedCategory === 'All' ||
        blog.category.toLowerCase() === selectedCategory.toLowerCase();

      // Search query match across title, category, excerpt, and sections
      if (!searchQuery.trim()) return categoryMatch;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = blog.title.toLowerCase().includes(q);
      const catMatch = blog.category.toLowerCase().includes(q);
      const excerptMatch = blog.excerpt.toLowerCase().includes(q);
      const contentMatch = blog.sections.some(
        (sec) =>
          sec.heading.toLowerCase().includes(q) ||
          sec.content.toLowerCase().includes(q)
      );

      return categoryMatch && (titleMatch || catMatch || excerptMatch || contentMatch);
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    searchParams.delete('q');
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#15181C] to-[#0B0D0F] border-b border-[#2A2F35] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Automotive Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            SUV Articles & Guides
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB4] max-w-2xl mx-auto">
            Discover in-depth reviews, head-to-head comparisons, and practical buying guides written specifically for Indian SUV buyers.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-[#A7ADB4]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all 10 blogs by title, keywords or content..."
                className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white placeholder-[#A7ADB4]/70 pl-12 pr-10 py-3.5 rounded-xl text-sm focus:outline-none focus:border-[#E53935] shadow-lg shadow-black/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 text-[#A7ADB4] hover:text-white"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-xs text-[#A7ADB4] mt-2 text-left pl-2">
                Showing results for "{searchQuery}" ({filteredBlogs.length} found)
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-[#A7ADB4] uppercase tracking-wider font-semibold mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#E53935]" />
            <span>Filter:</span>
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#E53935] text-white font-semibold shadow-md shadow-[#E53935]/25'
                  : 'bg-[#15181C] text-[#A7ADB4] hover:text-white hover:bg-[#1B1F24] border border-[#2A2F35]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article Banner (Only displayed when on 'All' and no active search) */}
        {selectedCategory === 'All' && !searchQuery && (
          <div className="mb-14 bg-[#15181C] border border-[#2A2F35] rounded-2xl overflow-hidden hover:border-[#E53935]/60 transition-all shadow-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative">
                <ImageWithFallback
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  aspectRatio="aspect-[16/10]"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  Featured Guide
                </span>
              </div>
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#A7ADB4] mb-3">
                    <span className="px-2 py-0.5 rounded bg-[#1B1F24] text-[#E53935] font-semibold">
                      {featuredBlog.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-tight mb-4">
                    {featuredBlog.title}
                  </h2>

                  <p className="text-sm text-[#A7ADB4] leading-relaxed line-clamp-4">
                    {featuredBlog.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2A2F35] flex items-center justify-between">
                  <span className="text-xs text-[#A7ADB4]">{featuredBlog.date}</span>
                  <Link
                    to={`/blogs/${featuredBlog.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-5 py-2.5 rounded-lg shadow-md transition-all active:scale-95"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section title & count */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white font-heading">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          <span className="text-xs text-[#A7ADB4] bg-[#15181C] px-3 py-1 rounded-md border border-[#2A2F35]">
            Showing {filteredBlogs.length} of {BLOGS.length} blogs
          </span>
        </div>

        {/* Grid of All Blogs */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    aspectRatio="aspect-[16/10]"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B0D0F]/85 backdrop-blur-sm border border-[#2A2F35] text-[#E53935] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#A7ADB4] mb-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#E53935]" />
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-[#A7ADB4] mt-3 line-clamp-3 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A2F35]">
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#15181C] hover:bg-[#E53935] border border-[#2A2F35] hover:border-transparent px-4 py-2.5 rounded-lg transition-all w-full justify-center group/btn"
                    >
                      <span>Read Blog</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E53935] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-[#15181C] border border-[#2A2F35] rounded-xl p-12 text-center max-w-lg mx-auto">
            <Search className="w-10 h-10 text-[#A7ADB4] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-white">No blogs found</h3>
            <p className="text-sm text-[#A7ADB4] mt-1 mb-6">
              We couldn't find any articles matching your search query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2.5 bg-[#E53935] text-white text-xs font-semibold uppercase tracking-wider rounded-lg"
            >
              Reset Filters & Show All 10 Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
