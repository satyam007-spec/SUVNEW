import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SUVS } from '../data/suvsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  ShieldCheck,
  Users,
  Fuel,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  X,
  Compass,
  Gauge,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function ReviewsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedParam = searchParams.get('select');

  const [selectedSUV, setSelectedSUV] = useState(
    SUVS.find((s) => s.id === selectedParam) || null
  );

  useEffect(() => {
    if (selectedParam) {
      const match = SUVS.find((s) => s.id === selectedParam);
      if (match) {
        setSelectedSUV(match);
      }
    }
  }, [selectedParam]);

  const handleOpenDetail = (suv) => {
    setSelectedSUV(suv);
    searchParams.set('select', suv.id);
    setSearchParams(searchParams);
  };

  const handleCloseDetail = () => {
    setSelectedSUV(null);
    searchParams.delete('select');
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#15181C] to-[#0B0D0F] border-b border-[#2A2F35] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Comprehensive Analysis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            SUV Reviews & Deep Dives
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB4] max-w-2xl mx-auto">
            Practical, in-depth breakdowns of India's leading SUVs. We focus on real cabin space, ergonomics, family usability, and ride behavior.
          </p>
        </div>
      </section>

      {/* Grid of Reviewed SUVs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUVS.map((suv) => (
            <div
              key={suv.id}
              className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/30"
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
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors">
                    {suv.name}
                  </h3>
                  <p className="text-sm text-[#A7ADB4] mt-2 line-clamp-3 leading-relaxed">
                    {suv.overview}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#2A2F35]/70 text-xs text-[#A7ADB4]">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#E53935]" />
                      <span>{suv.seatingCapacity.split(' ')[0]} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-[#E53935]" />
                      <span className="truncate">{suv.fuelOptions.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2A2F35] flex items-center gap-2">
                  <button
                    onClick={() => handleOpenDetail(suv)}
                    className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#E53935]/20 active:scale-95"
                  >
                    <span>Read Full Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {suv.relatedBlogSlug && (
                    <Link
                      to={`/blogs/${suv.relatedBlogSlug}`}
                      className="p-2.5 bg-[#15181C] hover:bg-[#252A32] text-[#A7ADB4] hover:text-white rounded-lg border border-[#2A2F35] transition-colors"
                      title="Read related article"
                    >
                      <Layers className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED SUV REVIEW MODAL / DRAWER */}
      {selectedSUV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#15181C] border border-[#2A2F35] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Modal Header */}
            <div className="sticky top-0 z-20 bg-[#15181C]/95 backdrop-blur-md px-6 py-4 border-b border-[#2A2F35] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#E53935] font-bold">
                  {selectedSUV.segment}
                </span>
                <h2 className="text-2xl font-bold text-white font-heading">
                  {selectedSUV.name} — Detailed Review
                </h2>
              </div>
              <button
                onClick={handleCloseDetail}
                className="p-2 rounded-lg bg-[#1B1F24] border border-[#2A2F35] text-[#A7ADB4] hover:text-white transition-colors"
                aria-label="Close review"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Hero Banner */}
              <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
                <ImageWithFallback
                  src={selectedSUV.image}
                  alt={selectedSUV.name}
                  aspectRatio="aspect-[21/9]"
                />
              </div>

              {/* Quick Specs Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#1B1F24] p-4 rounded-xl border border-[#2A2F35] text-xs">
                <div>
                  <span className="text-[#A7ADB4] block mb-1">Seating</span>
                  <strong className="text-white font-semibold">{selectedSUV.seatingCapacity}</strong>
                </div>
                <div>
                  <span className="text-[#A7ADB4] block mb-1">Drivetrain</span>
                  <strong className="text-white font-semibold">{selectedSUV.transmissionOptions}</strong>
                </div>
                <div>
                  <span className="text-[#A7ADB4] block mb-1">Fuel Options</span>
                  <strong className="text-white font-semibold">{selectedSUV.fuelOptions}</strong>
                </div>
                <div>
                  <span className="text-[#A7ADB4] block mb-1">Character</span>
                  <strong className="text-[#E53935] font-semibold">{selectedSUV.badge}</strong>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-bold text-white font-heading mb-2 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#E53935]" />
                  <span>Overview & Market Positioning</span>
                </h3>
                <p className="text-sm text-[#A7ADB4] leading-relaxed">
                  {selectedSUV.overview}
                </p>
              </div>

              {/* Design Highlights */}
              <div>
                <h3 className="text-lg font-bold text-white font-heading mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E53935]" />
                  <span>Exterior & Design Language</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSUV.designHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1B1F24] border border-[#2A2F35] p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-[#A7ADB4]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comfort & Cabin */}
              <div>
                <h3 className="text-lg font-bold text-white font-heading mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#E53935]" />
                  <span>Cabin Comfort & Technology</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSUV.comfortFeatures.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1B1F24] border border-[#2A2F35] p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-[#A7ADB4]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practicality & Storage */}
              <div>
                <h3 className="text-lg font-bold text-white font-heading mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#E53935]" />
                  <span>Practicality & Everyday Utility</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSUV.practicality.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1B1F24] border border-[#2A2F35] p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-[#A7ADB4]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Driving Dynamics */}
              <div className="bg-[#1B1F24] p-5 rounded-xl border border-[#2A2F35]">
                <h3 className="text-base font-bold text-white font-heading mb-2 flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#E53935]" />
                  <span>Driving Behavior & Suspension Character</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
                  {selectedSUV.drivingCharacter}
                </p>
              </div>

              {/* Best Suited For */}
              <div className="bg-gradient-to-r from-[#1B1F24] to-[#15181C] p-5 rounded-xl border-l-4 border-[#E53935] border-y border-r border-[#2A2F35]">
                <h4 className="text-xs uppercase tracking-wider text-[#E53935] font-bold mb-1">
                  Ideal Buyer Profile
                </h4>
                <p className="text-sm text-white font-medium">
                  {selectedSUV.bestSuitedFor}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2A2F35]">
                <Link
                  to="/comparisons"
                  className="text-xs text-[#A7ADB4] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>Compare with rivals</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#E53935]" />
                </Link>

                <div className="flex items-center gap-3">
                  {selectedSUV.relatedBlogSlug && (
                    <Link
                      to={`/blogs/${selectedSUV.relatedBlogSlug}`}
                      className="px-4 py-2 bg-[#1B1F24] hover:bg-[#252A32] text-white text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#2A2F35] transition-all"
                    >
                      Read Related Blog
                    </Link>
                  )}
                  <button
                    onClick={handleCloseDetail}
                    className="px-5 py-2 bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
                  >
                    Close Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
