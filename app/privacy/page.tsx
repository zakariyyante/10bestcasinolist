import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="premium-card p-10 md:p-16 rounded-[2rem]">
            <h1 className="text-4xl md:text-5xl font-black mb-12 gold-gradient-text uppercase tracking-tighter">Privacy Protocol</h1>
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground font-medium leading-relaxed">
              <p className="text-sm uppercase tracking-[0.2em] font-black text-primary/80 mb-10">
                Last updated: June 5, 2026
              </p>
              <p>
                At 10bestcasinolist.com, we treat your privacy with the same level of security and exclusivity as a high-stakes vault. This document outlines our rigorous data protection standards.
              </p>
              
              <div className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Security Log Systems</h2>
                <p>
                  We utilize advanced log file protocols to ensure site integrity. These files capture technical data including IP addresses, browser specifications, and navigation patterns to optimize our elite user experience.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Digital Signatures & Cookies</h2>
                <p>
                  Our platform employs sophisticated cookies to personalize your journey. These digital identifiers allow us to remember your preferences and tailor our premium content to your specific requirements.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Third-Party Integrity</h2>
                <p>
                  We only partner with advertising entities that meet our stringent privacy benchmarks. However, our privacy protocol does not extend to external platforms. We recommend reviewing the individual privacy mandates of our partners.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Client Consent</h2>
                <p>
                  By engaging with our platform, you acknowledge and consent to our privacy protocols and terms of engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
