import React from 'react';

export const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden felt-pattern border-b border-primary/10">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/30 mb-10 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse" />
          <span className="text-[11px] font-black tracking-[0.2em] uppercase text-primary-foreground/90">
            UK&apos;s Elite Casino Review Hub 2026
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
          Find UK&apos;s Best <br />
          <span className="gold-gradient-text">Casino Sites</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
          Unrivaled expert reviews, exclusive high-roller bonuses, and lightning-fast payouts. We curate only the most prestigious licensed operators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { icon: '🛡️', title: 'Licensed', desc: 'Fully Regulated' },
            { icon: '💎', title: 'Elite Status', desc: 'Premium Selection' },
            { icon: '⚡', title: 'Fast Payouts', desc: 'Instant Withdrawals' },
          ].map((badge) => (
            <div
              key={badge.title}
              className="premium-card p-6 rounded-2xl flex flex-col items-center text-center group hover:glow-green transition-all duration-500"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{badge.icon}</div>
              <div className="font-black text-white uppercase tracking-widest mb-1">{badge.title}</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
