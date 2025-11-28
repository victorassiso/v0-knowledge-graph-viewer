export interface ReportLink {
  source: string
  target: string
  description: string
  similarities: string[]
  differences: string[]
}

export const reportLinks: ReportLink[] = [
  // vieses cluster connections
  {
    source: "1",
    target: "2",
    description:
      "Ambos os estudos analisam como sistemas de IA podem perpetuar e amplificar preconceitos sociais existentes.",
    similarities: [
      "Foco em vieses algorítmicos",
      "Análise de discriminação em sistemas automatizados",
      "Propostas de mitigação através de auditorias",
    ],
    differences: [
      "Contexto: recrutamento vs. modelos de linguagem",
      "Metodologia: análise de sistemas reais vs. testes de prompts",
      "Tipo de viés: gênero/idade vs. estereótipos linguísticos",
    ],
  },
  {
    source: "1",
    target: "6",
    description:
      "Conexão entre vieses algorítmicos no mercado de trabalho e os impactos sociais mais amplos da IA generativa.",
    similarities: [
      "Preocupação com impactos no mercado de trabalho",
      "Análise de transformações sociais causadas por IA",
      "Discussão sobre equidade e acesso",
    ],
    differences: [
      "Escopo: específico (recrutamento) vs. amplo (sociedade)",
      "Natureza da IA: sistemas de decisão vs. IA generativa",
      "Foco temporal: problemas atuais vs. cenários futuros",
    ],
  },
  {
    source: "1",
    target: "11",
    description:
      "Relação entre vieses em sistemas de recrutamento e a necessidade de explicabilidade em decisões automatizadas.",
    similarities: [
      "Foco em decisões de alto impacto sobre indivíduos",
      "Necessidade de transparência algorítmica",
      "Implicações legais e éticas",
    ],
    differences: [
      "Abordagem: identificação de vieses vs. métodos de explicação",
      "Solução proposta: auditorias vs. técnicas de XAI",
      "Público-alvo: gestores de RH vs. desenvolvedores de ML",
    ],
  },
  {
    source: "2",
    target: "6",
    description:
      "Os estereótipos de gênero em modelos de linguagem são um aspecto específico dos impactos sociais da IA generativa.",
    similarities: [
      "Análise de modelos de linguagem",
      "Preocupação com reprodução de padrões culturais",
      "Discussão sobre responsabilidade dos desenvolvedores",
    ],
    differences: [
      "Escopo: viés de gênero específico vs. impactos gerais",
      "Metodologia: testes controlados vs. análise qualitativa",
      "Proposta: debiasing técnico vs. políticas públicas",
    ],
  },
  // privacidade cluster connections
  {
    source: "3",
    target: "4",
    description:
      "Complementaridade entre o direito ao esquecimento e as técnicas de anonimização para proteção de dados pessoais.",
    similarities: ["Foco em proteção de dados pessoais", "Desafios técnicos de implementação", "Base legal na LGPD"],
    differences: [
      "Abordagem: jurídica vs. técnica",
      "Momento: após coleta vs. antes do uso",
      "Objetivo: eliminação vs. desidentificação",
    ],
  },
  {
    source: "3",
    target: "5",
    description:
      "A governança de dados em instituições públicas deve considerar o direito ao esquecimento dos cidadãos.",
    similarities: [
      "Contexto do setor público brasileiro",
      "Framework regulatório da LGPD",
      "Necessidade de políticas claras",
    ],
    differences: [
      "Foco: direito individual vs. gestão institucional",
      "Escopo: dados específicos vs. governança ampla",
      "Implementação: sob demanda vs. proativa",
    ],
  },
  {
    source: "3",
    target: "10",
    description: "A estratégia nacional de IA deve incorporar garantias de privacidade como o direito ao esquecimento.",
    similarities: [
      "Perspectiva de políticas públicas nacionais",
      "Consideração de aspectos éticos",
      "Proteção dos cidadãos brasileiros",
    ],
    differences: [
      "Escopo: direito específico vs. estratégia ampla",
      "Natureza: reativa vs. planejamento estratégico",
      "Implementação: individual vs. nacional",
    ],
  },
  {
    source: "4",
    target: "9",
    description: "A qualidade dos dados anonimizados impacta diretamente os projetos de machine learning.",
    similarities: [
      "Foco em dados para ML",
      "Trade-off entre utilidade e proteção",
      "Métricas quantitativas de avaliação",
    ],
    differences: [
      "Objetivo: privacidade vs. qualidade",
      "Perspectiva: proteção vs. performance",
      "Técnicas: anonimização vs. limpeza de dados",
    ],
  },
  // governança de dados connections
  {
    source: "5",
    target: "9",
    description: "A qualidade de dados é um dos pilares fundamentais da governança de dados em qualquer instituição.",
    similarities: [
      "Frameworks estruturados de gestão",
      "Métricas e indicadores de qualidade",
      "Processos sistemáticos de melhoria",
    ],
    differences: [
      "Escopo: institucional amplo vs. específico para ML",
      "Contexto: setor público vs. projetos técnicos",
      "Foco: governança vs. aplicação prática",
    ],
  },
  {
    source: "5",
    target: "10",
    description:
      "A governança de dados nas instituições públicas é essencial para a implementação da estratégia nacional de IA.",
    similarities: [
      "Foco no setor público brasileiro",
      "Necessidade de capacitação e mudança cultural",
      "Alinhamento com políticas nacionais",
    ],
    differences: [
      "Nível: operacional vs. estratégico",
      "Abrangência: institucional vs. nacional",
      "Horizonte temporal: imediato vs. longo prazo",
    ],
  },
  {
    source: "9",
    target: "11",
    description: "Dados de qualidade são pré-requisito para explicabilidade efetiva em modelos de machine learning.",
    similarities: ["Contexto de projetos de ML", "Foco em melhoria de resultados", "Abordagem técnica estruturada"],
    differences: [
      "Fase: entrada vs. saída do modelo",
      "Objetivo: alimentar vs. interpretar o modelo",
      "Stakeholders: engenheiros de dados vs. usuários finais",
    ],
  },
  // IA e sociedade connections
  {
    source: "6",
    target: "7",
    description:
      "Os impactos sociais da IA generativa incluem questões de soberania digital e dependência tecnológica.",
    similarities: [
      "Análise de transformações sociais amplas",
      "Preocupação com futuro do Brasil",
      "Discussão sobre autonomia e controle",
    ],
    differences: [
      "Foco: impactos sociais vs. geopolítica",
      "Escala: individual/setorial vs. nacional",
      "Solução: adaptação vs. independência tecnológica",
    ],
  },
  {
    source: "6",
    target: "12",
    description:
      "A IA generativa apresenta riscos tanto para o mercado de trabalho quanto para a integridade da informação democrática.",
    similarities: ["Análise de riscos da IA generativa", "Impactos em escala social", "Necessidade de regulação"],
    differences: [
      "Domínio: mercado de trabalho vs. democracia",
      "Tipo de risco: econômico vs. informacional",
      "Velocidade do impacto: gradual vs. imediato",
    ],
  },
  // soberania nacional connections
  {
    source: "7",
    target: "8",
    description:
      "A regulação de IA para proteção da liberdade de expressão deve considerar a soberania digital nacional.",
    similarities: ["Perspectiva regulatória", "Tensão entre controle e liberdade", "Contexto internacional comparado"],
    differences: [
      "Foco: infraestrutura vs. conteúdo",
      "Ameaça: dependência externa vs. censura",
      "Solução: desenvolvimento nacional vs. marco regulatório",
    ],
  },
  {
    source: "7",
    target: "10",
    description:
      "A estratégia nacional de IA é o principal instrumento para reduzir a dependência tecnológica do Brasil.",
    similarities: [
      "Visão estratégica nacional",
      "Foco em desenvolvimento tecnológico",
      "Necessidade de investimento público",
    ],
    differences: [
      "Abordagem: diagnóstico de riscos vs. plano de ação",
      "Escopo: dependência vs. desenvolvimento",
      "Natureza: análise crítica vs. propositiva",
    ],
  },
  // liberdade de expressão connections
  {
    source: "8",
    target: "6",
    description:
      "A regulação de conteúdo gerado por IA é parte do debate mais amplo sobre impactos sociais da tecnologia.",
    similarities: [
      "Preocupação com transformações sociais",
      "Discussão sobre papel da tecnologia",
      "Necessidade de equilíbrio regulatório",
    ],
    differences: [
      "Foco: regulação vs. impactos amplos",
      "Perspectiva: jurídica vs. sociológica",
      "Solução: leis vs. adaptação social",
    ],
  },
  {
    source: "8",
    target: "13",
    description:
      "Tanto a regulação de IA quanto a moderação automatizada levantam questões sobre censura e liberdade de expressão.",
    similarities: [
      "Tensão entre regulação e liberdade",
      "Riscos de censura algorítmica",
      "Necessidade de transparência",
    ],
    differences: [
      "Agente: estado vs. plataformas privadas",
      "Escopo: conteúdo gerado vs. moderação",
      "Mecanismo: leis vs. algoritmos",
    ],
  },
  {
    source: "12",
    target: "6",
    description:
      "A desinformação gerada por IA é uma das principais preocupações sobre os impactos sociais da IA generativa.",
    similarities: ["Análise de IA generativa", "Impactos negativos potenciais", "Necessidade de contramedidas"],
    differences: [
      "Foco: desinformação específica vs. impactos gerais",
      "Contexto: processos democráticos vs. sociedade ampla",
      "Urgência: imediata (eleições) vs. gradual",
    ],
  },
  {
    source: "12",
    target: "13",
    description:
      "A desinformação gerada por IA e a moderação automatizada são duas faces do desafio da informação online.",
    similarities: [
      "Preocupação com qualidade da informação",
      "Papel das plataformas digitais",
      "Impacto no debate público",
    ],
    differences: [
      "Problema: criação vs. remoção de conteúdo",
      "Direção: produção vs. filtragem",
      "Risco: excesso vs. falta de informação",
    ],
  },
  {
    source: "13",
    target: "6",
    description: "A moderação automatizada é uma aplicação específica de IA com impactos sociais significativos.",
    similarities: ["Análise de sistemas de IA em uso", "Impactos em grande escala", "Preocupação com equidade"],
    differences: [
      "Escopo: moderação específica vs. IA ampla",
      "Natureza: vigilância vs. criação",
      "Solução: transparência vs. adaptação",
    ],
  },
  // privacidade cross-cluster
  {
    source: "14",
    target: "3",
    description:
      "O reconhecimento facial e o direito ao esquecimento são dois aspectos críticos da privacidade na era digital.",
    similarities: ["Foco em privacidade individual", "Base legal na LGPD", "Dados biométricos como sensíveis"],
    differences: [
      "Tipo de dado: biométrico vs. geral",
      "Coleta: automática vs. consentida",
      "Contexto: espaço público vs. digital",
    ],
  },
  {
    source: "14",
    target: "4",
    description:
      "Tanto a anonimização quanto o reconhecimento facial lidam com a tensão entre utilidade e privacidade de dados.",
    similarities: [
      "Dados biométricos e sensíveis",
      "Desafios técnicos de proteção",
      "Trade-off utilidade vs. privacidade",
    ],
    differences: [
      "Objetivo: proteção vs. identificação",
      "Abordagem: técnicas de anonimização vs. regulação",
      "Contexto: datasets vs. vigilância em tempo real",
    ],
  },
  {
    source: "14",
    target: "7",
    description:
      "O uso de reconhecimento facial levanta questões de soberania digital quando a tecnologia é importada.",
    similarities: [
      "Preocupação com tecnologia estrangeira",
      "Riscos para cidadãos brasileiros",
      "Necessidade de regulação nacional",
    ],
    differences: [
      "Foco: tecnologia específica vs. dependência geral",
      "Risco: vigilância vs. vulnerabilidade estratégica",
      "Solução: moratória vs. desenvolvimento nacional",
    ],
  },
  // Additional cross-cluster connections
  {
    source: "11",
    target: "6",
    description:
      "A explicabilidade é fundamental para que a sociedade compreenda e confie nas decisões de sistemas de IA.",
    similarities: ["Preocupação com confiança em IA", "Impacto em múltiplos setores", "Necessidade de transparência"],
    differences: [
      "Abordagem: técnica vs. sociológica",
      "Escopo: decisões específicas vs. impactos gerais",
      "Solução: métodos de XAI vs. políticas públicas",
    ],
  },
]

// Helper function to get link metadata by source and target IDs
export function getLinkMetadata(sourceId: string, targetId: string): ReportLink | undefined {
  return reportLinks.find(
    (link) =>
      (link.source === sourceId && link.target === targetId) || (link.source === targetId && link.target === sourceId),
  )
}

// Cluster-level relationship descriptions
export interface ClusterRelationship {
  cluster1: string
  cluster2: string
  description: string
  similarities: string[]
  differences: string[]
}

export const clusterRelationships: ClusterRelationship[] = [
  {
    cluster1: "vieses",
    cluster2: "IA e sociedade",
    description: "Os vieses algorítmicos são uma das principais manifestações dos impactos sociais negativos da IA.",
    similarities: [
      "Preocupação com equidade e justiça",
      "Análise de sistemas de IA existentes",
      "Propostas de mitigação e regulação",
    ],
    differences: [
      "Escopo: técnico-específico vs. amplo-social",
      "Foco: discriminação vs. transformação",
      "Temporalidade: problemas atuais vs. cenários futuros",
    ],
  },
  {
    cluster1: "vieses",
    cluster2: "governança de dados",
    description: "A governança adequada de dados é essencial para identificar e mitigar vieses em sistemas de IA.",
    similarities: [
      "Foco em qualidade e integridade",
      "Necessidade de processos estruturados",
      "Impacto em decisões automatizadas",
    ],
    differences: [
      "Perspectiva: ética vs. operacional",
      "Objetivo: equidade vs. eficiência",
      "Métricas: justiça vs. qualidade técnica",
    ],
  },
  {
    cluster1: "privacidade",
    cluster2: "governança de dados",
    description: "A privacidade é um pilar fundamental da governança de dados em qualquer organização.",
    similarities: ["Base legal na LGPD", "Necessidade de políticas claras", "Proteção do titular de dados"],
    differences: [
      "Foco: direitos individuais vs. gestão organizacional",
      "Abordagem: compliance vs. otimização",
      "Escopo: dados pessoais vs. todos os dados",
    ],
  },
  {
    cluster1: "privacidade",
    cluster2: "soberania nacional",
    description:
      "A proteção de dados dos cidadãos brasileiros está intrinsecamente ligada à soberania digital nacional.",
    similarities: [
      "Proteção contra agentes externos",
      "Necessidade de infraestrutura nacional",
      "Regulação como instrumento de defesa",
    ],
    differences: [
      "Nível: individual vs. coletivo/nacional",
      "Ameaça: empresas vs. estados estrangeiros",
      "Solução: direitos vs. autonomia tecnológica",
    ],
  },
  {
    cluster1: "soberania nacional",
    cluster2: "IA e sociedade",
    description:
      "O desenvolvimento autônomo de IA é estratégico para que o Brasil defina seu próprio futuro tecnológico.",
    similarities: [
      "Visão de longo prazo para o país",
      "Impactos em múltiplos setores",
      "Necessidade de políticas públicas",
    ],
    differences: [
      "Perspectiva: geopolítica vs. social",
      "Foco: independência vs. adaptação",
      "Prioridade: segurança vs. bem-estar",
    ],
  },
  {
    cluster1: "liberdade de expressão",
    cluster2: "IA e sociedade",
    description:
      "A liberdade de expressão é um direito fundamental afetado pelas transformações sociais causadas pela IA.",
    similarities: [
      "Preocupação com direitos fundamentais",
      "Impacto das plataformas digitais",
      "Necessidade de equilíbrio regulatório",
    ],
    differences: [
      "Foco: direito específico vs. transformação ampla",
      "Ameaça: censura vs. disrupção",
      "Solução: garantias legais vs. adaptação social",
    ],
  },
  {
    cluster1: "liberdade de expressão",
    cluster2: "soberania nacional",
    description: "A regulação de conteúdo online deve equilibrar liberdade de expressão com interesses nacionais.",
    similarities: [
      "Tensão entre controle e liberdade",
      "Papel do estado como regulador",
      "Comparação com outros países",
    ],
    differences: [
      "Prioridade: direitos individuais vs. interesse nacional",
      "Ameaça: censura interna vs. interferência externa",
      "Abordagem: garantias vs. proteção",
    ],
  },
  {
    cluster1: "governança de dados",
    cluster2: "soberania nacional",
    description: "A governança de dados em instituições públicas é estratégica para a soberania digital do Brasil.",
    similarities: [
      "Foco no setor público",
      "Necessidade de capacitação nacional",
      "Infraestrutura como ativo estratégico",
    ],
    differences: [
      "Escala: institucional vs. nacional",
      "Objetivo: eficiência vs. independência",
      "Horizonte: operacional vs. estratégico",
    ],
  },
]

// Helper function to get cluster relationship
export function getClusterRelationship(cluster1: string, cluster2: string): ClusterRelationship | undefined {
  return clusterRelationships.find(
    (rel) =>
      (rel.cluster1 === cluster1 && rel.cluster2 === cluster2) ||
      (rel.cluster1 === cluster2 && rel.cluster2 === cluster1),
  )
}
