import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  status: 'success' | 'error';
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ status }) => {
  const messages = {
    success: {
      icon: CheckCircle2,
      text: "Thank you! We'll be in touch soon.",
      className: "text-green-500 bg-green-500/10"
    },
    error: {
      icon: AlertCircle,
      text: "Something went wrong. Please try again.",
      className: "text-red-500 bg-red-500/10"
    }
  };

  const { icon: Icon, text, className } = messages[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 ${className} p-4 rounded-lg`}
    >
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </motion.div>
  );
};