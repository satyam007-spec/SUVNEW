import { Link } from 'react-router-dom';
import { HEAD_TO_HEAD_COMPARISONS } from '../../data/comparisonsData';
import ImageWithFallback from '../ImageWithFallback';
import { Scale, ArrowRight, ChevronRight, Swords } from 'lucide-react';

export default function ComparisonsSection() {
  const comparisons = HEAD_TO_HEAD_COMPARISONS.slice(0, 3);

  return (
    <section className="py-20 bg-[#15181C] border-y border-[#2A2F35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#2A2F35]">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Head-to-Head</span>
              <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
              <span className="text-[#A7ADB4]">Rivalry Tests</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              SUV Comparisons
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB4] mt-2 max-w-2xl">
              Practical side-by-side evaluations across real cabin ergonomics, highway high-speed poise, boot space, and ownership costs.
            </p>
          </div>

          <Link
            to="/comparisons"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group shrink-0"
          >
            <span>Explore All Comparisons</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {comparisons.map((comp) => (
            <div
              key={comp.id}
              className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              {/* Dual Vehicle Thumbnail Matchup */}
              <div className="p-5 pb-3">
                <div className="grid grid-cols-2 gap-2 relative bg-[#15181C] p-2 rounded-lg border border-[#2A2F35]">
                  {/* Car 1 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[16/10] overflow-hidden rounded bg-[#0B0D0F]">
                      <ImageWithFallback
                        src={comp.car1.image}
                        alt={`${comp.car1.name} comparison thumbnail`}
                        aspectRatio="aspect-[16/10]"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        maxWidth={300}
                      />
                    </div>
                    <span className="text-xs font-semibold text-white mt-2 truncate w-full">
                      {comp.car1.name}
                    </span>
                    <span className="text-[10px] text-[#A7ADB4]">
                      {comp.car1.segment}
                    </span>
                  </div>

                  {/* VS Badge in Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#E53935] text-white flex items-center justify-center font-bold text-[10px] shadow-md border border-[#0B0D0F] z-10">
                    VS
                  </div>

                  {/* Car 2 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[16/10] overflow-hidden rounded bg-[#0B0D0F]">
                      <ImageWithFallback
                        src={comp.car2.image}
                        alt={`${comp.car2.name} comparison thumbnail`}
                        aspectRatio="aspect-[16/10]"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        maxWidth={300}
                      />
                    </div>
                    <span className="text-xs font-semibold text-white mt-2 truncate w-full">
                      {comp.car2.name}
                    </span>
                    <span className="text-[10px] text-[#A7ADB4]">
                      {comp.car2.segment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Summary */}
              <div className="p-5 pt-2 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#E53935] transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB4] mt-1 line-clamp-1">
                    {comp.subtitle}
                  </p>

                  {/* Highlight comparison takeaway */}
                  <div className="mt-3 p-3 rounded-lg bg-[#15181C] border border-[#2A2F35] text-xs text-[#A7ADB4] space-y-1">
                    <div className="text-white font-medium flex items-center gap-1.5">
                      <Swords className="w-3.5 h-3.5 text-[#E53935]" />
                      <span>Key Difference</span>
                    </div>
                    <p className="line-clamp-2 text-[11px] leading-relaxed">
                      {comp.categories && comp.categories[0] ? comp.categories[0].winnerNote : 'Detailed side-by-side spec comparison and verdict.'}
                    </p>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-3 border-t border-[#2A2F35] flex items-center justify-between">
                  <Link
                    to={`/comparisons/${comp.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#E53935] hover:text-white transition-colors"
                  >
                    <span>View Showdown</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  {comp.relatedBlogSlug && (
                    <Link
                      to={`/blogs/${comp.relatedBlogSlug}`}
                      className="text-[11px] text-[#A7ADB4] hover:text-white underline"
                    >
                      Read Full Article
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
