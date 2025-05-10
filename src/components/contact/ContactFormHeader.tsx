import React from 'react';
import { motion } from 'framer-motion';

export const ContactFormHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Let's Build Something Amazing Together
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Share your project details with us and we'll get back to you within 24 hours.
      </p>
    </motion.div>
  );
};