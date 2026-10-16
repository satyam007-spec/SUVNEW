import { Link } from 'react-router-dom';
import { SUVS } from '../../data/suvsData';
import ImageWithFallback from '../ImageWithFallback';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function FeaturedSUVsSection() {
  const featuredSUVs = SUVS.slice(0, 6);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#2A2F35]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
            <span>Showcase</span>
            <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
            <span className="text-[#A7ADB4]">Flagship Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Featured Indian SUVs
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] mt-2 max-w-2xl">
            From city-friendly monocoques to authentic ladder-frame 4x4 titans, explore detailed overviews of India's benchmark SUVs.
          </p>
        </div>

        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group shrink-0"
        >
          <span>View All Detailed Reviews</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 6 SUV Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredSUVs.map((suv) => (
          <div
            key={suv.id}
            className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            {/* SUV Image */}
            <div className="relative overflow-hidden bg-[#15181C]">
              <ImageWithFallback
                src={suv.image}
                alt={`${suv.name} front three-quarter profile`}
                aspectRatio="aspect-[16/10]"
                className="group-hover:scale-105 transition-transform duration-500"
                maxWidth={650}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F24] via-transparent to-transparent opacity-60" />
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#A7ADB4] mb-2 font-medium">
                  <span className="text-[#E53935]">{suv.badge}</span>
                  <span aria-hidden="true">·</span>
                  <span>{suv.segment}</span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors">
                  {suv.name}
                </h3>

                <p className="text-sm text-[#A7ADB4] mt-2.5 line-clamp-2 leading-relaxed">
                  {suv.shortDescription}
                </p>
              </div>

              {/* Specs & Link Footer */}
              <div className="pt-4 border-t border-[#2A2F35] flex items-center justify-between">
                <span className="text-xs text-[#A7ADB4] font-medium">
                  {suv.seatingCapacity}
                </span>

                <Link
                  to={`/reviews/${suv.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#15181C] hover:bg-[#E53935] px-3.5 py-2 rounded-md border border-[#2A2F35] hover:border-transparent transition-all"
                  aria-label={`View full details for ${suv.name}`}
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
