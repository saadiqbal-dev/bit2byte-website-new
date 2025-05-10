import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export const PrivacyPolicy = () => {
  const lastUpdated = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Section className="py-32">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-slate-400 mb-8">Last Updated: {lastUpdated}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Bit2Byte Solutions Ltd. ("we", "our", or "us"), registered in the United Kingdom (Company No. 15837634),
              is committed to protecting your privacy and personal data. This Privacy Policy explains how
              we collect, use, and protect your information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Business information</li>
              <li>Communication preferences</li>
              <li>Website usage data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Respond to your inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Protection Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
            <p>
              For any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@bit2bytesolutions.com
              <br />
              Phone: +44 7300 792357
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
};