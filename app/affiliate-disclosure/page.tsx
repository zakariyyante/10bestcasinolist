import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AffiliateDisclosurePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse" />
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-white/70">Transparency First</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 gold-gradient-text uppercase tracking-tighter">Affiliate Disclosure</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/70">Last updated: June 5, 2026</p>
          </div>

          <div className="premium-card p-10 md:p-14 rounded-3xl space-y-12">

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <p className="text-white font-bold leading-relaxed text-lg">
                10BestCasinoList.com is an independent affiliate website. We earn commissions from casino operators when you click our links and register as a new player. This does not affect our editorial independence or the integrity of our reviews.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">How Affiliate Marketing Works</h2>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Affiliate marketing is a performance-based model. When you follow a link from our site to a casino operator and complete a qualifying action — such as creating an account or making a deposit — we may receive a financial commission from that operator. This commission is paid entirely by the casino and does not cost you anything extra.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Our Editorial Independence</h2>
              <p className="text-muted-foreground font-medium leading-relaxed">
                The existence of affiliate relationships does not influence our ratings, rankings, or review content. Our editorial team assesses every casino using the same objective methodology, regardless of whether a commercial relationship exists. Casinos that do not meet our quality standards are not listed on this platform, regardless of any financial incentive.
              </p>
              <p className="text-muted-foreground font-medium leading-relaxed">
                We may receive higher commissions from some operators than others, but this never affects the position or score a casino receives on our site.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Compliance & Regulation</h2>
              <p className="text-muted-foreground font-medium leading-relaxed">
                10BestCasinoList.com operates in compliance with the UK Advertising Standards Authority (ASA) and Committee of Advertising Practice (CAP) guidelines for affiliate marketing. All material advertising benefits are clearly disclosed.
              </p>
              <p className="text-muted-foreground font-medium leading-relaxed">
                We are committed to promoting responsible gambling. All operators featured on this site are required to hold a valid licence from a recognised regulatory authority and to provide tools that support player welfare.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Third-Party Links</h2>
              <p className="text-muted-foreground font-medium leading-relaxed">
                This site contains links to third-party websites. Once you leave 10BestCasinoList.com, you are subject to the privacy policy and terms of service of the destination site. We are not responsible for the content, accuracy, or practices of third-party platforms.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Questions?</h2>
              <p className="text-muted-foreground font-medium leading-relaxed">
                If you have any questions about our affiliate relationships or how we make money, please don&apos;t hesitate to{' '}
                <a href="/contact" className="text-primary font-black hover:underline">contact us</a>.
                We are committed to full transparency.
              </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
