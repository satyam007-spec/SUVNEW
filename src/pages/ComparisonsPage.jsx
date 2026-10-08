import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEAD_TO_HEAD_COMPARISONS } from '../data/comparisonsData';
import { SUVS } from '../data/suvsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  Scale,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  SlidersHorizontal,
  Compass
} from 'lucide-react';

export default function ComparisonsPage() {
  const [activeTab, setActiveTab] = useState(HEAD_TO_HEAD_COMPARISONS[0].id);

  // Custom comparator state
  const [customCar1Id, setCustomCar1Id] = useState('mahindra-xuv700');
  const [customCar2Id, setCustomCar2Id] = useState('tata-harrier');
  const [isCustomMode, setIsCustomMode] = useState(false);

  const activeComparison = HEAD_TO_HEAD_COMPARISONS.find((c) => c.id === activeTab);

  const customCar1 = SUVS.find((s) => s.id === customCar1Id) || SUVS[0];
  const customCar2 = SUVS.find((s) => s.id === customCar2Id) || SUVS[1];

  return (
    <div className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#15181C] to-[#0B0D0F] border-b border-[#2A2F35] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Head-to-Head Showdowns</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            SUV Comparisons
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB4] max-w-2xl mx-auto">
            Direct, practical side-by-side evaluations to help you understand genuine design, comfort, practicality, and driving character differences.
          </p>

          {/* Toggle between Curated and Custom */}
          <div className="inline-flex items-center p-1 bg-[#15181C] border border-[#2A2F35] rounded-xl mt-8">
            <button
              onClick={() => setIsCustomMode(false)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                !isCustomMode
                  ? 'bg-[#E53935] text-white shadow-md'
                  : 'text-[#A7ADB4] hover:text-white'
              }`}
            >
              Curated Match-Ups
            </button>
            <button
              onClick={() => setIsCustomMode(true)}
              className={`px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                isCustomMode
                  ? 'bg-[#E53935] text-white shadow-md'
                  : 'text-[#A7ADB4] hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Custom Match Tool</span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {!isCustomMode ? (
          <>
            {/* Curated Match-up Selector Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {HEAD_TO_HEAD_COMPARISONS.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setActiveTab(comp.id)}
                  className={`text-left p-5 rounded-xl border transition-all ${
                    activeTab === comp.id
                      ? 'bg-[#1B1F24] border-[#E53935] shadow-lg shadow-[#E53935]/15'
                      : 'bg-[#15181C] border-[#2A2F35] hover:border-[#A7ADB4]/30'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#E53935] block mb-1">
                    Featured Match
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {comp.title}
                  </h3>
                  <p className="text-xs text-[#A7ADB4] mt-1 line-clamp-1">
                    {comp.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Curated Comparison Display */}
            {activeComparison && (
              <div className="space-y-10">
                {/* Visual Face-Off Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#15181C] p-6 sm:p-8 rounded-2xl border border-[#2A2F35]">
                  {/* Car 1 */}
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
                      <ImageWithFallback
                        src={activeComparison.car1.image}
                        alt={activeComparison.car1.name}
                        aspectRatio="aspect-[16/10]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#E53935] uppercase font-semibold">
                          {activeComparison.car1.segment}
                        </span>
                        <h3 className="text-2xl font-bold text-white font-heading">
                          {activeComparison.car1.name}
                        </h3>
                      </div>
                      <span className="text-xs text-[#A7ADB4] bg-[#1B1F24] px-3 py-1 rounded-md border border-[#2A2F35]">
                        {activeComparison.car1.layout}
                      </span>
                    </div>
                  </div>

                  {/* Car 2 */}
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
                      <ImageWithFallback
                        src={activeComparison.car2.image}
                        alt={activeComparison.car2.name}
                        aspectRatio="aspect-[16/10]"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#E53935] uppercase font-semibold">
                          {activeComparison.car2.segment}
                        </span>
                        <h3 className="text-2xl font-bold text-white font-heading">
                          {activeComparison.car2.name}
                        </h3>
                      </div>
                      <span className="text-xs text-[#A7ADB4] bg-[#1B1F24] px-3 py-1 rounded-md border border-[#2A2F35]">
                        {activeComparison.car2.layout}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Related Blog link banner */}
                {activeComparison.relatedBlogSlug && (
                  <div className="bg-[#1B1F24] border border-[#2A2F35] p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-[#E53935] shrink-0" />
                      <span className="text-sm text-[#A7ADB4]">
                        Want the full editorial deep-dive with driving impressions?
                      </span>
                    </div>
                    <Link
                      to={`/blogs/${activeComparison.relatedBlogSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2 rounded-lg transition-all"
                    >
                      <span>Read Full Comparison Blog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}

                {/* Side-by-side category evaluation table */}
                <div className="bg-[#15181C] border border-[#2A2F35] rounded-2xl overflow-hidden">
                  <div className="px-6 py-4 bg-[#1B1F24] border-b border-[#2A2F35] flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white font-heading">
                      Category by Category Breakdown
                    </h3>
                    <span className="text-xs text-[#A7ADB4]">
                      7 Detailed Criteria
                    </span>
                  </div>

                  <div className="divide-y divide-[#2A2F35]">
                    {activeComparison.categories.map((cat, idx) => (
                      <div key={idx} className="p-6 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                          <h4 className="text-base font-bold text-white font-heading">
                            {cat.name}
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                          {/* Car 1 Point */}
                          <div className="bg-[#1B1F24] p-4 rounded-xl border border-[#2A2F35]/70 space-y-1">
                            <strong className="text-white block font-semibold">
                              {activeComparison.car1.name}
                            </strong>
                            <p className="text-[#A7ADB4] leading-relaxed">
                              {cat.car1Highlight}
                            </p>
                          </div>

                          {/* Car 2 Point */}
                          <div className="bg-[#1B1F24] p-4 rounded-xl border border-[#2A2F35]/70 space-y-1">
                            <strong className="text-white block font-semibold">
                              {activeComparison.car2.name}
                            </strong>
                            <p className="text-[#A7ADB4] leading-relaxed">
                              {cat.car2Highlight}
                            </p>
                          </div>
                        </div>

                        {/* Synthesis note */}
                        <div className="bg-[#0B0D0F] px-4 py-2.5 rounded-lg border border-[#2A2F35] text-xs flex items-start gap-2 text-[#A7ADB4]">
                          <strong className="text-[#E53935] uppercase font-semibold tracking-wider shrink-0">
                            Takeaway:
                          </strong>
                          <span>{cat.winnerNote}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* CUSTOM COMPARISON TOOL */
          <div className="space-y-8">
            <div className="bg-[#15181C] p-6 rounded-2xl border border-[#2A2F35] text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white font-heading mb-2">
                Custom SUV Comparison
              </h3>
              <p className="text-xs sm:text-sm text-[#A7ADB4] mb-6">
                Select any two vehicles from our 6 featured Indian SUVs to evaluate their ergonomics, segment position, and daily usability.
              </p>

              {/* Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                    Vehicle #1
                  </label>
                  <select
                    value={customCar1Id}
                    onChange={(e) => setCustomCar1Id(e.target.value)}
                    className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white p-3 rounded-xl text-sm focus:outline-none focus:border-[#E53935]"
                  >
                    {SUVS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.segment.split(' ')[0]})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                    Vehicle #2
                  </label>
                  <select
                    value={customCar2Id}
                    onChange={(e) => setCustomCar2Id(e.target.value)}
                    className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white p-3 rounded-xl text-sm focus:outline-none focus:border-[#E53935]"
                  >
                    {SUVS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.segment.split(' ')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Custom Comparison Render */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Car 1 Card */}
              <div className="bg-[#1B1F24] p-6 rounded-2xl border border-[#2A2F35] space-y-6">
                <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
                  <ImageWithFallback
                    src={customCar1.image}
                    alt={customCar1.name}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#E53935]">
                    {customCar1.segment}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {customCar1.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB4] mt-2">
                    {customCar1.shortDescription}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#2A2F35] text-xs">
                  <div>
                    <span className="text-[#A7ADB4] block">Seating Layout</span>
                    <strong className="text-white">{customCar1.seatingCapacity}</strong>
                  </div>
                  <div>
                    <span className="text-[#A7ADB4] block">Driving Character</span>
                    <p className="text-white mt-0.5">{customCar1.drivingCharacter}</p>
                  </div>
                  <div>
                    <span className="text-[#A7ADB4] block">Best Suited For</span>
                    <p className="text-[#E53935] mt-0.5 font-semibold">{customCar1.bestSuitedFor}</p>
                  </div>
                </div>
              </div>

              {/* Car 2 Card */}
              <div className="bg-[#1B1F24] p-6 rounded-2xl border border-[#2A2F35] space-y-6">
                <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
                  <ImageWithFallback
                    src={customCar2.image}
                    alt={customCar2.name}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#E53935]">
                    {customCar2.segment}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {customCar2.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB4] mt-2">
                    {customCar2.shortDescription}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-[#2A2F35] text-xs">
                  <div>
                    <span className="text-[#A7ADB4] block">Seating Layout</span>
                    <strong className="text-white">{customCar2.seatingCapacity}</strong>
                  </div>
                  <div>
                    <span className="text-[#A7ADB4] block">Driving Character</span>
                    <p className="text-white mt-0.5">{customCar2.drivingCharacter}</p>
                  </div>
                  <div>
                    <span className="text-[#A7ADB4] block">Best Suited For</span>
                    <p className="text-[#E53935] mt-0.5 font-semibold">{customCar2.bestSuitedFor}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
