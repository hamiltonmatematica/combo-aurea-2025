import React, { useState } from 'react';
import {
  Check,
  Menu,
  X,
  MessageCircle,
  TrendingUp,
  Layers,
  Zap,
  Target,
  BrainCircuit,
  Award
} from 'lucide-react';

// --- Icons & UI Components ---

const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
}> = ({ children, variant = 'primary', className = '', onClick, href }) => {
  const baseStyles = "px-8 py-4 font-bold text-lg uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-none inline-flex items-center justify-center";

  const variants = {
    primary: "bg-aurea-tangerine text-white hover:bg-orange-600",
    secondary: "bg-aurea-blue text-white hover:bg-blue-800",
    outline: "border-2 border-aurea-tangerine text-aurea-tangerine hover:bg-aurea-tangerine hover:text-white"
  };

  const Component = href ? 'a' : 'button';
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    // @ts-ignore
    <Component className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode; color?: string; align?: 'left' | 'center' }> = ({
  children,
  color = 'text-aurea-ebony',
  align = 'left'
}) => (
  <h2 className={`font-display text-4xl md:text-6xl uppercase tracking-tight mb-8 ${color} ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {children}
  </h2>
);

const ChecklistItem: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light = false }) => (
  <div className="flex items-start gap-4 mb-4">
    <div className={`mt-1 min-w-[24px] ${light ? 'text-aurea-tangerine' : 'text-aurea-blue'}`}>
      <Check size={24} strokeWidth={3} />
    </div>
    <p className={`text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-aurea-ebony'}`}>
      {children}
    </p>
  </div>
);

// --- Main Page Sections ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-aurea-ebony border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-logo text-3xl text-white font-medium tracking-tight">
            áurea
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#o-combo" className="text-white hover:text-aurea-tangerine transition-colors uppercase text-sm font-bold tracking-widest">O Combo</a>
          <a href="#beneficios" className="text-white hover:text-aurea-tangerine transition-colors uppercase text-sm font-bold tracking-widest">Benefícios</a>
          <a href="#precos" className="text-white hover:text-aurea-tangerine transition-colors uppercase text-sm font-bold tracking-widest">Valores</a>
          <a href="#contato" className="bg-white text-aurea-ebony px-6 py-2 font-bold hover:bg-aurea-tangerine hover:text-white transition-colors uppercase text-sm">
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-aurea-ebony border-t border-gray-800 absolute w-full p-6 flex flex-col gap-4 shadow-xl">
          <a href="#o-combo" onClick={() => setIsOpen(false)} className="text-white hover:text-aurea-tangerine uppercase font-bold">O Combo</a>
          <a href="#beneficios" onClick={() => setIsOpen(false)} className="text-white hover:text-aurea-tangerine uppercase font-bold">Benefícios</a>
          <a href="#precos" onClick={() => setIsOpen(false)} className="text-white hover:text-aurea-tangerine uppercase font-bold">Valores</a>
          <a href="#contato" onClick={() => setIsOpen(false)} className="text-aurea-tangerine font-bold uppercase">Fale Conosco</a>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-aurea-blue text-white overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-aurea-tangerine opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <h1 className="font-display text-5xl md:text-8xl uppercase leading-[0.9] mb-6">
            Combo Matemática<br />
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>e Redação Áurea 2026</span>
          </h1>

          <h2 className="text-xl md:text-3xl font-light mb-8 max-w-3xl text-gray-100 leading-normal">
            A preparação completa para quem quer evoluir de forma acelerada em duas áreas que transformam a nota final no ENEM.
          </h2>

          <div className="flex items-center gap-4 mb-10 text-aurea-tangerine font-bold uppercase tracking-widest bg-white/10 p-4 backdrop-blur-sm w-fit">
            <Layers size={24} />
            <span>Matemática + Redação</span>
            <span className="w-px h-6 bg-white/20"></span>
            <span className="text-white font-normal">Uma combinação poderosa para quem deseja aprovação</span>
          </div>

          <Button onClick={() => document.getElementById('precos')?.scrollIntoView()}>
            Quero o Combo com Desconto
          </Button>
        </div>
      </div>
    </section>
  );
};

const CourseConcept = () => {
  return (
    <section id="o-combo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 text-aurea-tangerine font-bold uppercase tracking-widest">
              <Zap size={20} />
              <span>O que é o Combo</span>
            </div>
            <SectionTitle>Potencialize seu desempenho</SectionTitle>
            <div className="space-y-6 text-lg text-gray-700 mb-8">
              <p>
                Estudar Matemática e Redação juntos potencializa o desempenho, aumenta a segurança no dia da prova e acelera o progresso nos pilares mais importantes do ENEM.
              </p>
              <p className="font-bold text-aurea-blue">
                É a forma mais inteligente de crescer rápido e garantir vantagem competitiva.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 border-l-8 border-aurea-tangerine shadow-xl">
            <h3 className="font-display text-2xl uppercase mb-6 text-aurea-ebony">Com o Combo Áurea, o aluno recebe:</h3>
            <div className="space-y-2">
              <ChecklistItem>As duas turmas completas</ChecklistItem>
              <ChecklistItem>Planejamento integrado</ChecklistItem>
              <ChecklistItem>Estratégias combinadas para evolução semanal</ChecklistItem>
              <ChecklistItem>Material exclusivo nas duas disciplinas</ChecklistItem>
              <ChecklistItem>Condições especiais de valor</ChecklistItem>
              <ChecklistItem>Acesso total à Plataforma Áurea Prime</ChecklistItem>
              <ChecklistItem>Acompanhamento próximo dos professores</ChecklistItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefitsList = [
    { text: "Turma presencial ou online", icon: <Target /> },
    { text: "Material gratuito completo", icon: <Award /> },
    { text: "Acesso à plataforma Áurea Prime", icon: <Layers /> },
    { text: "Simulados específicos", icon: <Zap /> },
    { text: "Monitoria de correção textual", icon: <Check /> },
    { text: "Apostila com mais de 700 questões resolvidas em QR Code na Matemática", icon: <BrainCircuit /> },
    { text: "Organização semanal de estudos", icon: <TrendingUp /> },
    { text: "Planejamento integrado para o ENEM", icon: <Target /> },
    { text: "Sem taxa de material", icon: <Award /> },
    { text: "Descontos especiais até 31 de dezembro", icon: <Zap /> },
  ];

  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle align="center">Benefícios do Combo</SectionTitle>
        <p className="text-center text-gray-600 mb-12">Tudo o que você recebe estudando Matemática + Redação</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item, i) => (
            <div key={i} className="bg-white p-6 border border-gray-100 shadow-sm flex items-center gap-4 hover:border-aurea-blue transition-colors">
              <div className="text-aurea-tangerine">
                {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
              </div>
              <span className="font-bold text-gray-800">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StrategicView = () => {
  return (
    <section className="py-20 bg-aurea-ebony text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle color="text-white" align="center">A estratégia vencedora</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <ChecklistItem light>Matemática e Redação são as áreas que mais puxam a nota no ENEM</ChecklistItem>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <ChecklistItem light>Quando estudadas juntas, criam um ciclo de evolução contínua</ChecklistItem>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <ChecklistItem light>O aluno melhora interpretação, escrita, lógica e resolução de problemas</ChecklistItem>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">
              <ChecklistItem light>O acompanhamento simultâneo aumenta a produtividade</ChecklistItem>
            </div>
            <div className="md:col-span-2 bg-aurea-tangerine/20 p-6 border border-aurea-tangerine/30 rounded-lg text-center">
              <p className="text-xl font-bold text-white">
                O combo reduz o custo total e entrega duas formações completas em uma única preparação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  subtitle,
  price,
  installment,
  discounts,
  buttonText,
  vistaLink,
  parceladoLink
}: {
  title: string,
  subtitle: string,
  price: string,
  installment: string,
  discounts: { title: string, items: string[] },
  buttonText: string,
  vistaLink: string,
  parceladoLink: string
}) => (
  <div className="flex flex-col h-full p-8 border border-gray-200 bg-white text-aurea-ebony shadow-lg transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group">
    {/* Top accent bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-aurea-blue group-hover:bg-aurea-tangerine transition-colors duration-300"></div>

    <h3 className="font-display text-3xl uppercase mb-2 text-aurea-blue mt-2">{title}</h3>
    <p className="text-sm mb-8 h-12 text-gray-500">{subtitle}</p>

    <div className="mb-8">
      <div className="text-sm uppercase tracking-wide opacity-70 mb-1">Preço à vista</div>
      <div className="text-4xl font-bold font-display text-aurea-ebony">{price}</div>
      <div className="text-sm mt-2 opacity-70">ou parcelado em</div>
      <div className="text-xl font-bold text-aurea-tangerine">{installment}</div>
    </div>

    <div className="flex-grow border-t border-gray-100 pt-6 mb-8">
      <p className="font-bold uppercase text-xs tracking-widest mb-3 text-aurea-tangerine">{discounts.title}</p>
      <ul className="space-y-2 text-sm">
        {discounts.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 block w-1 h-1 bg-aurea-blue rounded-full"></span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Buttons container */}
    <div className="flex flex-col gap-3 mt-auto">
      <a
        href={vistaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 font-bold uppercase tracking-wide bg-aurea-tangerine text-white hover:bg-orange-600 transition-colors text-sm shadow-md hover:shadow-lg text-center"
      >
        {buttonText} à vista com 30% de desconto
      </a>
      <a
        href={parceladoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 font-bold uppercase tracking-wide border-2 border-aurea-blue text-aurea-blue hover:bg-aurea-blue hover:text-white transition-colors text-sm text-center"
      >
        {buttonText} parcelado com 30% de desconto
      </a>
    </div>
  </div>
);

const Pricing = () => {
  const discountData = {
    title: "Até 31/12",
    items: [
      "30% de desconto para alunos novos"
    ]
  };

  return (
    <section id="precos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle align="center">Valores e Modalidades</SectionTitle>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 -mt-4">
          Escolha o plano ideal para sua rotina e objetivos.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            title="Combo Extensivo"
            subtitle="Para quem quer evolução constante durante todo o ano"
            price="R$ 3.000,00"
            installment="10 x R$ 340,00"
            discounts={discountData}
            buttonText="Quero o Extensivo"
            vistaLink="https://www.asaas.com/c/xda8pn1pq7d883wd"
            parceladoLink="https://www.asaas.com/c/7imuqxtm13zqzdec"
          />
          <PricingCard
            title="Combo Intensivo"
            subtitle="Para quem precisa acelerar até a prova"
            price="R$ 1.500,00"
            installment="10 x R$ 190,00"
            discounts={discountData}
            buttonText="Quero o Intensivo"
            vistaLink="https://www.asaas.com/c/o1l8e17xfs1dev23"
            parceladoLink="https://www.asaas.com/c/f1pnlsxf1szf672a"
          />
          <PricingCard
            title="Combo Online"
            subtitle="Para estudar com flexibilidade e acompanhamento digital"
            price="R$ 1.000,00"
            installment="10 x R$ 140,00"
            discounts={discountData}
            buttonText="Quero o Online"
            vistaLink="https://www.asaas.com/c/dumd69djkjmp7ykk"
            parceladoLink="https://www.asaas.com/c/ito6q9l9jts1p38y"
          />
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  return (
    <section className="py-24 bg-aurea-ebony text-white text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto border border-aurea-blue/30 bg-white/5 p-12 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-aurea-blue blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 relative z-10">
            Garanta sua vaga no<br />Combo Matemática e Redação 2026
          </h2>
          <p className="text-xl text-gray-300 mb-10 relative z-10">
            Quem reservar vaga até trinta e um de dezembro garante descontos especiais e benefícios exclusivos.
          </p>

          <Button
            href="https://delicategiantpanda.n8n.cloud/form/71f89cb2-cc61-41b7-a0a8-2459cc14e4ca"
            variant="primary"
            className="text-xl px-12 py-5 relative z-10"
          >
            Reservar agora com desconto
          </Button>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contacts = [
    {
      initial: 'A',
      name: 'Alysson',
      role: 'DIRETOR',
      action: 'Falar com Alysson',
      phone: '5538999573075'
    },
    {
      initial: 'H',
      name: 'Hamilton',
      role: 'DIRETOR',
      action: 'Falar com Hamilton',
      phone: '5538991538392'
    },
    {
      initial: 'E',
      name: 'Emanuelle',
      role: 'COORDENAÇÃO',
      action: 'Falar com Emanuelle',
      phone: '5538998317477'
    },
    {
      initial: 'A',
      name: 'Atendimento Áurea',
      role: '',
      action: 'Atendimento geral',
      phone: '553832133244'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="contato">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase text-aurea-ebony mb-4">
            Fale Conosco
          </h2>
          <div className="w-24 h-1.5 bg-aurea-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100/50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-aurea-blue/10">
              <div className="w-24 h-24 rounded-full bg-aurea-blue flex items-center justify-center text-white text-4xl font-display mb-6">
                {contact.initial}
              </div>
              <h3 className="font-bold text-xl text-aurea-ebony mb-2">{contact.name}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-8 min-h-[1.25rem]">{contact.role}</p>

              <a
                href={`https://wa.me/${contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white py-3 px-6 rounded-full font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-200"
              >
                <MessageCircle size={20} />
                <span>{contact.action}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-aurea-ebony text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <h3 className="font-display text-2xl uppercase mb-2">Áurea Cursos e Pré Vestibular</h3>
          <p className="text-gray-400 font-light tracking-wider uppercase text-sm">Tudo novo, de um jeito único</p>
        </div>
      </div>
    </footer>
  );
};

// --- App Container ---

function App() {
  return (
    <div className="font-sans antialiased text-aurea-ebony bg-white">
      <Header />
      <main>
        <Hero />
        <CourseConcept />
        <Benefits />
        <StrategicView />
        <Pricing />
        <Reservation />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;