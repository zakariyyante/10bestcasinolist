import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">

          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse" />
              <span className="text-[11px] font-black tracking-[0.2em] uppercase text-white/70">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 gold-gradient-text uppercase tracking-tighter">About Us</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div className="premium-card p-10 rounded-3xl">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Who We Are</h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-4">
                10BestCasinoList.com is a UK-based independent affiliate review platform dedicated to helping players discover the most reputable and rewarding online casinos in the United Kingdom.
              </p>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Founded by a team of seasoned gambling industry professionals, our platform combines years of hands-on experience with rigorous analytical methodology to deliver reviews you can trust.
              </p>
            </div>

            <div className="premium-card p-10 rounded-3xl">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Our Mission</h2>
              <p className="text-muted-foreground font-medium leading-relaxed mb-4">
                We exist to cut through the noise. With thousands of online casinos competing for attention, finding a trustworthy operator can be overwhelming. Our mission is simple: bring you only the very best.
              </p>
              <p className="text-muted-foreground font-medium leading-relaxed">
                Every casino we feature has been independently verified for licensing, security, fairness, and player satisfaction before earning a place on our elite list.
              </p>
            </div>
          </div>

          <div className="premium-card p-10 rounded-3xl mb-10">
            <h2 className="text-2xl font-black gold-gradient-text uppercase tracking-tight mb-8">Our Review Standards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🛡️', title: 'Security & Licensing', desc: 'Every casino must hold a valid licence and use advanced SSL encryption.' },
                { icon: '🎲', title: 'Game Fairness', desc: 'Only platforms with certified RNG and third-party audits make the cut.' },
                { icon: '💰', title: 'Bonus Clarity', desc: 'We scrutinise wagering terms so you always know what you are getting.' },
                { icon: '⚡', title: 'Payout Speed', desc: 'We test withdrawal processing times across all supported payment methods.' },
                { icon: '🎧', title: 'Support Quality', desc: 'We evaluate responsiveness and helpfulness of customer service teams.' },
                { icon: '📱', title: 'Mobile Experience', desc: 'We verify smooth performance across all major mobile devices and browsers.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3 p-6 rounded-2xl bg-white/[0.03] border border-primary/10">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="font-black text-white uppercase tracking-wide text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-10 rounded-3xl">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Responsible Gambling</h2>
            <p className="text-muted-foreground font-medium leading-relaxed mb-8">
              We are committed to promoting responsible gambling. All casinos listed on 10BestCasinoList.com must provide self-exclusion tools, deposit limits, and clear links to support organisations. Gambling should be fun — if it stops being fun, help is available.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="relative w-36 h-10">
                <Image src="/gambleaware.png" alt="BeGambleAware" fill className="object-contain object-left" />
              </a>
              <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="relative w-32 h-10">
                <Image src="/gamcare.png" alt="GamCare" fill className="object-contain object-left" />
              </a>
              <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="relative w-28 h-10">
                <Image src="/gamestop.png" alt="GamStop" fill className="object-contain object-left" />
              </a>
              <span className="text-white font-black tracking-widest text-sm ml-auto">0808 8020 133</span>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
