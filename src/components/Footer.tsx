import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNav } from './footer/FooterNav';
import { FooterSocial } from './footer/FooterSocial';
import { Logo } from './logo/Logo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center text-center">
          {/* Brand Section */}
          <div className="space-y-6">
            <Logo className="mx-auto" />
            <p className="text-slate-400 font-body">
              Transforming Bits into Brilliant Solutions
            </p>
            <FooterSocial />
          </div>

          {/* Navigation */}
          <FooterNav />

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="space-y-4 text-slate-400 font-body">
              <li>
                <a 
                  href="tel:+447300792357" 
                  className="hover:text-blue-400 transition-colors"
                >
                  +44 7300 792357
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@bit2bytesolutions.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@bit2bytesolutions.com
                </a>
              </li>
              <li>
                <span>3-5 Mayhill Road Mayhill, Swansea, Wales, SA1 6SZ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 font-body">
            © {currentYear}{' '}
            <Link 
              to="/" 
              className="hover:text-blue-400 transition-colors font-medium"
              aria-label="Go to Bit2Byte homepage"
            >
              Bit2Byte
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};