import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from './Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020402] border-t border-primary/10 pt-16 pb-10">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Logo />
        </div>

        {/* Compliance Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
          {[
            { name: 'Home', href: '/' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
          ].map((link) => (
            <Link key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-xs text-muted-foreground leading-relaxed font-medium">
            10bestcasinolist.com is an independent affiliate review website. We may receive compensation when you register with a casino via our links. This does not affect our editorial ratings or independence. Gambling involves risk — only gamble with money you can afford to lose. Must be 18 or over.
          </p>
        </div>

        {/* Responsible Gambling Logos */}
        <div className="flex flex-wrap justify-center gap-8 items-center mb-12 opacity-60 hover:opacity-100 transition-opacity">
          <div className="relative w-12 h-12">
            <Image src="/18plus.svg" alt="18+" fill className="object-contain" />
          </div>
          <div className="relative w-32 h-10">
            <Image src="/gambleaware.png" alt="BeGambleAware" fill className="object-contain" />
          </div>
          <div className="relative w-32 h-10">
            <Image src="/gamcare.png" alt="GamCare" fill className="object-contain" />
          </div>
          <div className="relative w-28 h-10">
            <Image src="/gamestop.png" alt="GamStop" fill className="object-contain" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/5 pt-8">
          <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">
            © {currentYear} 10bestcasinolist.com · All rights reserved · Play Responsibly
          </p>
        </div>

      </div>
    </footer>
  );
};
