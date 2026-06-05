"use client";

import React, { useEffect, useState } from 'react';
import { Brand } from '@/app/data/brands';
import { BrandCard } from './BrandCard';
import { Logo } from './Logo';
import { Disclaimer } from './Disclaimer';
import { Footer } from './Footer';

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

export const MobileModal = ({ brands, gclid }: MobileModalProps) => {
  const [isOpen, setIsOpen] = useState(!!(gclid && brands.length > 0));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#020402] overflow-y-auto animate-in fade-in duration-500">
      <div className="min-h-screen flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-[110] bg-[#020402]/95 backdrop-blur-xl border-b border-primary/20 p-6 flex items-center justify-between">
          <Logo />
          <button 
            onClick={() => setIsOpen(false)}
            className="p-3 text-primary hover:text-white transition-all active:scale-90"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow relative">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <div className="p-8 text-center relative z-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 backdrop-blur-md">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Exclusive Mobile Access</span>
            </div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Elite <span className="gold-gradient-text">Mobile Gaming</span></h2>
            <p className="text-sm text-muted-foreground mb-12 font-bold uppercase tracking-widest">Specialized bonuses for our mobile clientele.</p>

            <div className="grid grid-cols-1 gap-10 mb-20 max-w-lg mx-auto">
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
          
          <Disclaimer />
          <Footer />
        </div>
      </div>
    </div>
  );
};
