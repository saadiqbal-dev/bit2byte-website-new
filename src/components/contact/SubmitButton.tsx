import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isSubmitting ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </button>
  );
};