import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const translations = {
  pt: {
    seo: {
      home: {
        title: "JF | Empresa de Eletricidade Algarve e Alentejo",
        description: "Eletricistas especializados em Instalações Elétricas, Ligação à Rede, Baixadas e PLR's, Postos de Transformação e Smart Cities. Atuamos em Faro, Portimão, Tavira, Beja e todo o Algarve."
      },
      about: {
        title: "Sobre Nós | Assistência Permanente no Algarve | JF",
        description: "Conheça a JF, empresa líder em eletricidade e telecomunicações no Sul. Servimos o Algarve (Faro, Albufeira) e Alentejo com rigor."
      },
      services: {
        title: "Instalações Elétricas e Serviços de Engenharia | Algarve e Alentejo",
        description: "Serviços completos no Sul do país: Projetos de Eletricidade, Baixadas e PLR's, Postos de Transformação, Instalações Elétricas Industriais e Carregamento de Veículos Elétricos."
      },
      lighting: {
        title: "Iluminação | Festiva, Pública e Decorativa | JF",
        description: "Soluções completas de iluminação no Algarve. Iluminação de Natal, Iluminação Inteligente (Smart Cities) e Iluminação Técnica."
      },
      partners: {
        title: "Parceiros e Marcas | Schneider, E-Redes, Siemens",
        description: "Trabalhamos com marcas de topo e cumprimos todas as normas da E-Redes. Parceiros de confiança para construção civil e obras públicas no Sul."
      },
      careers: {
        title: "Recrutamento Eletricista e Engenharia | Emprego Algarve",
        description: "Junte-se à nossa equipa. Vagas para Eletricistas, Engenheiros Eletrotécnicos e Técnicos de Manutenção no Algarve e Alentejo."
      },
      contact: {
        title: "Contactos | Peça Orçamento Eletricista Algarve e Alentejo | JF",
        description: "Contacte a JF para orçamentos de instalações elétricas, Baixadas e PLR's ou manutenção. Atendemos Faro, Olhão, Tavira, Portimão e Beja."
      },
      smartCities: {
        title: "Smart Cities & IoT | Iluminação Pública Inteligente | JF",
        description: "Transformamos cidades no Algarve em Smart Cities. Soluções de IoT, telegestão de iluminação pública e eficiência energética."
      },
      faqs: {
        title: "Perguntas Frequentes | JF",
        description: "Respostas às dúvidas mais comuns sobre pedidos de ligação à rede (PLR), baixadas, contadores e instalações elétricas."
      }
    },
    nav: {
      home: 'Início',
      about: 'Sobre Nós',
      services: 'Serviços',
      partners: 'Parceiros',
      careers: 'Recrutamento',
      contact: 'Contactos',
      quote: 'Peça Orçamento',
      toggle: 'EN'
    },
    footer: {
      desc: 'Soluções integradas de eletricidade, construção e mobilidade elétrica. Impulsionamos o seu projeto no Algarve e Alentejo com qualidade e segurança desde 1986.',
      navTitle: 'Navegação',
      contactTitle: 'Contactos',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Receba as últimas novidades e atualizações.',
      placeholder: 'O seu email',
      subscribe: 'Subscrever',
      rights: 'Todos os direitos reservados.',
      designedBy: 'Website desenhado por',
      privacy: 'Política de Privacidade',
      terms: 'Termos e Condições',
      quality: 'Política de Qualidade',
      complaintsBook: 'Livro de Reclamações',
      faqTitle: 'Dúvidas Frequentes',
      faqDesc: 'Consulte a nossa área de apoio para esclarecer questões técnicas.',
      faqButton: 'Ver FAQs'
    },
    common: {
      learnMore: 'Saber Mais',
      seeMore: 'Ver Mais',
      requestService: 'Pedir Serviço',
      address: 'Estrada Nacional 125, Bias Norte, Moncarapacho',
      city: '8700-066 Olhão'
    },
    home: {
      hero: {
        title: "JF,|Infraestruturas Elétricas,|Iluminação, PT’s e PLR’s",
        subtitle: "A sua empresa de eletricidade de referência no Algarve e Alentejo. Excelência técnica em Baixadas, PLR's e Infraestruturas.",
        ctaPrimary: "Contacte-nos",
        ctaSecondary: "Conheça os Serviços"
      },
      slogan: "Eletricidade é Connosco!",
      servicesTitle: "As Nossas Áreas de Atuação",
      whyUsTitle: "Porquê escolher a JF?",
      whyUsDesc: "Somos a escolha certa para quem procura assistência permanente no Algarve e Alentejo. Combinamos décadas de experiência em Postos de Transformação e Telecomunicações com as tecnologias mais recentes.",
      ctaButton: "Conheça os nossos serviços",
      benefits: [
        { id: 1, text: "Experiência desde 1986" },
        { id: 2, text: "Assistência Permanente" },
        { id: 3, text: "Soluções Chave-na-mão" },
        { id: 4, text: "Foco no Sul do País" }
      ],
      lightUp: {
        title: "Tem um projeto em Faro, Portimão ou Beja?",
        desc: "A nossa luz está pronta para guiar a sua visão. Especialistas em instalações complexas e ligação à rede pública.",
        cta: "Peça um Orçamento Gratuito"
      },
      testimonialsTitle: "O que dizem os nossos clientes",
      testimonials: [
        {
          id: 1,
          name: "Narciso Barradas",
          text: "A receção ao cliente, o atendimento e da resolução ao problema reportado, manifesta todo o profissionalismo desta equipa. Muito obrigado pela atenção e dedicação."
        },
        {
          id: 2,
          name: "Carolina Morais",
          text: "Gostei muito do atendimento de Segunda-feira dia 13/05/2025, muito simpatico o senhor da receção"
        },
        {
          id: 3,
          name: "Ana Clara",
          text: "Os funcionários Lucas Penido e Maikel Denny são os melhores."
        }
      ],
      leaveReview: "Deixe a sua avaliação",
      partnersTitle: "Parceiros e Marcas de Confiança",
      serviceCards: {
         plrs: { title: "Ramais de Ligação à Rede Elétrica", desc: "Executamos o seu ramal de ligação à rede elétrica, subterrâneo ou aéreo." },
         infraestruturas: { title: "Infraestruturas Elétricas", desc: "Redes de Baixa e Média Tensão e Postos de Transformação." },
         'postos-transformacao': { title: "PT’s", desc: "Fornecimento, limpeza, manutenção e assistência a postos de transformação." },
         iluminacao: { title: "Iluminação", desc: "Iluminação festiva, soluções inteligentes e iluminação técnica." },
         instalacoes: { title: "Instalações Elétricas", desc: "Quadros elétricos, iluminação interior e exterior e sistemas de segurança." },
         projetos: { title: "Projetos e Certificações", desc: "Desenvolvimento de projetos elétricos e de licenciamento para Baixa e Média Tensão." },
         telecomunicacoes: { title: "Telecomunicações", desc: "Execução de infraestruturas de telecomunicações (ITED e ITUR), assegurando a conectividade e conformidade técnica em loteamentos e edifícios." },
         outros: { title: "Outros Serviços", desc: "Mobilidade elétrica, construção civil, aluguer de equipamentos e apoio a eventos." }
      }
    },
    services: {
      heroTitle: "Os Nossos Serviços",
      heroDesc: "Soluções integradas de engenharia e eletricidade para projetos de qualquer dimensão. Do projeto à execução, garantimos qualidade e cumprimento de prazos.",
      featuresTitle: "O QUE FAZEMOS",
      notFoundTitle: "Não encontra o que procura?",
      notFoundDesc: "Realizamos serviços à medida das suas necessidades. Entre em contacto para discutir o seu projeto.",
      notFoundCta: "Contactar Equipa",
      categories: [
        {
          id: 'plrs',
          title: "RAMAIS DE LIGAÇÃO À REDE ELÉTRICA",
          description: "A JF é especialista em Pedidos de Ligação à Rede (PLR) em todo o Algarve e Alentejo. Tratamos de todo o processo junto da E-Redes e executamos toda a obra.",
          details: ["Pedidos de Ligação à rede elétrica", "Execução de Ramais elétricos", "Aumentos de Potência", "Certificação"]
        },
        {
          id: 'infraestruturas',
          title: "INFRAESTRUTURAS ELÉTRICAS",
          description: "Execução e manutenção de redes elétricas: Baixa Tensão, Média Tensão e Postos de Transformação.",
          details: ["Baixa Tensão", "Média Tensão", "Postos de Transformação", "Manutenção de Redes", "Ensaios Técnicos"]
        },
        {
          id: 'postos-transformacao',
          title: "POSTOS DE TRANSFORMAÇÃO",
          description: "Montagem, manutenção e assistência a Postos de Transformação.",
          details: ["Fornecimentos de PTs", "Limpeza e manutenção de PTs", "Assistência a avarias"]
        },
        {
          id: 'iluminacao',
          title: "ILUMINAÇÃO",
          description: "Iluminação festiva, soluções inteligentes e iluminação técnica.",
          details: ["Iluminação Pública", "Iluminação Desportiva", "Iluminação Festiva", "Cidades Inteligentes"]
        },
        {
          id: 'instalacoes',
          title: "INSTALAÇÕES ELÉTRICAS",
          description: "Realizamos todo o tipo de instalações elétricas de baixa tensão, com foco industrial.",
          details: ["Quadros Elétricos", "Iluminação interior e exterior", "Rigor técnico"]
        },
        {
          id: 'projetos',
          title: "PROJETOS E CERTIFICAÇÕES",
          description: "Execução de projetos elétricos de licenciamento e execução para Baixa e Média Tensão.",
          details: ["Projetos de Média Tensão", "Projetos de Baixa Tensão", "Projetos de Instalações Elétricas", "Projetos iluminotécnicos"]
        },
        {
          id: 'telecomunicacoes',
          title: "TELECOMUNICAÇÕES",
          description: "A JF projeta e instala infraestruturas de telecomunicações em edifícios (ITED) e em loteamentos, urbanizações e conjuntos de edifícios (ITUR).",
          details: ["Projetos ITED/ITUR", "Instalações de rede", "Instalações de fibra", "Instalações de CCTV"]
        },
        {
          id: 'outros',
          title: "OUTROS SERVIÇOS",
          description: "Serviços complementares para apoio integral ao seu projeto.",
          details: ["Construção civil", "Mobilidade elétrica", "Aluguer de equipamentos", "Apoio a Eventos"]
        }
      ]
    },
    serviceDetails: {
      plrs: {
        seoTitle: "RAMAIS DE LIGAÇÃO À REDE ELÉTRICA",
        title: "Ramais de Ligação à Rede Elétrica",
        description: "A JF é especialista em Pedidos de Ligação à Rede (PLR) em todo o Algarve e Alentejo. Tratamos de todo o processo junto da E-Redes e executamos toda a obra.",
        fullText: "A JF é especialista em Pedidos de Ligação à Rede (PLR) em todo o Algarve e Alentejo. Tratamos de todo o processo junto da E-Redes e executamos toda a obra, para que tenha eletricidade no seu imóvel o mais rapidamente possível.",
        features: ["Pedidos de Ligação à rede elétrica", "Execução de Ramais elétricos", "Aumentos de Potência", "Certificação"],
        keywords: ["PLR", "E-Redes", "Ramais", "Baixadas", "Eletricidade"],
        benefits: [
          { title: "Chave-na-mão", desc: "Tratamos de todo o processo e de toda a execução de obra." }
        ]
      },
      infraestruturas: {
        seoTitle: "INFRAESTRUTURAS ELÉTRICAS - BAIXA E MÉDIA TENSÃO",
        title: "INFRAESTRUTURAS ELÉTRICAS",
        description: "Execução e manutenção de redes elétricas: Baixa Tensão, Média Tensão e Postos de Transformação.",
        fullText: "Executamos e garantimos a manutenção de infraestruturas elétricas de Baixa e Média Tensão, incluindo Postos de Transformação, com soluções para o serviço público e privado.",
        features: ["Baixa Tensão", "Média Tensão", "Postos de Transformação", "Redes de Iluminação Pública", "Ensaios e Certificações"],
        keywords: ["Instalações Industriais", "Baixa Tensão", "Quadros Elétricos", "Segurança Elétrica"],
        benefits: [
          { title: "Segurança", desc: "Cumprimento rigoroso das normas técnicas." },
          { title: "Experiência profissional", desc: "Conhecimento e competência" }
        ]
      },
      telecomunicacoes: {
        seoTitle: "TELECOMUNICAÇÕES ITED E ITUR",
        title: "TELECOMUNICAÇÕES",
        description: "Projeção e instalação de infraestruturas de telecomunicações (ITED e ITUR) em conformidade com as normas regulamentares.",
        fullText: "A JF assegura a execução de infraestruturas de telecomunicações em edifícios (ITED) e em loteamentos ou urbanizações (ITUR).",
        features: ["Projetos ITED/ITUR", "Instalações de rede", "Instalações de fibra", "Instalações de CCTV"],
        keywords: ["ITED", "ITUR", "Fibra Ótica", "CCTV", "Telecom"],
        benefits: [
          { title: "Experiência profissional", desc: "Conhecimento e competência" }
        ]
      },
      'postos-transformacao': {
        seoTitle: "PT'S - POSTOS DE TRANSFORMAÇÃO",
        title: "POSTOS DE TRANSFORMAÇÃO",
        description: "Fornecimento e montagem de Postos de Transformação para indústrias e grandes superfícies.",
        fullText: "Para indústrias, hotéis, explorações agrícolas ou grandes superfícies comerciais, a ligação em Baixa Tensão pode não ser suficiente. A JF especializa-se na fornecimento e montagem de Postos de Transformação (PTs). Oferecemos manutenção e assistência garantindo uma maior longevidade dos equipamentos e a segurança das instalações.",
        features: ["Fornecimento e Instalação de PT’s", "Manutenção Preventiva e Corretiva", "Assistência a avarias", "Análise de Óleo Dielétrico"],
        keywords: ["PT", "Média Tensão", "Transformadores", "Manutenção"],
        benefits: [
          { title: "Fiabilidade", desc: "Parceiros dos Principais Fabricantes" },
          { title: "Conformidade", desc: "Cumprimento rigoroso de todas as normas legais e regulamentos técnicos vigentes." }
        ]
      },
      iluminacao: {
        seoTitle: "ILUMINAÇÃO | FESTIVA, PÚBLICA E DECORATIVA | JF",
        title: "ILUMINAÇÃO",
        description: "Iluminação festiva, soluções inteligentes e iluminação técnica.",
        fullText: "A JF disponibiliza soluções integrais de iluminação pública, técnica e decorativa.",
        features: ["Iluminação Pública", "Iluminação Desportiva", "Iluminação Festiva", "Cidades Inteligentes"],
        keywords: ["Iluminação", "LED", "Eficiência", "Festiva"],
        benefits: [
          { title: "Eficiência", desc: "Redução de custos energéticos até 60%." }
        ]
      },
      instalacoes: {
        seoTitle: "INSTALAÇÕES ELÉTRICAS E MANUTENÇÃO",
        title: "INSTALAÇÕES ELÉTRICAS",
        description: "Soluções elétricas completas para edifícios e manutenção preventiva.",
        fullText: "Realizamos todo o tipo de instalações elétricas de baixa tensão. Com foco em instalações industriais, preparadas e pensadas, especificamente para a sua empresa! A nossa equipa garante o cumprimento rigoroso das normas de segurança.",
        features: ["Quadros Elétricos", "Iluminação interior e exterior", "Rigor técnico"],
        keywords: ["Instalações", "Quadros Elétricos", "Iluminação", "Manutenção"],
        benefits: [
          { title: "Segurança", desc: "Garantimos o cumprimento rigoroso das normas." },
          { title: "Experiência profissional", desc: "Conhecimento e competência" }
        ]
      },
      projetos: {
        seoTitle: "PROJETOS E CERTIFICAÇÕES",
        title: "PROJETOS E CERTIFICAÇÕES",
        description: "Execução de projetos elétricos de licenciamento e execução para Baixa e Média Tensão.",
        fullText: "A JF realiza todo o tipo de projeto elétrico que precisar.",
        features: ["Projetos de Média Tensão", "Projetos de Baixa Tensão", "Projetos de Instalações Elétricas", "Projetos iluminotécnicos"],
        keywords: ["Projetos", "Certificações", "Engenharia", "DGEG"],
        benefits: [
          { title: "Conformidade Legal", desc: "Garantimos o cumprimento de todas as normas e regulamentos." },
          { title: "Prazo de Resposta", desc: "Agilidade no desenvolvimento e licenciamento do projeto." }
        ]
      },
      outros: {
        seoTitle: "OUTROS SERVIÇOS ESPECIALIZADOS",
        title: "OUTROS SERVIÇOS",
        description: "Serviços complementares para apoio integral ao seu projeto.",
        fullText: "Serviços complementares para apoio integral ao seu projeto.",
        features: [
          {
            title: "Construção civil no ramo da eletricidade",
            description: "Para oferecer um serviço chave-na-mão, integramos competências de construção civil necessárias à execução das infraestruturas elétricas."
          },
          {
            title: "Mobilidade elétrica",
            description: "Instalamos carregadores elétricos para veículos em casas, condomínios, empresas e espaços comerciais."
          },
          {
            title: "Aluguer de equipamentos",
            description: "Alugamos equipamentos necessários para obras, geradores, plataformas elevatórias, camião grua e máquinas retroescavadoras, se necessário com manobrador, para facilitar o serviço."
          },
          {
            title: "Apoio a eventos",
            description: "Equipas de assistência permanente."
          }
        ],
        keywords: ["Mobilidade", "Construção", "Eventos", "Equipamentos"],
        benefits: [
          { title: "Polivalência", desc: "Várias competências num único parceiro." },
          { title: "Sustentabilidade", desc: "Soluções de carregamento para o futuro." },
          { title: "Experiência profissional", desc: "Conhecimento e competência" }
        ]
      }
    },
    lighting: {
      heroTitle: "Iluminação",
      heroDesc: "Soluções de iluminação pública, decorativa e festiva. Eficiência energética e manutenção técnica especializada.",
      introTitle: "Soluções de Luz 360º",
      introDesc: "Soluções integrais de iluminação pública, técnica e decorativa. Realizamos estudos luminotécnicos, instalação e manutenção de sistemas de iluminação com foco na eficiência energética.",
      stat1: "Projetos Festivos",
      stat2: "Pontos de Luz LED",
      types: [
        {
          title: "Iluminação Pública",
          image: "https://drive.google.com/thumbnail?id=1MFt1qWei6hz80tPGkX91j-g86uHVA7vi&sz=w1000",
          desc: "Garantimos a segurança e o bem-estar das populações através de redes de iluminação pública eficientes e fiáveis. Realizamos a instalação e manutenção de armaduras viárias, projetores e colunas, assegurando a correta luminosidade em estradas, ruas e espaços públicos, sempre com foco na redução da pegada ecológica e custos energéticos.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Zonas Viárias", "Zonas pedonais", "Urbanizações/ Loteamentos", "Parques de Estacionamento", "Zonas Portuárias"]
        },
        {
          title: "Iluminação Desportiva",
          image: "https://drive.google.com/thumbnail?id=15ZTaJZVipA-lCRWq5r5I0oelf5cJDUTF&sz=w1000",
          desc: "No desporto, a luz é fundamental para o desempenho dos atletas e experiência dos espectadores. Projetamos e instalamos sistemas de iluminação que cumprem rigorosamente os níveis de lux exigidos pelas federations e normas de transmissão televisiva. Garantimos uniformidade no campo, controlo de encadeamento e sistemas de acendimento instantâneo para pavilhões e estádios.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Campos de Futebol e Estádios", "Pavilhões Desportivos", "Campos de Ténis e Padel", "Piscinas Municipais"]
        },
        {
          title: "Iluminação Inteligente",
          image: "https://drive.google.com/thumbnail?id=1KOWLU95F6pomAZjmTO0WUY_UbxGsrw-s&sz=w1000",
          desc: "Mais do que iluminar estradas, criamos smart cities. A nossa abordagem à Iluminação Pública foca-se na eficiência energética e segurança. Substituímos luminárias convencionais por tecnologia LED de alto rendimento, integrada com sistemas de telegestão que permitem o controlo remoto da intensidade da luz, deteção de avarias em tempo real e redução da fatura energética municipal até 60%. Destacamos a instalação de passadeiras inteligentes em Portimão, que aumentam a segurança dos peões através de sinalização luminosa ativa.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Zonas Viárias", "Zonas pedonais", "Parques de Estacionamento", "Zonas Portuárias"]
        },
        {
          title: "Iluminação Técnica",
          image: "https://drive.google.com/thumbnail?id=1lwzRh0LtxEQH2ypr8C1FBzYpO-PW82Yr&sz=w1000",
          desc: "A Iluminação Técnica visa valorizar o património edificado à noite, respeitando a sua história e traça original. Utilizamos projetores de precisão, fitas LED e sistemas RGBW para criar cenários dinâmicos ou estáticos que realçam texturas e volumes. É a solução ideal para dar nova vida a edifícios icónicos, hotéis ou monumentos, reforçando a identidade visual do local.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Monumentos e Igrejas", "Hotéis e Resorts", "Edifícios Corporativos", "Pontes e Estruturas"]
        },
        {
          title: "Iluminação Festiva",
          image: "https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000",
          desc: "A Iluminação Festiva é a arte de criar emoções através da luz. Desenvolvemos projetos chave-na-mão para ocasiões especiais, transformando o ambiente urbano e comercial. Desde o design criativo dos motivos (2D e 3D) até à instalação e desmontagem segura, garantimos um espetáculo visual que atrai visitantes, dinamiza o comércio local e celebra a tradição com tecnologia LED de baixo consumo.",
          applicationsTitle: "Onde aplicamos:",
          applications: ["Centros Históricos e Cidades", "Centros Comerciais", "Praças e Jardins Públicos", "Fachadas de Edifícios"]
        }
      ],
      ctaTitle: "Vamos iluminar o seu projeto?",
      ctaDesc: "Seja para decorar a sua cidade no Natal ou renovar a iluminação pública.",
      ctaButton: "Pedir Proposta de Iluminação"
    },
    partners: {
      heroTitle: "Parceiros de Confiança",
      heroDesc: "A excelência da JF constrói-se com relações sólidas com líderes globais da indústria e parcerias estratégicas exclusivas.",
      suppliersTitle: "Fornecedores e Marcas Certificadas",
      suppliersDesc: "Trabalhamos apenas com materiais homologados e equipamentos de topo para garantir a máxima segurança e durabilidade das nossas instalações elétricas.",
      eredesHighlight: {
        title: "INTERLIGAÇÃO COM A REDE DE DISTRIBUIÇÃO",
        desc: "A JF é parceira certificada e empreiteira qualificada da E-Redes.",
        badge: "Normas Técnicas Cumpridas",
        licenseLinkText: "Consulte todas as nossas classes aqui"
      },
      brandsList: [
        { name: "Schneider Electric", desc: "Líder global em gestão de energia e automação." },
        { name: "Siemens", desc: "Tecnologia de ponta para infraestruturas inteligentes." },
        { name: "EFACEC", desc: "Engenharia portuguesa e soluções de mobilidade." },
        { name: "Legrand", desc: "Especialistas em infraestruturas elétricas e digitais." },
        { name: "Hager", desc: "Sistemas de instalação e distribuição de energia." }
      ],
      exclusiveTitle: "A QUEM NOS ASSOCIAMOS",
      exclusiveDesc: "Instituições e associações que partilham o nosso compromisso com o rigor e a excelência no setor.",
      exclusivePartners: [
        { name: "AICCOPN", type: "Associação", desc: "Associação dos Industriais da Construção Civil e Obras Públicas.", logo: "https://drive.google.com/thumbnail?id=1fcRxUxNvCwhcZrv1MisspEy97X3sNpi4&sz=w1000", link: "https://www.aiccopn.pt/" },
        { name: "NERA", type: "Associação", desc: "Associação Empresarial da Região do Algarve.", logo: "https://drive.google.com/thumbnail?id=1X6U5Eqg1pQCsDUTGVdZFo5EhYKLZ4BWO&sz=w1000", link: "https://nera.pt/" }
      ],
      ctaTitle: "Torne-se um Parceiro",
      ctaDesc: "Procuramos constantemente expandir a nossa rede com empresas que partilhem os nossos valores de rigor e qualidade.",
      ctaButton: "Propor Parceria"
    },
    contact: {
      heroTitle: "Contacte-nos",
      heroDesc: "Estamos disponíveis para esclarecer dúvidas e apresentar propostas.",
      infoTitle: "Informações",
      labels: {
        address: "Morada",
        phone: "Telefone",
        callCost: "(Chamada para a rede fixa nacional)",
        callCostMobile: "(Chamada para a rede móvel nacional)",
        email: "Email",
        schedule: "Horário",
        weekdays: "Segunda a Sexta: 09:00 - 12:30 | 14:00 - 18:00",
        weekend: "Sábado, Domingo e Feriados: Encerrado",
        whatsappBox: {
           title: "Peça orçamento via WhatsApp",
           button: "Enviar Mensagem"
        }
      },
      formTitle: "Envie-nos uma mensagem",
      form: {
        name: "Nome Completo",
        email: "Email",
        phone: "Telefone",
        subject: "Assunto",
        subjectPlaceholder: "Selecione um assunto...",
        optQuote: "Pedir Orçamento",
        optInfo: "Informações Gerais",
        optRecruitment: "Recrutamento",
        optPartnership: "Propor Parceria",
        optOther: "Outros",
        interest: "Área de Interesse",
        interestPlaceholder: "Selecione a área...",
        jobPosition: "Posição a candidatar",
        cv: "Curriculum Vitae (CV)",
        presentation: "Apresentação da Empresa (PDF)",
        companyName: "Nome da Empresa",
        companyAddress: "Morada da Empresa",
        companyType: "Tipo de Empresa",
        companyContact: "Contacto da Empresa",
        proposalMessage: "Descreva a sua ideia/proposta",
        uploadFile: "Anexar PDF",
        filePlaceholder: "Nenhum ficheiro selecionado",
        fileLabel: "Anexar Projeto/Planta (PDF)",
        fileHint: "PDF (Máx. 5MB)",
        interestHint: "(Selecione múltiplas opções)",
        successMsg: "Obrigado pelo seu contacto! Entraremos em contacto brevemente.",
        fileError: "Por favor, selecione apenas ficheiros PDF.",
        optsInterest: {
          plrs: "Ramais de Ligação à Rede",
          infraestruturas: "Infraestruturas Elétricas",
          telecommunications: "Telecomunicações",
          substations: "PT’s",
          installations: "Instalações Elétricas",
          projects: "Projetos e Certificações",
          lighting: "Iluminação",
          others: "Outros Serviços"
        },
        message: "Mensagem",
        submit: "Enviar Pedido"
      },
      locationTitle: "Localização"
    },
    faqs: {
      heroTitle: "FAQS",
      heroDesc: "Esclareça as suas dúvidas sobre os nossos serviços e procedimentos.",
      sectionTitle: "PERGUNTAS FREQUENTES",
      list: [
        {
          q: "PRECISO DE COLOCAR ELETRICIDADE NUM LOCAL. QUAIS OS PASSOS A SEGUIR?",
          a: "Para colocar eletricidade numa casa, loja ou terreno é necessário seguir alguns passos de forma organizada e segura. Na JF tratamos de todo o processo, apenas necessitamos de alguns dados/documentos tais como:\n\n- Cartão de cidadão, para pessoa singular ou Certidão permanente, no caso de empresa;\n- Morada da instalação, com indicação das coordenadas geográficas;\n- Caderneta Predial;\n- Contactos telefónicos e de e-mail."
        },
        {
          q: "O QUE PRECISO PARA FAZER UM PEDIDO DE LIGAÇÃO À REDE (PLR) ELÉTRICA?",
          a: "Na JF tratamos de todo o processo, e realizamos um orçamento totalmente gratuito, apenas é necessário que:\n\n- Forneça toda a documentação solicitada;\n- Indique qual o tipo de ligação à rede pretendido;\n- Indique qual a potência pretendida;\n\nApós adjudicação do nosso orçamento, será ainda necessário:\n- Pagamento de Taxas à E-Redes (Valores variáveis)."
        },
        {
          q: "QUAIS OS TIPOS DE LIGAÇÃO À REDE EXISTENTES?",
          a: "- Ligação à rede de uma moradia unifamiliar.\n\n- Ligação à rede para uma empresa/negócio.\n\n- Ligação à rede de uma instalação coletiva (por exemplo: prédios).\n\n- Desvio de rede: Para alterar o local de elementos de rede existente (postes, linhas, etc.).\n\n- Obras: Para fornecer energia elétrica temporariamente a um local, com ou sem a necessidade de ter uma ligação definitiva posteriormente.\n\n- Eventos: Para fornecer energia elétrica a um evento específico e apenas durante o período estritamente necessário para a realização do mesmo. Estas ligações destinam-se tipicamente a circos, feiras, festas, espetáculos de rua, entre outros."
        },
        {
          q: "PRECISO DE ELETRICIDADE NUM LOCAL ONDE JÁ EXISTE CONTADOR. COMO PROCEDER?",
          a: "Se o local já tiver um contador instalado, ou se já teve um contrato de eletricidade, apenas precisa de contactar um comercializador para efetuar um contrato de fornecimento de eletricidade."
        },
        {
          q: "O QUE É O CPE?",
          a: "O CPE – Código de Ponto de Entrega – é o número que identifica a sua instalação elétrica."
        },
        {
          q: "O QUE É NIP?",
          a: "O NIP – Número de Identificação de Prédio – é o número que identifica a instalação coletiva e com o qual é possível consultar todos os CPEs."
        },
        {
          q: "PRETENDO AUMENTAR A POTÊNCIA DA MINHA INSTALAÇÃO. O QUE DEVO FAZER?",
          a: "Se a potência que pretende contratar é inferior à potência máxima admissível da instalação, o Cliente deverá solicitar um aumento de potência contratada junto do seu Comercializador.\n\nNas situações em que a potência que pretende contratar é superior à potência máxima admissível da instalação, o Cliente poderá solicitar-nos um orçamento para um aumento de potência.\n\nO Cliente deverá garantir que a instalação está certificada para o novo valor de potência.\n\nCaso seja necessário certificar a instalação, o Cliente deverá recorrer a uma entidade inspetora de instalações elétricas reconhecida pela Direção Geral de Energia e Geologia (DGEG)."
        },
        {
          q: "É POSSÍVEL MUDAR O LOCAL DO MEU CONTADOR?",
          a: "Sim, através de um pedido de mudança do local do contador, ou alteração do ponto de entrega."
        },
        {
          q: "ESTOU SEM LUZ, QUEM DEVO CONTACTAR?",
          a: "Deverá contactar a E-Redes, através dos meios disponíveis:\n\nTelefone: 800 506 506\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "RECEBI UMA COMUNICAÇÃO SOBRE A SUBSTITUIÇÃO DO MEU CONTADOR. O QUE DEVO FAZER?",
          a: "Deve marcar o dia e hora que lhe forem mais convenientes, contactando a E-Redes:\n\nTelefone: 218 100 100\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "O QUE É NECESSÁRIO PARA TER UM CARREGADOR DE VEÍCULOS ELÉTRICOS?",
          a: "Inicialmente deve verificar a Potência Elétrica Disponível no local, escolher o Tipo de Carregador pretendido e entrar em contacto com o nosso departamento de orçamentação."
        }
      ]
    },
    careers: {
      heroTitle: "Recrutamento",
      heroDesc: "Junte-se a uma equipa com quase 40 anos de história. Construímos o futuro no Algarve e Alentejo com rigor e inovação.",
      introTitle: "Porquê trabalhar connosco?",
      introDesc: "Na JF, acreditamos que as pessoas são a nossa maior energia. Oferecemos estabilidade, formação contínua e a oportunidade de trabalhar em projetos desafiantes de eletricidade, construção e mobilidade sustentável.",
      benefits: [
        "Formação Contínua e Certificação",
        "Seguro de Saúde",
        "Progressão na Carreira",
        "Equipa Unida e Dinâmica"
      ],
      openingsTitle: "Oportunidades em Aberto",
      reqTitle: "Requisitos:",
      otherReq: "+ outros requisitos",
      applyBtn: "Candidatar Agora",
      jobs: [
        {
          id: 1,
          title: "Calceteiro (M/F)",
          location: "Algarve / Alentejo",
          type: "Tempo Inteiro",
          description: "Responsável pela execução e reparação de pavimentos em calçada portuguesa, assentamento de lancis e outros trabalhos de acabamento urbano em via pública.",
          requirements: ["Experiência comprovada na função", "Carta de Condução (preferencial)", "Disponibilidade imediata", "Sentido de responsabilidade"],
          emailSubject: "Candidatura: Calceteiro"
        },
        {
          id: 2,
          title: "Operador de Armazém (M/F)",
          location: "Sede (Faro/Olhão)",
          type: "Part-time",
          description: "Responsável pela receção, conferência e organização de materiais elétricos e de construção no estaleiro, garantindo a eficiência do stock.",
          requirements: ["Experiência em armazém (preferencial)", "Conhecimentos de informática", "Carta de Condução", "Capacidade de organização"],
          emailSubject: "Candidatura: Operador de Armazém"
        },
        {
          id: 3,
          title: "Motorista de Pesados com Grua (M/F)",
          location: "Olhão",
          type: "Tempo Inteiro",
          description: "Principais funções: Condução de camião com grua, transporte de materiais, levantamento de postes e movimentação de bobinas e cargas suspensas. Oferecemos: Salário atrativo e compatível com a experiência, prémios anuais e formação contínua.",
          requirements: ["Carta categoria C (obrigatório)", "Experiência em camião com grua", "Perfil responsável e polivalente", "Experiência com máquinas (valorizado)", "CAM de Pesados de mercadorias (valorizado)", "Preferência por pessoas da região com bom conhecimento da zona"],
          emailSubject: "Candidatura: Motorista de Pesados com Grua"
        },
        {
          id: 4,
          title: "Servente (M/F)",
          location: "Algarve / Alentejo",
          type: "Tempo Inteiro",
          description: "Servente para construção de infraestruturas com carta de condução.",
          requirements: ["Carta de Condução (obrigatório)", "Disponibilidade imediata", "Sentido de responsabilidade"],
          emailSubject: "Candidatura: Servente"
        },
        {
          id: 5,
          title: "Candidatura Espontânea",
          location: "Algarve / Alentejo",
          type: "Tudo",
          description: "Envie-nos a sua candidatura e entraremos em contacto assim que surgir uma oportunidade adequada.",
          requirements: ["Proatividade", "Vontade de trabalhar"],
          emailSubject: "Candidatura Espontânea"
        }
      ],
      spontaneousTitle: "Não encontrou a vaga ideal?",
      spontaneousDesc: "Estamos sempre à procura de novos talentos no Algarve. Envie-nos o seu CV para a nossa base de dados.",
      spontaneousBtn: "Enviar Candidatura",
      spontaneousDisclaimer: "Ao enviar o seu CV, aceita a nossa política de tratamento de dados para fins de recrutamento."
    },
    qualityPage: {
      title: "Política de Qualidade",
      visionTitle: "Visão",
      visionDesc: "A JF idealiza ser uma empresa de referência e um parceiro estratégico na construção de infraestruturas na região do Algarve, acompanhando a inovação e sendo um exemplo na sua área de negócio.",
      missionTitle: "Missão",
      missionDesc: "Prestar serviços eficazes e rápidos na área da construção e manutenção de infraestruturas no Sul de Portugal.",
      valuesTitle: "Valores",
      values: [
        { title: "Integridade", desc: "A seriedade e honestidade predominam nas decisões e no dia-a-dia." },
        { title: "Responsabilidade", desc: "Compromisso em assumir os deveres e funções incumbidos, bem como garantir o cumprimento do contrato/serviço acordado." },
        { title: "Eficácia no Serviço", desc: "Fazer bem à primeira." },
        { title: "Orientação para o Cliente", desc: "Trabalhar de acordo com as expetativas e requisitos do cliente." }
      ],
      strategyTitle: "Orientações Estratégicas",
      strategies: [
        "Melhorar continuamente a eficácia do SGQ e dos nossos serviços para satisfação dos clientes e colaboradores, bem como contribuir para o desenvolvimento da região algarvia que servimos.",
        "Formar, informar e desenvolver todos os recursos humanos, contribuindo para o desenvolvimento das suas competências.",
        "Promover as condições de segurança e saúde de forma a harmonizar o trabalho e proporcionar bem-estar a todos os colaboradores.",
        "Garantir o cumprimento de todas as normas, legislação e regulamentos em vigor e especificações técnicas exigidas pelos nossos clientes."
      ],
      contactInfo: "Qualquer questão adicional estamos disponíveis para esclarecer. (qualidade@joaquimfernandes.pt)",
      legalInfo: {
        title: "Lei 144/2015 de 8 de Setembro",
        intro: "Em caso de litígio o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo:",
        entityName: "Centro de Arbitragem de Consumo do Algarve Tribunal Arbitral",
        address: "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3º andar, sala 26 8000 Faro, Portugal",
        phone: "Telefone: 289 823 135",
        email: "E-mail: apoio@consumidoronline.pt",
        portal: "Mais informações em Portal do Consumidor www.consumidoronline.pt"
      }
    },
    privacyPage: {
      title: "Política de Privacidade",
      intro: "A JF respeita a sua privacidade e compromete-se a proteger os seus dados pessoais. Esta política descreve como recolhemos, utilizamos e protegemos a sua informação, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD).",
      sections: [
        {
          title: "1. Responsável pelo Tratamento",
          content: "A entidade responsável pelo tratamento dos seus dados pessoais é a JF, com sede na Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. Para qualquer questão relacionada com a proteção de dados, pode contactar-nos através do email mail@joaquimfernandes.pt."
        },
        {
          title: "2. Dados Recolhidos",
          content: "Recolhemos dados que nos fornece voluntariamente através dos nossos formulários de contacto, pedidos de orçamento e candidaturas de emprego. Estes podem incluir: Nome, Email, Telefone, Morada e Curriculum Vitae (no caso de recrutamento). Recolhemos também dados técnicos de navegação (Cookies) de forma anónima para melhorar o desempenho do site."
        },
        {
          title: "3. Finalidade do Tratamento",
          content: "Os seus dados são tratados para as seguintes finalidades: \n- Gestão de pedidos de orçamento e contacto comercial;\n- Execução de contratos de prestação de serviços;\n- Processos de recrutamento e seleção;\n- Cumprimento de obrigações legais (faturação)."
        },
        {
          title: "4. Partilha de Dados",
          content: "Não vendemos os seus dados a terceiros. Os seus dados podem ser partilhados apenas com subcontratantes estritamente necessários para a prestação do serviço (ex: contabilidade, informática), garantindo que estes cumprem também o RGPD, ou com autoridades públicas quando exigido por lei."
        },
        {
          title: "5. Direitos do Titular",
          content: "Ao abrigo do RGPD, tem o direito de aceder, retificar, limitar, opor-se ao tratamento e solicitar o apagamento dos seus dados pessoais (direito ao esquecimento). Para exercer estes direitos, basta enviar um pedido por escrito para o nosso email geral."
        },
        {
          title: "6. Segurança e Retenção",
          content: "Implementamos medidas de segurança técnicas e organizativas para proteger os seus dados. Os dados são conservados apenas pelo período necessário para a finalidade para a qual foram recolhidos, ou conforme exigido por lei (ex: 10 anos para dados de faturação)."
        }
      ],
      lastUpdated: "Última atualização: Outubro 2024"
    },
    termsPage: {
      title: "Termos e Condições",
      intro: "Bem-vindo ao website da JF. Ao aceder e utilizar este site, concorda com os seguintes termos e condições de utilização.",
      sections: [
        {
          title: "1. Propriedade Intelectual",
          content: "Todo o conteúdo presente neste site (textos, imagens, logótipos, vídeos) é propriedade exclusiva da JF ou dos seus parceiros, estando protegido pela legislação de Direitos de Autor e Propriedade Industrial. É proibida a cópia, reprodução ou distribuição sem autorização prévia."
        },
        {
          title: "2. Utilização do Site",
          content: "O utilizador compromete-se a utilizar o site para fins legais e a não praticar atos que possam danificar, inutilizar ou sobrecarregar o site, ou impedir a sua utilização normal por outros utilizadores."
        },
        {
          title: "3. Limitação de Responsabilidade",
          content: "A JF esforça-se por manter a informação do site atualizada e precisa. No entanto, não garantimos a ausência de erros ou omissões e não nos responsabilizamos por danos resultantes da utilização da informação aqui contida. As propostas comerciais e orçamentos requerem sempre confirmação oficial por parte da empresa."
        },
        {
          title: "4. Ligações Externas",
          content: "Este site pode conter ligações para sites de terceiros (ex: parceiros, redes sociais). A JF não controla nem é responsável pelo conteúdo ou políticas de privacidade desses sites externos."
        },
        {
          title: "5. Resolução Alternativa de Litígios (RAL)",
          content: "Em caso de litígio de consumo, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo competente. A JF é aderente aos centros de arbitragem da região do Algarve. Mais informações no Portal do Consumidor (www.consumidor.pt)."
        },
        {
          title: "6. Lei Aplicável e Foro",
          content: "Estes termos regem-se pela lei portuguesa. Para qualquer litígio emergente da interpretação ou aplicação destes termos, será competente o Tribunal de Faro, com expressa renúncia a qualquer outro."
        }
      ]
    },
    about: {
      heroTitle: "A Nossa História",
      heroDesc: "Quase quatro décadas de engenharia, construção e inovação. Conheça o percurso que nos trouxe até aqui.",
      timeline: [
        { year: "1986", title: "Fundação da Empresa", description: "JF inicia a sua atividade como uma pequena empresa familiar focada em instalações elétricas residenciais na zona de Faro." },
        { year: "1998", title: "Criamos o 1º Site", description: "Lançamento da nossa primeira presença digital, acompanhando a evolução tecnológica." },
        { year: "2000", title: "Chefe do Consórcio", description: "Reconhecidos como Chefe do Consórcio no Algarve para a EDP (atual E-REDES)." },
        { year: "2001", title: "Certificação de Qualidade", description: "Reconhecidos com a Certificação de Qualidade, reforçando o nosso compromisso com o rigor." },
        { year: "2008", title: "1º PME Líder", description: "Distinção pública da nossa solidez financeira e desempenho económico." },
        { year: "2011", title: "Nova Gerência", description: "Início de um novo ciclo estratégico com a entrada de uma nova liderança." },
        { year: "2017", title: "Renovação da Imagem", description: "Modernização da identidade visual da empresa, refletindo a inovação constante." },
        { year: "2018", title: "1º PME Excelência", description: "Selo de reputação que premeia os melhores desempenhos económico-financeiros." },
        { year: "2021", title: "Aquisição da Empresa", description: "Aquisição da JF pela gerência atual, consolidando o futuro da empresa." },
        { year: "2026", title: "Selo Compromisso Pagamento Pontual.", description: "Reconhecimento do compromisso da empresa com a pontualidade nos pagamentos aos seus fornecedores." }
      ],
      awards: {
        title: "Reconhecimento, Certificações e Prémios",
        subtitle: "A distinção pública da nossa robustez financeira e competência técnica no setor.",
        list: [
          { name: "PME Líder", desc: "Estatuto de referência que distingue o mérito e o perfil de risco das PME nacionais. Distinguida 3 vezes (last in 2025)." },
          { name: "PME Excelência", desc: "Selo de reputação que premeia os melhores desempenhos económico-financeiros. Distinguida 3 vezes (last in 2025)." },
          { name: "Empreiteiro Qualificado E-Redes", desc: "Reconhecimento técnico pela distribuidora para execução de obras na rede elétrica." },
          { name: "Alvará de Construção Nº 8887", desc: "Habilitação oficial IMPIC para execução de obras públicas e privadas de classe elevada." },
          { name: "Certificado conformidade, norma ISO 9001:2015", desc: "Sistema de Gestão da Qualidade certificado, garantindo rigor em todos os processos." },
          { name: "Compromisso Pagamento Pontual", desc: "Iniciativa que distingue empresas que cumprem prazos de pagamento a fornecedores e promovem a ética empresarial." }
        ]
      },
      teamSection: {
        title: "Quem Somos Nós",
        subtitle: "A Força da Nossa Equipa",
        description: "Mais do que uma empresa, somos um coletivo de profissionais apaixonados pelo que fazem. Com uma estrutura sólida e multidisciplinar, a nossa equipa combina a experiência de engenheiros seniores com a energia de técnicos especializados.",
        stat1: "+50 Colaboradores",
        stat2: "Engenharia & Civil",
        stat3: "Técnicos Certificados",
        highlight: "Investimos continuamente na formação e segurança dos nossos quadros, garantindo que cada projeto é executado com o máximo rigor."
      },
      closingTitle: "Pronto para fazer parte do futuro?",
      closingDesc: "A nossa história continua a ser escrita todos os dias, em cada projeto que entregamos.",
      closingCta: "Trabalhe Connosco"
    },
  },
  en: {
    seo: {
      home: {
        title: "JF | Electricity Company Algarve and Alentejo",
        description: "Electricians specialized in Electrical Installations, Grid Connections, PLRs, Transformer Substations and Smart Cities. Operating in Faro, Portimão, Tavira, Beja and all Algarve."
      },
      about: {
        title: "About Us | Permanent Assistance in Algarve | JF",
        description: "Meet JF, a leading company in electricity and telecommunications in the South. Serving Algarve (Faro, Albufeira) and Alentejo with rigor."
      },
      services: {
        title: "Electrical Installations and Engineering Services | Algarve and Alentejo",
        description: "Complete services in the South: Electricity Projects, Grid Connections (PLRs), Transformer Substations, Industrial Electrical Installations, and EV Charging."
      },
      lighting: {
        title: "Lighting | Festive, Public and Decorative | JF",
        description: "Complete lighting solutions in Algarve. Christmas Lighting, Smart Lighting (Smart Cities) and Technical Lighting."
      },
      partners: {
        title: "Partners and Brands | Schneider, E-Redes, Siemens",
        description: "We work with top brands and comply with all E-Redes standards. Trusted partners for civil construction and public works in the South."
      },
      careers: {
        title: "Electrician and Engineering Recruitment | Jobs Algarve",
        description: "Join our team. Vacancies for Electricians, Electrical Engineers and Maintenance Technicians in Algarve and Alentejo."
      },
      contact: {
        title: "Contacts | Request Electrician Quote Algarve and Alentejo | JF",
        description: "Contact JF for quotes on electrical installations, Grid Connections (PLRs) or maintenance. Serving Faro, Olhão, Tavira, Portimão and Beja."
      },
      smartCities: {
        title: "Smart Cities & IoT | Smart Public Lighting | JF",
        description: "Transforming cities in Algarve into Smart Cities. IoT solutions, public lighting telemanagement, and energy efficiency."
      },
      faqs: {
        title: "Frequently Asked Questions | JF",
        description: "Answers to common questions about grid connection requests (PLR), drops, meters, and electrical installations."
      }
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      partners: 'Partners',
      careers: 'Careers',
      contact: 'Contacts',
      quote: 'Get Quote',
      toggle: 'PT'
    },
    footer: {
      desc: 'Integrated solutions for electricity, construction, and electric mobility. Powering your project in Algarve and Alentejo with quality and safety since 1986.',
      navTitle: 'Navigation',
      contactTitle: 'Contacts',
      newsletterTitle: 'Newsletter',
      newsletterDesc: 'Receive the latest news and updates.',
      placeholder: 'Your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
      designedBy: 'Website designed by',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      quality: 'Quality Policy',
      complaintsBook: 'Complaints Book',
      faqTitle: 'Frequently Asked Questions',
      faqDesc: 'Consult our support area to clarify technical questions.',
      faqButton: 'View FAQs'
    },
    common: {
      learnMore: 'Learn More',
      seeMore: 'See More',
      requestService: 'Request Service',
      address: 'Estrada Nacional 125, Bias Norte, Moncarapacho',
      city: '8700-066 Olhão, Portugal'
    },
    home: {
      hero: {
        title: "JF,|Electrical Infrastructures,|Lighting, PT's and PLR's",
        subtitle: "Your reference electricity company in Algarve and Alentejo. Technical excellence in Grid Connections, PLRs and Infrastructures.",
        ctaPrimary: "Contact Us",
        ctaSecondary: "Explore Services"
      },
      slogan: "Electricity is Our Business!",
      servicesTitle: "Our Areas of Expertise",
      whyUsTitle: "Why choose JF?",
      whyUsDesc: "We are the right choice for anyone looking for permanent assistance in Algarve and Alentejo. We combine decades of experience in Transformer Substations and Telecommunications with the latest technologies.",
      ctaButton: "Explore our services",
      benefits: [
        { id: 1, text: "Experience since 1986" },
        { id: 2, text: "Permanent Assistance" },
        { id: 3, text: "Turnkey Solutions" },
        { id: 4, text: "Focus on the South" }
      ],
      lightUp: {
        title: "Have a project in Faro, Portimão or Beja?",
        desc: "Our light is ready to guide your vision. Specialists in complex installations and public grid connections.",
        cta: "Request Free Quote"
      },
      testimonialsTitle: "What our clients say",
      testimonials: [
        {
          id: 1,
          name: "Narciso Barradas",
          text: "The customer reception, service, and resolution of the reported problem manifest all the professionalism of this team. Thank you very much for the attention and dedication."
        },
        {
          id: 2,
          name: "Carolina Morais",
          text: "I really liked the service on Monday, 05/13/2025, the gentleman at the reception was very friendly."
        },
        {
          id: 3,
          name: "Ana Clara",
          text: "Employees Lucas Penido and Maikel Denny are the best."
        }
      ],
      leaveReview: "Leave your review",
      partnersTitle: "Trusted Partners and Brands",
      serviceCards: {
         plrs: { title: "Grid Connection Requests", desc: "We execute your grid connection branch, underground or overhead." },
         infraestruturas: { title: "Electrical Infrastructure", desc: "Execution and maintenance of Low and Medium Voltage electrical networks and Transformer Substations." },
         'postos-transformacao': { title: "Substations", desc: "Assembly, maintenance and assistance for Transformer Substations." },
         iluminacao: { title: "Lighting", desc: "Festive lighting, smart solutions and technical lighting." },
         instalacoes: { title: "Electrical Installations", desc: "Low voltage electrical installations for housing, commerce, and industry." },
         projetos: { title: "Projects and Certifications", desc: "Specialized electrical engineering and licensing." },
         telecomunicacoes: { title: "Telecommunications", desc: "Execution of telecommunications infrastructure (ITED and ITUR), ensuring connectivity and technical compliance in allotments and buildings." },
         outros: { title: "Other Services", desc: "Complementary services for comprehensive project support." }
      }
    },
    contact: {
      heroTitle: "Contact Us",
      heroDesc: "We are available to clarify doubts and present proposals.",
      infoTitle: "Information",
      labels: {
        address: "Address",
        phone: "Phone",
        callCost: "(Call to national landline network)",
        callCostMobile: "(Call to national mobile network)",
        email: "Email",
        schedule: "Schedule",
        weekdays: "Monday to Friday: 09:00 - 12:30 | 14:00 - 18:00",
        weekend: "Saturday, Sunday and Holidays: Closed",
        whatsappBox: {
           title: "Request quote via WhatsApp",
           button: "Send Message"
        }
      },
      formTitle: "Send us a message",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        subjectPlaceholder: "Select a subject...",
        optQuote: "Request Quote",
        optInfo: "General Information",
        optRecruitment: "Recruitment",
        optPartnership: "Propose Partnership",
        optOther: "Others",
        interest: "Area of Interest",
        interestPlaceholder: "Select area...",
        jobPosition: "Position to apply for",
        cv: "Curriculum Vitae (CV)",
        presentation: "Company Presentation (PDF)",
        companyName: "Company Name",
        companyAddress: "Company Address",
        companyType: "Company Type",
        companyContact: "Company Contact",
        proposalMessage: "Describe your idea/proposal",
        uploadFile: "Attach PDF",
        filePlaceholder: "No file selected",
        fileLabel: "Attach Project/Plan (PDF)",
        fileHint: "PDF (Max 5MB)",
        interestHint: "(Select multiple options)",
        successMsg: "Thank you for contacting us! We will get back to you shortly.",
        fileError: "Please select only PDF files.",
        optsInterest: {
          plrs: "Grid Connections",
          infraestruturas: "Electrical Infrastructure",
          telecomunicacoes: "Telecommunications",
          'postos-transformacao': "Substations",
          instalacoes: "Electrical Installations",
          projetos: "Projects and Certifications",
          iluminacao: "Lighting",
          outros: "Other Services"
        },
        message: "Message",
        submit: "Send Request"
      },
      locationTitle: "Location"
    },
    faqs: {
      heroTitle: "FAQS",
      heroDesc: "Clarify your doubts about our services and procedures.",
      sectionTitle: "FREQUENTLY ASKED QUESTIONS",
      list: [
        {
          q: "I NEED TO CONNECT ELECTRICITY TO A LOCATION. WHAT ARE THE STEPS?",
          a: "To connect electricity to a house, shop, or land, you need to follow some steps in an organized and safe manner. At JF we handle the entire process; we just need some data/documents such as:\n\n- Citizen Card, for individuals, or Permanent Certificate, for companies;\n- Installation address, with indication of geographic coordinates;\n- Property Booklet;\n- Phone and email contacts."
        },
        {
          q: "WHAT DO I NEED TO MAKE A GRID CONNECTION REQUEST (PLR)?",
          a: "At JF we handle the entire process and provide a totally free quote. It is only necessary that you:\n\n- Provide all requested documentation;\n- Indicate the type of grid connection intended;\n- Indicate the power intended;\n\nAfter adjudication of our quote, it will also be necessary to:\n- Pay Fees to E-Redes (Variable values)."
        },
        {
          q: "WHAT ARE THE EXISTING TYPES OF GRID CONNECTION?",
          a: "- Grid connection for a single-family home.\n\n- Grid connection for a company/business.\n\n- Grid connection for a collective installation (e.g., buildings).\n\n- Grid deviation: To change the location of existing grid elements (poles, lines, etc.).\n\n- Works: To temporarily supply electricity to a site, with or without the need for a definitive connection later.\n\n- Events: To supply electricity to a specific event and only for the period strictly necessary for its realization. These connections are typically for circuses, fairs, parties, street shows, among others."
        },
        {
          q: "I NEED ELECTRICITY IN A PLACE WHERE THERE IS ALREADY A METER. HOW TO PROCEED?",
          a: "If the place already has a meter installed, or if it has had an electricity contract, you just need to contact a supplier to make an electricity supply contract."
        },
        {
          q: "WHAT IS THE CPE?",
          a: "The CPE – Delivery Point Code – is the number that identifies your electrical installation."
        },
        {
          q: "WHAT IS NIP?",
          a: "The NIP – Building Identification Number – is the number that identifies the collective installation and with which it is possible to consult all CPEs."
        },
        {
          q: "I WANT TO INCREASE THE POWER OF MY INSTALLATION. WHAT SHOULD I DO?",
          a: "If the power you want to contract is lower than the maximum admissible power of the installation, the Customer should request an increase in contracted power from their Supplier.\n\nIn situations where the power you want to contract is higher than the maximum admissible power of the installation, the Customer may request a quote from us for a power increase.\n\nThe Customer must ensure that the installation is certified for the new power value.\n\nIf it is necessary to certify the installation, the Customer must resort to an electrical installation inspection entity recognized by the Directorate General for Energy and Geology (DGEG)."
        },
        {
          q: "IS IT POSSIBLE TO MOVE THE LOCATION OF MY METER?",
          a: "Yes, through a request to change the meter location, or alteration of the delivery point."
        },
        {
          q: "I HAVE NO POWER, WHO SHOULD I CONTACT?",
          a: "You should contact E-Redes, through available means:\n\nPhone: 800 506 506\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "I RECEIVED A COMMUNICATION ABOUT REPLACING MY METER. WHAT SHOULD I DO?",
          a: "You should schedule the day and time that is most convenient for you by contacting E-Redes:\n\nPhone: 218 100 100\nWhatsApp: 913 846 398\nSite: https://balcaodigital.e-redes.pt/home"
        },
        {
          q: "WHAT IS NEEDED TO HAVE AN ELECTRIC VEHICLE CHARGER?",
          a: "Initially, you must check the Available Electrical Power at the site, choose the Type of Charger intended, and contact our budgeting department."
        }
      ]
    },
    careers: {
      heroTitle: "Recruitment",
      heroDesc: "Join a team with almost 40 years of history. We build the future in Algarve and Alentejo with rigor and innovation.",
      introTitle: "Why work with us?",
      introDesc: "At JF, we believe that people are our greatest energy. We offer stability, continuous training, and the opportunity to work on challenging electricity, construction, and sustainable mobility projects.",
      benefits: [
        "Continuous Training and Certification",
        "Health Insurance",
        "Career Progression",
        "United and Dynamic Team"
      ],
      openingsTitle: "Open Opportunities",
      reqTitle: "Requirements:",
      otherReq: "+ other requirements",
      applyBtn: "Apply Now",
      jobs: [
        {
          id: 1,
          title: "Paver (M/F)",
          location: "Algarve / Alentejo",
          type: "Full-time",
          description: "Responsible for execution and repair of Portuguese cobblestone pavements, curb setting, and other urban finishing works on public roads.",
          requirements: ["Proven experience in the role", "Driving License (preferred)", "Immediate availability", "Sense of responsibility"],
          emailSubject: "Application: Paver"
        },
        {
          id: 2,
          title: "Warehouse Operator (M/F)",
          location: "Headquarters (Faro/Olhão)",
          type: "Part-time",
          description: "Responsible for receiving, checking, and organizing electrical and construction materials in the yard, ensuring stock efficiency.",
          requirements: ["Warehouse experience (preferred)", "Computer skills", "Driving License", "Organizational skills"],
          emailSubject: "Application: Warehouse Operator"
        },
        {
          id: 3,
          title: "Heavy Vehicle Driver with Crane (M/F)",
          location: "Olhão",
          type: "Full-time",
          description: "Main functions: Driving a truck with a crane, transporting materials, lifting poles, and handling coils and suspended loads. We offer: Attractive salary compatible with experience, annual bonuses, and continuous training.",
          requirements: ["Category C License (mandatory)", "Experience with crane trucks", "Responsible and versatile profile", "Experience with machinery (valued)", "Goods Heavy Vehicle CAM (valued)", "Preference for locals with good knowledge of the area"],
          emailSubject: "Application: Heavy Vehicle Driver with Crane"
        },
        {
          id: 4,
          title: "General Worker (M/F)",
          location: "Algarve / Alentejo",
          type: "Full-time",
          description: "Infrastructure construction worker with a driving license.",
          requirements: ["Driving License (required)", "Immediate availability", "Sense of responsibility"],
          emailSubject: "Application: General Worker"
        },
        {
          id: 5,
          title: "Spontaneous Application",
          location: "Algarve / Alentejo",
          type: "All",
          description: "Send us your application and we will contact you as soon as a suitable opportunity arises.",
          requirements: ["Proactivity", "Willingness to work"],
          emailSubject: "Spontaneous Application"
        }
      ],
      spontaneousTitle: "Didn't find the ideal vacancy?",
      spontaneousDesc: "We are always looking for new talent in Algarve. Send us your CV for our database.",
      spontaneousBtn: "Send Application",
      spontaneousDisclaimer: "By sending your CV, you accept our data processing policy for recruitment purposes."
    },
    qualityPage: {
      title: "Quality Policy",
      visionTitle: "Vision",
      visionDesc: "JF envisions being a reference company and a strategic partner in infrastructure construction in the Algarve region, keeping up with innovation and being an example in its business area.",
      missionTitle: "Mission",
      missionDesc: "Provide effective and fast services in the area of infrastructure construction and maintenance in Southern Portugal.",
      valuesTitle: "Values",
      values: [
        { title: "Integrity", desc: "Seriousness and honesty predominate in decisions and day-to-day life." },
        { title: "Responsibility", desc: "Commitment to assume duties and functions, as well as ensure compliance with the agreed contract/service." },
        { title: "Service Effectiveness", desc: "Doing it right the first time." },
        { title: "Customer Orientation", desc: "Working according to customer expectations and requirements." }
      ],
      strategyTitle: "Strategic Guidelines",
      strategies: [
        "Continuously improve the effectiveness of the QMS and our services for customer and employee satisfaction, as well as contributing to the development of the Algarve region we serve.",
        "Train, inform, and develop all human resources, contributing to the development of their skills.",
        "Promote safety and health conditions to harmonize work and provide well-being to all employees.",
        "Ensure compliance with all current standards, legislation, and regulations and technical specifications required by our clients."
      ],
      contactInfo: "We are available to clarify any additional questions. (qualidade@joaquimfernandes.pt)",
      legalInfo: {
        title: "Law 144/2015 of September 8",
        intro: "In case of dispute, the consumer may resort to an Alternative Consumer Dispute Resolution Entity:",
        entityName: "Algarve Consumer Arbitration Center Arbitral Tribunal",
        address: "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3rd floor, room 26 8000 Faro, Portugal",
        phone: "Phone: 289 823 135",
        email: "E-mail: apoio@consumidoronline.pt",
        portal: "More information at Consumer Portal www.consumidoronline.pt"
      }
    },
    about: {
      heroTitle: "Our History",
      heroDesc: "Almost four decades of engineering, construction, and innovation. Discover the journey that brought us here.",
      timeline: [
        { year: "1986", title: "Company Foundation", description: "JF begins its activity as a small family business focused on residential electrical installations in the Faro area." },
        { year: "1998", title: "1st Website", description: "Launch of our first digital presence, following technological evolution." },
        { year: "2000", title: "Consortium Leader", description: "Recognized as Consortium Leader in Algarve for EDP (now E-REDES)." },
        { year: "2001", title: "Quality Certification", description: "Recognized with Quality Certification, reinforcing our commitment to precision." },
        { year: "2008", title: "1st PME Leader", description: "Public distinction of our financial soundness and economic performance." },
        { year: "2011", title: "New Management", description: "Start of a new strategic cycle with the entry of new leadership." },
        { year: "2017", title: "Brand Renewal", description: "Modernization of the company's visual identity, reflecting constant innovation." },
        { year: "2018", title: "1st PME Excellence", description: "Reputation seal awarding the best economic-financial performances." },
        { year: "2021", title: "Company Acquisition", description: "Acquisition of JF by the current management, consolidating the company's future." },
        { year: "2026", title: "Commitment to Prompt Payment Seal.", description: "Recognition of the company's commitment to timely payments to its suppliers." }
      ],
      awards: {
        title: "Recognition, Certifications and Awards",
        subtitle: "Public distinction of our financial robustness and technical competence in the sector.",
        list: [
          { name: "PME Leader", desc: "Reference status distinguishing the merit and risk profile of national SMEs. Distinguished 3 times (last in 2025)." },
          { name: "PME Excellence", desc: "Reputation seal awarding best economic-financial performances. Distinguished 3 times (last in 2025)." },
          { name: "E-Redes Qualified Contractor", desc: "Technical recognition by the distributor for execution of works on the electrical grid." },
          { name: "Construction Permit No. 8887", desc: "Official IMPIC license for execution of high-class public and private works." },
          { name: "ISO 9001:2015 Compliance Certificate", desc: "Certified Quality Management System, ensuring rigor in all processes." },
          { name: "Commitment to Timely Payment", desc: "Initiative that distinguishes companies that meet payment deadlines to suppliers and promote business ethics." }
        ]
      },
      teamSection: {
        title: "Who We Are",
        subtitle: "The Strength of Our Team",
        description: "More than a company, we are a collective of professionals passionate about what they do. With a solid and multidisciplinary structure, our team combines the experience of senior engineers with the energy of specialized technicians.",
        stat1: "+50 Employees",
        stat2: "Engineering & Civil",
        stat3: "Certified Technicians",
        highlight: "We continuously invest in training and safety of our staff, ensuring each project is executed with maximum rigor."
      },
      closingTitle: "Ready to be part of the future?",
      closingDesc: "Our story continues to be written every day, in every project we deliver.",
      closingCta: "Work With Us"
    },
    privacyPage: {
      title: "Privacy Policy",
      intro: "JF respects your privacy and is committed to protecting your personal data. This policy describes how we collect, use, and protect your information, in compliance with the General Data Protection Regulation (GDPR).",
      sections: [
        {
          title: "1. Data Controller",
          content: "The entity responsible for processing your personal data is JF, headquartered at Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. For any questions related to data protection, you can contact us via email mail@joaquimfernandes.pt."
        },
        {
          title: "2. Collected Data",
          content: "We collect data that you provide voluntarily through our contact forms, quote requests, and job applications. These may include: Name, Email, Phone, Address, and Curriculum Vitae (in case of recruitment). We also collect anonymous technical navigation data (Cookies) to improve site performance."
        },
        {
          title: "3. Purpose of Processing",
          content: "Your data is processed for the following purposes: \n- Management of quote requests and commercial contact;\n- Execution of service provision contracts;\n- Recruitment and selection processes;\n- Compliance with legal obligations (invoicing)."
        },
        {
          title: "4. Data Sharing",
          content: "We do not sell your data to third parties. Your data may be shared only with subcontractors strictly necessary for service provision (e.g., accounting, IT), ensuring they also comply with GDPR, or with public authorities when required by law."
        },
        {
          title: "5. Rights of the Data Subject",
          content: "Under the GDPR, you have the right to access, rectify, limit, object to processing, and request erasure of your personal data (right to be forgotten). To exercise these rights, simply send a written request to our general email."
        },
        {
          title: "6. Security and Retention",
          content: "We implement technical and organizational security measures to protect your data. Data is kept only for the period necessary for the purpose for which it was collected, or as required by law (e.g., 10 years for invoicing data)."
        }
      ],
      lastUpdated: "Last updated: October 2024"
    },
    termsPage: {
      title: "Terms and Conditions",
      intro: "Welcome to the JF website. By accessing and using this site, you agree to the following terms and conditions of use.",
      sections: [
        {
          title: "1. Intellectual Property",
          content: "All content on this site (texts, images, logos, videos) is the exclusive property of JF or its partners, protected by Copyright and Industrial Property legislation. Copying, reproduction, or distribution without prior authorization is prohibited."
        },
        {
          title: "2. Use of the Site",
          content: "The user agrees to use the site for lawful purposes and not to practice acts that may damage, disable, or overburden the site, or prevent its normal use by other users."
        },
        {
          title: "3. Limitation of Liability",
          content: "JF strives to keep the site information updated and accurate. However, we do not guarantee the absence of errors or omissions and are not responsible for damages resulting from the use of information contained herein. Commercial proposals and quotes always require official confirmation by the company."
        },
        {
          title: "4. External Links",
          content: "This site may contain links to third-party sites (e.g., partners, social networks). JF does not control and is not responsible for the content or privacy policies of these external sites."
        },
        {
          title: "5. Alternative Dispute Resolution (ADR)",
          content: "In case of consumer dispute, the consumer may resort to a competent Alternative Consumer Dispute Resolution Entity. JF adheres to arbitration centers in the Algarve region. More information on the Consumer Portal (www.consumidor.pt)."
        },
        {
          title: "6. Applicable Law and Forum",
          content: "These terms are governed by Portuguese law. For any dispute arising from the interpretation or application of these terms, the Court of Faro shall be competent, with express waiver of any other."
        }
      ]
    },
    lighting: {
      heroTitle: "Lighting",
      heroDesc: "Public, decorative and festive lighting solutions. Energy efficiency and specialized technical maintenance.",
      introTitle: "360º Light Solutions",
      introDesc: "Complete solutions for public, technical and decorative lighting. We perform lighting studies, installation and maintenance of lighting systems with a focus on energy efficiency.",
      stat1: "Festive Projects",
      stat2: "LED Light Points",
      types: [
        {
          title: "Public Lighting",
          image: "https://drive.google.com/thumbnail?id=1MFt1qWei6hz80tPGkX91j-g86uHVA7vi&sz=w1000",
          desc: "We ensure the safety and well-being of populations through efficient and reliable public lighting networks. We install and maintain street luminaires, floodlights, and columns, ensuring correct luminosity on roads, streets, and public spaces, always focusing on reducing the ecological footprint and energy costs.",
          applicationsTitle: "Where applied:",
          applications: ["Road Zones", "Pedestrian Zones", "Urbanizations/ Allotments", "Parking Lots", "Port Areas"]
        },
        {
          title: "Sports Lighting",
          image: "https://drive.google.com/thumbnail?id=15ZTaJZVipA-lCRWq5r5I0oelf5cJDUTF&sz=w1000",
          desc: "In sports, light is fundamental for athlete performance and spectator experience. We design and install lighting systems that strictly comply with lux levels required by federations and TV transmission standards. We guarantee uniformity on the field, glare control, and instant strike systems for pavilions and stadiums.",
          applicationsTitle: "Where applied:",
          applications: ["Football Fields and Stadiums", "Sports Pavilions", "Tennis and Padel Courts", "Municipal Pools"]
        },
        {
          title: "Smart Lighting",
          image: "https://drive.google.com/thumbnail?id=1KOWLU95F6pomAZjmTO0WUY_UbxGsrw-s&sz=w1000",
          desc: "More than lighting roads, we create smart cities. Our approach to Public Lighting focuses on energy efficiency and safety. We replace conventional luminaires with high-performance LED technology, integrated with telemanagement systems that allow remote control of light intensity, real-time fault detection, and reduction of municipal energy bills by up to 60%. We highlight the installation of smart crosswalks in Portimão, which increase pedestrian safety through active light signaling.",
          applicationsTitle: "Where applied:",
          applications: ["Road Zones", "Pedestrian Zones", "Parking Lots", "Port Areas"]
        },
        {
          title: "Technical Lighting",
          image: "https://drive.google.com/thumbnail?id=1lwzRh0LtxEQH2ypr8C1FBzYpO-PW82Yr&sz=w1000",
          desc: "Technical Lighting aims to value built heritage at night, respecting its history and original trace. We use precision projectors, LED strips, and RGBW systems to create dynamic or static scenarios that highlight textures and volumes. It is the ideal solution to give new life to iconic buildings, hotels, or monuments, reinforcing the location's visual identity.",
          applicationsTitle: "Where applied:",
          applications: ["Monuments and Churches", "Hotels and Resorts", "Corporate Buildings", "Bridges and Structures"]
        },
        {
          title: "Festive Lighting",
          image: "https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000",
          desc: "Festive Lighting is the art of creating emotions through light. We develop turnkey projects for special occasions, transforming the urban and commercial environment. From creative design of motifs (2D and 3D) to safe installation and dismantling, we guarantee a visual spectacle that attracts visitors, boosts local commerce, and celebrates tradition with low-consumption LED technology.",
          applicationsTitle: "Where applied:",
          applications: ["Historic Centers and Cities", "Shopping Centers", "Squares and Public Gardens", "Building Facades"]
        }
      ],
      ctaTitle: "Let's light up your project?",
      ctaDesc: "Whether decorating your city for Christmas or renewing public lighting.",
      ctaButton: "Request Lighting Proposal"
    },
    partners: {
      heroTitle: "Trusted Partners",
      heroDesc: "JF excellence is built on solid relationships with global industry leaders and exclusive strategic partnerships.",
      suppliersTitle: "Suppliers and Certified Brands",
      suppliersDesc: "We work only with approved materials and top equipment to ensure maximum safety and durability of our electrical installations.",
      eredesHighlight: {
        title: "INTERCONNECTION WITH DISTRIBUTION GRID",
        desc: "JF is a certified partner and qualified contractor of E-Redes.",
        badge: "Technical Standards Complied",
        licenseLinkText: "Consult all our classes here"
      },
      brandsList: [
        { name: "Schneider Electric", desc: "Global leader in energy management and automation." },
        { name: "Siemens", desc: "Cutting-edge technology for smart infrastructures." },
        { name: "EFACEC", desc: "Portuguese engineering and mobility solutions." },
        { name: "Legrand", desc: "Specialists in electrical and digital infrastructures." },
        { name: "Hager", desc: "Energy installation and distribution systems." }
      ],
      exclusiveTitle: "Partner Public Entities",
      exclusiveDesc: "Municipalities and state organizations that trust JF for public lighting and critical infrastructures.",
      exclusivePartners: [
        { name: "Olhão Municipality", type: "Municipality", desc: "Execution of electrical infrastructures in new allotments and industrial zones." },
        { name: "Faro Municipality", type: "Municipality", desc: "Maintenance of Public Lighting and municipal buildings in the municipality." },
        { name: "Loulé Municipality", type: "Municipality", desc: "Development and maintenance of electrical networks and public lighting." }
      ],
      ctaTitle: "Become a Partner",
      ctaDesc: "We are constantly looking to expand our network with companies that share our values of rigor and quality.",
      ctaButton: "Propose Partnership"
    },
    services: {
      heroTitle: "Our Services",
      heroDesc: "Integrated engineering and electricity solutions for projects of any size. From design to execution, we guarantee quality and compliance with deadlines.",
      featuresTitle: "WHAT WE DO",
      notFoundTitle: "Didn't find what you're looking for?",
      notFoundDesc: "We perform tailored services for your needs. Contact us to discuss your project.",
      notFoundCta: "Contact Team",
      categories: [
        {
          id: 'plrs',
          title: "Grid Connection Requests",
          description: "JF is a specialist in Grid Connection Requests (PLR) throughout the Algarve and Alentejo regions.",
          details: ["Grid Connection Requests", "Execution of Electrical Branches", "Power Increases", "Certification"]
        },
        {
          id: 'infraestruturas',
          title: "Electrical Infrastructure",
          description: "Execution and maintenance of Low and Medium Voltage electrical networks.",
          details: ["Low Voltage Networks", "Medium Voltage Networks", "Transformer Substations", "Network Maintenance", "Technical Testing"]
        },
        {
          id: 'postos-transformacao',
          title: "Substations",
          description: "Assembly, maintenance and assistance for Transformer Substations.",
          details: ["Substation Supply", "Cleaning and Maintenance", "Breakdown Assistance"]
        },
        {
          id: 'iluminacao',
          title: "Lighting",
          description: "Festive lighting, smart solutions and technical lighting.",
          details: ["Public Lighting", "Sports Lighting", "Festive Lighting", "Smart Cities"]
        },
        {
          id: 'instalacoes',
          title: "Electrical Installations",
          description: "Low voltage electrical installations for housing, commerce, and industry. We guarantee safety, efficiency, and compliance with technical standards.",
          details: ["Electrical Boards", "Refurbishments", "LED Lighting", "Preventive Maintenance"]
        },
        {
          id: 'projetos',
          title: "Projects and Certifications",
          description: "Our engineering department develops licensing and execution projects for Medium and Low Voltage installations, Transformer Substations, and lighting studies. We ensure technical and legal compliance with regulatory entities.",
          details: ["Medium Voltage Projects", "Low Voltage Projects", "Electrical Installation Projects", "Lighting Projects"]
        },
        {
          id: 'telecomunicacoes',
          title: "Telecommunications",
          description: "JF designs and installs telecommunications infrastructure in buildings (ITED) and in subdivisions, urbanizations and building complexes (ITUR).",
          details: ["ITED/ITUR Projects", "Network Installations", "Fiber Installations", "CCTV Installations"]
        },
        {
          id: 'outros',
          title: "Other Services",
          description: "Complementary services for comprehensive project support.",
          details: ["Civil Construction", "Electric Mobility", "Equipment Rental", "Event Support"]
        }
      ]
    },
    serviceDetails: {
      plrs: {
        seoTitle: "PLR - Grid Connections",
        title: "Grid Connections",
        description: "JF is a specialist in Grid Connection Requests (PLR) throughout the Algarve and Alentejo regions.",
        fullText: "JF is specialized in execution of Grid Connection Requests (PLR) throughout the Algarve and Alentejo. We handle the entire process with E-Redes and execute all the work, so you have electricity in your property as quickly as possible.",
        features: ["Grid Connection Requests", "Execution of Electrical Branches", "Power Increases", "Certification"],
        keywords: ["PLR", "E-Redes", "Branches", "Connections", "Electricity"],
        benefits: [
          { title: "Turnkey", desc: "We handle the entire process and execution of the work." }
        ]
      },
      infraestruturas: {
        seoTitle: "Electrical Infrastructure - Industrial Installations",
        title: "Electrical Infrastructure",
        description: "Low voltage electrical installations with a focus on industrial solutions.",
        fullText: "We perform all types of low voltage electrical installations. With a focus on industrial installations, prepared and designed specifically for your company! Our team guarantees rigorous compliance with safety standards.",
        features: ["Electrical Panels", "Indoor and Outdoor Lighting", "Technical Rigor"],
        keywords: ["Industrial Installations", "Low Voltage", "Electrical Panels", "Electrical Safety"],
        benefits: [
          { title: "Safety", desc: "Strict compliance with technical standards." },
          { title: "Professional Experience", desc: "Knowledge and competence" }
        ]
      },
      telecomunicacoes: {
        seoTitle: "Telecommunications ITED and ITUR",
        title: "Telecommunications",
        description: "Design and installation of telecommunications infrastructure (ITED and ITUR) in compliance with regulatory standards.",
        fullText: "JF ensures the execution of telecommunications infrastructure in buildings (ITED) and in subdivisions or urbanizations (ITUR).",
        features: ["ITED/ITUR Projects", "Network Installations", "Fiber Installations", "CCTV Installations"],
        keywords: ["ITED", "ITUR", "Fiber Optic", "CCTV", "Telecom"],
        benefits: [
          { title: "Professional Experience", desc: "Knowledge and competence" }
        ]
      },
      'postos-transformacao': {
        seoTitle: "Transformer Substations",
        title: "Substations",
        description: "Supply and assembly of Transformer Substations for industries and large areas.",
        fullText: "For industries, hotels, agricultural operations, or large commercial areas, a Low Voltage connection may not be sufficient. JF specializes in the supply and assembly of Transformer Substations (PTs). We offer maintenance and assistance, ensuring greater equipment longevity and facility safety.",
        features: ["Supply and Installation of PT's", "Preventive and Corrective Maintenance", "Breakdown Assistance", "Dielectric Oil Analysis"],
        keywords: ["Substation", "Medium Voltage", "Transformers", "Maintenance"],
        benefits: [
          { title: "Reliability", desc: "Partners with Leading Manufacturers" },
          { title: "Compliance", desc: "Strict adherence to all legal standards and current technical regulations." }
        ]
      },
      iluminacao: {
        seoTitle: "Festive and Technical Lighting",
        title: "Lighting",
        description: "Festive lighting, smart solutions and technical lighting.",
        fullText: "JF provides integral solutions for public, technical, and decorative lighting.",
        features: ["Public Lighting", "Sports Lighting", "Festive Lighting", "Smart Cities"],
        keywords: ["Lighting", "LED", "Efficiency", "Festive"],
        benefits: [
          { title: "Efficiency", desc: "Energy cost reduction up to 60%." }
        ]
      },
      instalacoes: {
        seoTitle: "Electrical Installations and Maintenance",
        title: "Electrical Installations",
        description: "Complete electrical solutions for buildings and preventive maintenance.",
        fullText: "We perform all types of low voltage electrical installations. With a focus on industrial installations, prepared and designed specifically for your company! Our team guarantees rigorous compliance with safety standards.",
        features: ["Electrical Panels", "Indoor and Outdoor Lighting", "Technical Rigor"],
        keywords: ["Installations", "Electrical Panels", "Lighting", "Maintenance"],
        benefits: [
          { title: "Safety", desc: "We guarantee strict compliance with standards." },
          { title: "Professional Experience", desc: "Knowledge and competence" }
        ]
      },
      projetos: {
        seoTitle: "Projects and Certifications",
        title: "Projects and Certifications",
        description: "Development of licensing and execution electrical projects for Low and Medium Voltage.",
        fullText: "JF performs every type of electrical project you need.",
        features: ["Medium Voltage Projects", "Low Voltage Projects", "Electrical Installation Projects", "Lighting Projects"],
        keywords: ["Projects", "Certifications", "Engineering", "DGEG"],
        benefits: [
          { title: "Legal Compliance", desc: "We ensure compliance with all standards and regulations." },
          { title: "Response Time", desc: "Agility in project development and licensing." }
        ]
      },
      outros: {
        seoTitle: "Other Specialized Services",
        title: "Other Services",
        description: "Complementary services for comprehensive project support.",
        fullText: "Complementary services for comprehensive project support.",
        features: [
          {
            title: "Civil construction in the electrical field",
            description: "To offer a turnkey service, we integrate the civil construction skills necessary for the execution of electrical infrastructures."
          },
          {
            title: "Electric mobility",
            description: "We install electric chargers for vehicles in homes, condominiums, companies, and commercial spaces."
          },
          {
            title: "Equipment rental",
            description: "We rent equipment necessary for works, generators, aerial platforms, crane trucks, and backhoes, if necessary with an operator, to facilitate the service."
          },
          {
            title: "Event support",
            description: "Permanent assistance teams."
          }
        ],
        keywords: ["Mobility", "Construction", "Events", "Equipment"],
        benefits: [
          { title: "Versatility", desc: "Multiple skills in a single partner." },
          { title: "Sustainability", desc: "Charging solutions for the future." },
          { title: "Professional Experience", desc: "Knowledge and competence" }
        ]
      }
    }
  },
  es: {
  "seo": {
      "home": {
        "title": "JF | Compañía Eléctrica del Algarve y Alentejo",
        "description": "Electricistas especializados en Instalaciones Eléctricas, Conexión de Red, Descargas y PLR's, Estaciones Transformadoras y Ciudades Inteligentes. Operamos en Faro, Portimão, Tavira, Beja y todo el Algarve."
      },
      "about": {
        "title": "Acerca de nosotros | Asistencia Permanente en el Algarve | JF",
        "description": "Descubra JF, empresa líder en electricidad y telecomunicaciones del Sur. Atendemos con rigor el Algarve (Faro, Albufeira) y el Alentejo."
      },
    "services": {
      "title": "Instalaciones Eléctricas y Servicios de Ingeniería | Algarve y Alentejo",
      "description": "Servicios completos en el sur del país: Proyectos Eléctricos, Descargas y PLR's, Estaciones Transformadoras, Instalaciones Eléctricas Industriales y Carga de Vehículos Eléctricos."
    },
    "lighting": {
      "title": "Iluminación | Festivo, Público y Decorativo | JF",
      "description": "Soluciones completas de iluminación en el Algarve. Iluminación Navideña, Iluminación Inteligente (Smart Cities) e Iluminación Técnica."
    },
    "partners": {
      "title": "Socios y Marcas | Schneider, E-Redes, Siemens",
      "description": "Trabajamos con primeras marcas y cumplimos con todos los estándares de E-Redes. Socios confiables para la construcción civil y obras públicas en el Sur."
    },
    "careers": {
      "title": "Reclutamiento eléctrico y de ingeniería | Empleo en Algarve",
      "description": "Únase a nuestro equipo. Vacantes para electricistas, ingenieros eléctricos y técnicos de mantenimiento en el Algarve y Alentejo."
    },
      "contact": {
        "title": "Contactos | Solicite un presupuesto a un electricista en Algarve y Alentejo",
        "description": "Contacte con JF para cotizaciones de instalaciones eléctricas, descargas y PLR's o mantenimiento. Servimos a Faro, Olhão, Tavira, Portimão y Beja."
      },
    "smartCities": {
      "title": "Ciudades inteligentes e IoT | Alumbrado público inteligente | JF",
      "description": "Transformamos ciudades del Algarve en Smart Cities. Soluciones IoT, telegestión del alumbrado público y eficiencia energética."
    },
      "faqs": {
        "title": "Preguntas frecuentes | JF",
        "description": "Respuestas a las preguntas más habituales sobre solicitudes de conexión a red (PLR), descargas, contadores e instalaciones eléctricas."
      }
  },
  "nav": {
    "home": "Comenzar",
    "about": "Sobre nosotros",
    "services": "Servicios",
    "partners": "Fogonadura",
    "careers": "Reclutamiento",
    "contact": "Contactos",
    "quote": "Solicitar una cotización",
    "toggle": "EN"
  },
  "footer": {
    "desc": "Soluciones integradas de electricidad, construcción y movilidad eléctrica. Promovemos su proyecto en el Algarve y Alentejo con calidad y seguridad desde 1986.",
    "navTitle": "Navegación",
    "contactTitle": "Contactos",
    "newsletterTitle": "Hoja informativa",
    "newsletterDesc": "Reciba las últimas noticias y actualizaciones.",
    "placeholder": "Tu correo electrónico",
    "subscribe": "Suscribir",
    "rights": "Reservados todos los derechos.",
    "designedBy": "Sitio web diseñado por",
    "privacy": "política de privacidad",
    "terms": "Términos y condiciones",
    "quality": "Política de Calidad",
    "complaintsBook": "Libro de reclamaciones",
    "faqTitle": "Preguntas frecuentes",
    "faqDesc": "Consulta nuestra área de soporte para aclarar dudas técnicas.",
    "faqButton": "Ver preguntas frecuentes"
  },
  "common": {
    "learnMore": "Descubra más",
    "seeMore": "Ver más",
    "requestService": "Solicitar Servicio",
    "address": "Ruta Nacional 125, Bias Norte, Moncarapacho",
    "city": "8700-066 Olhao"
  },
    "home": {
      "hero": {
        "title": "JF,|Infraestructuras Eléctricas,|Iluminación, PTs y PLRs",
        "subtitle": "Su compañía eléctrica de referencia en el Algarve y Alentejo. Excelencia técnica en Baixadas, PLR's e Infraestructura.",
        "ctaPrimary": "Contáctenos",
        "ctaSecondary": "Descubra los servicios"
      },
      "slogan": "¡La electricidad está con nosotros!",
      "servicesTitle": "Nuestras Áreas de Actividad",
      "whyUsTitle": "¿Por qué elegir JF?",
      "whyUsDesc": "Somos la elección correcta para cualquiera que busque asistencia permanente en el Algarve y Alentejo. Combinamos décadas de experiencia en Centros Transformadores y Telecomunicaciones con las últimas tecnologías.",
    "ctaButton": "Descubra nuestros servicios",
    "benefits": [
      {
        "id": 1,
        "text": "Experiencia desde 1986"
      },
      {
        "id": 2,
        "text": "Asistencia Permanente"
      },
      {
        "id": 3,
        "text": "Soluciones llave en mano"
      },
      {
        "id": 4,
        "text": "Enfoque en el Sur del País"
      }
    ],
    "lightUp": {
      "title": "¿Tienes un proyecto en Faro, Portimão o Beja?",
      "desc": "Nuestra luz está lista para guiar tu visión. Especialistas en instalaciones complejas y conexión a la red pública.",
      "cta": "Solicite una cotización gratuita"
    },
    "testimonialsTitle": "Lo que dicen nuestros clientes",
    "testimonials": [
      {
        "id": 1,
        "name": "Narciso Barradas",
        "text": "La recepción del cliente, el servicio y la resolución del problema reportado demuestra la profesionalidad de este equipo. Muchas gracias por su atención y dedicación."
      },
      {
        "id": 2,
        "name": "carolina morais",
        "text": "Realmente disfruté el servicio el lunes 13/05/2025, el caballero de recepción fue muy amable."
      },
      {
        "id": 3,
        "name": "Anaclara",
        "text": "Los empleados Lucas Penido y Maikel Denny son los mejores."
      }
    ],
    "leaveReview": "Deja tu reseña",
    "partnersTitle": "Socios y marcas de confianza",
    "serviceCards": {
      "plrs": {
        "title": "Solicitudes de conexión de red",
        "desc": "Ejecutamos su ramal de conexión a la red eléctrica, subterráneo o aéreo."
      },
      "infraestruturas": {
        "title": "Infraestructuras Eléctricas",
        "desc": "Ejecución y mantenimiento de redes eléctricas de Baja y Media Tensión y Centros de Transformación."
      },
      "postos-transformacao": {
        "title": "Estaciones de Transformación",
        "desc": "Montaje de Estaciones Transformadoras (PT), instalación de celdas de media tensión, transformadores y mantenimiento preventivo."
      },
      "iluminacao": {
        "title": "Iluminación",
        "desc": "Iluminación Festiva, Iluminación Inteligente y Soluciones Técnicas."
      },
      "instalacoes": {
        "title": "Instalaciones Eléctricas",
        "desc": "Instalaciones eléctricas industriales y residenciales, reformas, aumentos de potencia, certificaciones y mantenimientos técnicos."
      },
      "projetos": {
        "title": "Proyectos de Ingeniería",
        "desc": "Elaboración de proyectos eléctricos, fichas electrotécnicas y asesoría energética para licenciamiento y ejecución de obra."
      },
      "telecomunicacoes": {
        "title": "Telecomunicaciones",
        "desc": "Ejecución de infraestructuras de telecomunicaciones (ITED e ITUR), asegurando la conectividad y el cumplimiento técnico en lotificaciones y edificios."
      },
      "outros": {
        "title": "Otros servicios",
        "desc": "Soluciones de movilidad eléctrica (cargadores), construcción civil complementaria, inspección de obras y auditorías energéticas."
      }
    }
  },
  "services": {
    "heroTitle": "Nuestros Servicios",
    "heroDesc": "Solucciones integradas de ingeniería y electricidad para proyectos de cualquier tamaño. Desde el diseño hasta la ejecución garantizamos calidad y cumplimiento de plazos.",
    "featuresTitle": "LO QUE HACEMOS",
    "notFoundTitle": "¿No encuentras lo que estás buscando?",
    "notFoundDesc": "Brindamos servicios adaptados a sus necesidades. Ponte en contacto para discutir tu proyecto.",
    "notFoundCta": "Equipo de contacto",
    "categories": [
      {
        "id": "plrs",
        "title": "Solicitudes de conexión de red",
        "description": "JF es especialista en Solicitudes de Conexión a la Red (PLR) en todo el Algarve y Alentejo.",
        "details": ["Solicitudes de conexión a la red eléctrica", "Ejecución de Ramales eléctricos", "Aumentos de Potencia", "Certificación"]
      },
      {
        "id": "infraestruturas",
        "title": "Infraestructuras Eléctricas",
        "description": "Ejecución y mantenimiento de redes eléctricas de Baja y Media Tensión y Centros de Transformación.",
        "details": ["Baja Tensión", "Media Tensión", "Centros de Transformación", "Mantenimiento de Redes", "Pruebas Técnicas"]
      },
      {
        "id": "postos-transformacao",
        "title": "Estaciones de Transformación",
        "description": "Instalación, mantenimiento y operación de Estaciones Transformadoras (PTs) públicas y privadas. Soluciones de Media Tensión.",
        "details": [
          "montaje PT",
          "Celdas de Media Tensión",
          "Transformadores",
          "Limpieza y mantenimiento"
        ]
      },
      {
        "id": "iluminacao",
        "title": "Iluminación",
        "description": "Iluminación festiva, soluciones inteligentes e iluminación técnica.",
        "details": ["Alumbrado Público", "Iluminación deportiva", "Iluminación festiva", "Ciudades inteligentes"]
      },
      {
        "id": "instalacoes",
        "title": "Instalaciones Eléctricas",
        "description": "Instalaciones eléctricas de baja tensión para vivienda, comercio e industria. Garantizamos seguridad, eficiencia y cumplimiento de las normas técnicas.",
        "details": [
          "Paneles Eléctricos",
          "Renovaciones",
          "Iluminación LED",
          "Mantenimiento preventivo"
        ]
      },
      {
        "id": "projetos",
        "title": "Proyectos y Certificaciones",
        "description": "Cualquier gran obra comienza con un buen proyecto. Nuestro departamento de ingeniería elabora proyectos detallados, garantizando el equilibrio entre coste, eficiencia y seguridad.",
        "details": [
          "Proyectos de Media Tensión",
          "Proyectos de Baja Tensión",
          "Proyectos de Instalaciones Eléctricas",
          "Proyectos iluminotécnicos"
        ]
      },
      {
        "id": "telecomunicacoes",
        "title": "Telecomunicaciones",
        "description": "Vivimos en una era digital donde la conectividad es fundamental. JF diseña e instala infraestructuras de telecomunicaciones preparadas para el futuro.",
        "details": ["Proyectos ITED/ITUR", "Instalaciones de red", "Instalaciones de fibra", "Instalaciones de CCTV"]
      },
      {
        "id": "outros",
        "title": "Otros servicios",
        "description": "Servicios complementares de construcción civil, movilidad eléctrica e infraestructura urbana.",
        "details": [
          "Cargadores de vehículos eléctricos",
          "Apertura de zanja",
          "Reconstrucción de Pisos",
          "Supervisión de Construcción"
        ]
      }
    ]
  },
  "serviceDetails": {
    "plrs": {
      "seoTitle": "Solicitudes de conexión de red",
      "title": "Solicitudes de conexión de red",
      "description": "JF es especialista en Solicitudes de Conexión a la Red (PLR) en todo el Algarve y Alentejo.",
      "fullText": "JF es especialista en Solicitudes de Conexión a la Red (PLR) en todo el Algarve y Alentejo. Nos encargamos de todo el proceso ante E-Redes y ejecutamos toda la obra, para que tengas electricidad en tu inmueble lo antes posible.",
      "features": ["Solicitudes de conexión a la red eléctrica", "Ejecución de Ramales eléctricos", "Aumentos de Potencia", "Certificación"],
      "keywords": ["PLR", "E-Redes", "Ramales", "Conexiones", "Electricidad"],
      "benefits": [
        { "title": "Llave en mano", "desc": "Nos encargamos de todo el proceso y de toda la ejecución de la obra." }
      ]
    },
    "infraestruturas": {
      "seoTitle": "Infraestructuras Eléctricas - Baja y Media Tensión",
      "title": "Infraestructuras eléctricas",
      "description": "Ejecución y mantenimiento de redes eléctricas de Baja y Media Tensión y Centros de Transformación.",
      "fullText": "JF es especialista en la ejecución y mantenimiento de infraestructuras eléctricas de servicio público o privado. Realizamos todo tipo de instalaciones eléctricas de Baja y Media Tensión y Centros de Transformación, garantizando el estricto cumplimiento de todas las normas técnicas and de seguridad.",
      "features": ["Baja Tensión", "Media Tensión", "Centros de Transformación", "Redes de Alumbrado Público", "Pruebas y Certificaciones"],
      "keywords": ["Instalaciones Industriales", "Baja Tensión", "Cuadros Eléctricos", "Seguridad Eléctrica"],
      "benefits": [
        { "title": "Seguridad", "desc": "Cumplimiento riguroso de las normas técnicas." },
        { "title": "Experiencia profesional", "desc": "Conocimiento y competencia" }
      ]
    },
    "installations": {
      "seoTitle": "Instalaciones Eléctricas",
      "title": "Instalaciones eléctricas",
      "description": "Soluciones eléctricas seguras y certificadas para cualquier tipo de edificación.",
      "fullText": "Realizamos todo tipo de instalaciones eléctricas de baja tensión. ¡Con un enfoque en instalaciones industriales, preparadas y diseñadas específicamente para su empresa! Nuestro equipo garantiza el estricto cumplimiento de los estándares de seguridad.",
      "features": [
        "Cuadros eléctricos",
        "Iluminación interior y exterior",
        "Rigor técnico"
      ],
      "keywords": [
        "Electricista",
        "Instalación",
        "Mantenimiento",
        "Certificación",
        "Seguridad"
      ],
      "benefits": [
        {
          "title": "Seguridad",
          "desc": "Garantizamos el estricto cumplimiento de los estándares."
        },
        {
          "title": "Experiencia profesional",
          "desc": "Conocimiento y competencia"
        }
      ]
    },
    "telecomunicacoes": {
      "seoTitle": "Telecomunicaciones ITED e ITUR",
      "title": "Telecomunicaciones",
      "description": "JF diseña e instala infraestructuras de telecomunicaciones en edificios (ITED) y en urbanizaciones y conjuntos de edificios (ITUR).",
      "fullText": "JF asegura la ejecución de infraestructuras de telecomunicaciones en edificios (ITED) y en urbanizaciones (ITUR).",
      "features": ["Proyectos ITED/ITUR", "Instalaciones de red", "Instalaciones de fibra", "Instalaciones de CCTV"],
      "keywords": ["ITED", "ITUR", "Fibra Óptica", "CCTV", "Telecom"],
      "benefits": [
        { "title": "Experiencia profesional", "desc": "Conocimiento y competencia" }
      ]
    },
    "postos-transformacao": {
      "seoTitle": "Estaciones de Transformación y Media Tensión",
      "title": "Subestaciones (PT)",
      "description": "Suministro y montaje de Centros de Transformación para industrias y grandes superficies.",
      "fullText": "Para industrias, hoteles, explotaciones agrícolas o grandes superficies comerciales, la conexión en Baja Tensión puede no ser suficiente. JF se especializa en el suministro y montaje de Centros de Transformación (PT). Ofrecemos mantenimiento y asistencia, garantizando una mayor longevidad de los equipos y la seguridad de las instalaciones.",
      "features": [
        "Suministro e Instalación de PT",
        "Mantenimiento Preventivo y Correctivo",
        "Asistencia en averías",
        "Análisis de Aceite Dieléctrico"
      ],
      "keywords": [
        "Estación de Transformación",
        "Media tensión",
        "Transformador",
        "Mantenimiento"
      ],
      "benefits": [
        {
          "title": "Fiabilidad",
          "desc": "Socios de los Principales Fabricantes"
        },
        {
          "title": "Conformidad",
          "desc": "Cumplimiento riguroso de todas las normas legales y reglamentos técnicos vigentes."
        }
      ]
    },
    "projetos": {
      "seoTitle": "Proyectos y Certificaciones",
      "title": "Proyectos y Certificaciones",
      "description": "Desarrollo de proyectos eléctricos de licencias y ejecución para Baja y Media Tensión.",
      "fullText": "JF realiza todo tipo de proyecto eléctrico que necesite.",
      "features": [
        "Proyectos de Media Tensión",
        "Proyectos de Baja Tensión",
        "Proyectos de Instalaciones Eléctricas",
        "Proyectos iluminotécnicos"
      ],
      "keywords": [
        "Proyectos",
        "Certificaciones",
        "Ingeniería",
        "Licencias"
      ],
      "benefits": [
        {
          "title": "Cumplimiento Legal",
          "desc": "Garantizamos el cumplimiento de todas las normas y reglamentos."
        },
        {
          "title": "Plazo de Respuesta",
          "desc": "Agilidad en el desarrollo y licenciamiento del proyecto."
        }
      ]
    },
    "outros": {
      "seoTitle": "Servicios Complementarios de Construcción",
      "title": "Otros servicios",
      "description": "Soluciones integradas de construcción y movilidad eléctrica.",
      "fullText": "Servicios complementarios para el apoyo integral de su proyecto.",
      "features": [
        {
          "title": "Construcción civil en el ramo de la electricidad",
          "description": "Para ofrecer un servicio llave en mano, integramos las habilidades de construcción civil necesarias para la ejecución de infraestructuras eléctricas."
        },
        {
          "title": "Movilidad eléctrica",
          "description": "Instalamos cargadores eléctricos para vehículos en hogares, condominios, empresas y espacios comerciales."
        },
        {
          "title": "Alquiler de equipos",
          "description": "Alquilamos equipos necesarios para obras, generadores, plataformas elevadoras, camiones grúa y retroexcavadoras, si es necesario con un operador, para facilitar el servicio."
        },
        {
          "title": "Apoyo a eventos",
          "description": "Equipos de asistencia permanente."
        }
      ],
      "keywords": [
        "Construcción Civil",
        "Eventos",
        "Movilidad eléctrica",
        "Cargadores",
        "Equipos"
      ],
      "benefits": [
        {
          "title": "Integrado",
          "desc": "Un único interlocutor para todo el proyecto."
        },
        {
          "title": "Sostenible",
          "desc": "Apoyando la transición a la movilidad eléctrica."
        },
        {
          "title": "Experiencia profesional",
          "desc": "Conocimiento y competencia"
        }
      ]
    }
  },
    "lighting": {
      "heroTitle": "Iluminación",
      "heroDesc": "Soluciones de iluminación pública, decorativa y festiva. Eficiencia energética y mantenimiento técnico especializado.",
      "introTitle": "Soluciones de iluminación 360º",
      "introDesc": "Soluciones integrales de iluminación pública, técnica y decorativa. Realizamos estudios luminotécnicos, instalación y mantenimiento de sistemas de iluminación con un enfoque en la eficiencia energética.",
    "stat1": "Proyectos festivos",
    "stat2": "Puntos de luz LED",
    "types": [
      {
        "title": "Alumbrado Público",
        "image": "https://drive.google.com/thumbnail?id=1MFt1qWei6hz80tPGkX91j-g86uHVA7vi&sz=w1000",
        "desc": "Garantizamos la seguridad y el bienestar de las poblaciones a través de redes de alumbrado público eficientes y confiables. Instalamos y mantenemos refuerzos viarios, proyectores y columnas, asegurando una correcta iluminación en vías, calles y espacios públicos, siempre enfocados en reducir la huella ecológica y los costos energéticos.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": ["Zonas Viarias", "Zonas peatonales", "Urbanizaciones/ Loteamientos", "Aparcamientos", "Zonas Portuarias"]
      },
      {
        "title": "Iluminación deportiva",
        "image": "https://drive.google.com/thumbnail?id=15ZTaJZVipA-lCRWq5r5I0oelf5cJDUTF&sz=w1000",
        "desc": "En el deporte, la luz es fundamental para el rendimiento de los atletas y la experiencia de los espectadores. Diseñamos e instalamos sistemas de iluminación que cumplen estrictamente con los niveles de lux exigidos por las federaciones y estándares de radiodifusión televisiva. Garantizamos uniformidad en el campo, control de deslumbramiento y sistemas de iluminación instantánea para pabellones y estadios.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Campos y estadios de fútbol",
          "Pabellones deportivos",
          "Pistas de Tenis y Padel",
          "Piscinas Municipales"
        ]
      },
      {
        "title": "Iluminación inteligente",
        "image": "https://drive.google.com/thumbnail?id=1KOWLU95F6pomAZjmTO0WUY_UbxGsrw-s&sz=w1000",
        "desc": "Más que iluminar carreteras, creamos ciudades inteligentes. Nuestro enfoque en materia de alumbrado público se centra en la eficiencia energética y la seguridad. Sustituimos las luminarias convencionales por tecnología LED de altas prestaciones, integradas con sistemas de gestión remota que permiten el control remoto de la intensidad lumínica, la detección de averías en tiempo real y la reducción de la factura energética municipal hasta en un 60%. Destacamos la instalación de carriles inteligentes en Portimão, que aumentan la seguridad de los peatones a través de la señalización luminosa activa.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": ["Zonas Viarias", "Zonas peatonales", "Aparcamientos", "Zonas Portuarias"]
      },
      {
        "title": "Iluminación Técnica",
        "image": "https://drive.google.com/thumbnail?id=1lwzRh0LtxEQH2ypr8C1FBzYpO-PW82Yr&sz=w1000",
        "desc": "La Iluminación Técnica pretende realzar el patrimonio construido por la noche, respetando su historia y diseño original. Utilizamos proyectores de precisión, tiras LED y sistemas RGBW para crear escenas dinámicas o estáticas que realzan texturas y volúmenes. Es la solución ideal para dar nueva vida a edificios, hoteles o monumentos emblemáticos, reforzando la identidad visual del lugar.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Monumentos e Iglesias",
          "Hoteles y Resorts",
          "Edificios corporativos",
          "Puentes y Estructuras"
        ]
      },
      {
        "title": "Iluminación festiva",
        "image": "https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000",
        "desc": "La Iluminación Festiva es el arte de crear emociones a través de la luz. Desarrollamos proyectos llave en mano para ocasiones especiales, transformando el entorno urbano y comercial. Desde el diseño creativo de los motivos (2D y 3D) hasta la instalación y desmontaje seguro, garantizamos un espectáculo visual que atrae visitantes, impulsa el comercio local y celebra la tradición con tecnología LED de bajo consumo.",
        "applicationsTitle": "Donde aplicamos:",
        "applications": [
          "Centros y Ciudades Históricas",
          "Centros Comerciales",
          "Plazas Públicas y Jardines",
          "Fachadas de edificios"
        ]
      }
    ],
    "ctaTitle": "¿Iluminamos tu proyecto?",
    "ctaDesc": "Ya sea decorando tu ciudad para Navidad o renovando el alumbrado público.",
    "ctaButton": "Solicite una propuesta de iluminación"
  },
    "partners": {
      "heroTitle": "Socios de confianza",
      "heroDesc": "La excelencia de JF se basa en relaciones sólidas con líderes globales de la industria y asociaciones estratégicas exclusivas.",
    "suppliersTitle": "Proveedores y marcas certificados",
    "suppliersDesc": "Sólo trabajamos con materiales homologados y equipos de primera línea para garantizar la máxima seguridad y durabilidad de nuestras instalaciones eléctricas.",
    "eredesHighlight": {
      "title": "INTERCONEXIÓN CON LA RED DE DISTRIBUCIÓN",
      "desc": "JF es socio certificado y contratista calificado de E-Redes.",
      "badge": "Normas técnicas cumplidas",
      "licenseLinkText": "Consulte todas nuestras clases aquí"
    },
    "brandsList": [
      {
        "name": "Electricidad Schneider",
        "desc": "Líder mundial en gestión energética y automatización."
      },
      {
        "name": "siemens",
        "desc": "Tecnología de vanguardia para infraestructuras inteligentes."
      },
      {
        "name": "EFACEC",
        "desc": "Soluciones portuguesas de ingeniería y movilidad."
      },
      {
        "name": "Legrand",
        "desc": "Especialistas en infraestructuras eléctricas y digitales."
      },
      {
        "name": "Hager",
        "desc": "Sistemas de instalación y distribución de energía."
      }
    ],
      "exclusiveTitle": "Entidades Públicas Socias",
      "exclusiveDesc": "Municipios y organismos estatales que confían en JF para alumbrado público e infraestructura crítica.",
    "exclusivePartners": [
      {
        "name": "Municipio de Olhao",
        "type": "autoridad local",
        "desc": "Ejecución de infraestructuras eléctricas en nuevos fraccionamientos y zonas industriales."
      },
      {
        "name": "Municipio de Faro",
        "type": "autoridad local",
        "desc": "Mantenimiento del alumbrado público y edificios municipales del municipio."
      },
      {
        "name": "Municipio de Loulé",
        "type": "autoridad local",
        "desc": "Desarrollo y mantenimiento de redes eléctricas y alumbrado público."
      }
    ],
    "ctaTitle": "Conviértete en socio",
    "ctaDesc": "Buscamos constantemente ampliar nuestra red con empresas que compartan nuestros valores de rigor y calidad.",
    "ctaButton": "Proponer asociación"
  },
  "contact": {
    "heroTitle": "Contáctenos",
    "heroDesc": "Estamos disponibles para resolver dudas y presentar propuestas.",
    "infoTitle": "Información",
    "labels": {
      "address": "Familiar",
      "phone": "Teléfono",
      "callCost": "(Llamada a red fija nacional)",
      "callCostMobile": "(Llamada a red móvil nacional)",
      "email": "Correo electrónico",
      "schedule": "Tiempo",
      "weekdays": "Lunes a viernes: 09:00 - 12:30 | 14:00 - 18:00",
      "weekend": "Sábados, domingos y festivos: cerrado",
      "whatsappBox": {
        "title": "Solicite una cotización vía WhatsApp",
        "button": "Enviar mensaje"
      }
    },
    "formTitle": "Envíanos un mensaje",
    "form": {
      "name": "Nombre completo",
      "email": "Correo electrónico",
      "phone": "Teléfono",
      "subject": "Sujeto",
      "subjectPlaceholder": "Seleccione un tema...",
      "optQuote": "Solicitar una cotización",
      "optInfo": "Información general",
      "optRecruitment": "Reclutamiento",
      "optPartnership": "Proponer asociación",
      "optOther": "Otros",
      "interest": "Área de interés",
      "interestPlaceholder": "Selecciona la zona...",
      "jobPosition": "Posición para postular",
      "cv": "Currículum Vitae (CV)",
      "presentation": "Presentación de la empresa (PDF)",
      "companyName": "nombre de empresa",
      "companyAddress": "Dirección de la empresa",
      "companyType": "Tipo de empresa",
      "companyContact": "Contacto de la empresa",
      "proposalMessage": "Describe tu idea/propuesta",
      "uploadFile": "Adjuntar PDF",
      "filePlaceholder": "No hay archivos seleccionados",
      "fileLabel": "Adjuntar proyecto/plan (PDF)",
      "fileHint": "PDF (Máx. 5MB)",
      "interestHint": "(Seleccione varias opciones)",
      "successMsg": "¡Gracias por tu contacto! Estaremos en contacto pronto.",
      "fileError": "Seleccione solo archivos PDF.",
      "optsInterest": {
        "plrs": "Solicitudes de conexión de red (PLR)",
        "installations": "Infraestructuras Eléctricas",
        "telecommunications": "Telecomunicaciones",
        "substations": "Estaciones de Transformación",
        "projects": "Proyectos de Electricidad",
        "lighting": "Iluminación",
        "others": "Otros servicios"
      },
      "message": "Mensaje",
      "submit": "Enviar solicitud"
    },
    "locationTitle": "Ubicación"
  },
  "faqs": {
    "heroTitle": "Preguntas frecuentes",
    "heroDesc": "Aclare sus dudas sobre nuestros servicios y procedimientos.",
    "sectionTitle": "PREGUNTAS FRECUENTES",
    "list": [
      {
        "q": "NECESITO PONER ELECTRICIDAD EN UN LUGAR. ¿CUÁLES SON LOS PASOS A SEGUIR?",
        "a": "Para poner electricidad en una casa, almacén o terreno es necesario seguir algunos pasos de forma organizada y segura. En JF nos encargamos de todo el proceso, solo necesitamos algunos datos/documentos como:\n\n- CPF, para personas físicas o certificado permanente, en el caso de empresa; \n- Dirección de la instalación, indicando las coordenadas geográficas; \n- Folleto de construcción; \n- Contactos telefónicos y de correo electrónico."
      },
      {
        "q": "¿QUÉ NECESITO PARA REALIZAR UNA SOLICITUD DE CONEXIÓN A RED ELÉCTRICA (PLR)?",
        "a": "En JF nos encargamos de todo el proceso, y te ofrecemos un presupuesto totalmente gratuito, sólo necesitas:\n\n- Proporcionar toda la documentación solicitada; \n- Indicar el tipo deseado de conexión de red; \n- Indicar la potencia deseada; \n\nDespués de adjudicar nuestro presupuesto, también necesitarás:\n- Pago de Tasas a E-Redes (Montos variables)."
      },
      {
        "q": "¿QUÉ TIPOS DE CONEXIÓN DE RED HAY?",
        "a": "- Conexión a la red de una vivienda unifamiliar. \n\n- Conexión de red para una empresa/negocio. \n\n- Conexión a la red de una instalación colectiva (por ejemplo: edificios). \n\n- Desplazamiento de red: Para cambiar la ubicación de elementos de red existentes (postes, líneas, etc.). \n\n- Obras: Suministro temporal de energía eléctrica a un local, con o sin necesidad de una conexión permanente posterior. \n\n- Eventos: Para suministrar energía eléctrica a un evento específico y sólo durante el periodo estrictamente necesario para que se lleve a cabo el evento. Estas conexiones suelen estar destinadas a circos, ferias, fiestas, espectáculos callejeros, entre otros."
      },
      {
        "q": "NECESITO ELECTRICIDAD EN UN LUGAR DONDE YA HAY UN CONTADOR. ¿CÓMO PROCEDER?",
        "a": "Si el local ya cuenta con un contador instalado, o si ya tenías un contrato de luz, sólo necesitas contactar con una empresa de servicios públicos para firmar un contrato de suministro de luz."
      },
      {
        "q": "¿QUÉ ES EL CPE?",
        "a": "El CPE – Código de Punto de Entrega – es el número que identifica tu instalación eléctrica."
      },
      {
        "q": "¿QUÉ ES EL PIN?",
        "a": "El NIP – Building Identification Number – es el número que identifica la instalación colectiva y con el que es posible consultar todos los CPE."
      },
      {
        "q": "QUIERO AUMENTAR LA POTENCIA DE MI INSTALACIÓN. ¿QUÉ TENGO QUE HACER?",
        "a": "Si la potencia que desea contratar es inferior a la potencia máxima permitida de la instalación, el Cliente deberá solicitar a su Proveedor un aumento de la potencia contratada. \n\nEn situaciones en las que la potencia que se desee contratar sea superior a la potencia máxima permitida de la instalación, el Cliente podrá solicitar presupuesto de aumento de potencia. \n\nEl Cliente deberá asegurarse de que la instalación esté certificada para el nuevo valor de potencia. \n\nSi es necesario certificar la instalación, el Cliente deberá contactar con una entidad de inspección de instalaciones eléctricas reconocida por la Dirección General de Energía y Geología (DGEG)."
      },
      {
        "q": "¿ES POSIBLE CAMBIAR LA UBICACIÓN DE MI CONTADOR?",
        "a": "Sí, mediante solicitud de cambio de ubicación del medidor, o cambio de punto de entrega."
      },
      {
        "q": "ESTOY SIN ENERGÍA, ¿A QUIÉN DEBO CONTACTAR?",
        "a": "Deberá contactar con E-Redes, a través de los medios disponibles:\n\nTeléfono: 800 506 506\nWhatsApp: 913 846 398\nSitio web: https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "RECIBÍ UNA COMUNICACIÓN SOBRE EL REEMPLAZO DE MI MEDIDOR. ¿QUÉ TENGO QUE HACER?",
        "a": "Deberás programar el día y horario que más te convenga contactando con E-Redes:\n\nTeléfono: 218 100 100\nWhatsApp: 913 846 398\nSitio web: https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "¿QUÉ ES NECESARIO PARA TENER UN CARGADOR DE VEHÍCULO ELÉCTRICO?",
        "a": "Inicialmente deberá verificar la Potencia Eléctrica Disponible en el lugar, elegir el Tipo de Cargador deseado y comunicarse con nuestro departamento de presupuestos."
      }
    ]
  },
    "careers": {
      "heroTitle": "Reclutamiento",
      "heroDesc": "Únete a un equipo con casi 40 años de historia. Construimos el futuro en el Algarve y el Alentejo con rigor e innovación.",
      "introTitle": "¿Por qué trabajar con nosotros?",
      "introDesc": "En JF creemos que las personas son nuestra mayor energía. Ofrecemos estabilidad, educación continua y la oportunidad de trabajar en proyectos desafiantes de electricidad, construcción y movilidad sostenible.",
    "benefits": [
      "Formación Continua y Certificación",
      "Seguro médico",
      "Progresión profesional",
      "Equipo unido y dinámico"
    ],
    "openingsTitle": "Oportunidades abiertas",
    "reqTitle": "Requisitos:",
    "otherReq": "+ otros requisitos",
    "applyBtn": "Aplicar ahora",
    "jobs": [
      {
        "id": 1,
        "title": "Calceteiro (H/F)",
        "location": "Algarve / Alentejo",
        "type": "Tiempo completo",
        "description": "Responsable de la ejecución y reparación de pavimentos de aceras portuguesas, colocación de bordillos y otras obras de acabado urbano en la vía pública.",
        "requirements": [
          "Experiencia comprobada en el puesto.",
          "Licencia de conducir (preferible)",
          "Disponibilidad inmediata",
          "Sentido de responsabilidad"
        ],
        "emailSubject": "Aplicación: Calceteiro"
      },
      {
        "id": 2,
        "title": "Operador de almacén (H/M)",
        "location": "Sede (Faro/Olhão)",
        "type": "Tiempo parcial",
        "description": "Responsable de recibir, verificar y organizar materiales eléctricos y de construcción en obra, asegurando la eficiencia del stock.",
        "requirements": [
          "Experiencia en almacén (preferiblemente)",
          "Conocimientos de informática",
          "Carnet de conducir",
          "Capacidad organizativa"
        ],
        "emailSubject": "Aplicación: Operador de almacén"
      },
      {
        "id": 3,
        "title": "Conductor de grúa de servicio pesado (M/F)",
        "location": "Olhao",
        "type": "Tiempo completo",
        "description": "Funciones principales: Conducir camión con grúa, transportar materiales, levantar postes y mover bobinas y cargas suspendidas. Ofrecemos: Salario atractivo compatible con experiencia, bonificación anual y formación continua.",
        "requirements": [
          "Letra de categoría C (obligatoria)",
          "Experiencia en un camión con grúa.",
          "Perfil responsable y polivalente",
          "Experiencia con máquinas (valorable)",
          "CAM de Mercancías Pesadas (valorado)",
          "Preferencia por personas de la región con buen conocimiento del área."
        ],
        "emailSubject": "Aplicación: Conductor de grúa de servicio pesado"
      },
      {
        "id": 4,
        "title": "Peón de Construcción (M/F)",
        "location": "Algarve / Alentejo",
        "type": "Tiempo completo",
        "description": "Peón para construcción de infraestructuras con carnet de conducir.",
        "requirements": [
          "Carnet de conducir (obligatorio)",
          "Disponibilidad inmediata",
          "Sentido de la responsabilidad"
        ],
        "emailSubject": "Candidatura: Peón de Construcción"
      },
      {
        "id": 5,
        "title": "Candidatura Espontánea",
        "location": "Algarve / Alentejo",
        "type": "Todo",
        "description": "Envíanos tu candidatura y nos pondremos en contacto contigo en cuanto surja una oportunidad adecuada.",
        "requirements": [
          "Proactividad",
          "Ganas de trabajar"
        ],
        "emailSubject": "Candidatura Espontánea"
      }
    ],
    "spontaneousTitle": "¿No encontraste la vacante ideal?",
    "spontaneousDesc": "Siempre estamos buscando nuevos talentos en el Algarve. Envíanos tu CV a nuestra base de datos.",
    "spontaneousBtn": "Enviar Candidatura",
    "spontaneousDisclaimer": "Al enviar tu CV aceptas nuestra política de tratamiento de datos con fines de selección."
  },
    "qualityPage": {
      "title": "Política de Calidad",
      "visionTitle": "Visión",
      "visionDesc": "JF pretende ser una empresa de referencia y un socio estratégico en la construcción de infraestructuras en la región del Algarve, siguiendo la innovación y siendo un ejemplo en su área de negocio.",
    "missionTitle": "Misión",
    "missionDesc": "Proporcionar servicios eficaces y rápidos en el área de construcción y mantenimiento de infraestructuras en el sur de Portugal.",
    "valuesTitle": "Valores",
    "values": [
      {
        "title": "Integridad",
        "desc": "La seriedad y la honestidad predominan en las decisiones y en la vida cotidiana."
      },
      {
        "title": "Responsabilidad",
        "desc": "Compromiso de asumir los deberes y funciones asignadas, así como velar por el cumplimiento del contrato/servicio acordado."
      },
      {
        "title": "Efectividad del servicio",
        "desc": "Hazlo bien la primera vez."
      },
      {
        "title": "Orientación al cliente",
        "desc": "Trabajar de acuerdo con las expectativas y requisitos del cliente."
      }
    ],
    "strategyTitle": "Lineamientos Estratégicos",
    "strategies": [
      "Mejorar continuamente la eficacia del SGC y de nuestros servicios para satisfacer a los clientes y empleados, además de contribuir al desarrollo de la región del Algarve a la que servimos.",
      "Formar, informar y desarrollar todos los recursos humanos, contribuyendo al desarrollo de sus capacidades.",
      "Promover las condiciones de seguridad y salud con el fin de armonizar el trabajo y proporcionar bienestar a todos los empleados.",
      "Velar por el cumplimiento de todas las normas, leyes y reglamentos vigentes y especificaciones técnicas requeridas por nuestros clientes."
    ],
    "contactInfo": "Estamos disponibles para aclarar cualquier duda adicional. (qualidade@joaquimfernandes.pt)",
    "legalInfo": {
      "title": "Ley 144/2015 de 8 de septiembre",
      "intro": "En caso de controversia, el consumidor puede recurrir a una Entidad Alternativa de Resolución de Controversias del Consumidor:",
      "entityName": "Tribunal de Arbitraje del Centro de Arbitraje del Consumidor del Algarve",
      "address": "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3er piso, habitación 26 8000 Faro, Portugal",
      "phone": "Teléfono: 289 823 135",
      "email": "Correo electrónico: apoio@consumidoronline.pt",
      "portal": "Más información en el Portal del Consumidor www.consumidoronline.pt"
    }
  },
    "privacyPage": {
      "title": "política de privacidad",
      "intro": "JF respeta su privacidad y se compromete a proteger sus datos personales. Esta política describe cómo recopilamos, usamos y protegemos su información de acuerdo con el Reglamento General de Datos (RGPD).",
      "sections": [
        {
          "title": "1. Responsable del Tratamiento",
          "content": "La entidad responsable del tratamiento de sus datos personales es JF, con sede en Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. Para cualquier consulta relacionada con la protección de datos, puede contactarnos por correo electrónico a mail@joaquimfernandes.pt."
        },
      {
        "title": "2. Datos recopilados",
        "content": "Recopilamos datos que usted nos proporciona voluntariamente a través de nuestros formularios de contacto, solicitudes de cotización y solicitudes de empleo. Estos podrán incluir: Nombre, Correo Electrónico, Teléfono, Dirección y Curriculum Vitae (en el caso de contratación). También recopilamos datos técnicos de navegación (Cookies) de forma anónima para mejorar el rendimiento del sitio."
      },
      {
        "title": "3. Finalidad del Tratamiento",
        "content": "Sus datos son tratados con las siguientes finalidades:\n- Gestión de solicitudes de cotización y contacto comercial; \n- Ejecución de contratos de prestación de servicios; \n- Procesos de reclutamiento y selección; \n- Cumplimiento de obligaciones legales (facturación)."
      },
      {
        "title": "4. Intercambio de datos",
        "content": "No vendemos sus datos a terceros. Sus datos solo podrán compartirse con subcontratistas estrictamente necesarios para proporcionar el servicio (por ejemplo, contabilidad, TI), garantizando que también cumplan con el RGPD, o con autoridades públicas cuando así lo exija la ley."
      },
      {
        "title": "5. Derechos del Titular",
        "content": "Según el RGPD, tienes derecho a acceder, rectificar, limitar, oponerte al tratamiento y solicitar la supresión de tus datos personales (derecho al olvido). Para ejercer estos derechos, simplemente envíe una solicitud por escrito a nuestra dirección de correo electrónico general."
      },
      {
        "title": "6. Seguridad y retención",
        "content": "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos. Los datos solo se conservan durante el período necesario para el fin para el que fueron recopilados o según lo exija la ley (por ejemplo, 10 años para los datos de facturación)."
      }
    ],
    "lastUpdated": "Última actualización: octubre de 2024"
  },
    "termsPage": {
      "title": "Términos y condiciones",
      "intro": "Bienvenido al sitio web de JF. Al acceder y utilizar este sitio web, usted acepta los siguientes términos y condiciones de uso.",
      "sections": [
        {
          "title": "1. Propiedad intelectual",
          "content": "Todo el contenido de este sitio web (textos, imágenes, logotipos, vídeos) es propiedad exclusiva de JF o sus socios, y está protegido por la legislación de Copyright y Propiedad Industrial. Queda prohibida la copia, reproducción o distribución sin autorización previa."
        },
      {
        "title": "2. Uso del Sitio",
        "content": "El usuario se compromete a utilizar el sitio web con fines lícitos y a no realizar actos que puedan dañar, inutilizar o sobrecargar el sitio web, o impedir su normal utilización por otros usuarios."
      },
        {
          "title": "3. Limitación de responsabilidad",
          "content": "JF se esfuerza por mantener la información del sitio web actualizada y precisa. Sin embargo, no garantizamos la ausencia de errores u omisiones y no somos responsables de los daños resultantes del uso de la información aquí contenida. Las propuestas comerciales y presupuestos siempre requieren de la confirmación oficial por parte de la empresa."
        },
        {
          "title": "4. Enlaces externos",
          "content": "Este sitio web puede contener enlaces a sitios web de terceros (por ejemplo, socios, redes sociales). JF no controla ni es responsable del contenido o las políticas de privacidad de estos sitios web externos."
        },
        {
          "title": "5. Resolución alternativa de disputas (ADR)",
          "content": "En caso de controversia en materia de consumo, el consumidor podrá recurrir a una Entidad de Resolución Alternativa de Controversias competente. JF es miembro de centros de arbitraje de la región del Algarve. Más información en el Portal del Consumidor (www.consumidoronline.pt)."
        },
      {
        "title": "6. Ley aplicable y lugar de celebración",
        "content": "Estos términos se rigen por la ley portuguesa. Para cualquier controversia que surja de la interpretación o aplicación de los presentes términos, será competente el Tribunal de Faro, con renuncia expresa a cualquier otro."
      }
    ]
  },
  "about": {
    "heroTitle": "Nuestra Historia",
    "heroDesc": "Casi cuatro décadas de ingeniería, construcción e innovación. Descubra el viaje que nos trajo hasta aquí.",
    "timeline": [
      {
        "year": "1986",
        "title": "Fundación de la Empresa",
        "description": "JF inicia su actividad como una pequeña empresa familiar centrada en las instalaciones eléctricas residenciales en la zona de Faro."
      },
      {
        "year": "1998",
        "title": "Creación de la 1ª Web",
        "description": "Lanzamiento de nuestra primera presencia digital, siguiendo la evolución tecnológica."
      },
      {
        "year": "2000",
        "title": "Jefe de Consorcio",
        "description": "Reconocidos como Jefe de Consorcio en Algarve para EDP (actual E-REDES)."
      },
      {
        "year": "2001",
        "title": "Certificación de Calidad",
        "description": "Reconocidos con la Certificación de Calidad, reforzando nuestro compromiso con el rigor."
      },
      {
        "year": "2008",
        "title": "1º PME Líder",
        "description": "Distinción pública de nuestra solidez financiera y desempeño económico."
      },
      {
        "year": "2011",
        "title": "Nueva Gerencia",
        "description": "Inicio de un nuevo ciclo estratégico con la entrada de un nuevo liderazgo."
      },
      {
        "year": "2017",
        "title": "Renovación de Imagen",
        "description": "Modernización de la identidad visual de la empresa, reflejando la innovación constante."
      },
      {
        "year": "2018",
        "title": "1º PME Excelencia",
        "description": "Sello de reputación que premia los mejores desempeños económico-financieros."
      },
      {
        "year": "2021",
        "title": "Adquisición de la Empresa",
        "description": "Adquisición de JF por la gerencia actual, consolidando el futuro de la empresa."
      },
      {
        "year": "2026",
        "title": "Sello Compromiso de Pago Puntual.",
        "description": "Reconocimiento del compromiso de la empresa con la puntualidad en los pagos a sus proveedores."
      }
    ],
    "awards": {
      "title": "Reconocimientos, Certificaciones y Premios",
      "subtitle": "La distinción pública de nuestra solidez financiera y competencia técnica en el sector.",
      "list": [
        {
          "name": "PME Líder",
          "desc": "Situación de referencia que distingue el perfil de mérito y riesgo de las Pymes nacionales. Distinguido 3 veces (la última en 2025)."
        },
        {
          "name": "Excelencia PME",
          "desc": "Sello de reputación que premia el mejor desempeño económico y financiero. Distinguido 3 veces (la última en 2025)."
        },
        {
          "name": "Contratista calificado E-Redes",
          "desc": "Reconocimiento técnico por parte de la distribuidora por la realización de trabajos en la red eléctrica."
        },
        {
          "name": "Permiso de Construcción No. 8887",
          "desc": "Titulación oficial IMPIC para realizar obras públicas y privadas de alto nivel."
        },
        {
          "name": "Certificado de conformidad, ISO 9001:2015",
          "desc": "Sistema de Gestión de Calidad Certificado, asegurando el rigor en todos los procesos."
        },
        {
          "name": "Compromiso de Pago Puntual",
          "desc": "Iniciativa que distingue a las empresas que cumplen con los plazos de pago a proveedores y promueven la ética empresarial."
        }
      ]
    },
    "teamSection": {
      "title": "¿Quiénes somos?",
      "subtitle": "La fuerza de nuestro equipo",
      "description": "Más que una empresa, somos un colectivo de profesionales apasionados por lo que hacen. Con una estructura sólida y multidisciplinar, nuestro equipo combina la experiencia de ingenieros senior con la energía de técnicos especializados.",
      "stat1": "+50 Colaboradores",
      "stat2": "Ingeniería y Civil",
      "stat3": "Técnicos Certificados",
      "highlight": "Invertimos continuamente en la formación y seguridad de nuestro personal, asegurando que cada proyecto se ejecute con el máximo rigor."
    },
    "closingTitle": "¿Listo para ser parte del futuro?",
    "closingDesc": "Nuestra historia continúa escribiéndose todos los días, en cada proyecto que entregamos.",
    "closingCta": "Trabaja con nosotros"
  }
},
  fr: {
  "seo": {
      "home": {
        "title": "JF | Compagnie d'électricité de l'Algarve et de l'Alentejo",
        "description": "Électriciens spécialisés dans les installations électriques, la connexion réseau, les téléchargements et PLR, les postes de transformation et les villes intelligentes. Nous opérons à Faro, Portimão, Tavira, Beja et dans tout l’Algarve."
      },
      "about": {
        "title": "À propos de nous | Assistance Permanente en Algarve | JF",
        "description": "Découvrez JF, entreprise leader de l'électricité et des télécommunications dans le Sud. Nous servons l'Algarve (Faro, Albufeira) et l'Alentejo avec rigueur."
      },
    "services": {
      "title": "Installations électriques et services d'ingénierie | Algarve et Alentejo",
      "description": "Services complets dans le sud du pays : Projets électriques, téléchargements et PLR, postes de transformation, installations électriques industrielles et recharge de véhicules électriques."
    },
    "lighting": {
      "title": "Éclairage | Festif, Public et Décoratif | JF",
      "description": "Solutions d'éclairage complètes en Algarve. Éclairage de Noël, éclairage intelligent (Smart Cities) et éclairage technique."
    },
    "partners": {
      "title": "Partenaires et marques | Schneider, E-Redes, Siemens",
      "description": "Nous travaillons avec les plus grandes marques et respectons toutes les normes E-Redes. Des partenaires fiables pour le génie civil et les travaux publics dans le Sud."
    },
    "careers": {
      "title": "Recrutement en électricité et en ingénierie | Emploi Algarve",
      "description": "Rejoignez notre équipe. Postes vacants pour électriciens, ingénieurs électriciens et techniciens de maintenance en Algarve et Alentejo."
    },
    "contact": {
      "title": "Contacts | Demander un devis à un électricien en Algarve et Alentejo",
      "description": "Contactez JF pour des devis d'installations électriques, de téléchargements et de PLR ​​ou de maintenance. Nous servons Faro, Olhão, Tavira, Portimão et Beja."
    },
    "smartCities": {
      "title": "Villes intelligentes et IoT | Éclairage public intelligent | JF",
      "description": "Nous transformons les villes de l’Algarve en Smart Cities. Solutions IoT, gestion à distance de l’éclairage public et efficacité énergétique."
    },
      "faqs": {
        "title": "Foire aux questions | JF",
        "description": "Réponses aux questions les plus courantes concernant les demandes de connexion réseau (PLR), les téléchargements, les compteurs et les installations électriques."
      }
  },
  "nav": {
    "home": "Commencer",
    "about": "À propos de nous",
    "services": "Services",
    "partners": "Partenaires",
    "careers": "Recrutement",
    "contact": "Contacts",
    "quote": "Demander un devis",
    "toggle": "DANS"
  },
  "footer": {
    "desc": "Solutions intégrées d’électricité, de construction et de mobilité électrique. Nous promouvons votre projet en Algarve et en Alentejo avec qualité et sécurité depuis 1986.",
    "navTitle": "Navigation",
    "contactTitle": "Contacts",
    "newsletterTitle": "Bulletin",
    "newsletterDesc": "Recevez les dernières nouvelles et mises à jour.",
    "placeholder": "Votre email",
    "subscribe": "S'abonner",
    "rights": "Tous droits réservés.",
    "designedBy": "Site conçu par",
    "privacy": "politique de confidentialité",
    "terms": "Termes et conditions",
    "quality": "Politique Qualité",
    "complaintsBook": "Livre des plaintes",
    "faqTitle": "Foire aux questions",
    "faqDesc": "Consultez notre espace support pour clarifier les questions techniques.",
    "faqButton": "Voir FAQ"
  },
  "common": {
    "learnMore": "En savoir plus",
    "seeMore": "Voir plus",
    "requestService": "Demander un Service",
    "address": "Route nationale 125, Bias Norte, Moncarapacho",
    "city": "8700-066 Olhão"
  },
  "home": {
    "hero": {
      "title": "JF,|Infrastructures Électriques,|Éclairage, PT et PLR",
      "subtitle": "Votre compagnie d'électricité de référence en Algarve et en Alentejo. Excellence technique dans les Baixadas, les PLR et les infrastructures.",
      "ctaPrimary": "Contactez-nous",
      "ctaSecondary": "Découvrez les prestations"
    },
    "slogan": "L'électricité est avec nous !",
    "servicesTitle": "Nos domaines d'activité",
    "whyUsTitle": "Pourquoi choisir JF ?",
    "whyUsDesc": "Nous sommes le bon choix pour tous ceux qui recherchent une assistance permanente en Algarve et en Alentejo. Nous combinons des décennies d’expérience dans les postes de transformation et les télécommunications avec les dernières technologies.",
    "ctaButton": "Découvrez nos prestations",
    "benefits": [
      {
        "id": 1,
        "text": "Expérience depuis 1986"
      },
      {
        "id": 2,
        "text": "Assistance Permanente"
      },
      {
        "id": 3,
        "text": "Solutions clé en main"
      },
      {
        "id": 4,
        "text": "Focus sur le sud du pays"
      }
    ],
    "lightUp": {
      "title": "Vous avez un projet à Faro, Portimão ou Beja ?",
      "desc": "Notre lumière est prête à guider votre vision. Spécialistes des installations complexes et du raccordement au réseau public.",
      "cta": "Demander un devis gratuit"
    },
    "testimonialsTitle": "Ce que disent nos clients",
    "testimonials": [
      {
        "id": 1,
        "name": "Narciso Barradas",
        "text": "L'accueil client, le service et la résolution du problème signalé démontre le professionnalisme de cette équipe. Merci beaucoup pour votre attention et votre dévouement."
      },
      {
        "id": 2,
        "name": "Caroline Morais",
        "text": "J'ai beaucoup apprécié le service du lundi 13/05/2025, le monsieur à la réception était très sympathique"
      },
      {
        "id": 3,
        "name": "Ana Clara",
        "text": "Les employés Lucas Penido et Maikel Denny sont les meilleurs."
      }
    ],
    "leaveReview": "Laissez votre avis",
    "partnersTitle": "Partenaires et marques de confiance",
    "serviceCards": {
      "plrs": {
        "title": "Demandes de connexion réseau",
        "desc": "Nous réalisons votre branchement au réseau électrique, souterrain ou aérien."
      },
      "infraestruturas": {
        "title": "Infrastructures électriques",
        "desc": "Exécution et maintenance des réseaux électriques Basse et Moyenne Tension et Postes de Transformation."
      },
      "postos-transformacao": {
        "title": "Postes de transformation",
        "desc": "Assemblage de Postes de Transformation (PT), installation de cellules moyenne tension, transformateurs et maintenance préventive."
      },
      "iluminacao": {
        "title": "Éclairage",
        "desc": "Éclairage festif, éclairage intelligent et solutions techniques."
      },
      "instalacoes": {
        "title": "Installations Électriques",
        "desc": "Installations électriques basse tension pour l'habitat, le commerce et l'industrie. Nous garantissons sécurité, efficacité et respect des normes techniques."
      },
      "projetos": {
        "title": "Projets d'électricité",
        "desc": "Projets d'ingénierie électrique basse et moyenne tension, autorisations, mesures d'autoprotection et conseil en énergie."
      },
      "telecomunicacoes": {
        "title": "Télécommunications",
        "desc": "Exécution d'infrastructures de télécommunications (ITED et ITUR), assurant la connectivité et la conformité technique dans les lotissements et les bâtiments."
      },
      "outros": {
        "title": "Autres services",
        "desc": "Solutions de mobilité électrique (chargeurs), travaux publics complémentaires, inspection de construction et audits énergétiques."
      }
    }
  },
  "services": {
    "heroTitle": "Nos prestations",
    "heroDesc": "Solutions intégrées d’ingénierie et d’électricité pour des projets de toute taille. De la conception à la réalisation, nous garantissons la qualité et le respect des délais.",
    "featuresTitle": "CE QUE NOUS FAISONS",
    "notFoundTitle": "Vous ne trouvez pas ce que vous cherchez ?",
    "notFoundDesc": "Nous fournissons des services adaptés à vos besoins. Prenez contact pour discuter de votre projet.",
    "notFoundCta": "Contacter l'équipe",
    "categories": [
      {
        "id": "plrs",
        "title": "Demandes de connexion réseau",
        "description": "JF est spécialiste des demandes de raccordement au réseau (PLR) dans tout l'Algarve et l'Alentejo.",
        "details": ["Demandes de raccordement au réseau électrique", "Exécution de branchements électriques", "Augmentations de puissance", "Certification"]
      },
      {
        "id": "infraestruturas",
        "title": "Infrastructures Électriques",
        "description": "Exécution et maintenance des réseaux électriques Basse et Moyenne Tension et Postes de Transformation.",
        "details": ["Basse Tension", "Moyenne Tension", "Postes de Transformation", "Maintenance des Réseaux", "Essais Techniques"]
      },
      {
        "id": "postos-transformacao",
        "title": "Postes de transformation",
        "description": "Installation, maintenance et exploitation de postes de transformation (PT) privés et publics. Solutions moyenne tension.",
        "details": [
          "Assemblage de TP",
          "Cellules moyenne tension",
          "Transformateurs",
          "Nettoyage et entretien"
        ]
      },
      {
        "id": "iluminacao",
        "title": "Éclairage",
        "description": "Éclairage festif, éclairage intelligent et solutions techniques.",
        "details": [
          "Éclairage public",
          "Éclairage sportif",
          "Éclairage festif",
          "Villes intelligentes"
        ]
      },
      {
        "id": "instalacoes",
        "title": "Installations électriques",
        "description": "Installations électriques basse tension pour l'habitat, le commerce et l'industrie. Nous garantissons la sécurité, l’efficacité et le respect des normes techniques.",
        "details": [
          "Panneaux électriques",
          "Rénovations",
          "Éclairage LED",
          "Maintenance préventive"
        ]
      },
      {
        "id": "projetos",
        "title": "Projets et Certifications",
        "description": "Tout grand projet commence par un bon design. Notre bureau d'études élabore des projets détaillés, assurant l'équilibre entre coût, efficacité et sécurité.",
        "details": [
          "Projets moyenne tension",
          "Projets basse tension",
          "Projets d'installations électriques",
          "Projets d'éclairage"
        ]
      },
      {
        "id": "telecomunicacoes",
        "title": "Télécommunications",
        "description": "Nous vivons à l'ère du numérique où la connectivité est fondamentale. JF conçoit et installe des infrastructures de télécommunications préparées pour l'avenir.",
        "details": ["Projets ITED/ITUR", "Installations de réseau", "Installations de fibre", "Installations de CCTV"]
      },
      {
        "id": "outros",
        "title": "Autres services",
        "description": "Services complémentaires de construction civile, de mobilité électrique et d’infrastructures urbaines.",
        "details": [
          "Chargeurs de véhicules électriques",
          "Ouverture de tranchée",
          "Reconstruction du sol",
          "Surveillance des travaux"
        ]
      }
    ]
  },
  "serviceDetails": {
    "plrs": {
      "seoTitle": "Demandes de connexion réseau",
      "title": "Demandes de connexion réseau",
      "description": "JF est spécialiste des demandes de raccordement au réseau (PLR) dans tout l'Algarve et l'Alentejo.",
      "fullText": "JF est spécialiste des demandes de raccordement au réseau (PLR) dans tout l'Algarve et l'Alentejo. Nous gérons l'ensemble du processus auprès d'E-Redes et exécutons tous les travaux, afin que vous ayez de l'électricité dans votre propriété le plus rapidement possible.",
      "features": ["Demandes de raccordement au réseau électrique", "Exécution de branchements électriques", "Augmentations de puissance", "Certification"],
      "keywords": ["PLR", "E-Redes", "Branchements", "Connexions", "Électricité"],
      "benefits": [
        { "title": "Clé en main", "desc": "Nous prenons en charge l'ensemble du processus et de l'exécution des travaux." }
      ]
    },
    "infraestruturas": {
      "seoTitle": "Infrastructures Électriques - Basse et Moyenne Tension",
      "title": "Infrastructures électriques",
      "description": "Exécution et maintenance des réseaux électriques Basse et Moyenne Tension et Postes de Transformation.",
      "fullText": "JF est spécialiste dans l'exécution et la maintenance d'infrastructures électriques de service public ou privé. Nous réalisons tous types d'installations électriques Basse et Moyenne Tension et Postes de Transformation, garantissant le respect rigoureux de toutes les normes techniques et de sécurité.",
      "features": ["Basse Tension", "Moyenne Tension", "Postes de Transformation", "Réseaux d'Éclairage Public", "Essais et Certifications"],
      "keywords": ["Installations Industrielles", "Basse Tension", "Tableaux Électriques", "Sécurité Électrique"],
      "benefits": [
        { "title": "Sécurité", "desc": "Respect rigoureux des normes techniques." },
        { "title": "Expérience professionnelle", "desc": "Connaissance et compétence" }
      ]
    },
    "iluminacao": {
      "seoTitle": "Éclairage festif et technique",
      "title": "Éclairage",
      "description": "Éclairage festif, éclairage intelligent et solutions techniques.",
      "fullText": "JF fournit des solutions intégrales pour l'éclairage public, technique et décoratif.",
      "features": ["Éclairage public", "Éclairage sportif", "Éclairage festif", "Villes intelligentes"],
      "keywords": ["Éclairage", "LED", "Efficacité", "Festif"],
      "benefits": [
        { "title": "Efficacité", "desc": "Réduction des coûts énergétiques jusqu'à 60%." }
      ]
    },
    "instalacoes": {
      "seoTitle": "Installations Électriques",
      "title": "Installations électriques",
      "description": "Solutions électriques complètes pour les bâtiments et maintenance préventive.",
      "fullText": "Nous réalisons tous types d'installations électriques basse tension. Avec un accent sur les installations industrielles, préparées et conçues spécifiquement pour votre entreprise ! Notre équipe garantit le respect rigoureux des normes de sécurité.",
      "features": [
        "Tableaux électriques",
        "Éclairage intérieur et extérieur",
        "Rigueur technique"
      ],
      "keywords": [
        "Installations",
        "Tableaux électriques",
        "Éclairage",
        "Maintenance"
      ],
      "benefits": [
        {
          "title": "Sécurité",
          "desc": "Nous garantissons le respect rigoureux des normes."
        },
        {
          "title": "Expérience professionnelle",
          "desc": "Connaissance et compétence"
        }
      ]
    },
    "telecomunicacoes": {
      "seoTitle": "Télécommunications ITED et ITUR",
      "title": "Télécommunications",
      "description": "JF conçoit et installe des infrastructures de télécommunications dans les bâtiments (ITED) et dans les lotissements et ensembles de bâtiments (ITUR).",
      "fullText": "JF assure l'exécution des infrastructures de télécommunications dans les bâtiments (ITED) et dans les lotissements ou urbanisations (ITUR).",
      "features": ["Projets ITED/ITUR", "Installations de réseau", "Installations de fibre", "Installations de CCTV"],
      "keywords": ["ITED", "ITUR", "Fibre Optique", "CCTV", "Telecom"],
      "benefits": [
        { "title": "Expérience professionnelle", "desc": "Connaissance et compétence" }
      ]
    },
    "postos-transformacao": {
      "seoTitle": "Postes de transformation et moyenne tension",
      "title": "Postes de Transformation (PT)",
      "description": "Fourniture et montage de Postes de Transformation pour les industries et les grandes surfaces.",
      "fullText": "Pour les industries, les hôtels, les exploitations agricoles ou les grandes surfaces commerciales, le raccordement en Basse Tension peut ne pas suffire. JF est spécialisée dans la fourniture et le montage de Postes de Transformation (PT). Nous proposons la maintenance et l'assistance, garantissant une plus grande longévité des équipements et la sécurité des installations.",
      "features": [
        "Fourniture et Installation de PT",
        "Maintenance Préventive et Corrective",
        "Assistance aux pannes",
        "Analyse de l'Huile Diélectrique"
      ],
      "keywords": [
        "Poste de transformation",
        "Moyenne tension",
        "Transformateur",
        "Maintenance"
      ],
      "benefits": [
        {
          "title": "Fiabilité",
          "desc": "Partenaires des Principaux Fabricants"
        },
        {
          "title": "Conformité",
          "desc": "Respect rigoureux de toutes les normes légales et réglementations techniques en vigueur."
        }
      ]
    },
    "projetos": {
      "seoTitle": "Projets et Certifications",
      "title": "Projets et Certifications",
      "description": "Développement de projets électriques de licence et d'exécution pour la Basse et Moyenne Tension.",
      "fullText": "JF réalise tout type de projet électrique dont vous avez besoin.",
      "features": [
        "Projets moyenne tension",
        "Projets basse tension",
        "Projets d'installations électriques",
        "Projets d'éclairage"
      ],
      "keywords": [
        "Projets",
        "Certifications",
        "Ingénierie",
        "Licences"
      ],
      "benefits": [
        {
          "title": "Conformité Légale",
          "desc": "Nous garantissons le respect de toutes les normes et réglementations."
        },
        {
          "title": "Délai de réponse",
          "desc": "Agilité dans le développement et l'autorisation du projet."
        }
      ]
    },
    "outros": {
      "seoTitle": "Autres services spécialisés",
      "title": "Autres services",
      "description": "Services complémentaires pour un support complet de votre projet.",
      "fullText": "Services complémentaires pour un accompagnement complet de votre projet.",
      "features": [
        {
          "title": "Génie civil dans le domaine de l'électricité",
          "description": "Pour offrir un service clé en main, nous intégrons les compétences en génie civil nécessaires à l'exécution des infrastructures électriques."
        },
        {
          "title": "Mobilité électrique",
          "description": "Nous installons des chargeurs électriques pour véhicules dans les maisons, copropriétés, entreprises et espaces commerciaux."
        },
        {
          "title": "Location de matériel",
          "description": "Nous louons le matériel nécessaire aux travaux, groupes électrogènes, plateformes élévatrices, camions grues et tractopelles, si nécessaire avec opérateur, pour faciliter le service."
        },
        {
          "title": "Soutien aux événements",
          "description": "Équipes d'assistance permanente."
        }
      ],
      "keywords": [
        "Mobilité",
        "Construction",
        "Événements",
        "Équipement"
      ],
      "benefits": [
        {
          "title": "Polyvalence",
          "desc": "Plusieurs compétences en un seul partenaire."
        },
        {
          "title": "Durabilité",
          "desc": "Solutions de recharge pour l'avenir."
        },
        {
          "title": "Expérience professionnelle",
          "desc": "Connaissance et compétence"
        }
      ]
    }
  },
    "lighting": {
      "heroTitle": "Éclairage",
      "heroDesc": "Solutions d'éclairage public, décoratif et festif. Efficacité énergétique et maintenance technique spécialisée.",
      "introTitle": "Solutions d'éclairage à 360º",
      "introDesc": "Nous proposons des solutions d'éclairage complètes, de l'éclairage public aux projets décoratifs pour les périodes de fêtes, en assurant toujours des services de maintenance et d'assistance technique spécialisés. Nous développons des études d'éclairage personnalisées, axées sur l'efficacité énergétique, garantissant des solutions durables, fonctionnelles et adaptées aux besoins de chaque projet.",
    "stat1": "Projets festifs",
    "stat2": "Points lumineux LED",
    "types": [
      {
        "title": "Éclairage public",
        "image": "https://drive.google.com/thumbnail?id=1MFt1qWei6hz80tPGkX91j-g86uHVA7vi&sz=w1000",
        "desc": "Nous garantissons la sécurité et le bien-être des populations grâce à des réseaux d'éclairage public efficaces et fiables. Nous installons et entretenons des luminaires de rue, des projecteurs et des colonnes, assurant une luminosité correcte sur les routes, les rues et les espaces publics, en nous concentrant toujours sur la réduction de l'empreinte écologique et des coûts énergétiques.",
        "applicationsTitle": "Où nous appliquons :",
        "applications": ["Zones Routières", "Zones piétonnes", "Urbanisations/ Lotissements", "Parkings", "Zones Portuaires"]
      },
      {
        "title": "Éclairage sportif",
        "image": "https://drive.google.com/thumbnail?id=15ZTaJZVipA-lCRWq5r5I0oelf5cJDUTF&sz=w1000",
        "desc": "Dans le sport, la lumière est fondamentale pour la performance des athlètes et l'expérience des spectateurs. Nous concevons et installons des systèmes d'éclairage qui respectent strictement les niveaux de lux requis par les fédérations et les normes de transmission TV. Nous garantissons l'uniformité sur le terrain, le contrôle de l'éblouissement et des systèmes d'allumage instantané pour les gymnases et les stades.",
        "applicationsTitle": "Où nous appliquons :",
        "applications": [
          "Terrains de football et stades",
          "Gymnases sportifs",
          "Courts de tennis et de padel",
          "Piscines municipales"
        ]
      },
      {
        "title": "Éclairage intelligent",
        "image": "https://drive.google.com/thumbnail?id=1KOWLU95F6pomAZjmTO0WUY_UbxGsrw-s&sz=w1000",
        "desc": "Bien plus que l'éclairage des routes, nous créons des villes intelligentes. Notre approche de l'éclairage public se concentre sur l'efficacité énergétique et la sécurité. Nous remplaçons les luminaires conventionnels par la technologie LED haute performance, intégrée à des systèmes de télégestion permettant le contrôle à distance de l'intensité lumineuse, la détection des pannes en temps réel et la réduction des factures d'énergie municipales jusqu'à 60 %. Nous soulignons l'installation de passages piétons intelligents à Portimão, qui augmentent la sécurité des piétons grâce à une signalisation lumineuse active.",
        "applicationsTitle": "Où nous appliquons :",
        "applications": ["Zones Routières", "Zones piétonnes", "Parkings", "Zones Portuaires"]
      },
      {
        "title": "Éclairage technique",
        "image": "https://drive.google.com/thumbnail?id=1lwzRh0LtxEQH2ypr8C1FBzYpO-PW82Yr&sz=w1000",
        "desc": "L'éclairage technique vise à mettre en valeur le patrimoine bâti la nuit, tout en respectant son histoire et son tracé original. Nous utilisons des projecteurs de précision, des rubans LED et des systèmes RGBW pour créer des scénarios dynamiques ou statiques qui soulignent les textures et les volumes. C'est la solution idéale pour redonner vie à des bâtiments emblématiques, des hôtels ou des monuments, renforçant ainsi l'identité visuelle du lieu.",
        "applicationsTitle": "Où nous appliquons :",
        "applications": [
          "Monuments et églises",
          "Hôtels et centres de villégiature",
          "Bâtiments d'entreprise",
          "Ponts et structures"
        ]
      },
      {
        "title": "Éclairage festif",
        "image": "https://drive.google.com/thumbnail?id=1Q7Ak5kMhDW4Xxk9VWPrOu5mThEKDGo0x&sz=w1000",
        "desc": "L'éclairage festif est l'art de créer des émotions par la lumière. Nous développons des projets clé en main pour des occasions spéciales, transformant l'environnement urbain et commercial. De la conception créative des motifs (2D et 3D) à l'installation et au démontage sécurisés, nous garantissons un spectacle visuel qui attire les visiteurs, booste le commerce local et célèbre la tradition avec la technologie LED basse consommation.",
        "applicationsTitle": "Où nous appliquons :",
        "applications": [
          "Centres historiques et villes",
          "Centres commerciaux",
          "Places et jardins publics",
          "Façades de bâtiments"
        ]
      }
    ],
    "ctaTitle": "Éclairons votre projet ?",
    "ctaDesc": "Qu'il s'agisse de décorer votre ville pour Noël ou de renouveler l'éclairage public.",
    "ctaButton": "Demander une proposition d'éclairage"
  },
  "partners": {
    "heroTitle": "Partenaires de confiance",
    "heroDesc": "L'excellence de JF repose sur des relations solides avec des leaders mondiaux de l'industrie et des partenariats stratégiques exclusifs.",
    "suppliersTitle": "Fournisseurs et marques certifiées",
    "suppliersDesc": "Nous travaillons uniquement avec des matériaux approuvés et des équipements haut de gamme pour garantir une sécurité et une durabilité maximales de nos installations électriques.",
    "eredesHighlight": {
      "title": "INTERCONNEXION AVEC LE RÉSEAU DE DISTRIBUTION",
      "desc": "JF est un partenaire certifié et un entrepreneur qualifié d'E-Redes.",
      "badge": "Normes techniques respectées",
      "licenseLinkText": "Consultez toutes nos classes ici"
    },
    "brandsList": [
      {
        "name": "Schneider Électrique",
        "desc": "Leader mondial de la gestion de l’énergie et de l’automatisation."
      },
      {
        "name": "Siemens",
        "desc": "Une technologie de pointe pour des infrastructures intelligentes."
      },
      {
        "name": "ÉFACEC",
        "desc": "Solutions portugaises d’ingénierie et de mobilité."
      },
      {
        "name": "Legrand",
        "desc": "Spécialistes des infrastructures électriques et numériques."
      },
      {
        "name": "Hager",
        "desc": "Systèmes d'installation et de distribution d'énergie."
      }
    ],
    "exclusiveTitle": "Entités publiques partenaires",
    "exclusiveDesc": "Municipalités et organismes étatiques qui font confiance à JF pour l'éclairage public et les infrastructures critiques.",
    "exclusivePartners": [
      {
        "name": "Municipalité d'Olhão",
        "type": "Autorité locale",
        "desc": "Réalisation d'infrastructures électriques dans de nouveaux lotissements et zones industrielles."
      },
      {
        "name": "Municipalité de Faro",
        "type": "Autorité locale",
        "desc": "Entretien de l'éclairage public et des bâtiments municipaux de la commune."
      },
      {
        "name": "Commune de Loulé",
        "type": "Autorité locale",
        "desc": "Aménagement et maintenance des réseaux électriques et de l'éclairage public."
      }
    ],
    "ctaTitle": "Devenez partenaire",
    "ctaDesc": "Nous cherchons constamment à élargir notre réseau avec des entreprises qui partagent nos valeurs de rigueur et de qualité.",
    "ctaButton": "Proposer un partenariat"
  },
  "contact": {
    "heroTitle": "Contactez-nous",
    "heroDesc": "Nous sommes disponibles pour répondre aux questions et présenter des propositions.",
    "infoTitle": "Information",
    "labels": {
      "address": "Ménage",
      "phone": "Téléphone",
      "callCost": "(Appel vers le réseau fixe national)",
      "callCostMobile": "(Appel vers le réseau mobile national)",
      "email": "E-mail",
      "schedule": "Temps",
      "weekdays": "Du lundi au vendredi : 09h00 - 12h30 | 14h00 - 18h00",
      "weekend": "Samedi, dimanche et jours fériés : Fermé",
      "whatsappBox": {
        "title": "Demander un devis via WhatsApp",
        "button": "Envoyer un message"
      }
    },
    "formTitle": "Envoyez-nous un message",
    "form": {
      "name": "Nom et prénom",
      "email": "E-mail",
      "phone": "Téléphone",
      "subject": "Sujet",
      "subjectPlaceholder": "Sélectionnez un sujet...",
      "optQuote": "Demander un devis",
      "optInfo": "Informations générales",
      "optRecruitment": "Recrutement",
      "optPartnership": "Proposer un partenariat",
      "optOther": "Autres",
      "interest": "Domaine d'intérêt",
      "interestPlaceholder": "Sélectionnez la zone...",
      "jobPosition": "Poste pour lequel postuler",
      "cv": "Curriculum Vitae (CV)",
      "presentation": "Présentation de l'entreprise (PDF)",
      "companyName": "Nom de l'entreprise",
      "companyAddress": "Adresse de l'entreprise",
      "companyType": "Type d'entreprise",
      "companyContact": "Contacter l'entreprise",
      "proposalMessage": "Décrivez votre idée/proposition",
      "uploadFile": "Joindre un PDF",
      "filePlaceholder": "Aucun fichier sélectionné",
      "fileLabel": "Joindre le projet/plan (PDF)",
      "fileHint": "PDF (maximum 5 Mo)",
      "interestHint": "(Sélectionnez plusieurs options)",
      "successMsg": "Merci pour votre contact ! Nous vous contacterons bientôt.",
      "fileError": "Veuillez sélectionner uniquement les fichiers PDF.",
      "optsInterest": {
        "plrs": "Demandes de connexion réseau (PLR)",
        "installations": "Infrastructures électriques",
        "telecommunications": "Télécommunications",
        "substations": "Postes de transformation",
        "projects": "Projets d'électricité",
        "lighting": "Éclairage",
        "others": "Autres services"
      },
      "message": "Message",
      "submit": "Soumettre la demande"
    },
    "locationTitle": "Emplacement"
  },
  "faqs": {
    "heroTitle": "FAQ",
    "heroDesc": "Clarifiez vos doutes sur nos services et procédures.",
    "sectionTitle": "QUESTIONS FRÉQUEMMENT POSÉES",
    "list": [
      {
        "q": "J'AI BESOIN DE METTRE L'ÉLECTRICITÉ DANS UN ENDROIT. QUELLES SONT LES ÉTAPES À SUIVRE ?",
        "a": "Pour installer l'électricité dans une maison, un magasin ou un terrain, vous devez suivre certaines étapes de manière organisée et sûre. Chez JF, nous gérons l'ensemble du processus, nous avons juste besoin de quelques données/documents tels que :\n\n- CPF, pour les particuliers ou certificat permanent, dans le cas d'une entreprise ; \n- Adresse de l'installation, indiquant les coordonnées géographiques ; \n- Livret de construction ; \n- Contacts téléphoniques et emails."
      },
      {
        "q": "DE QUOI DOIS-JE FAIRE UNE DEMANDE DE RACCORDEMENT AU RÉSEAU ÉLECTRIQUE (PLR) ?",
        "a": "Chez JF, nous nous occupons de l'ensemble du processus et fournissons un devis entièrement gratuit, il vous suffit de :\n\n- Fournir toute la documentation demandée ; \n- Indiquer le type de connexion réseau souhaité ; \n- Indiquer la puissance souhaitée ; \n\nAprès avoir attribué notre budget, vous devrez également :\n- Paiement des frais à E-Redes (Montants variables)."
      },
      {
        "q": "QUELS TYPES DE CONNEXION RÉSEAU EXISTE-T-IL ?",
        "a": "- Raccordement au réseau d'une maison unifamiliale. \n\n- Connexion réseau pour une entreprise/entreprise. \n\n- Raccordement au réseau d'une installation collective (par exemple : immeubles). \n\n- Décalage réseau : Pour modifier l'emplacement des éléments du réseau existants (poteaux, lignes, etc.). \n\n- Travaux : Fournir temporairement de l'énergie électrique à un endroit, avec ou sans nécessité ultérieure d'un raccordement permanent. \n\n- Événementiel : Fournir de l'électricité à un événement déterminé et uniquement pendant la période strictement nécessaire à la tenue de l'événement. Ces connexions sont généralement destinées aux cirques, foires, fêtes, spectacles de rue, entre autres."
      },
      {
        "q": "J'AI BESOIN D'ÉLECTRICITÉ DANS UN ENDROIT OÙ IL Y A DÉJÀ UN COMPTEUR. COMMENT PROCÉDER ?",
        "a": "Si l'emplacement dispose déjà d'un compteur installé ou si vous aviez déjà un contrat d'électricité, il vous suffit de contacter une entreprise de services publics pour signer un contrat de fourniture d'électricité."
      },
      {
        "q": "QU'EST-CE QUE LE CPE ?",
        "a": "Le CPE – Code Point de Livraison – est le numéro qui identifie votre installation électrique."
      },
      {
        "q": "QU'EST-CE QUE LE PIN ?",
        "a": "Le NIP – Building Identification Number – est le numéro qui identifie l’installation collective et avec lequel il est possible de consulter tous les CPE."
      },
      {
        "q": "JE SOUHAITE AUGMENTER LA PUISSANCE DE MON INSTALLATION. QUE DOIS-JE FAIRE?",
        "a": "Si la puissance que vous souhaitez contracter est inférieure à la puissance maximale autorisée de l'installation, le Client doit demander une augmentation de la puissance souscrite à son Fournisseur. \n\nDans les situations où la puissance que vous souhaitez contracter est supérieure à la puissance maximale autorisée de l'installation, le Client peut demander un devis pour une augmentation de puissance. \n\nLe Client doit s'assurer que l'installation est certifiée pour la nouvelle valeur de puissance. \n\nS'il est nécessaire de certifier l'installation, le Client doit s'adresser à un organisme de contrôle des installations électriques reconnu par la Direction Générale de l'Energie et de la Géologie (DGEG)."
      },
      {
        "q": "EST-IL POSSIBLE DE CHANGER LA LOCALISATION DE MON COMPTABLE ?",
        "a": "Oui, via une demande de changement d'emplacement du compteur, ou de changement de point de livraison."
      },
      {
        "q": "JE SUIS SANS ÉLECTRICITÉ, QUI DOIS-JE CONTACTER ?",
        "a": "Vous devez contacter E-Redes, par les moyens disponibles :\n\nTéléphone : 800 506 506\nWhatsApp : 913 846 398\nSite Web : https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "J'AI REÇU UNE COMMUNICATION CONCERNANT LE REMPLACEMENT DE MON COMPTEUR. QUE DOIS-JE FAIRE?",
        "a": "Vous devez programmer le jour et l'heure qui vous conviennent le mieux en contactant E-Redes :\n\nTéléphone : 218 100 100\nWhatsApp : 913 846 398\nSite Web : https://balcaodigital.e-redes.pt/home"
      },
      {
        "q": "QU'EST-CE QUI EST NÉCESSAIRE POUR AVOIR UN CHARGEUR DE VÉHICULE ÉLECTRIQUE ?",
        "a": "Dans un premier temps, vous devez vérifier l'alimentation électrique disponible sur place, choisir le type de chargeur souhaité et contacter notre service budgétaire."
      }
    ]
  },
    "careers": {
      "heroTitle": "Recrutement",
      "heroDesc": "Rejoignez une équipe avec près de 40 ans d'histoire. Nous construisons l’avenir de l’Algarve et de l’Alentejo avec rigueur et innovation.",
      "introTitle": "Pourquoi travailler avec nous ?",
      "introDesc": "Chez JF, nous croyons que les gens sont notre plus grande énergie. Nous offrons de la stabilité, une formation continue et la possibilité de travailler sur des projets ambitieux en matière d'électricité, de construction et de mobilité durable.",
    "benefits": [
      "Formation continue et certification",
      "Assurance maladie",
      "Progression de carrière",
      "Équipe unie et dynamique"
    ],
    "openingsTitle": "Opportunités ouvertes",
    "reqTitle": "Exigences:",
    "otherReq": "+ autres exigences",
    "applyBtn": "Postulez maintenant",
    "jobs": [
      {
        "id": 1,
        "title": "Calceteiro (H/F)",
        "location": "Algarve / Alentejo",
        "type": "À temps plein",
        "description": "Responsable de l'exécution et de la réparation des trottoirs portugais, de la pose de bordures et d'autres travaux de finition urbaine sur la voie publique.",
        "requirements": [
          "Expérience avérée dans le rôle",
          "Permis de conduire (de préférence)",
          "Disponibilité immédiate",
          "Sens des responsabilités"
        ],
        "emailSubject": "Application : Calceteiro"
      },
      {
        "id": 2,
        "title": "Opérateur d'entrepôt (H/F)",
        "location": "Siège social (Faro/Olhão)",
        "type": "À temps partiel",
        "description": "Responsable de la réception, de la vérification et de l'organisation des matériaux électriques et de construction sur le chantier, en assurant l'efficacité des stocks.",
        "requirements": [
          "Expérience en entrepôt (un atout)",
          "Connaissance informatique",
          "Permis de conduire",
          "Capacité organisationnelle"
        ],
        "emailSubject": "Application : Opérateur d'entrepôt"
      },
      {
        "id": 3,
        "title": "Grutier Lourd (H/F)",
        "location": "Olhao",
        "type": "À temps plein",
        "description": "Tâches principales : Conduire un camion avec une grue, transporter des matériaux, des poteaux de levage et des bobines mobiles et des charges suspendues. Nous offrons : Un salaire attractif compatible avec l'expérience, une prime annuelle et une formation continue.",
        "requirements": [
          "Lettre de catégorie C (obligatoire)",
          "Expérience sur un camion avec une grue",
          "Profil responsable et polyvalent",
          "Expérience avec des machines (valorisée)",
          "CAM de marchandises lourdes (valorisées)",
          "Préférence pour les personnes originaires de la région ayant une bonne connaissance du territoire"
        ],
        "emailSubject": "Application : Conducteur de grue robuste"
      },
      {
        "id": 4,
        "title": "Manoeuvre (H/F)",
        "location": "Algarve / Alentejo",
        "type": "À temps plein",
        "description": "Manoeuvre pour la construction d'infrastructures avec permis de conduire.",
        "requirements": [
          "Permis de conduire (obligatoire)",
          "Disponibilité immédiate",
          "Sens des responsabilités"
        ],
        "emailSubject": "Candidature : Manoeuvre"
      },
      {
        "id": 5,
        "title": "Candidature Spontanée",
        "location": "Algarve / Alentejo",
        "type": "Tout",
        "description": "Envoyez-nous votre candidature et nous vous contacterons dès qu'une opportunité appropriée se présentera.",
        "requirements": [
          "Proactivité",
          "Volonté de travailler"
        ],
        "emailSubject": "Candidature Spontanée"
      }
    ],
    "spontaneousTitle": "Vous n'avez pas trouvé le poste vacant idéal ?",
    "spontaneousDesc": "Nous sommes toujours à la recherche de nouveaux talents en Algarve. Envoyez-nous votre CV à notre base de données.",
    "spontaneousBtn": "Envoyer la candidature",
    "spontaneousDisclaimer": "En envoyant votre CV, vous acceptez notre politique de traitement des données à des fins de recrutement."
  },
  "qualityPage": {
    "title": "Politique Qualité",
    "visionTitle": "Vision",
    "visionDesc": "JF vise à être une entreprise de référence et un partenaire stratégique dans la construction d'infrastructures dans la région de l'Algarve, en suivant l'innovation et en étant un exemple dans son secteur d'activité.",
    "missionTitle": "Mission",
    "missionDesc": "Fournir des services efficaces et rapides dans le domaine de la construction et de l’entretien des infrastructures dans le sud du Portugal.",
    "valuesTitle": "Valeurs",
    "values": [
      {
        "title": "Intégrité",
        "desc": "Le sérieux et l'honnêteté prédominent dans les décisions et dans la vie de tous les jours."
      },
      {
        "title": "Responsabilité",
        "desc": "Engagement à assumer les tâches et fonctions assignées, ainsi qu'à assurer le respect du contrat/service convenu."
      },
      {
        "title": "Efficacité des services",
        "desc": "Faites-le correctement du premier coup."
      },
      {
        "title": "Orientation client",
        "desc": "Travailler en conformité avec les attentes et les exigences du client."
      }
    ],
    "strategyTitle": "Orientations stratégiques",
    "strategies": [
      "Améliorer continuellement l'efficacité du système de gestion de la qualité et de nos services pour satisfaire les clients et les employés, ainsi que contribuer au développement de la région de l'Algarve que nous servons.",
      "Former, informer et développer toutes les ressources humaines, en contribuant au développement de leurs compétences.",
      "Promouvoir les conditions de sécurité et de santé afin d’harmoniser le travail et d’assurer le bien-être de tous les salariés.",
      "Assurer le respect de toutes les normes, législations et réglementations en vigueur et spécifications techniques exigées par nos clients."
    ],
    "contactInfo": "Nous sommes disponibles pour clarifier toute question supplémentaire. (qualidade@joaquimfernandes.pt)",
    "legalInfo": {
      "title": "Loi 144/2015 du 8 septembre",
      "intro": "En cas de litige, le consommateur peut recourir à un organisme de règlement alternatif des litiges de consommation :",
      "entityName": "Tribunal d'arbitrage du Centre d'arbitrage de la consommation de l'Algarve",
      "address": "Ninho de Empresas, Edif. ANJE Estrada da Penha, 3ème étage, bureau 26 8000 Faro, Portugal",
      "phone": "Téléphone : 289 823 135",
      "email": "Courriel : apoio@consumidoronline.pt",
      "portal": "Plus d'informations sur le portail des consommateurs www.consumidoronline.pt"
    }
  },
  "privacyPage": {
    "title": "politique de confidentialité",
    "intro": "JF respecte votre vie privée et s'engage à protéger vos données personnelles. Cette politique décrit la manière dont nous collectons, utilisons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).",
    "sections": [
      {
        "title": "1. Responsable du traitement",
        "content": "Le responsable du traitement de vos données personnelles est JF, dont le siège social est situé Estrada Nacional 125, Bias Norte, Moncarapacho, 8700-066 Olhão. Pour toute question relative à la protection des données, vous pouvez nous contacter par e-mail à mail@joaquimfernandes.pt."
      },
      {
        "title": "2. Données collectées",
        "content": "Nous collectons les données que vous nous fournissez volontairement via nos formulaires de contact, demandes de devis et candidatures. Ceux-ci peuvent inclure : nom, e-mail, téléphone, adresse et curriculum vitae (en cas de recrutement). Nous collectons également des données techniques de navigation (Cookies) de manière anonyme pour améliorer les performances du site."
      },
      {
        "title": "3. Objectif du traitement",
        "content": "Vos données sont traitées aux fins suivantes :\n- Gestion des demandes de devis et des contacts commerciaux ; \n- Exécution des contrats de prestations de services ; \n- Processus de recrutement et de sélection ; \n- Respect des obligations légales (facturation)."
      },
      {
        "title": "4. Partage de données",
        "content": "Nous ne vendons pas vos données à des tiers. Vos données ne peuvent être partagées qu'avec des sous-traitants strictement nécessaires à la fourniture du service (par exemple comptable, informatique), en garantissant qu'ils sont également conformes au RGPD, ou avec les autorités publiques lorsque la loi l'exige."
      },
      {
        "title": "5. Droits du Titulaire",
        "content": "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de limitation, d'opposition au traitement et de demande d'effacement de vos données personnelles (droit à l'oubli). Pour exercer ces droits, il suffit d'adresser une demande écrite à notre adresse email générale."
      },
      {
        "title": "6. Sécurité et conservation",
        "content": "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données. Les données ne sont conservées que pendant la durée nécessaire à la finalité pour laquelle elles ont été collectées, ou conformément à la loi (par exemple 10 ans pour les données de facturation)."
      }
    ],
    "lastUpdated": "Dernière mise à jour : octobre 2024"
  },
  "termsPage": {
    "title": "Termes et conditions",
    "intro": "Bienvenue sur le site JF. En accédant et en utilisant ce site Web, vous acceptez les termes et conditions d'utilisation suivants.",
    "sections": [
      {
        "title": "1. Propriété intellectuelle",
        "content": "Tout le contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de JF ou de ses partenaires, et est protégé par la législation sur le droit d'auteur et la propriété industrielle. La copie, la reproduction ou la distribution sans autorisation préalable sont interdites."
      },
      {
        "title": "2. Utilisation du Site",
        "content": "L'utilisateur s'engage à utiliser le site Web à des fins licites et à ne pas accomplir d'actes qui pourraient endommager, désactiver ou surcharger le site Web, ou empêcher son utilisation normale par d'autres utilisateurs."
      },
      {
        "title": "3. Limitation de responsabilité",
        "content": "JF s'efforce de maintenir les informations présentes sur le site Internet à jour et exactes. Cependant, nous ne garantissons pas l'absence d'erreurs ou d'omissions et ne sommes pas responsables des dommages résultant de l'utilisation des informations contenues dans ce document. Les propositions commerciales et les budgets nécessitent toujours une confirmation officielle de l'entreprise."
      },
      {
        "title": "4. Liens externes",
        "content": "Ce site Internet peut contenir des liens vers des sites Internet de tiers (par exemple partenaires, réseaux sociaux). JF ne contrôle pas ou n'est pas responsable du contenu ou des politiques de confidentialité de ces sites Web externes."
      },
      {
        "title": "5. Modes alternatifs de règlement des litiges (MARC)",
        "content": "En cas de litige de consommation, le consommateur peut recourir à une entité compétente de règlement alternatif des litiges. JF est membre des centres d'arbitrage de la région de l'Algarve. Plus d'informations sur le portail des consommateurs (www.consumidor.pt)."
      },
      {
        "title": "6. Droit applicable et lieu",
        "content": "Ces conditions sont régies par la loi portugaise. Pour tout litige découlant de l'interprétation ou de l'application des présentes conditions, le Tribunal de Faro sera compétent, renonçant expressément à tout autre."
      }
    ]
  },
  "about": {
    "heroTitle": "Notre histoire",
    "heroDesc": "Près de quatre décennies d’ingénierie, de construction et d’innovation. Découvrez le voyage qui nous a amené ici.",
    "timeline": [
      {
        "year": "1986",
        "title": "Fondation de l'Entreprise",
        "description": "JF démarre son activité en tant que petite entreprise familiale axée sur les installations électriques résidentielles dans la région de Faro."
      },
      {
        "year": "1998",
        "title": "1er Site Web",
        "description": "Lancement de notre première présence numérique, suivant l'évolution technologique."
      },
      {
        "year": "2000",
        "title": "Chef de Consortium",
        "description": "Reconnu comme Chef de Consortium en Algarve pour EDP (actuel E-REDES)."
      },
      {
        "year": "2001",
        "title": "Certification de Qualité",
        "description": "Reconnu avec la Certification de Qualité, renforçant notre engagement envers la rigueur."
      },
      {
        "year": "2008",
        "title": "1er PME Líder",
        "description": "Distinction publique de notre solidité financière et de nos performances économiques."
      },
      {
        "year": "2011",
        "title": "Nouvelle Direction",
        "description": "Début d'un nouveau cycle stratégique avec l'arrivée d'une nouvelle direction."
      },
      {
        "year": "2017",
        "title": "Rénovation de l'Image",
        "description": "Modernisation de l'identité visuelle de l'entreprise, reflétant l'innovation constante."
      },
      {
        "year": "2018",
        "title": "1er PME Excellence",
        "description": "Label de réputation récompensant les meilleures performances économiques et financières."
      },
      {
        "year": "2021",
        "title": "Acquisition de l'Entreprise",
        "description": "Acquisition de JF par la direction actuelle, consolidant l'avenir de l'entreprise."
      },
      {
        "year": "2026",
        "title": "Sceau d'engagement de paiement ponctuel.",
        "description": "Reconnaissance de l'engagement de l'entreprise pour la ponctualité des paiements à ses fournisseurs."
      }
    ],
    "awards": {
      "title": "Reconnaissance, certifications et récompenses",
      "subtitle": "La distinction publique de notre solidité financière et de notre compétence technique dans le secteur.",
      "list": [
        {
          "name": "Leader PME",
          "desc": "Statut de référence qui distingue le profil de mérite et de risque des PME nationales. Distingué 3 fois (dernière en 2025)."
        },
        {
          "name": "PME Excellence",
          "desc": "Sceau de réputation qui récompense les meilleures performances économiques et financières. Distingué 3 fois (dernière en 2025)."
        },
        {
          "name": "Entrepreneur qualifié E-Redes",
          "desc": "Agrément technique par le distributeur pour la réalisation de travaux sur le réseau électrique."
        },
        {
          "name": "Permis de construire n°8887",
          "desc": "Qualification officielle IMPIC pour réaliser des travaux publics et privés de haut niveau."
        },
        {
          "name": "Certificat de conformité, ISO 9001:2015",
          "desc": "Système de gestion de la qualité certifié, garantissant la rigueur dans tous les processus."
        },
        {
          "name": "Engagement de Paiement Ponctuel",
          "desc": "Initiative qui distingue les entreprises qui respectent les délais de paiement envers leurs fournisseurs et promeuvent l'éthique des affaires."
        }
      ]
    },
    "teamSection": {
      "title": "Qui sommes-nous",
      "subtitle": "La force de notre équipe",
      "description": "Plus qu'une entreprise, nous sommes un collectif de professionnels passionnés par ce qu'ils font. Dotée d'une structure solide et multidisciplinaire, notre équipe allie l'expérience d'ingénieurs seniors à l'énergie de techniciens spécialisés.",
      "stat1": "+50 Collaborateurs",
      "stat2": "Ingénierie et génie civil",
      "stat3": "Techniciens certifiés",
      "highlight": "Nous investissons continuellement dans la formation et la sécurité de notre personnel, garantissant que chaque projet est exécuté avec la plus grande rigueur."
    },
    "closingTitle": "Prêt à faire partie du futur ?",
    "closingDesc": "Notre histoire continue de s’écrire chaque jour, dans chaque projet que nous réalisons.",
    "closingCta": "Travaillez avec nous"
  }
}
};


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Fix: Fallback to 'pt' if selected language translations (e.g. 'en') are missing
  const t = translations[language] || translations['pt'];

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
