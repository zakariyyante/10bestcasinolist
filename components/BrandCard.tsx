"use client";

import React from 'react';
import Image from 'next/image';
import { track } from '@vercel/analytics';
import { Brand } from '@/app/data/brands';

interface BrandCardProps {
  brand: Brand;
  rank?: number;
  gclid?: string;
}

declare global {
  interface Window {
    gtag_report_conversion: (url: string) => void;
  }
}

export const BrandCard = ({ brand, rank, gclid }: BrandCardProps) => {
  const buildUrl = (baseUrl: string, gclidValue?: string) => {
    if (!gclidValue) return baseUrl;
    return `${baseUrl}${gclidValue}`;
  };

  const finalUrl = buildUrl(brand.url, gclid);

  const handleCardClick = () => {
    track('Brand Click', { brand: brand.name });
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, '_blank');
    }
  };

  const rankLabels: Record<number, { label: string; style: string }> = {
    1: { label: '#1 ELITE', style: 'bg-gradient-to-br from-[#f9f295] to-[#b88a44] text-black border border-[#f9f295] shadow-[0_4px_15px_rgba(224,170,62,0.5)]' },
    2: { label: '#2 PLATINUM', style: 'bg-gradient-to-br from-[#ffffff] to-[#808080] text-black border border-white shadow-[0_4px_15px_rgba(192,192,192,0.4)]' },
    3: { label: '#3 PRESTIGE', style: 'bg-gradient-to-br from-[#cd7f32] to-[#8b4513] text-black border border-[#cd7f32] shadow-[0_4px_15px_rgba(205,127,50,0.4)]' },
  };

  return (
    <div
      className="premium-card group rounded-2xl p-5 md:p-6 transition-all duration-500 hover:glow-green cursor-pointer w-full"
      onClick={handleCardClick}
    >
      {/* TOP ACCENT LINE */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-t-2xl" />

      {/* RANK BADGE */}
      {rank && rankLabels[rank] && (
        <div className={`absolute -top-3 -left-3 z-20 font-black text-xs px-3 py-1.5 rounded-lg transform -rotate-12 ${rankLabels[rank].style}`}>
          {rankLabels[rank].label}
        </div>
      )}

      {/* HORIZONTAL LAYOUT */}
      <div className="flex items-center gap-5 md:gap-8 relative z-10">

        {/* LOGO */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-black/50 rounded-xl flex items-center justify-center p-3 border border-primary/20 group-hover:border-accent/40 transition-colors duration-500">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={80}
            height={80}
            className="object-contain w-full h-full"
          />
        </div>

        {/* NAME + BONUS */}
        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight truncate">{brand.name}</h3>
          </div>
          <p className="text-xs text-muted-foreground font-black uppercase tracking-widest mb-2">Exclusive Welcome Offer</p>
          <p className="text-sm md:text-base text-white font-bold leading-snug">{brand.bonus}</p>
        </div>

        {/* RATING + CTA */}
        <div className="flex-shrink-0 flex flex-col items-center gap-3">
          <div className="text-center">
            <div className="text-3xl font-black gold-gradient-text leading-none">{brand.rating.toFixed(1)}</div>
            <div className="flex gap-0.5 justify-center mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xs ${i < Math.floor(brand.rating / 2) ? 'text-primary' : 'text-white/10'}`}>★</span>
              ))}
            </div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-widest mt-1 font-black whitespace-nowrap">
              {brand.votes.toLocaleString()} reviews
            </div>
          </div>
          <button className="luxury-button px-5 py-3 rounded-xl whitespace-nowrap text-xs">
            Claim Bonus
          </button>
        </div>

      </div>
    </div>
  );
};
