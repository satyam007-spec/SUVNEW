import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  BookOpen,
  ArrowRight,
  Clock,
  CheckCircle,
  HelpCircle,
  Fuel,
  Users,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function BuyingGuidesPage() {
  // Key buying guide articles matching the 5 required topics
  const guides = [
    {
      title: "Best SUVs for Indian Families: What Should You Look For?",
      slug: "best-suvs-for-indian-families",
      category: "Family Practicality",
      icon: Users,
      summary: "Understand genuine rear-seat legroom, 5 vs 7-seater dilemmas, safety integrity, and boot space for baby strollers and vacation luggage.",
      checklist: [
        "Inspect second-row under-thigh support",
        "Check rear AC vent speed controls",
        "Verify third-row tumble accessibility",
        "Ensure child ISOFIX safety anchors"
      ]
    },
    {
      title: "Petrol vs Diesel SUV: Which One Should You Choose?",
      slug: "petrol-vs-diesel-suv",
      category: "Fuel & Economics",
      icon: Fuel,
      summary: "Calculate your monthly running distance, understand diesel DPF filter requirements, and learn how many kilometers justify the diesel premium.",
      checklist: [
        "Under 1,000 km/month: Petrol / Hybrid",
        "Over 1,500 km/month: Diesel efficiency",
        "Check 10-year vs 15-year regional rules",
        "Consider low-end torque for full loads"
      ]
    },
    {
      title: "Top Things to Check Before Buying a New SUV",
      slug: "top-things-to-check-before-buying-a-new-suv",
      category: "Buyer Checklist",
      icon: CheckCircle,
      summary: "A practical step-by-step checklist covering real on-road costs, showroom test-drive methods, service proximity, and daylight PDI inspections.",
      checklist: [
        "Compare IRDAI insurance quotes",
        "Test-drive over broken surfaces",
        "Perform stockyard PDI in daylight",
        "Inquire about extended warranty packages"
      ]
    },
    {
      title: "How to Choose the Right SUV for Your Lifestyle",
      slug: "how-to-choose-the-right-suv-for-your-lifestyle",
      category: "Decision Matrix",
      icon: Compass,
      summary: "Match your lifestyle profile—city daily commuter, touring family, or outdoor explorer—with the ideal SUV body style and drivetrain.",
      checklist: [
        "Daily city commute vs long road trips",
        "Dedicated 5-seater vs flexible 7-seater",
        "Monocoque comfort vs Ladder-frame grit",
        "Automatic vs Manual transmission ease"
      ]
    },
    {
      title: "5 Important SUV Features You Should Not Ignore",
      slug: "5-important-suv-features-you-should-not-ignore",
      category: "Feature Evaluation",
      icon: ShieldCheck,
      summary: "Cut through showroom marketing hype and discover the five indispensable features that truly elevate safety, summer comfort, and daily convenience.",
      checklist: [
        "Six airbags & Electronic Stability (ESC)",
        "Front seat ventilation for Indian summers",
        "360-degree parking assistance camera",
        "Wireless phone integration & tactile dials"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#15181C] to-[#0B0D0F] border-b border-[#2A2F35] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Essential Buyer Playbooks</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            SUV Buying Guides
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB4] max-w-2xl mx-auto">
            Practical advice to help first-time buyers and families choose the right SUV, avoid showroom pitfalls, and calculate true ownership costs.
          </p>
        </div>
      </section>

      {/* Guide Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guides.map((item, idx) => {
            const Icon = item.icon;
            const fullBlog = BLOGS.find((b) => b.slug === item.slug);
            return (
              <div
                key={idx}
                className="bg-[#1B1F24] border border-[#2A2F35] rounded-2xl overflow-hidden hover:border-[#E53935]/50 transition-all flex flex-col justify-between group shadow-xl"
              >
                {/* Image and Tag */}
                {fullBlog && (
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={fullBlog.image}
                      alt={item.title}
                      aspectRatio="aspect-[21/9]"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B0D0F]/85 backdrop-blur-sm border border-[#2A2F35] text-[#E53935] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#A7ADB4] mt-2.5 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Key Checklist Points */}
                    <div className="mt-5 pt-5 border-t border-[#2A2F35]/70 space-y-2">
                      <span className="text-[11px] uppercase font-bold text-white tracking-wider block mb-2">
                        Key Checklist Takeaways:
                      </span>
                      {item.checklist.map((chk, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 text-xs text-[#A7ADB4]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] shrink-0" />
                          <span>{chk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2A2F35] flex items-center justify-between">
                    {fullBlog && (
                      <span className="text-xs text-[#A7ADB4] flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#E53935]" />
                        <span>{fullBlog.readTime}</span>
                      </span>
                    )}

                    <Link
                      to={`/blogs/${item.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#E53935]/20 active:scale-95"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Quick Buying Framework */}
        <div className="bg-[#15181C] p-8 sm:p-10 rounded-2xl border border-[#2A2F35] mt-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-[#E53935] font-bold">
              Framework
            </span>
            <h3 className="text-2xl font-bold text-white font-heading mt-1">
              4-Step SUV Decision Path
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1B1F24] p-5 rounded-xl border border-[#2A2F35]">
              <div className="text-2xl font-bold text-[#E53935] font-heading mb-2">01</div>
              <h4 className="font-bold text-white text-sm mb-1">Define Real Occupancy</h4>
              <p className="text-xs text-[#A7ADB4]">
                Don't buy a 7-seater if you only carry 3 passengers 95% of the time.
              </p>
            </div>
            <div className="bg-[#1B1F24] p-5 rounded-xl border border-[#2A2F35]">
              <div className="text-2xl font-bold text-[#E53935] font-heading mb-2">02</div>
              <h4 className="font-bold text-white text-sm mb-1">Compute Real Mileage</h4>
              <p className="text-xs text-[#A7ADB4]">
                Calculate your real monthly commute to pick between petrol, diesel, or hybrid.
              </p>
            </div>
            <div className="bg-[#1B1F24] p-5 rounded-xl border border-[#2A2F35]">
              <div className="text-2xl font-bold text-[#E53935] font-heading mb-2">03</div>
              <h4 className="font-bold text-white text-sm mb-1">Test Real Traffic</h4>
              <p className="text-xs text-[#A7ADB4]">
                Test-drive during peak rush hour and attempt parking in tight basement slots.
              </p>
            </div>
            <div className="bg-[#1B1F24] p-5 rounded-xl border border-[#2A2F35]">
              <div className="text-2xl font-bold text-[#E53935] font-heading mb-2">04</div>
              <h4 className="font-bold text-white text-sm mb-1">In-Person PDI</h4>
              <p className="text-xs text-[#A7ADB4]">
                Always inspect the physical vehicle in broad daylight before final registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
