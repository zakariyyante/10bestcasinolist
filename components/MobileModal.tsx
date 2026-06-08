"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { track } from '@vercel/analytics';
import { Brand } from '@/app/data/brands';
import { Logo } from './Logo';
import { Disclaimer } from './Disclaimer';
import Link from 'next/link';

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

declare global {
  interface Window {
    gtag_report_conversion: (url: string) => void;
  }
}

export const MobileModal = ({ brands, gclid }: MobileModalProps) => {
  const [isOpen, setIsOpen] = useState(!!(gclid && brands.length > 0));

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const buildUrl = (url: string) => gclid ? `${url}${gclid}` : url;

  const handleClick = (brand: Brand, index: number) => {
    const url = buildUrl(brand.url);
    const storageKey = `clicked_${brand.id}`;
    const isFirstClick = !localStorage.getItem(storageKey);

    if (isFirstClick) {
      localStorage.setItem(storageKey, '1');
      track('Brand Unique Click', {
        brand: brand.name,
        brand_id: brand.id,
        rank: index + 1,
        source: 'mobile_modal',
      });
    }

    track('Brand Click', {
      brand: brand.name,
      brand_id: brand.id,
      rank: index + 1,
      is_unique: isFirstClick,
      source: 'mobile_modal',
    });

    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(url);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#020402] overflow-y-auto">
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <div className="sticky top-0 z-[110] bg-[#020402]/95 backdrop-blur-xl border-b border-primary/20 px-4 py-3 flex items-center justify-between">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="p-2 text-primary hover:text-white transition-all active:scale-90">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Hero Title */}
        <div className="text-center pt-10 pb-6 px-4">
          <h1 className="text-3xl font-black uppercase tracking-tighter leading-tight">
            New UK Casinos <span className="gold-gradient-text">for June</span>
          </h1>
        </div>

        {/* Brand Cards — logo-first big layout */}
        <div className="flex-grow px-4 pb-6 flex flex-col gap-4">
          {brands.map((brand, index) => {
            const rankColors = [
              'from-[#f9f295] to-[#b88a44] text-black border-[#f9f295]',
              'from-[#ffffff] to-[#808080] text-black border-white',
              'from-[#cd7f32] to-[#8b4513] text-black border-[#cd7f32]',
            ];
            const rankLabels = ['#1 TOP PICK', '#2 FEATURED', '#3 HOT'];

            return (
              <div
                key={brand.id}
                onClick={() => handleClick(brand, index)}
                className="premium-card rounded-2xl overflow-hidden cursor-pointer active:scale-[0.98] transition-transform"
              >
                {/* Rank strip */}
                {index < 3 && (
                  <div className={`bg-gradient-to-r ${rankColors[index]} text-center text-[10px] font-black tracking-widest py-1.5 px-4`}>
                    {rankLabels[index]}
                  </div>
                )}

                {/* Logo area — big and centred */}
                <div className="bg-black/60 flex items-center justify-center py-8 px-8 border-b border-primary/10">
                  <div className="relative w-48 h-20">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Offer + CTA */}
                <div className="p-5 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Exclusive Offer</p>
                    <p className="text-sm font-bold text-white leading-snug">{brand.bonus}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < Math.floor(brand.rating / 2) ? 'text-primary' : 'text-white/10'}`}>★</span>
                      ))}
                      <span className="text-[10px] text-muted-foreground ml-1 font-bold">{brand.votes.toLocaleString()}</span>
                    </div>
                  </div>
                  <button className="luxury-button flex-shrink-0 px-5 py-3 rounded-xl text-xs whitespace-nowrap">
                    Claim Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <Disclaimer />

        {/* Minimal footer */}
        <div className="bg-[#020402] border-t border-white/5 py-6 px-4 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Link href="/privacy" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Terms</Link>
            <Link href="/affiliate-disclosure" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Affiliate Disclosure</Link>
          </div>
          <p className="text-[10px] text-muted-foreground font-medium">
            © {new Date().getFullYear()} 10bestcasinolist.com · 18+ · Play Responsibly
          </p>
        </div>

      </div>
    </div>
  );
};
