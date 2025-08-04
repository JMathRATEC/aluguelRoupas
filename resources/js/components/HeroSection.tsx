import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleReserveLook = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de reservar um look para meu evento.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80')"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-medium">Mais de 10.000 clientes satisfeitos</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Elegância para</span>
            <span className="block text-gold-400">Momentos Únicos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Aluguel de vestidos de festa, ternos e smokings para casamentos, formaturas e eventos especiais. 
            Transforme seu momento em uma experiência inesquecível.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleReserveLook}
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 group"
            >
              Reserve seu Look
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-sm"
            >
              Ver Catálogo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-gold-400 mb-2" />
              <div className="text-2xl font-bold">10.000+</div>
              <div className="text-sm text-gray-300">Clientes Atendidos</div>
            </div>
            
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-gold-400 mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Trajes Disponíveis</div>
            </div>
            
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-gold-400 mb-2" />
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm text-gray-300">Avaliação Média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 