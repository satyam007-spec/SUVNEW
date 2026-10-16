import { Link } from 'react-router-dom';
import { BLOGS } from '../../data/blogsData';
import ImageWithFallback from '../ImageWithFallback';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function LatestBlogsSection() {
  // Display six of the existing ten blogs using the actual project data
  const latestBlogs = BLOGS.slice(0, 6);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#2A2F35]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
            <span>Dispatches</span>
            <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
            <span className="text-[#A7ADB4]">Automotive Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Latest SUV Articles & Insights
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] mt-2 max-w-2xl">
            In-depth reporting on family SUV selection, fuel efficiency reality, safety ratings, and Indian highway performance.
          </p>
        </div>

        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group shrink-0"
        >
          <span>Explore All 10 Full Articles</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 6 Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestBlogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-[#15181C]">
              <ImageWithFallback
                src={blog.image}
                alt={`${blog.title} article cover image`}
                aspectRatio="aspect-[16/10]"
                className="group-hover:scale-105 transition-transform duration-500"
                maxWidth={650}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F24] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Clean unboxed metadata with bullet separators */}
                <div className="flex items-center gap-2 text-xs text-[#A7ADB4] mb-3">
                  <span className="text-[#E53935] font-semibold uppercase tracking-wider text-[11px]">
                    {blog.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#A7ADB4]" />
                    <span>{blog.date}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A7ADB4]" />
                    <span>{blog.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-snug">
                  <Link to={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#A7ADB4] mt-3 line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* Working Read Blog Link */}
              <div className="pt-4 border-t border-[#2A2F35]">
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#15181C] hover:bg-[#E53935] px-4 py-2.5 rounded-lg border border-[#2A2F35] hover:border-transparent transition-all w-full justify-center shadow-sm"
                  aria-label={`Read blog: ${blog.title}`}
                >
                  <span>Read Blog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
