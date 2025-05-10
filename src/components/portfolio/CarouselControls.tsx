import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({ 
  onPrevious, 
  onNext,
  className = ''
}) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors z-10 ${className}`}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={onNext}
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors z-10 ${className}`}
        aria-label="Next project"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    </>
  );
};