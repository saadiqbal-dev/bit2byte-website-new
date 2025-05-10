import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Technology } from './components/Technology';
import { Reviews } from './components/Reviews';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/legal/PrivacyPolicy';
import { TermsOfService } from './components/legal/TermsOfService';
import { CenteredCopyright } from './components/ui/CenteredCopyright';
import { AIPaddingAnalysis } from './components/docs/AIPaddingAnalysis';
import { DesignSolutions } from './pages/solutions/DesignSolutions';
import { SmartDevelopment } from './pages/solutions/SmartDevelopment';
import { PerformanceAnalytics } from './pages/solutions/PerformanceAnalytics';
import { Security } from './pages/solutions/Security';
import { About } from './pages/company/About';
import { Careers } from './pages/company/Careers';
import { Partners } from './pages/company/Partners';
import { Blog } from './pages/company/Blog';
import { BlogPost } from './pages/company/BlogPost';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Process />
              <Technology />
              <Reviews />
              <Portfolio />
              <Blog/>
              <ContactForm />
            </main>
          } />
          <Route path="/solutions/design-solutions" element={<DesignSolutions />} />
          <Route path="/solutions/smart-development" element={<SmartDevelopment />} />
          <Route path="/solutions/performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="/solutions/security" element={<Security />} />
          <Route path="/company/about" element={<About />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/partners" element={<Partners />} />
          <Route path="/company/blog" element={<Blog />} />
          <Route path="/company/blog/:id" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/copyright" element={<CenteredCopyright />} />
          <Route path="/docs/ai-padding" element={<AIPaddingAnalysis />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;