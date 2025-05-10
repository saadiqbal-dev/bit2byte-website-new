import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role
}) => {
  return (
    <blockquote className="relative">
      <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-500/20" />
      <div className="pl-6 border-l-4 border-blue-500">
        <p className="italic text-slate-400 mb-4">{quote}</p>
        <footer>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-slate-400">{role}</div>
        </footer>
      </div>
    </blockquote>
  );
};