import { Link } from 'react-router-dom';
import ImageWithFallback from '../ImageWithFallback';
import { ArrowRight, ChevronRight, Gauge, Shield, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0D0F] border-b border-[#2A2F35] pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle radial ambient highlight */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E53935]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" aria-hidden="true" />
              <span>Independent Automotive Publication</span>
              <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
              <span className="text-[#A7ADB4]">Indian SUV Journal</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-heading">
              THE WORLD OF SUVs, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#E53935]">
                ALL IN ONE PLACE.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#A7ADB4] leading-relaxed max-w-2xl font-normal">
              Explore SUV reviews, comparisons, buying guides, features and automotive trends.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/blogs"
                className="px-6 py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-[#E53935]/25 transition-all flex items-center gap-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E53935] focus:ring-offset-2 focus:ring-offset-[#0B0D0F]"
              >
                <span>Explore Blogs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/reviews"
                className="px-6 py-3.5 bg-[#1B1F24] hover:bg-[#252A32] text-white border border-[#2A2F35] hover:border-[#A7ADB4]/50 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#0B0D0F]"
              >
                <span>Explore SUVs</span>
                <ChevronRight className="w-4 h-4 text-[#A7ADB4]" />
              </Link>
            </div>

            {/* Editorial Credentials Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#2A2F35] max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#15181C] border border-[#2A2F35] flex items-center justify-center text-[#E53935] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white font-heading">10</div>
                  <div className="text-xs text-[#A7ADB4]">In-Depth Guides</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#15181C] border border-[#2A2F35] flex items-center justify-center text-[#E53935] shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white font-heading">6</div>
                  <div className="text-xs text-[#A7ADB4]">Flagship SUVs</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#15181C] border border-[#2A2F35] flex items-center justify-center text-[#E53935] shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-[#E53935] font-heading">100%</div>
                  <div className="text-xs text-[#A7ADB4]">Unbiased Research</div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Hero Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2A2F35] shadow-2xl bg-[#15181C] group">
              <ImageWithFallback
                src="/images/mahindra-xuv700.webp"
                alt="Mahindra XUV700 mid-size SUV in dynamic profile on Indian highway"
                aspectRatio="aspect-[4/3]"
                className="group-hover:scale-105 transition-transform duration-700"
                maxWidth={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-90" />

              {/* Lower Overlay Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#1B1F24]/95 border border-[#2A2F35] p-4 rounded-xl flex items-center justify-between shadow-lg">
                <div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#E53935] block">
                    Editorial Spotlight
                  </span>
                  <h2 className="text-sm font-bold text-white font-heading">
                    The Modern Indian SUV Boom
                  </h2>
                  <p className="text-xs text-[#A7ADB4] mt-0.5">
                    Ground clearance, high seating & road poise
                  </p>
                </div>
                <Link
                  to="/blogs/why-suvs-have-become-so-popular-in-india"
                  className="px-3 py-2 bg-[#E53935] hover:bg-[#D32F2F] text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold shrink-0"
                  aria-label="Read analysis on why SUVs have become popular in India"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
