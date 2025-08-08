import { FaWhatsapp, FaRobot, FaPaintBrush, FaCode } from 'react-icons/fa';
import { SiN8N } from "react-icons/si";

export const solutions = [
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversão",
    description: "Desenvolvemos landing pages otimizadas para transformar visitantes em clientes, com design estratégico, performance e foco em resultados.",
    impact: "Aumento de até 35% na geração de leads para clientes.",
    benefits: [
      "Design responsivo e rápido carregamento",
      "Copywriting persuasivo e estrutura SEO-friendly",
      "Integração com CRMs, WhatsApp e ferramentas de marketing",
      "Testes A/B e otimização contínua"
    ],
    process: [
      { step: "Briefing", desc: "Entendimento do público e objetivo da campanha" },
      { step: "Wireframe", desc: "Prototipação e validação do layout" },
      { step: "Desenvolvimento", desc: "Construção da landing page e integrações" },
      { step: "Go Live", desc: "Publicação, monitoramento e ajustes" }
    ],
    icon: FaPaintBrush,
    caseLink: "/solutions/landing-pages"
  },
  {
    id: "sistemas-web",
    title: "Sistemas Web Sob Medida",
    description: "Desenvolvemos plataformas, áreas administrativas e sistemas internos totalmente personalizados para o seu negócio, com foco em automação, escalabilidade e segurança.",
    impact: "Redução de retrabalho e centralização de informações, acelerando processos e facilitando a gestão.",
    benefits: [
      "Automação de fluxos e tarefas manuais",
      "Integração com APIs e sistemas já utilizados",
      "Escalabilidade para acompanhar o crescimento",
      "Segurança e performance de ponta"
    ],
    process: [
      { step: "Briefing", desc: "Entendimento do seu negócio e necessidades" },
      { step: "Prototipação", desc: "Criação de wireframes e validação de fluxo" },
      { step: "Desenvolvimento", desc: "Construção do sistema com tecnologias modernas" },
      { step: "Implantação", desc: "Entrega, suporte inicial e ajustes finais" }
    ],
    icon: FaCode,
    caseLink: "/solutions/sistemas-web"
  },
  {
    id: "n8n",
    title: "Automações Inteligentes com n8n",
    description: "Implantamos workflows automatizados que eliminam tarefas manuais, conectando ferramentas como ClickUp, WhatsApp, Notion e muito mais.",
    impact: "Economia de tempo e redução de erros operacionais, liberando sua equipe para o que realmente importa.",
    benefits: [
      "Automação de processos repetitivos",
      "Integração entre múltiplas plataformas",
      "Monitoramento e logs centralizados",
      "Soluções escaláveis e personalizadas"
    ],
    process: [
      { step: "Mapeamento", desc: "Identificação dos processos a automatizar" },
      { step: "Desenho do fluxo", desc: "Modelagem dos workflows no n8n" },
      { step: "Integração", desc: "Conexão com APIs e sistemas existentes" },
      { step: "Implantação", desc: "Testes, ajustes e entrega da automação" }
    ],
    icon: SiN8N,
    caseLink: "/solutions/n8n"
  },
  {
    id: "bots-e-integracoes",
    title: "Bots e Integrações com APIs",
    description: "Desenvolvimento de bots inteligentes e integrações robustas com APIs (WhatsApp, Discord, ClickUp, Notion, etc), conectando sistemas e otimizando operações.",
    impact: "Redução de até 70% no tempo operacional com soluções automatizadas e escaláveis.",
    benefits: [
      "Bots para atendimento, notificações e automação de tarefas",
      "Integração entre sistemas e plataformas",
      "Escalabilidade e monitoramento em tempo real",
      "Redução de erros e retrabalho operacional"
    ],
    process: [
      { step: "Diagnóstico", desc: "Mapeamento das necessidades e oportunidades de integração" },
      { step: "Desenvolvimento", desc: "Criação dos bots e integrações sob medida" },
      { step: "Testes", desc: "Validação e ajustes em ambiente controlado" },
      { step: "Go Live", desc: "Implantação e monitoramento contínuo" }
    ],
    icon: FaRobot,
    caseLink: "/solutions/bots-e-integracoes"
  }
];