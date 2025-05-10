import React from 'react';

interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  total,
  current,
  onChange
}) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === current
              ? 'bg-blue-500 w-4'
              : 'bg-slate-600 hover:bg-slate-500'
          }`}
          aria-label={`Go to project ${index + 1}`}
        />
      ))}
    </div>
  );
};