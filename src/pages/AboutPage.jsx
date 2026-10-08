import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  Layers,
  Users,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export default function AboutPage() {
  const coverageItems = [
    {
      title: 'SUV Reviews',
      description: 'Pragmatic assessments of cabin quality, real legroom, highway poise, and suspension comfort without marketing jargon.'
    },
    {
      title: 'Head-to-Head Comparisons',
      description: 'Neutral, category-by-category breakdowns comparing design, space, features, and everyday urban drivability.'
    },
    {
      title: 'Buying Guides',
      description: 'Step-by-step checklists covering real on-road costs, petrol vs diesel fuel economics, and PDI inspection guidelines.'
    },
    {
      title: 'SUV Features',
      description: 'Clear evaluations of which technological features provide true daily utility versus showroom gimmicks.'
    },
    {
      title: 'Indian Market Trends',
      description: 'Tracking why SUVs have taken over Indian roads, shifting buyer demographics, and sub-segment evolutions.'
    }
  ];

  const targetAudience = [
    {
      title: 'First-Time Car Buyers',
      description: 'Providing a clear roadmap so newcomers avoid common dealership pitfalls and choose the right size and powertrain.'
    },
    {
      title: 'Indian Families',
      description: 'Focusing on multi-generational comfort, child seat safety, elderly passenger ingress, and real luggage capacity.'
    },
    {
      title: 'Students & Auto Enthusiasts',
      description: 'A shared academic space exploring automotive engineering, design philosophy, and Indian automotive dynamics.'
    },
    {
      title: 'Young Working Professionals',
      description: 'Highlighting daily city commutability, compact footprint, parking ease, and smartphone connectivity.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#15181C] to-[#0B0D0F] border-b border-[#2A2F35] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Web Development Project</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            About SUVHUB
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB4] leading-relaxed max-w-2xl mx-auto">
            SUVHUB is a modern, student-created automotive blog and research portal developed to simplify SUV buying decisions and explore the evolving world of sports utility vehicles in India.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-16">
        {/* Academic Project Transparency Notice */}
        <div className="bg-[#15181C] border-l-4 border-[#E53935] border-y border-r border-[#2A2F35] p-6 sm:p-8 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base font-heading">
            <GraduationCap className="w-5 h-5 text-[#E53935]" />
            <span>Project Overview & Transparency</span>
          </div>
          <p className="text-sm text-[#A7ADB4] leading-relaxed">
            SUVHUB is developed as a collegiate web development demonstration project. It is designed to demonstrate clean UI architecture, client-side data management, responsive design, and practical automotive communication. We do not claim to be a commercial automotive publication or authorized dealer entity.
          </p>
        </div>

        {/* 1. OUR MISSION */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B1F24] border border-[#2A2F35] flex items-center justify-center text-[#E53935]">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider">
                Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Our Mission
              </h2>
            </div>
          </div>

          <p className="text-base text-[#A7ADB4] leading-relaxed bg-[#15181C] p-6 sm:p-8 rounded-xl border border-[#2A2F35]">
            Our mission is to help Indian car buyers and automobile enthusiasts understand SUVs through straightforward, transparent, and genuinely practical content. Rather than regurgitating press releases or confusing readers with engineering jargon, SUVHUB distills complex automobile choices into tangible daily factors: rear-seat knee room, boot space practicality, suspension behavior over broken city asphalt, and realistic fuel running costs.
          </p>
        </section>

        {/* 2. WHAT WE COVER */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B1F24] border border-[#2A2F35] flex items-center justify-center text-[#E53935]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider">
                Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                What We Cover
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coverageItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1B1F24] p-5 rounded-xl border border-[#2A2F35] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E53935]" />
                  <h3 className="font-bold text-white text-base font-heading">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed pl-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHO WE ARE FOR */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1B1F24] border border-[#2A2F35] flex items-center justify-center text-[#E53935]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#E53935] tracking-wider">
                Audience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Who We Are For
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {targetAudience.map((aud, idx) => (
              <div
                key={idx}
                className="bg-[#15181C] p-6 rounded-xl border border-[#2A2F35] space-y-2 hover:border-[#E53935]/40 transition-colors"
              >
                <h3 className="font-bold text-white text-base font-heading text-[#E53935]">
                  {aud.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
                  {aud.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Explore */}
        <div className="bg-[#1B1F24] p-8 rounded-2xl border border-[#2A2F35] text-center space-y-4">
          <h3 className="text-2xl font-bold text-white font-heading">
            Ready to explore our articles?
          </h3>
          <p className="text-sm text-[#A7ADB4] max-w-xl mx-auto">
            Browse through all 10 curated guides, head-to-head SUV comparisons, and buying checklists.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/blogs"
              className="px-6 py-3 bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all shadow-md active:scale-95"
            >
              Explore All 10 Blogs
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#15181C] hover:bg-[#252A32] text-white text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#2A2F35] transition-all"
            >
              Contact the Project Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
