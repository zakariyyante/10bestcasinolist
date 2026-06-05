import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">

          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse" />
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-white/70">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 gold-gradient-text uppercase tracking-tighter">Contact Us</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-muted-foreground font-medium max-w-xl mx-auto">
              Have a question, partnership enquiry, or feedback? We&apos;d love to hear from you. Our team typically responds within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Cards */}
            <div className="flex flex-col gap-6">
              {[
                { icon: '✉️', title: 'General Enquiries', value: 'info@10bestcasinolist.com', href: 'mailto:info@10bestcasinolist.com' },
                { icon: '🤝', title: 'Partnerships & Affiliates', value: 'partners@10bestcasinolist.com', href: 'mailto:partners@10bestcasinolist.com' },
                { icon: '⚖️', title: 'Legal & Compliance', value: 'legal@10bestcasinolist.com', href: 'mailto:legal@10bestcasinolist.com' },
              ].map((item) => (
                <div key={item.title} className="premium-card p-8 rounded-2xl group hover:glow-green transition-all duration-500">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-black text-white uppercase tracking-wide text-sm mb-2">{item.title}</h3>
                  <a href={item.href} className="text-primary font-bold text-sm hover:underline break-all">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 premium-card p-10 rounded-3xl">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full bg-black/40 border border-primary/20 rounded-xl px-5 py-4 text-white placeholder-white/20 font-medium focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-black/40 border border-primary/20 rounded-xl px-5 py-4 text-white placeholder-white/20 font-medium focus:outline-none focus:border-primary/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full bg-black/40 border border-primary/20 rounded-xl px-5 py-4 text-white placeholder-white/20 font-medium focus:outline-none focus:border-primary/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell us more..."
                    className="w-full bg-black/40 border border-primary/20 rounded-xl px-5 py-4 text-white placeholder-white/20 font-medium focus:outline-none focus:border-primary/60 transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="luxury-button w-full py-5 rounded-xl text-sm">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
