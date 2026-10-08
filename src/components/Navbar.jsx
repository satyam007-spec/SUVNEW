import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Comparisons', path: '/comparisons' },
    { name: 'Buying Guides', path: '/buying-guides' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0D0F]/95 backdrop-blur-md border-b border-[#2A2F35] shadow-lg shadow-black/40'
          : 'bg-[#0B0D0F] border-b border-[#2A2F35]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Tagline */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E53935] to-[#B71C1C] flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-[#E53935]/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider text-white font-heading group-hover:text-[#E53935] transition-colors">
                SUV<span className="text-[#E53935]">HUB</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#A7ADB4] font-medium -mt-1">
                Discover • Compare • Drive
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-white bg-[#1B1F24] border border-[#2A2F35] shadow-sm font-semibold'
                    : 'text-[#A7ADB4] hover:text-white hover:bg-[#15181C]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Quick CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/blogs"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] rounded-md transition-all shadow-md shadow-[#E53935]/20 flex items-center gap-1.5 active:scale-95"
            >
              <span>Explore Blogs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#A7ADB4] hover:text-white hover:bg-[#1B1F24] focus:outline-none focus:ring-2 focus:ring-[#E53935]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#15181C] border-b border-[#2A2F35] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white bg-[#1B1F24] border-l-4 border-[#E53935] font-semibold'
                    : 'text-[#A7ADB4] hover:text-white hover:bg-[#1B1F24]'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#A7ADB4]" />
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#2A2F35] flex flex-col gap-2">
            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#E53935] hover:bg-[#D32F2F] rounded-lg transition-all"
            >
              Explore All 10 Blogs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
