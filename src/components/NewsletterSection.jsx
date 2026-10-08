import { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#15181C] to-[#0B0D0F] border-y border-[#2A2F35] py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Automotive Digest</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 font-heading">
          Stay Ahead of the Drive
        </h2>
        <p className="text-base sm:text-lg text-[#A7ADB4] max-w-2xl mx-auto mb-8">
          Get the latest SUV stories, comparisons and buying tips delivered straight to your inbox.
        </p>

        {submitted ? (
          <div className="bg-[#1B1F24] border border-[#2A2F35] max-w-lg mx-auto p-6 rounded-xl flex items-center justify-center gap-3 text-white animate-in zoom-in-95">
            <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
            <div className="text-left">
              <h4 className="font-semibold text-sm">You are subscribed!</h4>
              <p className="text-xs text-[#A7ADB4]">
                Thank you for following SUVHUB. You'll receive our next SUV dispatch soon.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
              }}
              className="ml-auto text-xs text-[#E53935] hover:underline"
            >
              Reset
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white placeholder-[#A7ADB4]/60 px-4 py-3 rounded-lg focus:outline-none focus:border-[#E53935] text-sm transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-[#E53935] hover:bg-[#D32F2F] text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E53935]/25 active:scale-95"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {error && <p className="text-xs text-[#E53935] mt-2 text-left">{error}</p>}
            <p className="text-[11px] text-[#A7ADB4]/70 mt-3">
              No spam. Frontend college demo subscription form.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
