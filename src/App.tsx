import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { People } from './components/People';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';

export function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Brand Development');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    scrollToContact();
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedServiceForInquiry(`Inquiry regarding: ${projectTitle}`);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-white text-brand-charcoal flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      {/* Navigation Header */}
      <Header onOpenContact={scrollToContact} />

      {/* Main Page Landmark */}
      <main className="flex-1">
        {/* Section 3: Hero Section */}
        <Hero
          onExploreWork={scrollToPortfolio}
          onStartProject={scrollToContact}
        />

        {/* Section 4: About Infinity */}
        <About onLearnMore={scrollToContact} />

        {/* Section 5: Our Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section 6: Portfolio / Our Work */}
        <Portfolio onInquireProject={handleInquireProject} />

        {/* Section 7: Our Philosophy */}
        <Philosophy />

        {/* Section 8: Our Process */}
        <Process />

        {/* Section 9: Our People */}
        <People />

        {/* Section 10: Our Valuable Clients */}
        <Clients />

        {/* Section 11: Testimonials */}
        <Testimonials />

        {/* Section 12: Blog / Insights */}
        <Insights />

        {/* Section 13: Contact Section */}
        <Contact initialService={selectedServiceForInquiry} />
      </main>

      {/* Section 14: Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Legal Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
