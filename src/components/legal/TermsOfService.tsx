import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export const TermsOfService = () => {
  const lastUpdated = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Section className="py-32">
      <Container>
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-slate-400 mb-8">Last Updated: {lastUpdated}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Bit2Byte Solutions Ltd. ("we", "our", or "us"), 
              registered in the United Kingdom (Company No. 15837634), you agree to be bound by 
              these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
            <p>
              We provide digital solutions and web development services. We reserve the right to 
              modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by Bit2Byte 
              and are protected by international copyright, trademark, and other intellectual 
              property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate information</li>
              <li>Maintain the security of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not interfere with the proper working of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Bit2Byte shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages resulting from 
              your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of 
              the United Kingdom.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
};