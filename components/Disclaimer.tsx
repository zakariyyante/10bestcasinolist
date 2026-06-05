import React from 'react';
import Link from 'next/link';

export const Disclaimer = () => {
  return (
    <div className="bg-[#0d1a0d] border-y border-bronze/10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-black text-xl border border-red-500/50 shadow-lg">
              18+
            </div>
            <span className="font-black text-white uppercase tracking-wider">For adults 18+ only.</span>
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Please gamble responsibly. For help and support, visit{' '}
            <Link href="https://www.begambleaware.org" className="text-bronze hover:underline font-black">
              BeGambleAware.org
            </Link>{' '}
            or call the National Gambling Helpline at <span className="text-white font-black">0808 8020 133</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
