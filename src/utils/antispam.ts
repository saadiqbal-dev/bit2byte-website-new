import { z } from 'zod';

// Time threshold in milliseconds (3 seconds)
const MIN_SUBMISSION_TIME = 3000;

export const validateSubmissionTime = (startTime: number): boolean => {
  const submissionTime = Date.now() - startTime;
  return submissionTime >= MIN_SUBMISSION_TIME;
};

export const validateHoneypot = (value: string): boolean => {
  return value === '';
};

export const generateFormToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};