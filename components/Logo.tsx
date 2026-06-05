import React from 'react';
import Image from 'next/image';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="10 Best Casino List"
        width={528}
        height={105}
        priority
        className="w-auto max-h-[70px] md:max-h-[90px] object-contain"
      />
    </div>
  );
};
