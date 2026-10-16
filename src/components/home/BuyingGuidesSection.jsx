import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Users, Fuel, CheckCircle, Compass } from 'lucide-react';

export default function BuyingGuidesSection() {
  const guideCards = [
    {
      title: "Family SUV Checklist & Space Guide",
      description: "How to evaluate 2nd-row knee room, 3rd-row accessibility, boot volume for family luggage, and child ISOFIX safety.",
      slug: "best-suvs-for-indian-families",
      category: "Family Practicality",
      icon: Users,
      kicker: "5 vs 7 Seaters"
    },
    {
      title: "Petrol vs Diesel SUV Economics",
      description: "Break-even mileage calculations, BS6 DPF city maintenance reality, and regional registration lifespan rules.",
      slug: "petrol-vs-diesel-suv",
      category: "Fuel & Economics",
      icon: Fuel,
      kicker: "Cost Analysis"
    },
    {
      title: "Showroom PDI & Pre-Purchase Steps",
      description: "Daylight stockyard inspection, vehicle identification number (VIN) checks, and negotiating insurance quotes.",
      slug: "top-things-to-check-before-buying-a-new-suv",
      category: "Buyer Checklist",
      icon: CheckCircle,
      kicker: "PDI Checklist"
    },
    {
      title: "Lifestyle & Terrain Matching Matrix",
      description: "Choosing between monocoque city crossovers, tall-boy highway tourers, and rugged ladder-frame 4x4 off-roaders.",
      slug: "how-to-choose-the-right-suv-for-your-lifestyle",
      category: "Decision Matrix",
      icon: Compass,
      kicker: "Usage Match"
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-[#2A2F35]">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Advisory</span>
            <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
            <span className="text-[#A7ADB4]">Buying Playbooks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            SUV Buying Guides
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] mt-2 max-w-2xl">
            Practical, jargon-free step-by-step guidance designed to protect your investment and ensure your family buys the right vehicle.
          </p>
        </div>

        <Link
          to="/buying-guides"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group shrink-0"
        >
          <span>View All Buying Guides</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 4 Guides Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guideCards.map((guide, idx) => {
          const Icon = guide.icon;
          return (
            <div
              key={idx}
              className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl p-6 hover:border-[#E53935] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#15181C] border border-[#2A2F35] flex items-center justify-center text-[#E53935] mb-5 group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-[11px] uppercase font-bold tracking-wider text-[#E53935] mb-1">
                  {guide.kicker}
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#E53935] transition-colors mb-2.5">
                  <Link to={`/blogs/${guide.slug}`}>
                    {guide.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-[#2A2F35] flex items-center justify-between text-xs font-semibold text-[#A7ADB4] group-hover:text-white transition-colors">
                <Link
                  to={`/blogs/${guide.slug}`}
                  className="flex items-center gap-1.5 text-white hover:text-[#E53935] transition-colors"
                  aria-label={`Read guide on ${guide.title}`}
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E53935] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
