import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="premium-card p-10 md:p-16 rounded-[2rem]">
            <h1 className="text-4xl md:text-5xl font-black mb-12 gold-gradient-text uppercase tracking-tighter">Terms of Engagement</h1>
            <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground font-medium leading-relaxed">
              <p>
                Welcome to the inner circle of 10bestcasinolist.com.
              </p>
              <p>
                These mandates govern the use of our elite platform. By accessing this site, you agree to abide by these terms of engagement in their entirety.
              </p>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Intellectual Mandate</h2>
                <p>
                  Unless explicitly stated, 10bestcasinolist.com and its licensors hold exclusive intellectual property rights for all material on this platform. All rights are reserved for our private use.
                </p>
                <p className="font-bold text-white/80">Prohibited Actions:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Unauthorized republication of our elite content</li>
                  <li>Commercial exploitation of our proprietary data</li>
                  <li>Duplication or replication of our bespoke designs</li>
                  <li>Redistribution of our curated intelligence</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Hyperlinking Protocols</h2>
                <p>
                  Approved organizations may link to our platform provided they do not misrepresent our relationship or damage our brand integrity. We reserve the right to revoke linking privileges at our discretion.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Liability Disclaimer</h2>
                <p>
                  To the maximum extent permitted by law, we exclude all representations and warranties relating to our platform. We are not liable for any losses incurred through the use of our independent intelligence.
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
