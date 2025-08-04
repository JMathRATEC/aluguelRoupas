import React from 'react';
import { Head } from '@inertiajs/react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CatalogSection } from '@/components/CatalogSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Head title="Elegance Rent - Aluguel de Roupas para Eventos" />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <HeroSection />
          <CatalogSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
} 