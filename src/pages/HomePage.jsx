import { Link } from 'react-router-dom';
import { BLOGS } from '../data/blogsData';
import { SUVS } from '../data/suvsData';
import ImageWithFallback from '../components/ImageWithFallback';
import NewsletterSection from '../components/NewsletterSection';
import {
  Compass,
  ArrowRight,
  Clock,
  Sparkles,
  ShieldCheck,
  Scale,
  BookOpen,
  TrendingUp,
  Layers,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export default function HomePage() {
  const latestBlogs = BLOGS.slice(0, 6);
  const featuredSUVs = SUVS.slice(0, 6);

  const categories = [
    {
      title: 'SUV Reviews',
      description: 'Explore detailed SUV reviews and practical information.',
      icon: ShieldCheck,
      count: 'Deep Dives',
      link: '/reviews',
      anchorText: 'Explore In-Depth Indian SUV Reviews'
    },
    {
      title: 'Comparisons',
      description: 'Compare popular SUVs and understand their differences.',
      icon: Scale,
      count: 'Head-to-Head',
      link: '/comparisons',
      anchorText: 'Compare Top Rival SUVs Side by Side'
    },
    {
      title: 'Buying Guides',
      description: 'Helpful information for people planning to buy an SUV.',
      icon: BookOpen,
      count: 'Practical Tips',
      link: '/buying-guides',
      anchorText: 'Read Practical Family SUV Buying Guides'
    },
    {
      title: 'SUV Trends',
      description: 'Explore changing trends in the Indian SUV market.',
      icon: TrendingUp,
      count: 'Industry Insights',
      link: '/blogs?category=SUV+Trends',
      anchorText: 'Discover Growing Indian SUV Market Trends'
    }
  ];

  const whyFeatures = [
    {
      question: "What makes SUVHUB reviews distinct?",
      answer: "Easy-to-understand reviews focusing on real ergonomics, third-row space, and city suspension comfort without confusing mechanical jargon.",
      icon: ShieldCheck
    },
    {
      question: "How do our comparisons help buyers?",
      answer: "Simple, unbiased head-to-head comparisons highlighting genuine ride, boot space, and ownership cost differences between popular models.",
      icon: Scale
    },
    {
      question: "What value do our buying guides provide?",
      answer: "Actionable checklists covering real on-road tax calculations, petrol vs diesel fuel economics, and pre-delivery inspection stockyard tips.",
      icon: BookOpen
    },
    {
      question: "How do we track Indian auto trends?",
      answer: "We analyze why SUVs dominate 50%+ of new car sales, covering ground clearance advantages and the boom in sub-4m compact crossovers.",
      icon: TrendingUp
    }
  ];

  const homeFaqs = [
    {
      question: "What should Indian buyers prioritize when choosing an SUV in 2026?",
      answer: "Buyers should prioritize unladen ground clearance (180mm+), minimum 6 airbags with ESP, realistic fuel consumption based on monthly mileage (petrol for under 1,000 km/month; diesel for over 1,500 km/month), and dealer workshop accessibility."
    },
    {
      question: "How do 5-seater and 7-seater mid-size SUVs differ in practicality?",
      answer: "Dedicated 5-seaters (like the Tata Harrier) maximize second-row knee room and everyday boot space, whereas 7-seaters (like the Mahindra XUV700) offer folding seat versatility for extended family gatherings."
    },
    {
      question: "Is SUVHUB an authorized dealer or commercial showroom?",
      answer: "No, SUVHUB is an educational, collegiate automotive information and research project built to provide unbiased, student-authored car buying resources."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0D0F]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#2A2F35]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Definitive SUV Guide • College Project</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
                THE WORLD OF SUVs, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#E53935]">
                  ALL IN ONE PLACE.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#A7ADB4] leading-relaxed max-w-2xl font-normal">
                Explore SUV reviews, comparisons, buying guides, features and the latest automotive trends with SUVHUB.
              </p>

              {/* Action Buttons with Descriptive Anchor Text */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/blogs"
                  className="px-6 py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-[#E53935]/25 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Explore All 10 SUV Blogs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/reviews"
                  className="px-6 py-3.5 bg-[#1B1F24] hover:bg-[#252A32] text-white border border-[#2A2F35] hover:border-[#A7ADB4]/40 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Explore Featured Indian SUVs</span>
                  <ChevronRight className="w-4 h-4 text-[#A7ADB4]" />
                </Link>
              </div>

              {/* Trust metric highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#2A2F35]/70 max-w-md">
                <div>
                  <div className="text-2xl font-bold text-white font-heading">10</div>
                  <div className="text-xs text-[#A7ADB4] uppercase tracking-wide">Full Articles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white font-heading">6</div>
                  <div className="text-xs text-[#A7ADB4] uppercase tracking-wide">Featured SUVs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#E53935] font-heading">100%</div>
                  <div className="text-xs text-[#A7ADB4] uppercase tracking-wide">Practical Focus</div>
                </div>
              </div>
            </div>

            {/* Large Premium SUV Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#2A2F35] shadow-2xl bg-[#15181C] group">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=75"
                  alt="Modern premium mid-size SUV driving on scenic mountain highway"
                  aspectRatio="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-700"
                  maxWidth={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#1B1F24]/90 backdrop-blur-md p-4 rounded-xl border border-[#2A2F35] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#E53935] block">
                      Market Spotlight
                    </span>
                    <h3 className="text-sm font-bold text-white">Modern Indian SUV Segment</h3>
                    <p className="text-xs text-[#A7ADB4]">Comfort • Tech • Dominance</p>
                  </div>
                  <Link
                    to="/blogs/why-suvs-have-become-so-popular-in-india"
                    className="p-2 bg-[#E53935] text-white rounded-lg hover:bg-[#D32F2F] transition-colors flex items-center gap-1 text-xs font-semibold"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SUVS (6 Cards with Question-Answer H2) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              Which 6 Featured SUVs Define the Indian Automotive Market?
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
              Answer: From family 7-seaters to rugged 4x4 ladder-frame titans, explore India's six most talked-about SUVs with dedicated reviews:
            </p>
          </div>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group"
          >
            <span>View All Detailed Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSUVs.map((suv) => (
            <div
              key={suv.id}
              className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={suv.image}
                  alt={`${suv.name} front three-quarter exterior profile`}
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
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors">
                    {suv.name}
                  </h3>
                  <p className="text-sm text-[#A7ADB4] mt-2 line-clamp-2 leading-relaxed">
                    {suv.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A2F35] flex items-center justify-between">
                  <span className="text-xs text-[#A7ADB4] font-medium">
                    {suv.seatingCapacity}
                  </span>
                  <Link
                    to={`/reviews/${suv.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#15181C] hover:bg-[#E53935] px-3.5 py-2 rounded-md border border-[#2A2F35] hover:border-transparent transition-all"
                  >
                    <span>View {suv.name} Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LATEST BLOGS SECTION (6 Cards with Question-Answer H2) */}
      <section className="py-20 bg-[#15181C]/50 border-y border-[#2A2F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Editorial Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                What Are the Latest Expert SUV Blogs and Guides?
              </h2>
              <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
                Answer: Explore our newest in-depth guides covering family buying criteria, head-to-head match-ups, and market trends:
              </p>
            </div>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E53935] hover:text-white transition-colors group"
            >
              <span>Explore All 10 Full Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl overflow-hidden hover:border-[#E53935]/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={blog.image}
                    alt={`${blog.title} article cover image`}
                    aspectRatio="aspect-[16/10]"
                    className="group-hover:scale-105 transition-transform duration-500"
                    maxWidth={650}
                  />
                  <span className="absolute top-3 left-3 bg-[#0B0D0F]/85 backdrop-blur-sm border border-[#2A2F35] text-[#E53935] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#A7ADB4] mb-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#E53935]" />
                      <span>{blog.readTime}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#E53935] transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-[#A7ADB4] mt-3 line-clamp-2 leading-relaxed">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2A2F35]">
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all w-full justify-center shadow-md shadow-[#E53935]/15"
                    >
                      <span>Read {blog.title.split(':')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUV CATEGORIES (4 Cards with Question-Answer H2) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Which SUV Category Best Matches Your Research Goals?
          </h2>
          <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
            Answer: Browse through tailored content pillars crafted to guide every step of your automotive research journey:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.link}
                className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl p-6 hover:border-[#E53935] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#15181C] border border-[#2A2F35] flex items-center justify-center text-[#E53935] mb-5 group-hover:bg-[#E53935] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#E53935] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#A7ADB4] leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#2A2F35] flex items-center justify-between text-xs font-semibold text-[#A7ADB4] group-hover:text-white transition-colors">
                  <span>{cat.anchorText}</span>
                  <ArrowRight className="w-4 h-4 text-[#E53935] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. WHY SUVHUB (4 Question-Answer Feature Cards) */}
      <section className="py-20 bg-[#15181C] border-t border-[#2A2F35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#E53935] font-bold">
              Our Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading mt-2">
              Why Should You Trust SUVHUB for Automotive Guidance?
            </h2>
            <p className="text-sm sm:text-base text-[#A7ADB4] mt-2">
              Answer: Because our research is 100% student-authored, unbiased, and focused purely on practical family usability:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1B1F24] border border-[#2A2F35] rounded-xl p-6 flex flex-col justify-between space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0B0D0F] border border-[#2A2F35] flex items-center justify-center text-[#E53935]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {feat.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
                    <strong className="text-white">Answer:</strong> {feat.answer}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#2A2F35]/50 text-[11px] text-[#A7ADB4]">
                    No dealer commission • Academic demo
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. AEO HOMEPAGE FAQ SECTION */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#E53935] tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>AEO Quick Answers</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white font-heading">
            Frequently Asked Questions by Indian SUV Buyers
          </h2>
        </div>

        <div className="space-y-4">
          {homeFaqs.map((faq, idx) => (
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

      {/* 7. NEWSLETTER SECTION */}
      <NewsletterSection />
    </div>
  );
}
