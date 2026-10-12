import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { HEAD_TO_HEAD_COMPARISONS } from '../data/comparisonsData';
import ImageWithFallback from '../components/ImageWithFallback';
import {
  Scale,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Compass
} from 'lucide-react';

export default function ComparisonDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const comparison = HEAD_TO_HEAD_COMPARISONS.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!comparison) {
    return (
      <div className="min-h-screen bg-[#0B0D0F] flex items-center justify-center px-4">
        <div className="bg-[#15181C] border border-[#2A2F35] rounded-xl p-10 max-w-md text-center">
          <Compass className="w-12 h-12 text-[#E53935] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2 font-heading">Comparison Not Found</h1>
          <p className="text-sm text-[#A7ADB4] mb-6">
            The SUV head-to-head showdown you requested does not exist in our directory.
          </p>
          <Link
            to="/comparisons"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E53935] text-white text-xs font-bold uppercase tracking-wider rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All SUV Comparisons</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Top Breadcrumb */}
      <div className="bg-[#15181C] border-b border-[#2A2F35] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/comparisons')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A7ADB4] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#E53935]" />
            <span>Back to All Comparisons</span>
          </button>
          <span className="text-xs text-[#E53935] font-semibold uppercase tracking-wider">
            Head-to-Head Showdown
          </span>
        </div>
      </div>

      {/* Main Comparison Header */}
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935]">
          <Scale className="w-3.5 h-3.5" />
          <span>Detailed Face-Off</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight">
          {comparison.title}
        </h1>

        <p className="text-base sm:text-lg text-[#A7ADB4] max-w-2xl mx-auto">
          {comparison.subtitle} — direct evaluation across design, comfort, practicality, and driving manners.
        </p>
      </header>

      {/* Side-by-side vehicle visual banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#15181C] p-6 sm:p-8 rounded-2xl border border-[#2A2F35]">
          {/* Car 1 */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
              <ImageWithFallback
                src={comparison.car1.image}
                alt={`${comparison.car1.name} exterior design view`}
                aspectRatio="aspect-[16/10]"
                maxWidth={700}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#E53935] uppercase font-semibold">
                  {comparison.car1.segment}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {comparison.car1.name}
                </h3>
              </div>
              <span className="text-xs text-[#A7ADB4] bg-[#1B1F24] px-3 py-1 rounded-md border border-[#2A2F35]">
                {comparison.car1.layout}
              </span>
            </div>
          </div>

          {/* Car 2 */}
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-[#2A2F35]">
              <ImageWithFallback
                src={comparison.car2.image}
                alt={`${comparison.car2.name} exterior design view`}
                aspectRatio="aspect-[16/10]"
                maxWidth={700}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs text-[#E53935] uppercase font-semibold">
                  {comparison.car2.segment}
                </span>
                <h3 className="text-2xl font-bold text-white font-heading">
                  {comparison.car2.name}
                </h3>
              </div>
              <span className="text-xs text-[#A7ADB4] bg-[#1B1F24] px-3 py-1 rounded-md border border-[#2A2F35]">
                {comparison.car2.layout}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AEO Question-Answer Category Breakdowns */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-[#15181C] border border-[#2A2F35] rounded-2xl overflow-hidden">
          <div className="px-6 py-4 bg-[#1B1F24] border-b border-[#2A2F35] flex items-center justify-between">
            <h2 className="text-xl font-bold text-white font-heading">
              How Do They Compare Across Key Evaluation Criteria?
            </h2>
            <span className="text-xs text-[#A7ADB4]">
              {comparison.categories.length} Detailed Criteria
            </span>
          </div>

          <div className="divide-y divide-[#2A2F35]">
            {comparison.categories.map((cat, idx) => (
              <section key={idx} className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E53935]" />
                  <span>How Do They Differ in {cat.name}?</span>
                </h3>

                <p className="text-xs text-[#A7ADB4]">
                  <strong className="text-white">Answer Summary:</strong> {cat.winnerNote}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* Car 1 Point */}
                  <div className="bg-[#1B1F24] p-4 rounded-xl border border-[#2A2F35]/70 space-y-1">
                    <strong className="text-white block font-semibold">
                      {comparison.car1.name}
                    </strong>
                    <p className="text-[#A7ADB4] leading-relaxed">
                      {cat.car1Highlight}
                    </p>
                  </div>

                  {/* Car 2 Point */}
                  <div className="bg-[#1B1F24] p-4 rounded-xl border border-[#2A2F35]/70 space-y-1">
                    <strong className="text-white block font-semibold">
                      {comparison.car2.name}
                    </strong>
                    <p className="text-[#A7ADB4] leading-relaxed">
                      {cat.car2Highlight}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Action Link to Related In-Depth Blog */}
        {comparison.relatedBlogSlug && (
          <div className="bg-[#1B1F24] border border-[#2A2F35] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#E53935] shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Looking for the complete editorial road test?</h4>
                <p className="text-xs text-[#A7ADB4]">Read our detailed long-form comparison article with highway driving feedback.</p>
              </div>
            </div>
            <Link
              to={`/blogs/${comparison.relatedBlogSlug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] px-4 py-2.5 rounded-lg transition-all shrink-0"
            >
              <span>Read Full Comparison Article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
