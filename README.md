# Elegance Rent - Site de Aluguel de Roupas

Um site moderno e elegante para uma empresa de aluguel de roupas para eventos especiais, desenvolvido com Laravel, Inertia.js e React.

## 🎯 Características

### Design e UX
- **Visual Elegante**: Design moderno com cores douradas e vinho que transmitem luxo e confiança
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Navegação Intuitiva**: Interface simples e fácil de usar
- **Call-to-Actions Claros**: Botões destacados para aluguel e agendamento

### Funcionalidades Principais

#### 🏠 Página Inicial
- **Header Fixo**: Logo, menu de navegação e botão "Agendar Visita"
- **Hero Section**: Imagem impactante com call-to-action "Reserve seu Look"
- **Estatísticas**: 10.000+ clientes atendidos, 500+ trajes disponíveis

#### 📚 Catálogo Interativo
- **Filtros Avançados**: Por categoria, ocasião e tamanho
- **Galeria de Produtos**: Fotos de alta qualidade dos trajes
- **Informações Detalhadas**: Preços, disponibilidade e características
- **Ações Rápidas**: Botões para ver detalhes e alugar

#### 📋 Como Funciona
- **3 Passos Simples**: Escolha → Agende → Retire
- **Benefícios Destacados**: Qualidade, resposta rápida, preços justos
- **Processo Transparente**: Explicação clara do funcionamento

#### 💬 Depoimentos
- **Avaliações Reais**: Testimonials de clientes satisfeitos
- **Estatísticas de Confiança**: 4.9/5 estrelas, 98% satisfação
- **Social Proof**: Gera credibilidade e confiança

#### 📞 Contato
- **Formulário Completo**: Campos para nome, email, telefone, evento e mensagem
- **WhatsApp Integrado**: Botão flutuante para contato imediato
- **Informações da Loja**: Endereço, telefones, horários de funcionamento

### 🎨 Paleta de Cores
- **Dourado**: `#eab308` (gold-500) - Elegância e luxo
- **Vinho**: `#ec4899` (wine-500) - Sofisticação
- **Preto**: `#000000` - Profissionalismo
- **Branco**: `#ffffff` - Limpeza e pureza
- **Bege**: `#f5f5dc` - Toque suave

## 🚀 Tecnologias Utilizadas

### Backend
- **Laravel 11**: Framework PHP robusto e moderno
- **Inertia.js**: Bridge entre Laravel e React
- **MySQL/PostgreSQL**: Banco de dados

### Frontend
- **React 18**: Interface moderna e reativa
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Tailwind CSS**: Framework CSS utilitário
- **Shadcn/ui**: Componentes React elegantes
- **Lucide React**: Ícones modernos

### Ferramentas
- **Vite**: Build tool rápido
- **ESLint**: Linting de código
- **Prettier**: Formatação de código

## 📁 Estrutura do Projeto

```
aluguelRoupas/
├── app/
│   ├── Http/Controllers/     # Controllers Laravel
│   └── Models/              # Modelos Eloquent
├── resources/
│   ├── js/
│   │   ├── components/      # Componentes React
│   │   │   ├── ui/         # Componentes UI base
│   │   │   └── ...         # Componentes específicos
│   │   ├── pages/          # Páginas React
│   │   └── lib/            # Utilitários
│   └── css/
│       └── app.css         # Estilos globais
├── routes/
│   └── web.php             # Rotas da aplicação
└── public/                 # Assets públicos
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- PHP 8.2+
- Node.js 18+
- Composer
- MySQL/PostgreSQL

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd aluguelRoupas
```

2. **Instale as dependências PHP**
```bash
composer install
```

3. **Instale as dependências Node.js**
```bash
npm install
```

4. **Configure o ambiente**
```bash
cp .env.example .env
php artisan key:generate
```

5. **Configure o banco de dados**
```bash
# Edite o arquivo .env com suas credenciais
php artisan migrate
```

6. **Compile os assets**
```bash
npm run dev
```

7. **Inicie o servidor**
```bash
php artisan serve
```

## 🎯 Funcionalidades Implementadas

### ✅ Concluídas
- [x] Header responsivo com navegação
- [x] Hero section com call-to-action
- [x] Catálogo com filtros interativos
- [x] Seção "Como Funciona" com 3 passos
- [x] Depoimentos de clientes
- [x] Formulário de contato
- [x] Botão flutuante do WhatsApp
- [x] Footer com informações completas
- [x] Design responsivo para mobile
- [x] Cores personalizadas (dourado/vinho)
- [x] Animações e transições suaves

### 🔄 Próximas Implementações
- [ ] Sistema de autenticação
- [ ] Painel administrativo
- [ ] Sistema de reservas online
- [ ] Galeria de fotos expandida
- [ ] Blog/notícias
- [ ] Sistema de avaliações
- [ ] Integração com pagamentos
- [ ] Chat online

## 📱 Responsividade

O site foi desenvolvido seguindo a metodologia "Mobile First" e funciona perfeitamente em:

- 📱 **Mobile**: 320px - 768px
- 📱 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+

## 🎨 Componentes Principais

### Header
- Logo da empresa
- Menu de navegação responsivo
- Botão "Agendar Visita" destacado
- Menu mobile com drawer

### Hero Section
- Imagem de fundo impactante
- Título chamativo
- Call-to-action principal
- Estatísticas da empresa

### Catálogo
- Filtros por categoria, ocasião e tamanho
- Cards de produtos com hover effects
- Informações de preço e disponibilidade
- Botões de ação rápidos

### Como Funciona
- 3 cards com ícones e descrições
- Benefícios destacados
- Processo visual claro

### Depoimentos
- Cards com fotos dos clientes
- Avaliações em estrelas
- Comentários reais
- Estatísticas de confiança

### Contato
- Formulário completo
- Informações da loja
- Botão WhatsApp destacado
- Mapa de localização

## 🔧 Personalização

### Cores
As cores podem ser facilmente alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  gold: {
    500: '#eab308', // Cor principal dourada
  },
  wine: {
    500: '#ec4899', // Cor vinho
  }
}
```

### Conteúdo
- Textos podem ser alterados diretamente nos componentes React
- Imagens podem ser substituídas na pasta `public/`
- Informações de contato no componente `ContactSection`

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **Email**: contato@elegancerent.com
- **WhatsApp**: (11) 99999-9999
- **Telefone**: (11) 88888-8888

## 📄 Licença

Este projeto é desenvolvido para a Elegance Rent. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para transformar momentos especiais em experiências inesquecíveis.** 