import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HEAD_TO_HEAD_COMPARISONS } from '../data/comparisonsData';
import { SUVS } from '../data/suvsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  Scale,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  HelpCircle
} from 'lucide-react';

export default function ComparisonsPage() {
  const [customCar1Id, setCustomCar1Id] = useState('mahindra-xuv700');
  const [customCar2Id, setCustomCar2Id] = useState('tata-harrier');
  const [isCustomMode, setIsCustomMode] = useState(false);

  const customCar1 = SUVS.find((s) => s.id === customCar1Id) || SUVS[0];
  const customCar2 = SUVS.find((s) => s.id === customCar2Id) || SUVS[1];

  const comparisonFaqs = [
    {
      question: "Which SUV makes more sense for a family: XUV700 or Tata Harrier?",
      answer: "Choose the Mahindra XUV700 if you require flexible 7-seater seating or ADAS driver tech; choose the Tata Harrier if you want unmatched 5-seater rear lounge room and imposing road stance."
    },
    {
      question: "How do you decide between the Hyundai Creta and Kia Seltos?",
      answer: "Pick the Hyundai Creta if you prefer a softer, cushioned ride for city bumps and family comfort; pick the Kia Seltos if you value sharp handling, aggressive styling, and sporty steering feedback."
    },
    {
      question: "Is the Mahindra Scorpio-N a real alternative to the Toyota Fortuner?",
      answer: "Yes, the Scorpio-N delivers 85% of the Fortuner's ladder-frame road presence, 4x4 capability, and 3-row space at a fraction of the price, making it a compelling value-for-money alternative."
    }
  ];

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
            SUV Comparisons & Head-to-Head Tests
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
          <div className="space-y-12">
            {/* 3 Dedicated Comparison Showcases with Unique URLs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HEAD_TO_HEAD_COMPARISONS.map((comp) => (
                <div
                  key={comp.id}
                  className="bg-[#1B1F24] border border-[#2A2F35] rounded-2xl overflow-hidden hover:border-[#E53935]/60 transition-all flex flex-col justify-between group shadow-xl"
                >
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-0.5 bg-[#0B0D0F]">
                      <ImageWithFallback
                        src={comp.car1.image}
                        alt={`${comp.car1.name} comparison profile`}
                        aspectRatio="aspect-[4/3]"
                        maxWidth={400}
                      />
                      <ImageWithFallback
                        src={comp.car2.image}
                        alt={`${comp.car2.name} comparison profile`}
                        aspectRatio="aspect-[4/3]"
                        maxWidth={400}
                      />
                    </div>
                    <span className="absolute bottom-3 left-3 bg-[#0B0D0F]/90 backdrop-blur-sm border border-[#2A2F35] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                      Head to Head
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-snug">
                        {comp.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#A7ADB4] mt-2 line-clamp-2">
                        {comp.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#2A2F35] space-y-2">
                      <Link
                        to={`/comparisons/${comp.id}`}
                        className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#E53935]/20"
                      >
                        <span>Compare {comp.car1.name} vs {comp.car2.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {comp.relatedBlogSlug && (
                        <Link
                          to={`/blogs/${comp.relatedBlogSlug}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#A7ADB4] hover:text-white py-1.5 transition-colors"
                        >
                          <span>Read Editorial Road Test Blog</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AEO Question-Answer Comparison FAQ */}
            <section className="mt-16 pt-12 border-t border-[#2A2F35] max-w-4xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#E53935] tracking-widest">
                  <HelpCircle className="w-4 h-4" />
                  <span>AEO Match-Up Insights</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  How Do Experts Resolve Common Indian SUV Dilemmas?
                </h2>
              </div>

              <div className="space-y-4 pt-4">
                {comparisonFaqs.map((faq, idx) => (
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
        ) : (
          /* CUSTOM COMPARISON TOOL */
          <div className="space-y-8">
            <div className="bg-[#15181C] p-6 rounded-2xl border border-[#2A2F35] text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white font-heading mb-2">
                Custom SUV Comparison
              </h2>
              <p className="text-xs sm:text-sm text-[#A7ADB4] mb-6">
                Select any two vehicles from our 6 featured Indian SUVs to evaluate their ergonomics, segment position, and daily usability.
              </p>

              {/* Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div>
                  <label htmlFor="custom-car-1" className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                    Vehicle #1
                  </label>
                  <select
                    id="custom-car-1"
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
                  <label htmlFor="custom-car-2" className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                    Vehicle #2
                  </label>
                  <select
                    id="custom-car-2"
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
                    alt={`${customCar1.name} visual preview`}
                    aspectRatio="aspect-[16/10]"
                    maxWidth={600}
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

                <div className="pt-4 border-t border-[#2A2F35]">
                  <Link
                    to={`/reviews/${customCar1.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E53935] transition-colors"
                  >
                    <span>Read Full {customCar1.name} Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Car 2 Card */}
              <div className="bg-[#1B1F24] p-6 rounded-2xl border border-[#2A2F35] space-y-6">
                <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
                  <ImageWithFallback
                    src={customCar2.image}
                    alt={`${customCar2.name} visual preview`}
                    aspectRatio="aspect-[16/10]"
                    maxWidth={600}
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

                <div className="pt-4 border-t border-[#2A2F35]">
                  <Link
                    to={`/reviews/${customCar2.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E53935] transition-colors"
                  >
                    <span>Read Full {customCar2.name} Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
