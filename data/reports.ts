export interface ReportNode {
  id: string
  title: string
  cluster: string
  summary: string
  content: string
  links: string[]
}

export interface GraphLink {
  source: string
  target: string
}

export const clusterColors: Record<string, string> = {
  vieses: "#f97316",
  "governança de dados": "#06b6d4",
  privacidade: "#8b5cf6",
  "soberania nacional": "#22c55e",
  "liberdade de expressão": "#eab308",
  "IA e sociedade": "#ec4899",
}

export const reports: ReportNode[] = [
  {
    id: "1",
    title: "Vieses Algorítmicos em Sistemas de Recrutamento",
    cluster: "vieses",
    summary:
      "Análise dos vieses presentes em algoritmos de seleção de candidatos e seus impactos na diversidade corporativa.",
    content: `Este estudo examina como os algoritmos de recrutamento automatizado podem perpetuar e amplificar preconceitos existentes na sociedade.

## Introdução
A crescente adoção de sistemas de inteligência artificial no processo de recrutamento levanta questões importantes sobre equidade e justiça. Estes sistemas, treinados com dados históricos, frequentemente reproduzem padrões discriminatórios.

## Metodologia
Foram analisados 15 sistemas de recrutamento utilizados por empresas brasileiras, avaliando suas decisões em relação a gênero, raça e idade dos candidatos.

## Resultados
Os resultados indicam que 73% dos sistemas apresentaram algum tipo de viés mensurável, com discriminação mais acentuada contra mulheres em cargos técnicos e candidatos acima de 45 anos.

## Conclusão
É fundamental implementar auditorias regulares e mecanismos de transparência para garantir que sistemas de IA não perpetuem discriminação no mercado de trabalho.`,
    links: ["2", "6", "11"],
  },
  {
    id: "2",
    title: "Discriminação de Gênero em Modelos de Linguagem",
    cluster: "vieses",
    summary: "Investigação sobre como modelos de linguagem reproduzem estereótipos de gênero em suas saídas.",
    content: `Este trabalho investiga a presença de estereótipos de gênero em grandes modelos de linguagem e propõe métricas para sua avaliação.

## Contextualização
Os modelos de linguagem são treinados com grandes volumes de texto da internet, absorvendo padrões culturais e sociais, incluindo preconceitos.

## Análise Realizada
Foram testados diversos prompts relacionados a profissões, características pessoais e papéis sociais em três modelos de linguagem populares.

## Descobertas Principais
- Profissões técnicas são associadas predominantemente ao gênero masculino
- Adjetivos emocionais são mais frequentes em contextos femininos
- Modelos mais recentes apresentam menos viés, mas ainda significativo

## Recomendações
Sugerimos a implementação de técnicas de debiasing durante o treinamento e a criação de benchmarks específicos para avaliação contínua.`,
    links: ["1", "6"],
  },
  {
    id: "3",
    title: "LGPD e o Direito ao Esquecimento Digital",
    cluster: "privacidade",
    summary: "Estudo sobre a aplicação do direito ao esquecimento no contexto da Lei Geral de Proteção de Dados.",
    content: `Análise jurídica e técnica sobre os desafios de implementação do direito ao esquecimento digital no Brasil.

## Fundamentação Legal
A LGPD estabelece o direito do titular de solicitar a eliminação de seus dados pessoais, mas a implementação prática enfrenta diversos obstáculos.

## Desafios Técnicos
- Sistemas distribuídos dificultam a remoção completa
- Backups e caches podem manter cópias dos dados
- Machine learning pode ter "memorizado" informações pessoais

## Casos Analisados
Foram estudados 50 pedidos de eliminação de dados em empresas brasileiras, analisando o tempo de resposta e a efetividade da remoção.

## Propostas de Solução
O estudo propõe um framework técnico-jurídico para garantir a efetiva implementação do direito ao esquecimento em sistemas de IA.`,
    links: ["4", "5", "10"],
  },
  {
    id: "4",
    title: "Anonimização de Dados em Datasets de Treinamento",
    cluster: "privacidade",
    summary: "Técnicas e limitações da anonimização de dados pessoais utilizados no treinamento de modelos de IA.",
    content: `Este relatório examina as técnicas atuais de anonimização e seus limites frente a ataques de reidentificação.

## O Problema da Anonimização
Dados considerados anônimos podem ser reidentificados quando combinados com outras fontes de informação, comprometendo a privacidade dos indivíduos.

## Técnicas Avaliadas
- K-anonimato
- L-diversidade
- Privacidade diferencial
- Generalização e supressão

## Experimentos Realizados
Testamos a resistência de cada técnica contra ataques de linkage em um dataset de saúde com 100.000 registros.

## Resultados
A privacidade diferencial mostrou-se mais robusta, porém com maior impacto na utilidade dos dados para treinamento de modelos.`,
    links: ["3", "9"],
  },
  {
    id: "5",
    title: "Governança de Dados em Instituições Públicas",
    cluster: "governança de dados",
    summary: "Framework para implementação de governança de dados em órgãos do governo federal brasileiro.",
    content: `Proposta de modelo de governança de dados adaptado à realidade das instituições públicas brasileiras.

## Contexto Institucional
As instituições públicas brasileiras enfrentam desafios únicos na gestão de dados, incluindo sistemas legados, cultura organizacional e restrições orçamentárias.

## Modelo Proposto
O framework propõe cinco pilares:
1. Estrutura organizacional com papéis definidos
2. Políticas e procedimentos documentados
3. Arquitetura de dados integrada
4. Gestão da qualidade de dados
5. Conformidade e segurança

## Implementação Piloto
O modelo foi testado em três órgãos federais durante 12 meses, com resultados positivos em termos de qualidade de dados e conformidade regulatória.

## Lições Aprendidas
A mudança cultural foi identificada como o maior desafio, requerendo programas contínuos de capacitação e engajamento.`,
    links: ["3", "9", "10"],
  },
  {
    id: "6",
    title: "Impactos Sociais da IA Generativa",
    cluster: "IA e sociedade",
    summary: "Análise dos impactos da IA generativa no mercado de trabalho criativo e na produção de conhecimento.",
    content: `Estudo interdisciplinar sobre as transformações sociais provocadas pela popularização de ferramentas de IA generativa.

## Panorama Atual
A explosão de ferramentas como ChatGPT, Midjourney e similares está transformando rapidamente diversas profissões e a forma como produzimos conhecimento.

## Setores Analisados
- Produção de conteúdo escrito
- Design gráfico e ilustração
- Programação de software
- Educação e pesquisa acadêmica

## Impactos Identificados
- Automatização de tarefas rotineiras
- Necessidade de requalificação profissional
- Questões sobre autoria e originalidade
- Democratização do acesso a ferramentas criativas

## Cenários Futuros
Projetamos três cenários para os próximos 10 anos, variando de integração harmoniosa a disrupção significativa do mercado de trabalho.`,
    links: ["1", "2", "7", "12"],
  },
  {
    id: "7",
    title: "Soberania Digital e Dependência Tecnológica",
    cluster: "soberania nacional",
    summary: "Análise da dependência brasileira de infraestrutura tecnológica estrangeira e seus riscos estratégicos.",
    content: `Este trabalho examina os riscos da dependência de tecnologias estrangeiras para a soberania digital brasileira.

## Diagnóstico da Situação Atual
O Brasil depende majoritariamente de:
- Cloud computing de provedores americanos
- Sistemas operacionais e software de base estrangeiros
- Hardware importado
- Modelos de IA desenvolvidos no exterior

## Riscos Identificados
- Vulnerabilidade a sanções internacionais
- Falta de controle sobre dados sensíveis
- Dependência em infraestrutura crítica
- Limitações ao desenvolvimento tecnológico nacional

## Iniciativas Existentes
Mapeamos 23 iniciativas governamentais e privadas voltadas ao desenvolvimento de tecnologia nacional.

## Recomendações Estratégicas
Propomos uma política integrada de fomento à tecnologia nacional, com foco em áreas estratégicas como IA, semicondutores e computação em nuvem.`,
    links: ["8", "6", "10"],
  },
  {
    id: "8",
    title: "Regulação de IA e Proteção da Liberdade de Expressão",
    cluster: "liberdade de expressão",
    summary:
      "Tensões entre a necessidade de regulação de conteúdo gerado por IA e a garantia da liberdade de expressão.",
    content: `Análise jurídica das tensões entre regulação de IA e direitos fundamentais de expressão.

## O Dilema Regulatório
A regulação de sistemas de IA que produzem ou moderam conteúdo online levanta questões complexas sobre liberdade de expressão.

## Casos Emblemáticos
- Remoção automatizada de conteúdo legítimo
- Vieses em sistemas de recomendação
- Deepfakes e desinformação
- Moderação de conteúdo político

## Análise Comparada
Comparamos as abordagens regulatórias da União Europeia, Estados Unidos, China e Brasil.

## Proposta de Equilíbrio
Sugerimos um modelo regulatório que equilibre a proteção contra danos com a preservação do espaço público de debate, incluindo mecanismos de transparência e recurso.`,
    links: ["7", "6", "13"],
  },
  {
    id: "9",
    title: "Qualidade de Dados para Machine Learning",
    cluster: "governança de dados",
    summary: "Métricas e processos para garantia de qualidade de dados utilizados em projetos de machine learning.",
    content: `Framework para avaliação e melhoria da qualidade de dados em projetos de aprendizado de máquina.

## Importância da Qualidade de Dados
A máxima "garbage in, garbage out" é especialmente relevante em ML, onde a qualidade dos dados determina diretamente a qualidade dos modelos.

## Dimensões de Qualidade Avaliadas
- Completude
- Consistência
- Acurácia
- Atualidade
- Unicidade
- Conformidade

## Metodologia Proposta
Desenvolvemos um pipeline automatizado para avaliação contínua da qualidade de dados, integrado ao ciclo de vida de projetos de ML.

## Resultados Práticos
A implementação do framework em cinco projetos resultou em melhoria média de 15% na performance dos modelos treinados.`,
    links: ["4", "5", "11"],
  },
  {
    id: "10",
    title: "Estratégia Nacional de Inteligência Artificial",
    cluster: "soberania nacional",
    summary: "Análise crítica da Estratégia Brasileira de Inteligência Artificial e propostas de aprimoramento.",
    content: `Avaliação da EBIA e proposta de diretrizes complementares para o desenvolvimento de IA no Brasil.

## Contexto Internacional
Mais de 60 países já publicaram estratégias nacionais de IA. O Brasil lançou sua estratégia em 2021.

## Análise da EBIA
Pontos fortes:
- Visão abrangente
- Foco em pesquisa e inovação
- Consideração de aspectos éticos

Lacunas identificadas:
- Financiamento insuficiente
- Falta de metas mensuráveis
- Desconexão entre academia e indústria

## Benchmarking Internacional
Comparamos a EBIA com estratégias de países como Canadá, Singapura e Alemanha.

## Propostas de Aprimoramento
Sugerimos a criação de um fundo soberano para IA, incentivos fiscais específicos e programas de formação de talentos.`,
    links: ["7", "5", "3"],
  },
  {
    id: "11",
    title: "Explicabilidade de Modelos de IA em Decisões Críticas",
    cluster: "governança de dados",
    summary: "Requisitos técnicos e normativos para explicabilidade de IA em contextos de alto risco.",
    content: `Estudo sobre métodos de explicabilidade e sua aplicação em domínios críticos como saúde, justiça e finanças.

## O Problema da Caixa Preta
Modelos complexos de ML frequentemente operam como "caixas pretas", dificultando a compreensão de suas decisões.

## Técnicas de Explicabilidade
- LIME (Local Interpretable Model-agnostic Explanations)
- SHAP (SHapley Additive exPlanations)
- Attention visualization
- Counterfactual explanations

## Requisitos Normativos
A LGPD e o AI Act europeu estabelecem requisitos de explicabilidade que impactam projetos de IA no Brasil.

## Estudo de Caso
Implementamos técnicas de explicabilidade em um modelo de análise de crédito, avaliando a compreensão das explicações por diferentes stakeholders.`,
    links: ["1", "9", "6"],
  },
  {
    id: "12",
    title: "Desinformação Gerada por IA e Processos Democráticos",
    cluster: "liberdade de expressão",
    summary: "Impactos da desinformação produzida por IA generativa nas eleições e no debate público.",
    content: `Análise dos riscos da IA generativa para a integridade da informação em contextos democráticos.

## Cenário de Ameaças
A capacidade de gerar texto, áudio e vídeo convincentes em escala representa uma nova categoria de risco para processos democráticos.

## Tipologia de Conteúdo Malicioso
- Deepfakes de figuras políticas
- Artigos e notícias falsas automatizadas
- Perfis falsos em redes sociais
- Manipulação de áudio em contexto eleitoral

## Estudos de Caso
Analisamos incidentes documentados nas eleições de 2022 no Brasil e em outros países.

## Contramedidas
Propomos um conjunto de medidas técnicas, regulatórias e educacionais para mitigar os riscos identificados.`,
    links: ["8", "6", "13"],
  },
  {
    id: "13",
    title: "Moderação Automatizada e Censura Algorítmica",
    cluster: "liberdade de expressão",
    summary: "Limites e problemas da moderação automatizada de conteúdo em plataformas digitais.",
    content: `Investigação sobre os impactos da moderação algorítmica na liberdade de expressão online.

## O Papel das Plataformas
Grandes plataformas utilizam IA para moderar bilhões de peças de conteúdo diariamente, com implicações significativas para a liberdade de expressão.

## Problemas Identificados
- Remoções injustificadas de conteúdo legítimo
- Vieses contra grupos minoritários
- Falta de transparência nos critérios
- Mecanismos de recurso inadequados

## Metodologia de Pesquisa
Coletamos e analisamos 10.000 casos de moderação em três plataformas principais.

## Resultados
Encontramos taxas de erro significativas e padrões de discriminação algorítmica, especialmente contra conteúdo em português.

## Propostas de Melhoria
Sugerimos requisitos de transparência, auditorias independentes e mecanismos robustos de recurso humano.`,
    links: ["8", "12", "6"],
  },
  {
    id: "14",
    title: "Privacidade em Sistemas de Reconhecimento Facial",
    cluster: "privacidade",
    summary: "Análise dos riscos à privacidade do uso de reconhecimento facial em espaços públicos.",
    content: `Estudo sobre a implantação de sistemas de reconhecimento facial no Brasil e seus impactos na privacidade.

## Panorama da Adoção
O reconhecimento facial está sendo adotado rapidamente em:
- Segurança pública
- Controle de acesso
- Autenticação bancária
- Transporte público

## Riscos à Privacidade
- Vigilância massiva sem consentimento
- Criação de perfis comportamentais
- Erros de identificação com consequências graves
- Uso por agentes privados sem regulação

## Análise Legal
A LGPD classifica dados biométricos como sensíveis, mas a aplicação prática é inconsistente.

## Recomendações
Propomos uma moratória no uso de RF em espaços públicos até a criação de marco regulatório específico.`,
    links: ["3", "4", "7"],
  },
]

export const graphLinks: GraphLink[] = reports.flatMap((report) =>
  report.links.map((targetId) => ({
    source: report.id,
    target: targetId,
  })),
)
