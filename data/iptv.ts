export const iptvWhatsAppHref =
  'https://wa.me/5511993911272?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20sobre%20os%20planos%20disponiveis';

export const iptvBrand = { name: 'TJ Iptv', logo: '/' };
export const iptvCommercial = {
  pricingLabel: 'Valores em reais',
  availabilityLabel: 'Disponibilidade e cobertura a confirmar',
  trialLabel: 'Teste gratuito de 5 dias',
};

export const iptvHero = {
  eyebrow: 'TV do seu jeito',
  title: 'Seu entretenimento,\nmais simples de acessar.',
  body: `${iptvBrand.name} reúne um catálogo amplo, com conteúdos de diferentes categorias de entretenimento em um só serviço.`,
  primaryCta: 'Quero conhecer',
  secondaryCta: 'Falar com atendimento',
};

export const iptvBenefits = [
  {
    number: '01',
    title: 'Mais em um só plano',
    body: 'Tenha acesso a um catálogo amplo e diverso em um só serviço, simplificando a escolha sem precisar alternar entre várias assinaturas.',
  },
  {
    number: '02',
    title: 'Tudo organizado',
    body: 'Navegue por categorias claras e encontre algo para assistir sem perder tempo.',
  },
  {
    number: '03',
    title: 'Atendimento próximo',
    body: 'Tire dúvidas antes de escolher e conte com suporte durante a sua jornada.',
  },
];

export const iptvCatalogue = {
  eyebrow: 'Uma amostra da experiência',
  title: 'Escolha o clima.\nAperte o play.',
  body: 'Uma interface direta para explorar diferentes momentos de entretenimento, reunidos em um só serviço.',
  confirmationNote:
    'A composição do catálogo e a disponibilidade variam por plano e região. Confirme as opções atuais pelo WhatsApp.',
  // Replace each placeholder with an approved name and logo asset when available.
  rails: [
    {
      label: 'Esportes',
      direction: 'right',
      items: [
        { label: 'ESPN', logoKey: 'esporte-01' },
        { label: 'SportTV', logoKey: 'esporte-02' },
        { label: 'TNT Esports', logoKey: 'esporte-03' },
        { label: 'Cazé TV', logoKey: 'esporte-04' },
        { label: 'Band Sport', logoKey: 'esporte-05' },
      ],
    },
    {
      label: 'Kids & família',
      direction: 'left',
      items: [
        { label: 'Nome aprovado 01', logoKey: 'kids-01' },
        { label: 'Nome aprovado 02', logoKey: 'kids-02' },
        { label: 'Nome aprovado 03', logoKey: 'kids-03' },
        { label: 'Nome aprovado 04', logoKey: 'kids-04' },
        { label: 'Nome aprovado 05', logoKey: 'kids-05' },
      ],
    },
    {
      label: 'Filmes & séries',
      direction: 'right',
      items: [
        { label: 'Nome aprovado 01', logoKey: 'movies-01' },
        { label: 'Nome aprovado 02', logoKey: 'movies-02' },
        { label: 'Nome aprovado 03', logoKey: 'movies-03' },
        { label: 'Nome aprovado 04', logoKey: 'movies-04' },
        { label: 'Nome aprovado 05', logoKey: 'movies-05' },
      ],
    },
  ],
};

const commercialPlans: { name: string; monthly: number; description: string; featured?: boolean }[] = [
  { name: 'Mensal', monthly: 35, description: 'Assinatura com pagamento mensal.' },
  { name: 'Trimestral', monthly: 79, description: 'Assinatura com pagamento por trimestre.', featured: true },
  { name: 'Anual', monthly: 350, description: 'Assinatura com pagamento anual.' },
];

export const iptvPlans = commercialPlans.map((plan) => ({
  name: plan.name,
  description: plan.description,
  emphasis: plan.featured ? 'Mais escolhido' : 'Escolha simples',
  price: plan.monthly,
  billing: plan.name === 'Mensal' ? 'por mês' : plan.name === 'Trimestral' ? 'por trimestre' : 'por ano',
  features: [] as string[],
  featured: plan.featured,
}));

export const iptvFaqs = [
  {
    question: 'Como funciona o acesso?',
    answer:
      'Você conversa com nosso atendimento, escolhe a opção que faz sentido para sua casa e recebe as orientações para começar.',
  },
  {
    question: 'Em quais dispositivos posso assistir?',
    answer:
      'A compatibilidade depende do dispositivo e da configuração da sua internet. O atendimento confirma os detalhes antes da contratação.',
  },
  {
    question: 'Posso tirar dúvidas antes de escolher?',
    answer: 'Sim. Nossa equipe explica as opções disponíveis, os requisitos e os próximos passos sem compromisso.',
  },
  {
    question: 'Existe período de teste?',
    answer: iptvCommercial.trialLabel + '. Fale com o atendimento para conhecer as condições de início.',
  },
  {
    question: 'A disponibilidade é igual em todo lugar?',
    answer: iptvCommercial.availabilityLabel + '. O atendimento confirma os detalhes para sua região.',
  },
];

export const iptvProof = {
  eyebrow: 'Quem assina não se arrepende',
  quote:
    '“Aqui em casa cada um gosta de uma coisa. Ter tudo mais organizado no mesmo lugar deixou bem mais fácil escolher o que assistir juntos.”',
  name: 'Leticia Pereira',
  note: 'Cliente há mais de um ano.',
};
