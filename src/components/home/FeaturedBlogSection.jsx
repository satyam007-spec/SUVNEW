import { Link } from 'react-router-dom';
import { BLOGS } from '../../data/blogsData';
import ImageWithFallback from '../ImageWithFallback';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function FeaturedBlogSection() {
  // Use the benchmark family guide from the existing local data
  const featuredBlog = BLOGS[0];

  if (!featuredBlog) return null;

  return (
    <section className="py-16 bg-[#15181C] border-y border-[#2A2F35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#2A2F35]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E53935]" aria-hidden="true" />
            <span>Editorial Feature</span>
            <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
            <span className="text-[#A7ADB4]">Editor's Pick</span>
          </div>

          <Link
            to="/blogs"
            className="text-xs font-semibold text-[#A7ADB4] hover:text-white transition-colors"
          >
            Explore All 10 Blogs
          </Link>
        </div>

        {/* Featured Editorial Banner */}
        <article className="bg-[#1B1F24] border border-[#2A2F35] rounded-2xl overflow-hidden shadow-2xl hover:border-[#E53935]/40 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Large Image Side */}
            <div className="lg:col-span-7 relative bg-[#0B0D0F]">
              <ImageWithFallback
                src={featuredBlog.image}
                alt={`${featuredBlog.title} editorial cover photograph`}
                aspectRatio="aspect-[16/10] lg:aspect-auto"
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[420px]"
                maxWidth={900}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F24] via-transparent to-transparent lg:hidden opacity-80" />
            </div>

            {/* Editorial Content Side */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Unboxed Metadata Discipline */}
                <div className="flex items-center gap-2 text-xs text-[#A7ADB4] font-medium">
                  <span className="text-[#E53935] uppercase tracking-wider font-semibold">
                    {featuredBlog.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{featuredBlog.date}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredBlog.readTime}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight hover:text-[#E53935] transition-colors">
                  <Link to={`/blogs/${featuredBlog.slug}`}>
                    {featuredBlog.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed">
                  {featuredBlog.excerpt}
                </p>
              </div>

              {/* Call to Action & Author info */}
              <div className="pt-6 border-t border-[#2A2F35] flex items-center justify-between">
                <div>
                  <span className="text-xs text-white font-medium block">
                    {featuredBlog.author || 'SUVHUB Editorial Team'}
                  </span>
                  <span className="text-[11px] text-[#A7ADB4]">
                    Verified Buyer Research
                  </span>
                </div>

                <Link
                  to={`/blogs/${featuredBlog.slug}`}
                  className="px-5 py-2.5 bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-md shadow-[#E53935]/20 active:scale-95"
                >
                  <span>Read Blog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
