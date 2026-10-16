import { useState } from 'react';
import { Mail, CheckCircle2, Send, Info } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      setError('Please provide a valid email address (e.g., name@example.com).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#0B0D0F] border-t border-[#2A2F35] py-16 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E53935]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#E53935] font-bold mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Automotive Digest</span>
          <span className="text-[#A7ADB4]" aria-hidden="true">·</span>
          <span className="text-[#A7ADB4]">Free Newsletter</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 font-heading">
          Stay Ahead of the Drive
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB4] max-w-2xl mx-auto mb-8 leading-relaxed">
          Get the latest SUV reviews, side-by-side comparison insights, and family buying playbooks delivered directly to your inbox.
        </p>

        {submitted ? (
          <div className="bg-[#1B1F24] border border-[#2A2F35] max-w-lg mx-auto p-6 rounded-xl text-left space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm text-white">Demonstration Subscription Confirmed!</h4>
                <p className="text-xs text-[#A7ADB4]">
                  Thank you for testing the subscription component for <span className="text-white font-mono">{email}</span>.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#15181C] rounded-lg border border-[#2A2F35] text-[11px] text-[#A7ADB4] flex items-start gap-2">
              <Info className="w-3.5 h-3.5 text-[#E53935] shrink-0 mt-0.5" />
              <span>
                <strong>Academic Project Notice:</strong> No backend database is attached, and no real emails are collected, stored, or sent.
              </span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setEmail('');
                }}
                className="text-xs font-semibold text-[#E53935] hover:text-white transition-colors"
              >
                Subscribe Another Email
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3" noValidate>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address for SUV newsletter"
                  required
                  className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white placeholder-[#A7ADB4]/60 px-4 py-3 rounded-lg focus:outline-none focus:border-[#E53935] focus:ring-1 focus:ring-[#E53935] text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                className="bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E53935]/25 active:scale-95 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#E53935]"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

            {error && (
              <p className="text-xs text-[#E53935] text-left font-medium" role="alert">
                {error}
              </p>
            )}

            <p className="text-[11px] text-[#A7ADB4]/70 text-center">
              Frontend demonstration form. No real emails are stored or shared.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
