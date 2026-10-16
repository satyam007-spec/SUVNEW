import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function EditorialBrandSection() {
  const editorialPillars = [
    {
      title: "Indian Road Reality",
      description: "We evaluate real unladen ground clearance, suspension damping over monsoon potholes, and city maneuverability without sugarcoating.",
      icon: Compass
    },
    {
      title: "ARAI vs Real-World Fuel Economy",
      description: "We distinguish laboratory-certified ARAI figures from genuine bumper-to-bumper city commuting consumption.",
      icon: Scale
    },
    {
      title: "True Cabin Ergonomics",
      description: "We test 2nd-row knee room with 6-foot adults and measure practical luggage volume with all seats deployed.",
      icon: CheckCircle2
    },
    {
      title: "Independent & Transparent",
      description: "An academic college project initiative dedicated to honest, jargon-free automotive advice without dealer commission influence.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 bg-[#15181C] border-t border-[#2A2F35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Brand Introduction Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold">
              <span>Platform Mission</span>
              <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
              <span className="text-[#A7ADB4]">About SUVHUB</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
              An Automotive Platform Built for Indian Car Buyers
            </h2>

            <p className="text-sm sm:text-base text-[#A7ADB4] leading-relaxed">
              SUVHUB was created to simplify the complex world of modern sport utility vehicles. With over 50% of new passenger vehicles in India now belonging to the SUV segment, buyers need honest, straightforward comparisons rather than brochure marketing jargon.
            </p>

            <p className="text-sm text-[#A7ADB4] leading-relaxed">
              Whether you are weighing a compact monocoque crossover for daily office traffic or choosing a 7-seater ladder-frame workhorse for extended highway road trips, our mission is to deliver clear, actionable perspective.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/about"
                className="px-5 py-2.5 bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 shadow-md shadow-[#E53935]/20"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/contact"
                className="px-5 py-2.5 bg-[#1B1F24] hover:bg-[#252A32] text-white border border-[#2A2F35] text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
              >
                <span>Contact Team</span>
              </Link>
            </div>
          </div>

          {/* Editorial Pillars 2x2 Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {editorialPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl p-6 flex flex-col justify-between space-y-3 shadow-md hover:border-[#E53935]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0B0D0F] border border-[#2A2F35] flex items-center justify-center text-[#E53935]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-white font-heading">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-2 border-t border-[#2A2F35]/40 text-[11px] text-[#A7ADB4]">
                      Practical Standard
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
