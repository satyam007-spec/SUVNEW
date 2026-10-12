import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SUVS } from '../data/suvsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  Compass,
  ArrowLeft,
  Users,
  Fuel,
  CheckCircle2,
  Sparkles,
  Gauge,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function SUVDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const suv = SUVS.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!suv) {
    return (
      <div className="min-h-screen bg-[#0B0D0F] flex items-center justify-center px-4">
        <div className="bg-[#15181C] border border-[#2A2F35] rounded-xl p-10 max-w-md text-center">
          <Compass className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2 font-heading">SUV Review Not Found</h1>
          <p className="text-sm text-[#A7ADB4] mb-6">
            The SUV model review you are looking for does not exist in our directory.
          </p>
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All SUV Reviews</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Top Breadcrumb */}
      <div className="bg-[#15181C] border-b border-[#2A2F35] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/reviews')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#E53935]" />
            <span>Back to All SUV Reviews</span>
          </button>
          <span className="text-xs text-[#E53935] font-semibold uppercase tracking-wider">
            {suv.segment}
          </span>
        </div>
      </div>

      {/* Main Review Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{suv.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
          {suv.name} In-Depth Review
        </h1>

        <p className="text-base sm:text-lg text-[#A7ADB4] leading-relaxed">
          {suv.shortDescription}
        </p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#1B1F24] p-4 rounded-xl border border-[#2A2F35] text-xs">
          <div>
            <span className="text-[#A7ADB4] block mb-1">Seating</span>
            <strong className="text-white font-semibold">{suv.seatingCapacity}</strong>
          </div>
          <div>
            <span className="text-[#A7ADB4] block mb-1">Drivetrain</span>
            <strong className="text-white font-semibold">{suv.transmissionOptions}</strong>
          </div>
          <div>
            <span className="text-[#A7ADB4] block mb-1">Fuel Options</span>
            <strong className="text-white font-semibold">{suv.fuelOptions}</strong>
          </div>
          <div>
            <span className="text-[#A7ADB4] block mb-1">Character</span>
            <strong className="text-[#E53935] font-semibold">{suv.badge}</strong>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl overflow-hidden border border-[#2A2F35] shadow-2xl bg-[#15181C]">
          <ImageWithFallback
            src={suv.image}
            alt={`${suv.name} Indian mid-size SUV exterior view and road stance`}
            aspectRatio="aspect-[16/9]"
            maxWidth={800}
          />
        </div>
      </div>

      {/* AEO Question-Answer Content Sections */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Q1: Overview */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading border-l-4 border-[#E53935] pl-3 py-0.5">
            What Is the Market Positioning of the {suv.name}?
          </h2>
          <p className="text-[#A7ADB4] text-base leading-relaxed">
            <strong className="text-white">Answer:</strong> {suv.overview}
          </p>
        </section>

        {/* Q2: Design */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading border-l-4 border-[#E53935] pl-3 py-0.5">
            What Are the Key Exterior Design Highlights of the {suv.name}?
          </h2>
          <p className="text-[#A7ADB4] text-sm leading-relaxed mb-3">
            <strong className="text-white">Answer:</strong> The exterior styling focuses on strong road presence, aerodynamic elements, and prominent lighting signatures designed for Indian roads:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {suv.designHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1B1F24] border border-[#2A2F35] p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-[#A7ADB4]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Q3: Cabin Comfort */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading border-l-4 border-[#E53935] pl-3 py-0.5">
            How Comfortable and Feature-Packed Is the Cabin?
          </h2>
          <p className="text-[#A7ADB4] text-sm leading-relaxed mb-3">
            <strong className="text-white">Answer:</strong> The in-cabin experience prioritizes supportive seating, modern infotainment integration, and passenger thermal comfort:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {suv.comfortFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1B1F24] border border-[#2A2F35] p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-[#A7ADB4]"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Q4: Practicality */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-heading border-l-4 border-[#E53935] pl-3 py-0.5">
            How Practical Is the {suv.name} for Everyday Indian Family Usage?
          </h2>
          <p className="text-[#A7ADB4] text-sm leading-relaxed mb-3">
            <strong className="text-white">Answer:</strong> Everyday practicality includes quick passenger ingress, expandable luggage spaces, and generous cabin cubbies:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {suv.practicality.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1B1F24] border border-[#2A2F35] p-3.5 rounded-lg flex items-start gap-2.5 text-xs text-[#A7ADB4]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] mt-1.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Q5: Driving Dynamics */}
        <section className="space-y-3 bg-[#1B1F24] p-6 rounded-xl border border-[#2A2F35]">
          <h2 className="text-lg font-bold text-white font-heading flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#E53935]" />
            <span>How Does the {suv.name} Behave on City Roads and Highways?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A7ADB4] leading-relaxed">
            <strong className="text-white">Answer:</strong> {suv.drivingCharacter}
          </p>
        </section>

        {/* Q6: Ideal Buyer */}
        <section className="bg-gradient-to-r from-[#1B1F24] to-[#15181C] p-6 rounded-xl border-l-4 border-[#E53935] border-y border-r border-[#2A2F35] space-y-2">
          <h2 className="text-xs uppercase tracking-wider text-[#E53935] font-bold">
            Who Should Consider Buying the {suv.name}?
          </h2>
          <p className="text-sm text-white font-medium leading-relaxed">
            <strong className="text-white">Answer:</strong> {suv.bestSuitedFor}
          </p>
        </section>

        {/* Cross-linking to related comparison or blog with rich anchor text */}
        <div className="pt-8 border-t border-[#2A2F35] flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/reviews"
            className="text-xs text-[#A7ADB4] hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#E53935]" />
            <span>Return to All SUV Reviews</span>
          </Link>

          {suv.relatedBlogSlug && (
            <Link
              to={`/blogs/${suv.relatedBlogSlug}`}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#E53935]/20"
            >
              <span>Read {suv.name} Comparison Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
