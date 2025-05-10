import React from 'react';

export const CenteredCopyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <p className="text-slate-100 text-lg">
        © {currentYear} Bit2Byte. All rights reserved.
      </p>
    </div>
  );
};