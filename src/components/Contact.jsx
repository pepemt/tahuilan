import { useState } from 'react';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative pt-14 pb-20 px-6 scroll-mt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-cyan-200/45 bg-cyan-200/12 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_24px_rgba(56,189,248,0.35)] transition-all duration-300">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl bg-gradient-to-br from-white via-cyan-100/90 to-cyan-200 bg-clip-text text-transparent">
            Let's build something great together
          </h2>
          <p className="text-zinc-200 mt-5 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto relative">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 text-white text-sm placeholder-zinc-300 transition-all duration-300 focus:border-cyan-200/50 focus:outline-none focus:shadow-[0_0_16px_rgba(56,189,248,0.25)]"
            />
            <input
              type="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 text-white text-sm placeholder-zinc-300 transition-all duration-300 focus:border-cyan-200/50 focus:outline-none focus:shadow-[0_0_16px_rgba(56,189,248,0.25)]"
            />
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full rounded-lg border border-white/12 bg-white/[0.06] px-4 py-3 text-white text-sm placeholder-zinc-300 transition-all duration-300 focus:border-cyan-200/50 focus:outline-none focus:shadow-[0_0_16px_rgba(56,189,248,0.25)] resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg border border-cyan-200/35 bg-cyan-200/15 text-cyan-50 font-medium py-3 hover:bg-cyan-200/22 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
              {!submitted && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="flex flex-col justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl">
              <h3 className="text-white font-semibold text-lg mb-4">
                Let&apos;s build something great
              </h3>
              <p className="text-zinc-200 text-sm leading-relaxed mb-6">
                Whether you need a brand new website or want to redesign your
                existing one, we&apos;re here to help your business stand out
                online.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://www.instagram.com/tahuilan_web/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-200/30 bg-white/10 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-200/15 hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]"
                >
                  <Instagram className="w-4 h-4 text-cyan-200" />
                  Instagram
                </a>
                <a
                  href="https://wa.me/qr/CC5HA3I4QH4SP1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-200/30 bg-white/10 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-200/15 hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-200" />
                  WhatsApp
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <p className="text-zinc-300 text-xs leading-relaxed">
                  We typically respond within 24 hours. No spam, no
                  obligations — just a conversation about how we can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
