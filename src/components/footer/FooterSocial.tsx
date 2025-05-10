import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/bit2bytesolution/', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/Bit2Byte_Ltd', label: 'Twitter/X' },
  { icon: Instagram, href: 'https://www.instagram.com/bit2bytesolutions/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/bit2bytesolutions/', label: 'LinkedIn' }
];

export const FooterSocial = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-blue-400 transition-colors"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};