export interface ReportLink {
  source: string
  target: string
  description: string
  similarities: string[]
  differences: string[]
}

export const reportLinks: ReportLink[] = [
  // Connections between healthcare AI articles
  {
    source: "1",
    target: "2",
    description: "Ambos os artigos exploram o uso de IA na área da saúde, com foco em privacidade de dados clínicos e dilemas éticos.",
    similarities: [
      "Aplicação de IA em contextos de saúde",
      "Preocupação com privacidade de dados sensíveis",
      "Discussão sobre ética e limites da tecnologia",
      "Análise de vieses algorítmicos em sistemas clínicos",
    ],
    differences: [
      "Foco: engenharia biomédica vs. psicoterapia",
      "Tecnologia: sLLMs locais vs. chatbots terapêuticos",
      "Abordagem: análise técnica vs. reflexão crítica sobre cuidado humano",
    ],
  },
  {
    source: "1",
    target: "4",
    description: "Ambos abordam métodos de IA que preservam a privacidade através de processamento local ou distribuído.",
    similarities: [
      "Foco em privacidade de dados sensíveis",
      "Processamento local/distribuído em vez de nuvem centralizada",
      "Aplicação em contextos que exigem proteção de dados",
      "Análise de viabilidade técnica de abordagens descentralizadas",
    ],
    differences: [
      "Contexto: saúde clínica vs. treinamento distribuído geral",
      "Tecnologia: sLLMs vs. aprendizado federado",
      "Escopo: análise de dados clínicos vs. treinamento colaborativo de modelos",
    ],
  },
  {
    source: "1",
    target: "7",
    description: "Ambos discutem vieses algorítmicos, um no contexto de análise clínica e outro de forma mais ampla em modelos de IA.",
    similarities: [
      "Análise de vieses algorítmicos",
      "Preocupação com impactos de decisões automatizadas",
      "Necessidade de supervisão humana",
      "Discussão sobre ética em IA",
    ],
    differences: [
      "Escopo: contexto clínico específico vs. análise geral de vieses",
      "Foco: viés de centralidade em sLLMs vs. vieses em ML e LLMs",
      "Abordagem: estudo experimental vs. análise teórica abrangente",
    ],
  },
  {
    source: "2",
    target: "7",
    description: "Ambos analisam vieses algorítmicos, especialmente em contextos que envolvem interação humana e decisões sensíveis.",
    similarities: [
      "Foco em vieses algorítmicos em sistemas de IA",
      "Preocupação com ética e responsabilidade",
      "Discussão sobre limites da tecnologia",
      "Necessidade de supervisão humana",
    ],
    differences: [
      "Contexto: saúde mental vs. análise geral de vieses",
      "Foco: chatbots terapêuticos vs. modelos de ML e LLMs",
      "Perspectiva: cuidado humano vs. gestão do conhecimento",
    ],
  },
  {
    source: "2",
    target: "4",
    description: "Ambos abordam privacidade de dados em contextos sensíveis, um em saúde mental e outro em aprendizado federado.",
    similarities: [
      "Preocupação com privacidade de dados pessoais",
      "Análise de vulnerabilidades de privacidade",
      "Discussão sobre proteção de informações sensíveis",
    ],
    differences: [
      "Contexto: psicoterapia vs. treinamento distribuído",
      "Abordagem: reflexão crítica vs. análise técnica",
      "Foco: cuidado humano vs. eficiência computacional",
    ],
  },
  // Cybersecurity and disinformation connections
  {
    source: "3",
    target: "6",
    description: "Ambos discutem como a IA pode ser usada para manipular informações e criar conteúdo enganoso, incluindo deepfakes.",
    similarities: [
      "Análise de deepfakes e manipulação de mídia",
      "Preocupação com desinformação",
      "Impacto social da IA generativa",
      "Necessidade de letramento digital",
    ],
    differences: [
      "Foco: cibersegurança e defesa vs. gestão do conhecimento",
      "Perspectiva: ameaças e defesas vs. fragmentação da verdade",
      "Abordagem: análise técnica vs. análise crítica filosófica",
    ],
  },
  {
    source: "3",
    target: "7",
    description: "Ambos analisam riscos e desafios da IA, um focando em segurança cibernética e outro em vieses algorítmicos.",
    similarities: [
      "Análise de riscos da inteligência artificial",
      "Preocupação com impactos sociais negativos",
      "Necessidade de conscientização e educação",
      "Discussão sobre letramento digital",
    ],
    differences: [
      "Foco: ameaças cibernéticas vs. vieses e discriminação",
      "Perspectiva: segurança vs. ética e justiça",
      "Solução: defesa técnica vs. supervisão humana e debiasing",
    ],
  },
  {
    source: "3",
    target: "10",
    description: "Ambos enfatizam a urgência do letramento digital e da conscientização sobre riscos da IA, especialmente deepfakes.",
    similarities: [
      "Foco em letramento digital e conscientização",
      "Preocupação com deepfakes e desinformação",
      "Necessidade de educação crítica sobre IA",
      "Análise de vulnerabilidades da população",
    ],
    differences: [
      "Escopo: cibersegurança geral vs. letramento em IA específico",
      "Perspectiva: defesa técnica vs. educação cidadã",
      "Foco: ameaças cibernéticas vs. analfabetismo funcional no Brasil",
    ],
  },
  {
    source: "3",
    target: "9",
    description: "Ambos exploram riscos de privacidade relacionados a dados invisíveis ou metadados que podem expor informações pessoais.",
    similarities: [
      "Análise de riscos à privacidade",
      "Foco em dados que podem expor informações pessoais",
      "Discussão sobre vulnerabilidades digitais",
      "Casos reais de exposição de dados",
    ],
    differences: [
      "Tipo de dado: metadados EXIF vs. dados de segurança cibernética",
      "Foco: fotografia e localização vs. ameaças cibernéticas",
      "Abordagem: análise técnica de formato vs. análise de ameaças",
    ],
  },
  // Knowledge management connections
  {
    source: "6",
    target: "7",
    description: "Ambos discutem como a IA afeta a construção e validação do conhecimento, seja através de vieses ou fragmentação da verdade.",
    similarities: [
      "Análise do impacto da IA no conhecimento",
      "Preocupação com manipulação algorítmica",
      "Discussão sobre vieses e distorções",
      "Perspectiva de gestão do conhecimento",
    ],
    differences: [
      "Foco: fragmentação da verdade vs. vieses em modelos",
      "Perspectiva: filosófica vs. técnica",
      "Solução: ceticismo e validação vs. supervisão e debiasing",
    ],
  },
  {
    source: "6",
    target: "8",
    description: "Ambos analisam a evolução do conhecimento na era digital, um focando na fragmentação e outro na trajetória histórica.",
    similarities: [
      "Análise da evolução do conhecimento digital",
      "Perspectiva de gestão do conhecimento",
      "Discussão sobre o papel da IA",
      "Análise de transformações na forma de produzir conhecimento",
    ],
    differences: [
      "Foco: fragmentação e manipulação vs. evolução histórica positiva",
      "Tom: crítico sobre riscos vs. descritivo da trajetória",
      "Solução: defesa crítica vs. modelo híbrido",
    ],
  },
  {
    source: "6",
    target: "10",
    description: "Ambos discutem desinformação e a necessidade de educação crítica para navegar em um ambiente digital manipulado.",
    similarities: [
      "Preocupação com desinformação",
      "Foco em letramento digital e educação crítica",
      "Análise de vulnerabilidades da população",
      "Necessidade de competências defensivas",
    ],
    differences: [
      "Perspectiva: gestão do conhecimento vs. cidadania digital",
      "Foco: fragmentação da verdade vs. analfabetismo funcional",
      "Solução: estratégias organizacionais vs. políticas educacionais",
    ],
  },
  {
    source: "7",
    target: "8",
    description: "Ambos abordam como a IA processa e sintetiza conhecimento, um focando em vieses e outro na evolução do conhecimento coletivo.",
    similarities: [
      "Análise do papel da IA no processamento de conhecimento",
      "Perspectiva de gestão do conhecimento",
      "Discussão sobre modelos de linguagem e LLMs",
      "Preocupação com qualidade e validação do conhecimento",
    ],
    differences: [
      "Foco: vieses e distorções vs. evolução e síntese",
      "Tom: crítico sobre riscos vs. descritivo da trajetória",
      "Solução: supervisão humana vs. modelo híbrido",
    ],
  },
  {
    source: "7",
    target: "10",
    description: "Ambos enfatizam a necessidade de letramento digital para interpretar criticamente as respostas e decisões da IA.",
    similarities: [
      "Foco em letramento digital",
      "Preocupação com interpretação crítica da IA",
      "Necessidade de educação sobre IA",
      "Análise de vulnerabilidades da população",
    ],
    differences: [
      "Contexto: gestão do conhecimento vs. cidadania brasileira",
      "Foco: vieses em modelos vs. analfabetismo funcional",
      "Solução: supervisão técnica vs. políticas educacionais nacionais",
    ],
  },
  {
    source: "8",
    target: "12",
    description: "Ambos analisam plataformas colaborativas de conhecimento, uma focando na evolução histórica e outra em genealogia.",
    similarities: [
      "Análise de plataformas colaborativas de conhecimento",
      "Foco em gestão do conhecimento",
      "Discussão sobre memória coletiva",
      "Tecnologia para preservar e organizar informações",
    ],
    differences: [
      "Escopo: evolução histórica geral vs. genealogia específica",
      "Foco: trajetória do conhecimento vs. preservação de histórias familiares",
      "Perspectiva: análise teórica vs. estudo de caso",
    ],
  },
  {
    source: "8",
    target: "13",
    description: "Ambos abordam gestão do conhecimento, um na evolução histórica e outro na engenharia de software moderna.",
    similarities: [
      "Foco em gestão do conhecimento",
      "Análise de ferramentas digitais colaborativas",
      "Discussão sobre ecossistemas digitais",
      "Importância da organização e compartilhamento de conhecimento",
    ],
    differences: [
      "Escopo: evolução histórica geral vs. engenharia de software",
      "Foco: trajetória do conhecimento vs. práticas técnicas",
      "Perspectiva: análise teórica vs. estudo de caso prático",
    ],
  },
  {
    source: "12",
    target: "13",
    description: "Ambos analisam sistemas de gestão do conhecimento, um em genealogia e outro em engenharia de software.",
    similarities: [
      "Análise de sistemas de gestão do conhecimento",
      "Foco em ferramentas digitais colaborativas",
      "Discussão sobre organização e preservação de informações",
      "Tecnologia para facilitar acesso e compartilhamento",
    ],
    differences: [
      "Domínio: genealogia vs. engenharia de software",
      "Foco: memória coletiva histórica vs. conhecimento técnico",
      "Escala: global vs. organizacional",
    ],
  },
  // Privacy and data protection connections
  {
    source: "4",
    target: "9",
    description: "Ambos abordam aspectos de privacidade de dados, um focando em aprendizado federado e outro em metadados EXIF.",
    similarities: [
      "Foco em privacidade de dados",
      "Análise de riscos de exposição de informações",
      "Discussão sobre proteção de dados pessoais",
      "Preocupação com dados invisíveis ou ocultos",
    ],
    differences: [
      "Abordagem: solução técnica (federated learning) vs. análise de risco (EXIF)",
      "Foco: treinamento de modelos vs. metadados de fotos",
      "Perspectiva: preservação proativa vs. exposição passiva",
    ],
  },
  // Digital inclusion connections
  {
    source: "10",
    target: "11",
    description: "Ambos discutem inclusão digital e letramento, um focando em IA e outro em idosos e governo digital.",
    similarities: [
      "Foco em inclusão digital",
      "Preocupação com vulnerabilidades de grupos específicos",
      "Análise de barreiras ao acesso digital",
      "Necessidade de políticas públicas e educação",
    ],
    differences: [
      "Grupo-alvo: população brasileira geral vs. idosos especificamente",
      "Foco: letramento em IA vs. acesso a serviços governamentais",
      "Risco: desinformação vs. golpes e exclusão de direitos",
    ],
  },
  // Cognitive and social impact connections
  {
    source: "6",
    target: "14",
    description: "Ambos analisam impactos da tecnologia digital na cognição e na forma como as pessoas processam informações.",
    similarities: [
      "Análise de impactos cognitivos da tecnologia digital",
      "Preocupação com atenção e processamento de informações",
      "Discussão sobre mudanças comportamentais",
      "Perspectiva sobre efeitos sociais da tecnologia",
    ],
    differences: [
      "Foco: fragmentação da verdade vs. atenção e memória",
      "Perspectiva: gestão do conhecimento vs. neurociência",
      "Solução: validação crítica vs. adaptação comportamental",
    ],
  },
  {
    source: "8",
    target: "14",
    description: "Ambos analisam como a internet e tecnologias digitais transformam a forma como as pessoas acessam e processam conhecimento.",
    similarities: [
      "Análise da transformação digital",
      "Foco em como as pessoas aprendem e acessam informações",
      "Discussão sobre mudanças na cognição e comportamento",
      "Perspectiva sobre evolução do conhecimento",
    ],
    differences: [
      "Foco: evolução histórica do conhecimento vs. impactos cognitivos",
      "Perspectiva: gestão do conhecimento vs. neurociência",
      "Abordagem: trajetória histórica vs. análise empírica",
    ],
  },
  {
    source: "10",
    target: "14",
    description: "Ambos discutem como o ambiente digital afeta a cognição e a necessidade de educação para navegar essas transformações.",
    similarities: [
      "Análise de impactos do ambiente digital",
      "Preocupação com processamento de informações",
      "Necessidade de educação e letramento",
      "Discussão sobre mudanças comportamentais",
    ],
    differences: [
      "Foco: letramento em IA vs. impactos cognitivos gerais",
      "Perspectiva: cidadania digital vs. neurociência",
      "Solução: políticas educacionais vs. adaptação individual",
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
    cluster1: "privacidade",
    cluster2: "ética em IA",
    description: "A privacidade de dados é um pilar fundamental da ética em IA, especialmente em contextos sensíveis como saúde.",
    similarities: [
      "Preocupação com proteção de dados sensíveis",
      "Necessidade de supervisão ética",
      "Análise de riscos e vulnerabilidades",
    ],
    differences: [
      "Foco: proteção técnica vs. dilemas éticos",
      "Abordagem: soluções técnicas vs. reflexão crítica",
    ],
  },
  {
    cluster1: "privacidade",
    cluster2: "cibersegurança",
    description: "A privacidade e a cibersegurança estão intrinsecamente ligadas na proteção de dados e informações pessoais.",
    similarities: [
      "Foco em proteção de dados",
      "Análise de vulnerabilidades",
      "Preocupação com exposição de informações",
    ],
    differences: [
      "Perspectiva: direitos individuais vs. defesa técnica",
      "Abordagem: compliance vs. detecção de ameaças",
    ],
  },
  {
    cluster1: "vieses",
    cluster2: "IA e sociedade",
    description: "Os vieses algorítmicos são uma das principais manifestações dos impactos sociais negativos da IA.",
    similarities: [
      "Análise de impactos sociais da IA",
      "Preocupação com equidade e justiça",
      "Necessidade de educação e conscientização",
    ],
    differences: [
      "Escopo: técnico-específico vs. amplo-social",
      "Foco: discriminação vs. transformação geral",
    ],
  },
  {
    cluster1: "gestão do conhecimento",
    cluster2: "IA e sociedade",
    description: "A gestão do conhecimento precisa se adaptar aos novos desafios criados pela IA na produção e validação de informações.",
    similarities: [
      "Análise de transformações na produção de conhecimento",
      "Discussão sobre o papel da IA",
      "Preocupação com qualidade e validação",
    ],
    differences: [
      "Perspectiva: organizacional vs. social",
      "Foco: processos vs. impactos cognitivos",
    ],
  },
  {
    cluster1: "inclusão digital",
    cluster2: "IA e sociedade",
    description: "A inclusão digital é essencial para que todos possam se beneficiar e participar criticamente da sociedade mediada por IA.",
    similarities: [
      "Foco em educação e letramento",
      "Preocupação com vulnerabilidades",
      "Necessidade de políticas públicas",
    ],
    differences: [
      "Grupo-alvo: específico vs. geral",
      "Foco: acesso vs. impactos cognitivos",
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

