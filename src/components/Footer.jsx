import { Link } from 'react-router-dom';
import { Compass, Instagram, Twitter, Youtube, Linkedin, Mail, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0D0F] border-t border-[#2A2F35] text-[#A7ADB4] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E53935] to-[#B71C1C] flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-wider text-white font-heading">
                SUV<span className="text-[#E53935]">HUB</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#A7ADB4]">
              A modern automotive blog platform dedicated to SUV reviews, head-to-head comparisons, and practical buying guides tailored for Indian roads.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1B1F24] border border-[#2A2F35] text-xs text-white">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-ping" />
              <span>College Project Initiative</span>
            </div>
            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <span
                className="w-8 h-8 rounded-full bg-[#15181C] border border-[#2A2F35] flex items-center justify-center hover:text-white hover:border-[#E53935] transition-colors cursor-pointer"
                title="Social channel placeholder"
              >
                <Twitter className="w-4 h-4" />
              </span>
              <span
                className="w-8 h-8 rounded-full bg-[#15181C] border border-[#2A2F35] flex items-center justify-center hover:text-white hover:border-[#E53935] transition-colors cursor-pointer"
                title="Social channel placeholder"
              >
                <Youtube className="w-4 h-4" />
              </span>
              <span
                className="w-8 h-8 rounded-full bg-[#15181C] border border-[#2A2F35] flex items-center justify-center hover:text-white hover:border-[#E53935] transition-colors cursor-pointer"
                title="Social channel placeholder"
              >
                <Instagram className="w-4 h-4" />
              </span>
              <span
                className="w-8 h-8 rounded-full bg-[#15181C] border border-[#2A2F35] flex items-center justify-center hover:text-white hover:border-[#E53935] transition-colors cursor-pointer"
                title="Social channel placeholder"
              >
                <Linkedin className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-[#E53935] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition-colors">All 10 Blogs</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">SUV Reviews</Link>
              </li>
              <li>
                <Link to="/comparisons" className="hover:text-white transition-colors">Head-to-Head Comparisons</Link>
              </li>
              <li>
                <Link to="/buying-guides" className="hover:text-white transition-colors">Buying Guides</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Project</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-[#E53935] pl-2">
              Explore Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/blogs?category=SUV+Reviews" className="hover:text-white transition-colors">
                  SUV Reviews
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=Comparisons" className="hover:text-white transition-colors">
                  Comparisons
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=Buying+Guides" className="hover:text-white transition-colors">
                  Buying Guides
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=SUV+Trends" className="hover:text-white transition-colors">
                  SUV Trends
                </Link>
              </li>
              <li>
                <Link to="/blogs?category=SUV+Features" className="hover:text-white transition-colors">
                  SUV Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-[#E53935] pl-2">
              Project Context
            </h4>
            <div className="bg-[#15181C] p-4 rounded-lg border border-[#2A2F35] text-xs space-y-2.5">
              <div className="flex items-start gap-2 text-[#E53935]">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-semibold text-white">Academic Submission</span>
              </div>
              <p className="leading-relaxed">
                Created as a front-end college demonstration project. No commercial endorsement of manufacturers or vehicles is implied.
              </p>
              <div className="pt-2 border-t border-[#2A2F35] flex items-center gap-2 text-white">
                <Mail className="w-3.5 h-3.5 text-[#E53935]" />
                <span className="font-mono">hello@suvhub.example</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2A2F35] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 SUVHUB. College Project.</p>
          <div className="flex items-center gap-6">
            <span>Discover. Compare. Drive.</span>
            <span>Frontend Architecture Demo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
