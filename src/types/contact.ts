import { z } from 'zod';

export const projectTypes = [
  'Web Development',
  'Mobile App',
  'UI/UX Design',
  'Consulting',
  'Other'
] as const;

export const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+'
] as const;

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  projectType: z.enum(projectTypes),
  projectDescription: z.string().min(10, 'Please provide more details about your project'),
  budget: z.enum(budgetRanges),
  website: z.string(),
  formToken: z.string(),
});

export type ContactFormData = z.infer<typeof contactSchema>;