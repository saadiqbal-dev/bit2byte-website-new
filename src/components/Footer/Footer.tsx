import React from 'react';
import { motion } from 'framer-motion';
import { Feather, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialLinks } from './SocialLinks';
import { FooterSection } from './FooterSection';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f4e4bc] border-t border-amber-900/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Guild Information */}
          <FooterSection title="The Guild">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-2 mb-4">
                <Feather className="w-6 h-6 text-amber-900 group-hover:scale-110 transition-transform" />
                <span className="font-medieval text-xl text-amber-900 group-hover:text-amber-800 transition-colors">Bit2Byte</span>
              </div>
            </Link>
            <p className="text-amber-800 font-serif">
              Transforming Bits into Brilliant Solutions
            </p>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection title="Navigation Scroll">
            <ul className="space-y-2 font-serif">
              {['Home', 'Services', 'About', 'Contact', 'Testimonials', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-amber-800 hover:text-amber-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Contact Information */}
          <FooterSection title="Ravens & Messengers">
            <ul className="space-y-4 font-serif">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-900 mt-1" />
                <span className="text-amber-800">
                  The Digital Spire, Crystal Valley, Tech Kingdom, 12345
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-900" />
                <a href="tel:+447300792357" className="text-amber-800 hover:text-amber-900">
                  +44 7300 792357
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-amber-900" />
                <a href="mailto:contact@bit2bytesolutions.com" className="text-amber-800 hover:text-amber-900">
                  contact@bit2bytesolutions.com
                </a>
              </li>
            </ul>
          </FooterSection>

          {/* Social Links */}
          <FooterSection title="Digital Scrolls">
            <p className="text-amber-800 font-serif mb-4">
              Follow our mystical journey through the digital realms
            </p>
            <SocialLinks />
          </FooterSection>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-amber-900/20 text-center"
        >
          <p className="text-amber-800 font-serif">
            © {currentYear} Bit2Byte Guild. All rights preserved by ancient scrolls.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};