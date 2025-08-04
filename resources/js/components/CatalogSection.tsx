import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Heart, Eye, ShoppingBag } from 'lucide-react';

interface ClothingItem {
  id: number;
  name: string;
  category: string;
  occasion: string;
  size: string;
  color: string;
  price: number;
  image: string;
  available: boolean;
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Vestido Longo Dourado",
    category: "Vestidos",
    occasion: "Casamento",
    size: "M",
    color: "Dourado",
    price: 150,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: 2,
    name: "Terno Slim Fit Preto",
    category: "Ternos",
    occasion: "Formatura",
    size: "L",
    color: "Preto",
    price: 120,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: 3,
    name: "Smoking Clássico",
    category: "Smokings",
    occasion: "Gala",
    size: "M",
          color: "Preto",
      price: 180,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      available: true
  },
  {
    id: 4,
    name: "Vestido Floral Elegante",
    category: "Vestidos",
    occasion: "Festa",
    size: "S",
    color: "Azul",
    price: 130,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: true
  },
  {
    id: 5,
    name: "Terno Azul Marinho",
    category: "Ternos",
    occasion: "Corporativo",
    size: "XL",
    color: "Azul Marinho",
    price: 140,
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: false
  },
  {
    id: 6,
    name: "Vestido Cocktail Vermelho",
    category: "Vestidos",
    occasion: "Festa",
    size: "M",
    color: "Vermelho",
    price: 110,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    available: true
  }
];

export const CatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");

  const filteredItems = clothingItems.filter(item => {
    if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
    if (selectedOccasion !== "all" && item.occasion !== selectedOccasion) return false;
    if (selectedSize !== "all" && item.size !== selectedSize) return false;
    return true;
  });

  const handleWhatsApp = (item: ClothingItem) => {
    const message = `Olá! Gostaria de alugar o ${item.name} por R$ ${item.price}. Está disponível?`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Trajes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa coleção exclusiva de vestidos, ternos e smokings para todos os tipos de eventos
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48 text-black">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              <SelectItem value="Vestidos">Vestidos</SelectItem>
              <SelectItem value="Ternos">Ternos</SelectItem>
              <SelectItem value="Smokings">Smokings</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
            <SelectTrigger className="w-48 text-black">
              <SelectValue placeholder="Ocasião" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Ocasiões</SelectItem>
              <SelectItem value="Casamento">Casamento</SelectItem>
              <SelectItem value="Formatura">Formatura</SelectItem>
              <SelectItem value="Gala">Gala</SelectItem>
              <SelectItem value="Festa">Festa</SelectItem>
              <SelectItem value="Corporativo">Corporativo</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-48 text-black">
              <SelectValue placeholder="Tamanho" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os Tamanhos</SelectItem>
              <SelectItem value="S">S</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="XL">XL</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                {!item.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg">Indisponível</Badge>
                  </div>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold-600">R$ {item.price}</div>
                    <div className="text-sm text-gray-500">por evento</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{item.category}</Badge>
                  <Badge variant="outline">{item.occasion}</Badge>
                  <Badge variant="outline">{item.size}</Badge>
                  <Badge variant="outline">{item.color}</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleWhatsApp(item)}
                    disabled={!item.available}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Detalhes
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700"
                    onClick={() => handleWhatsApp(item)}
                    disabled={!item.available}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Alugar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-lg font-semibold text-lg"
            onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de ver mais opções do catálogo.', '_blank')}
          >
            Ver Mais Opções
          </Button>
        </div>
      </div>
    </section>
  );
}; 