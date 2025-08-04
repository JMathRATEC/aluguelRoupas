import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    event: "Casamento",
    rating: 5,
    comment: "Perfeito! O vestido ficou lindo e o atendimento foi excepcional. Recomendo para todas as noivas!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "João Santos",
    event: "Formatura",
    rating: 5,
    comment: "O terno ficou impecável! Preço justo e qualidade excelente. Vou alugar novamente para outros eventos.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Ana Costa",
    event: "Festa de Gala",
    rating: 5,
    comment: "Atendimento rápido e profissional. O vestido estava perfeito e o preço muito acessível. Super recomendo!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    event: "Evento Corporativo",
    rating: 5,
    comment: "Excelente qualidade e atendimento. O smoking ficou perfeito e o processo foi muito simples.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Fernanda Lima",
    event: "Casamento",
    rating: 5,
    comment: "O vestido era exatamente como nas fotos! Atendimento personalizado e preços muito bons.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Roberto Almeida",
    event: "Formatura",
    rating: 5,
    comment: "Processo muito fácil e rápido. O terno estava em perfeito estado e o preço foi justo.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-gold-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 1.000 clientes satisfeitos com nossos serviços
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl text-black font-bold text-gold-600 mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <p className="text-gray-600">Avaliação Média</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-black text-gold-600 mb-2">1.000+</div>
            <p className="text-gray-600">Clientes Atendidos</p>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-black text-gold-600 mb-2">98%</div>
            <p className="text-gray-600">Satisfação</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex mb-3 justify-center items-center gap-2 p-2 text-black">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Junte-se aos nossos clientes satisfeitos
            </h3>
            <p className="text-gray-600 mb-6">
              Agende sua visita e descubra por que somos a escolha preferida para eventos especiais
            </p>
            <button
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita.', '_blank')}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Agendar Visita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 