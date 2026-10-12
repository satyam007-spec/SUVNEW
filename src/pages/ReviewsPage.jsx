import { Link } from 'react-router-dom';
import { SUVS } from '../data/suvsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  ShieldCheck,
  Users,
  Fuel,
  ArrowRight,
  HelpCircle,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function ReviewsPage() {
  const faqs = [
    {
      question: "Which Indian SUV offers the best balance of technology and family space?",
      answer: "The Mahindra XUV700 stands out with dual 10.25-inch unified screens, Level-2 ADAS driver aids, and flexible 5 or 7-seater configurations, making it a technology benchmark for tech-savvy families."
    },
    {
      question: "Which SUV is best suited for pure 5-seater lounge comfort and highway poise?",
      answer: "The Tata Harrier excels with its Land Rover-derived OMEGArc platform, providing wide muscular road presence, immense high-speed straight-line stability, and class-leading rear-seat knee room."
    },
    {
      question: "What makes the Hyundai Creta India's highest-selling compact SUV?",
      answer: "The Creta offers a compliant, cushioned suspension for broken city roads, refined petrol and diesel powertrains, a panoramic sunroof, and Hyundai's expansive nationwide service footprint."
    },
    {
      question: "Why do buyers choose the Toyota Fortuner over feature-rich monocoque crossovers?",
      answer: "The Toyota Fortuner delivers bulletproof IMV ladder-frame durability, true low-range 4x4 off-road capability, commanding road authority, and market-leading resale value retention."
    }
  ];

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
            Detailed Indian SUV Reviews & Deep Dives
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
                  alt={`${suv.name} review profile photograph`}
                  aspectRatio="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-500"
                  maxWidth={650}
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
                  <h2 className="text-2xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors">
                    {suv.name}
                  </h2>
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
                  <Link
                    to={`/reviews/${suv.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#E53935]/20 active:scale-95"
                  >
                    <span>Read Full {suv.name} Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {suv.relatedBlogSlug && (
                    <Link
                      to={`/blogs/${suv.relatedBlogSlug}`}
                      className="p-2.5 bg-[#15181C] hover:bg-[#252A32] text-[#A7ADB4] hover:text-white rounded-lg border border-[#2A2F35] transition-colors flex items-center gap-1 text-xs"
                      aria-label={`Read ${suv.name} editorial comparison article`}
                    >
                      <Layers className="w-4 h-4" />
                      <span className="sr-only">Related Article</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AEO Question-Answer FAQ Section */}
        <section className="mt-20 pt-12 border-t border-[#2A2F35] max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#E53935] tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>AEO Buyer Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Frequently Asked Questions About Indian SUV Reviews
            </h2>
          </div>

          <div className="space-y-4 pt-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#15181C] p-6 rounded-xl border border-[#2A2F35] space-y-2"
              >
                <h3 className="text-base sm:text-lg font-bold text-white font-heading text-[#E53935]">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#A7ADB4] leading-relaxed">
                  <strong className="text-white">Answer:</strong> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
