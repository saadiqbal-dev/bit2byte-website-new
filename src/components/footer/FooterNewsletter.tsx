import React from 'react';
import { Send } from 'lucide-react';

export const FooterNewsletter = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
      <p className="text-slate-400 font-body mb-4">
        Subscribe to our newsletter for the latest insights and updates.
      </p>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 font-body"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};