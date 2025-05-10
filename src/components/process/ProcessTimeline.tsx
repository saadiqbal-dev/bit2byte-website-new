import React from 'react';

interface ProcessTimelineProps {
  children: React.ReactNode;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ children }) => {
  return (
    <div className="relative">
      {children}
    </div>
  );
};