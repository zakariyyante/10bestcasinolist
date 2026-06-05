import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BrandCard } from '@/components/BrandCard';
import { Disclaimer } from '@/components/Disclaimer';
import { Footer } from '@/components/Footer';
import { brands } from '@/app/data/brands';
import { MobileModal } from '@/components/MobileModal';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const gclid = typeof params.gclid === 'string' ? params.gclid : undefined;
  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-black">
      <Header />
      
      <main className="flex-grow">
        <MobileModal brands={mobileBrands} gclid={gclid} />
        <Hero />
        
        <section id="brands" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
                Premium <span className="gold-gradient-text">UK Operators</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
              <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-xs">
                Exclusively Vetted & Verified for 2026
              </p>
            </div>
            
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              {brands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  rank={index + 1} 
                  gclid={gclid}
                />
              ))}
            </div>
          </div>
        </section>

        <Disclaimer />

        <section id="about" className="py-24 md:py-32 border-t border-primary/10 bg-black/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="premium-card p-10 rounded-3xl border border-primary/20">
                <h2 className="text-3xl font-black mb-8 gold-gradient-text uppercase tracking-tighter">Our Elite Rating Standards</h2>
                <div className="space-y-8">
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    We maintain the industry&apos;s most rigorous evaluation protocols. Each brand must exceed our stringent benchmarks across five critical domains:
                  </p>
                  <ul className="space-y-6">
                    {[
                      { title: 'Security & Integrity', desc: 'Advanced encryption and verified fair play certifications.' },
                      { title: 'VIP Game Suite', desc: 'Premium selection of high-stakes and exclusive titles.' },
                      { title: 'Bespoke Rewards', desc: 'Tailored bonuses with transparent, player-first terms.' },
                      { title: 'Priority Payouts', desc: 'Expedited withdrawal processing for elite members.' },
                      { title: 'Concierge Support', desc: 'Dedicated 24/7 assistance via multiple premium channels.' },
                    ].map((item) => (
                      <li key={item.title} className="flex gap-6 group">
                        <span className="text-primary font-black text-2xl group-hover:scale-125 transition-transform duration-300">♠</span>
                        <div>
                          <span className="text-white font-black uppercase tracking-wide block mb-1">{item.title}</span>
                          <span className="text-sm text-muted-foreground font-medium">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="premium-card p-10 rounded-3xl border border-primary/20">
                <h2 className="text-3xl font-black mb-8 text-white uppercase tracking-tighter">Responsible Excellence</h2>
                <div className="space-y-8">
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    True prestige comes with responsibility. We are dedicated to ensuring a safe, sustainable environment for all players.
                  </p>
                  <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20 shadow-2xl">
                    <h3 className="font-black text-red-500 mb-4 uppercase tracking-[0.2em] text-sm">Professional Assistance</h3>
                    <p className="text-sm text-white/80 mb-8 font-bold leading-relaxed">
                      If you require support or guidance regarding your gaming habits, confidential expert help is available immediately.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="premium-card p-4 flex items-center justify-center hover:glow-green transition-all duration-300">
                        <div className="relative w-full h-10">
                          <Image src="/gambleaware.png" alt="BeGambleAware" fill className="object-contain" />
                        </div>
                      </a>
                      <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="premium-card p-4 flex items-center justify-center hover:glow-green transition-all duration-300">
                        <div className="relative w-full h-10">
                          <Image src="/gamcare.png" alt="GamCare" fill className="object-contain" />
                        </div>
                      </a>
                      <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="premium-card p-4 flex items-center justify-center hover:glow-green transition-all duration-300">
                        <div className="relative w-full h-10">
                          <Image src="/gamestop.png" alt="GamStop" fill className="object-contain" />
                        </div>
                      </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                      <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] block mb-2">National Helpline</span>
                      <span className="text-white font-black text-xl tracking-widest">0808 8020 133</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
