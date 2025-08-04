import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Search, Calendar, Package } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Escolha seu Traje",
    description: "Navegue pelo nosso catálogo exclusivo e escolha o traje perfeito para seu evento. Temos opções para todos os gostos e ocasiões.",
    icon: Search,
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    id: 2,
    title: "Agende sua Visita",
    description: "Entre em contato conosco via WhatsApp ou telefone para agendar uma visita e experimentar os trajes na loja.",
    icon: Calendar,
    bgColor: "bg-gold-500",
    hoverColor: "hover:bg-gold-600"
  },
  {
    id: 3,
    title: "Retire seu Look",
    description: "No dia do evento, retire seu traje já preparado e pronto para usar. Garantimos qualidade e pontualidade.",
    icon: Package,
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  }
];

export const HowItWorksSection: React.FC = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita para experimentar os trajes.', '_blank');
  };

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo simples e rápido para você encontrar o traje perfeito para seu evento especial
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.id} className="relative group hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-10 h-10 ${step.bgColor} ${step.hoverColor} rounded-full flex items-center justify-center text-black font-bold shadow-lg transition-colors duration-300`}>
                    {step.id}
                  </div>
                </div>

                <CardHeader className="text-center pt-10 pb-4">
                  <div className={`w-20 h-20 ${step.bgColor} ${step.hoverColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center px-6 pb-8">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </CardContent>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-black font-bold text-gold-600">✓</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
            <p className="text-sm text-gray-600">Todos os trajes são cuidadosamente selecionados</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gold-600">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Resposta Rápida</h3>
            <p className="text-sm text-gray-600">Atendimento imediato via WhatsApp</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gold-600">💰</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Preços Justos</h3>
            <p className="text-sm text-gray-600">Melhor custo-benefício do mercado</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-gold-600">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Personalização</h3>
            <p className="text-sm text-gray-600">Ajustes gratuitos para o seu tamanho</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Agendar Visita Agora
          </Button>
        </div>
      </div>
    </section>
  );
}; 