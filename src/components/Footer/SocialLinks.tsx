import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/bit2bytesolution/', label: 'Facebook' },
  { icon: Twitter, href: 'https://x.com/Bit2Byte_Ltd', label: 'Twitter/X' },
  { icon: Instagram, href: 'https://www.instagram.com/bit2bytesolutions/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/bit2bytesolutions/', label: 'LinkedIn' }
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-amber-900/20 hover:border-amber-900 hover:bg-amber-900/10 transition-colors"
        >
          <Icon className="w-5 h-5 text-amber-900" />
        </a>
      ))}
    </div>
  );
};