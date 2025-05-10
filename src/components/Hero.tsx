import React from 'react';
import { HeroContent } from './hero/HeroContent';
import { HeroActions } from './hero/HeroActions';

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">

      <div className="flex items-center flex-1 h-[calc(100vh-40px)]"> {/* Adjust for banner height */}

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

        <div className="container mx-auto px-6 relative z-10">
          <HeroContent />
          <HeroActions />
        </div>
      </div>
    </section>
  );
};