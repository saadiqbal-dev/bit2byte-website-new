import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { scrollToElement } from '../../utils/scroll';

export const HeroActions = () => {
  const handleScheduleClick = () => {
    window.open('https://calendly.com/saad-bit2bytesolutions', '_blank');
    
    if (typeof window.analytics !== 'undefined') {
      window.analytics.track('Schedule Call Clicked', {
        location: 'Hero Section',
        buttonText: 'Schedule a Call'
      });
    }
  };

  const scrollToContact = () => {
    scrollToElement('contact');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <button 
        onClick={scrollToContact}
        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group"
      >
        Start Your Project
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={handleScheduleClick}
        className="px-8 py-4 glass-panel hover:bg-slate-800/50 transition-colors flex items-center gap-2 justify-center group"
      >
        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
        Schedule a Call
      </button>
    </motion.div>
  );
};