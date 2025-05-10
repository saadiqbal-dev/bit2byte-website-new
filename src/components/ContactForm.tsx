import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from './ui/Card';
import { ContactFormHeader } from './contact/ContactFormHeader';
import { FormField } from './contact/FormField';
import { SubmitButton } from './contact/SubmitButton';
import { StatusMessage } from './contact/StatusMessage';
import { validateSubmissionTime, validateHoneypot, generateFormToken } from '../utils/antispam';
import { contactSchema, ContactFormData, projectTypes, budgetRanges } from '../types/contact';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [startTime] = useState(Date.now());
  const [formToken] = useState(generateFormToken());

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      formToken,
      website: '',
    }
  });

  useEffect(() => {
    setValue('formToken', formToken);
  }, [formToken, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      if (!validateSubmissionTime(startTime)) {
        throw new Error('Submission too quick');
      }

      if (!validateHoneypot(data.website)) {
        throw new Error('Invalid submission');
      }

      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <ContactFormHeader />

        <Card className="max-w-3xl mx-auto p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="hidden">
              <input
                {...register('website')}
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                {...register('formToken')}
                type="hidden"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Full Name"
                name="fullName"
                register={register}
                error={errors.fullName?.message}
                placeholder="John Doe"
                required
              />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                register={register}
                error={errors.email?.message}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                register={register}
                placeholder="+1 (555) 000-0000"
              />
              <FormField
                label="Company Name"
                name="companyName"
                register={register}
                placeholder="Company Inc."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                label="Project Type"
                name="projectType"
                type="select"
                register={register}
                error={errors.projectType?.message}
                placeholder="Select a project type"
                options={projectTypes}
                required
              />
              <FormField
                label="Estimated Budget"
                name="budget"
                type="select"
                register={register}
                error={errors.budget?.message}
                placeholder="Select a budget range"
                options={budgetRanges}
                required
              />
            </div>

            <FormField
              label="Project Description"
              name="projectDescription"
              type="textarea"
              register={register}
              error={errors.projectDescription?.message}
              placeholder="Tell us about your project..."
              required
              rows={5}
            />

            <SubmitButton isSubmitting={isSubmitting} />

            {submitStatus && <StatusMessage status={submitStatus} />}
          </form>
        </Card>
      </div>
    </section>
  );
};