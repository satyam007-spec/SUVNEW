import { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin, Clock, MessageSquare, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0D0F] pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#15181C] to-[#0B0D0F] border-b border-[#2A2F35] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1F24] border border-[#2A2F35] text-xs font-semibold uppercase tracking-wider text-[#E53935] mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with the Project</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mb-4">
            Contact SUVHUB
          </h1>
          <p className="text-base sm:text-lg text-[#A7ADB4] max-w-2xl mx-auto">
            Have questions, suggestions, or feedback on our SUV analyses? Reach out using the demo form below.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#15181C] p-6 sm:p-8 rounded-2xl border border-[#2A2F35] space-y-6">
              <h2 className="text-2xl font-bold text-white font-heading">
                Get in Touch
              </h2>
              <p className="text-sm text-[#A7ADB4] leading-relaxed">
                SUVHUB is an educational web platform created for academic evaluation. We welcome reader inquiries and feedback on our SUV reviews and buying tools.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#2A2F35] text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1F24] border border-[#2A2F35] flex items-center justify-center text-[#E53935] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#A7ADB4] block">
                      Demo Email
                    </span>
                    <a
                      href="mailto:hello@suvhub.example"
                      className="text-white hover:text-[#E53935] transition-colors font-mono text-sm"
                    >
                      hello@suvhub.example
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1F24] border border-[#2A2F35] flex items-center justify-center text-[#E53935] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#A7ADB4] block">
                      Project Origin
                    </span>
                    <span className="text-white text-sm">
                      Automobile Technology & Web Systems Lab, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1B1F24] border border-[#2A2F35] flex items-center justify-center text-[#E53935] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#A7ADB4] block">
                      Demo Response Time
                    </span>
                    <span className="text-white text-sm">
                      Academic Demo (Simulated Submissions)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer box */}
            <div className="bg-[#1B1F24] p-5 rounded-xl border border-[#2A2F35] text-xs text-[#A7ADB4] space-y-2">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <AlertCircle className="w-4 h-4 text-[#E53935]" />
                <span>Notice</span>
              </div>
              <p className="leading-relaxed">
                This contact interface operates entirely client-side without collecting personally identifiable data to an external server.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#15181C] p-6 sm:p-10 rounded-2xl border border-[#2A2F35] shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto text-green-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#A7ADB4] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your message regarding "{formData.subject}" has been received in the demo queue.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-2xl font-bold text-white font-heading mb-6">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                        Your Name <span className="text-[#E53935]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white placeholder-[#A7ADB4]/50 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#E53935] transition-all"
                      />
                      {errors.name && (
                        <p className="text-xs text-[#E53935] mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                        Your Email <span className="text-[#E53935]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white placeholder-[#A7ADB4]/50 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#E53935] transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-[#E53935] mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                      Subject <span className="text-[#E53935]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Question on XUV700 vs Harrier Comparison"
                      className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white placeholder-[#A7ADB4]/50 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#E53935] transition-all"
                    />
                    {errors.subject && (
                      <p className="text-xs text-[#E53935] mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-[#A7ADB4] mb-2">
                      Message <span className="text-[#E53935]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Write your feedback, inquiry or article suggestion here..."
                      className="w-full bg-[#1B1F24] border border-[#2A2F35] text-white placeholder-[#A7ADB4]/50 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-[#E53935] transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-[#E53935] mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E53935]/25 active:scale-95"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
