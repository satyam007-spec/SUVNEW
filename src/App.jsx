import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ReviewsPage from './pages/ReviewsPage';
import ComparisonsPage from './pages/ComparisonsPage';
import BuyingGuidesPage from './pages/BuyingGuidesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Compass, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Auto scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 404 Not Found Page
function NotFoundPage() {
  useEffect(() => {
    document.title = '404 - Page Not Found | SUVHUB';
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-[#0B0D0F]">
      <div className="bg-[#15181C] border border-[#2A2F35] rounded-2xl p-10 max-w-md text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#E53935]/10 border border-[#E53935]/30 flex items-center justify-center mx-auto text-[#E53935] mb-4">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-4xl font-extrabold text-[#E53935] font-heading block mb-2">404</span>
        <h2 className="text-2xl font-bold text-white mb-2 font-heading">Off the Map</h2>
        <p className="text-sm text-[#A7ADB4] mb-6">
          The road you are looking for does not exist. Let's get you back to the main trail.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0B0D0F] text-white selection:bg-[#E53935] selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/comparisons" element={<ComparisonsPage />} />
            <Route path="/buying-guides" element={<BuyingGuidesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
