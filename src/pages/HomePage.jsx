import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogsData';
import { SUVS } from '../data/suvsData';
import ImageWithFallback from '../components/ImageWithFallback';
import NewsletterSection from '../components/NewsletterSection';
import {
  Compass,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
  Scale,
  BookOpen,
  TrendingUp,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  // Show 6 latest blogs on home page
  const latestBlogs = BLOGS.slice(0, 6);
  // Show 6 featured SUVs
  const featuredSUVs = SUVS.slice(0, 6);

  const categories = [
    {
      title: 'SUV Reviews',
      description: 'Explore detailed SUV reviews and practical information.',
      icon: ShieldCheck,
      count: 'Deep Dives',
      link: '/reviews',
      color: 'from-blue-500/20 to-transparent'
    },
    {
      title: 'Comparisons',
      description: 'Compare popular SUVs and understand their differences.',
      icon: Scale,
      count: 'Head-to-Head',
      link: '/comparisons',
      color: 'from-red-500/20 to-transparent'
    },
    {
      title: 'Buying Guides',
      description: 'Helpful information for people planning to buy an SUV.',
      icon: BookOpen,
      count: 'Practical Tips',
      link: '/buying-guides',
      color: 'from-amber-500/20 to-transparent'
    },
    {
      title: 'SUV Trends',
      description: 'Explore changing trends in the Indian SUV market.',
      icon: TrendingUp,
      count: 'Industry Insights',
      link: '/blogs?category=SUV+Trends',
      color: 'from-emerald-500/20 to-transparent'
    }
  ];

  const whyFeatures = [
    {
      title: 'Expert-Style Reviews',
      description: 'Easy-to-understand SUV reviews focusing on ergonomics, real cabin space, and driving character.',
      icon: ShieldCheck
    },
    {
      title: 'Easy Comparisons',
      description: 'Simple comparisons between popular SUVs highlighting genuine differences without jargon.',
      icon: Scale
    },
    {
      title: 'Practical Buying Guides',
      description: 'Useful information for SUV buyers covering budgets, running costs, and family requirements.',
      icon: BookOpen
    },
    {
      title: 'Latest SUV Trends',
      description: 'Explore changing SUV preferences, sub-segments, and road dynamics in the Indian market.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0D0F]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#2A2F35]">
        {/* Ambient atmospheric gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Definitive SUV Guide • College Project</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
                THE WORLD OF SUVs, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#E53935]">
                  ALL IN ONE PLACE.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A7ADB4] leading-relaxed max-w-2xl font-normal">
                Explore SUV reviews, comparisons, buying guides, features and the latest automotive trends with SUVHUB.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/blogs"
                  className="px-6 py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-[#E53935]/25 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Explore Blogs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/reviews"
                  className="px-6 py-3.5 bg-[#1B1F24] hover:bg-[#252A32] text-white border border-[#2A2F35] hover:border-[#A7ADB4]/40 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Explore SUVs</span>
                  <ChevronRight className="w-4 h-4 text-[#A7ADB4]" />
                </Link>
              </div>

              {/* Trust metric highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2A2F35]/70 max-w-md">
                <div>
                  <div className="text-2xl font-bold text-white font-heading">10</div>
                  <div className="text-xs text-[#A7ADB4] uppercase tracking-wide">Full Articles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-heading">6</div>
                  <div className="text-xs text-[#A7ADB4] uppercase tracking-wide">Featured SUVs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#E53935] font-heading">100%</div>
                  <div className="text-xs text-[#A7ADB4] uppercase tracking-wide">Practical Focus</div>
                </div>
              </div>
            </div>

            {/* Large Premium SUV Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2A2F35] shadow-2xl bg-[#15181C] group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Premium SUV on scenic drive"
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#1B1F24]/90 backdrop-blur-md p-4 rounded-xl border border-[#2A2F35] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E53935] block">
                      Spotlight
                    </span>
                    <h3 className="text-sm font-bold text-white">Modern Indian SUV Segment</h3>
                    <p className="text-xs text-[#A7ADB4]">Comfort • Tech • Dominance</p>
                  </div>
                  <Link
                    to="/blogs/why-suvs-have-become-so-popular-in-india"
                    className="p-2 bg-[#E53935] text-white rounded-lg hover:bg-[#D32F2F] transition-colors"
                    aria-label="Read why SUVs became popular"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SUVS (6 Cards) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Featured SUVs
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
              Explore six of India's most popular, capable, and talked-about SUVs.
            </p>
          </div>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group"
          >
            <span>View All Detailed Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSUVs.map((suv) => (
            <div
              key={suv.id}
              className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={suv.image}
                  alt={suv.name}
                  aspectRatio="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#0B0D0F]/85 backdrop-blur-sm border border-[#2A2F35] text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {suv.segment}
                </span>
                <span className="absolute top-3 right-3 bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                  {suv.badge}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors">
                    {suv.name}
                  </h3>
                  <p className="text-sm text-[#A7ADB4] mt-2 line-clamp-2 leading-relaxed">
                    {suv.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2F35] flex items-center justify-between">
                  <span className="text-xs text-[#A7ADB4] font-medium">
                    {suv.seatingCapacity}
                  </span>
                  <Link
                    to={`/reviews?select=${suv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#15181C] hover:bg-[#E53935] px-3.5 py-2 rounded-md border border-[#2A2F35] hover:border-transparent transition-all"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LATEST BLOGS SECTION (6 Cards from 10) */}
      <section className="py-20 bg-[#15181C]/50 border-y border-[#2A2F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Editorial Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                Latest Blogs
              </h2>
              <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
                Handcrafted articles covering practical buying tips, head-to-head comparisons, and market trends.
              </p>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group"
            >
              <span>View All 10 Blogs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
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
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-[#A7ADB4] mt-3 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A2F35]">
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all w-full justify-center shadow-md shadow-[#E53935]/15"
                    >
                      <span>Read Blog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUV CATEGORIES (4 Cards) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Explore SUV Categories
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
            Browse through tailored content pillars crafted to guide every step of your automotive journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.link}
                className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl p-6 hover:border-[#E53935] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#15181C] border border-[#2A2F35] flex items-center justify-center text-[#E53935] mb-5 group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#A7ADB4] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#2A2F35] flex items-center justify-between text-xs font-semibold text-[#A7ADB4] group-hover:text-white transition-colors">
                  <span>{cat.count}</span>
                  <ArrowRight className="w-4 h-4 text-[#E53935] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. WHY SUVHUB (4 Cards) */}
      <section className="py-20 bg-[#15181C] border-t border-[#2A2F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#E53935] font-bold">
              Our Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              Why SUVHUB?
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
              A student-built automotive information platform created to make SUV research transparent, practical, and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl p-6 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0B0D0F] border border-[#2A2F35] flex items-center justify-center text-[#E53935] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
                    {feat.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#2A2F35]/50 text-[11px] text-[#A7ADB4]">
                    No bias • Academic demo
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. NEWSLETTER SECTION */}
      <NewsletterSection />
    </div>
  );
}
