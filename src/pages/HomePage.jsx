import HeroSection from '../components/home/HeroSection';
import FeaturedSUVsSection from '../components/home/FeaturedSUVsSection';
import FeaturedBlogSection from '../components/home/FeaturedBlogSection';
import LatestBlogsSection from '../components/home/LatestBlogsSection';
import ComparisonsSection from '../components/home/ComparisonsSection';
import BuyingGuidesSection from '../components/home/BuyingGuidesSection';
import EditorialBrandSection from '../components/home/EditorialBrandSection';
import NewsletterSection from '../components/NewsletterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0D0F]">
      {/* 1. Hero Section: Cinematic composition, headline, verified CTAs */}
      <HeroSection />

      {/* 2. Featured SUVs: 6 benchmark vehicles with dedicated review links */}
      <FeaturedSUVsSection />

      {/* 3. Featured Editorial Blog: Large visual cover story from local data */}
      <FeaturedBlogSection />

      {/* 4. Latest Blogs: 6 articles from project data with working links */}
      <LatestBlogsSection />

      {/* 5. SUV Comparisons: Head-to-head showdowns linking to /comparisons */}
      <ComparisonsSection />

      {/* 6. Buying Guides: Actionable checklist cards linking to advice pages */}
      <BuyingGuidesSection />

      {/* 7. Editorial Brand Section: Platform mission and evaluation criteria */}
      <EditorialBrandSection />

      {/* 8. Newsletter Call-To-Action: Form with validation and demo notice */}
      <NewsletterSection />
    </div>
  );
}
