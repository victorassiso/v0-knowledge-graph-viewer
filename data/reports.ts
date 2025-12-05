export interface ReportNode {
  id: string
  title: string
  cluster: string
  summary: string
  content: string
  links: string[]
  report_link?: string
}

export interface GraphLink {
  source: string
  target: string
}

export const clusterColors: Record<string, string> = {
  Vieses: "#f97316",
  Privacidade: "#06b6d4",
  "IA e sociedade": "#ec4899",
  "Gestão do conhecimento": "#a855f7",
  "Cibersegurança": "#ef4444",
  "Inclusão digital": "#10b981",
  "Ética em IA": "#f59e0b",
}

export const reports: ReportNode[] = [
  {
    id: "1",
    title: "Decodificando a Intenção Humana: IA na Engenharia Biomédica",
    cluster: "Privacidade",
    summary: "Uma análise sobre como os sLLMs locais garantem a soberania dos dados clínicos enquanto enfrentam o desafio dos vieses algorítmicos.",
    content: `## Palavras-chave

- SLLMs

- engenharia biomédica

- privacidade dos dados

- entrevista motivacional

- linguagem natural



## Introdução



A aplicação de Modelos Grandes de Linguagem Pequenos (sLLMs) na área da saúde visa decodificar a subjetividade humana, convertendo nuances emocionais e intenções comunicativas em conhecimento estruturado. Contudo, a adoção dessas ferramentas exige uma abordagem que priorize a privacidade absoluta e a ética, mitigando riscos associados ao uso de nuvens externas.



Foram conduzidos dois experimentos utilizando IA local (modelos Phi-4 e Llama 3.2) para análise de valência hedônica e classificação de intenções em entrevistas motivacionais. Os resultados comprovam a viabilidade técnica da execução local, embora alertem para desafios críticos como o viés de centralidade e a dependência de contexto histórico para decisões clínicas precisas.`,
    links: ["2", "4", "7", "10"],
    report_link: "https://drive.google.com/drive/folders/1dRTx0jPZVqzbG04WQclrWoI2khIodEv7",
  },
  {
    id: "2",
    title: "TerapIA — O Uso da Inteligência Artificial na Psicoterapia",
    cluster: "Ética em IA",
    summary: "Uma reflexão crítica sobre como chatbots de IA podem apoiar — mas não substituir — o cuidado humano na saúde mental.",
    content: `## Palavras-chave

- psicoterapia

- vieses algorítmicos

- solução híbrida

- privacidade de dados

- ética



## Introdução

A crescente popularização de sistemas de inteligência artificial no campo da saúde mental abre novas possibilidades de acesso, suporte e personalização, mas também levanta dilemas éticos e limitações importantes.  

No relatório, investigam-se os mecanismos de funcionamento de chatbots terapêuticos, seus impactos sobre o vínculo clínico e as fronteiras entre apoio tecnológico e cuidado humano. A análise abrange desde benefícios como acessibilidade e redução do estigma até riscos como dependência emocional, padronização de respostas e vulnerabilidades de privacidade.  

O texto convida o leitor a refletir sobre o futuro da psicoterapia em um cenário híbrido, onde a IA atua como ferramenta complementar — jamais substituta — da complexidade insubstituível do terapeuta humano.`,
    links: ["1", "7", "4"],
    report_link: "https://drive.google.com/drive/folders/1mHniGP7G31AyXVmLETXDO-bxmVPDkT3S?usp=sharing"
  },
  {
    id: "3",
    title: "O Impacto da Inteligência Artificial na Cibersegurança",
    cluster: "Cibersegurança",
    summary: "Uma análise sobre como a IA amplifica ameaças cibernéticas enquanto revoluciona os mecanismos de defesa e impacta a sociedade.",
    content: `## Palavras-chave

- cibersegurança

- inteligência artificial

- deepfakes

- phishing automatizado

- letramento digital

- conscientização



## Introdução

A transformação digital integrou a Inteligência Artificial ao cotidiano, tornando-a uma ferramenta central tanto para a economia quanto para a segurança digital.Este relatório explora a dualidade da IA: por um lado, potencializa ameaças como *phishing* altamente personalizado, malwares adaptativos e *deepfakes* que manipulam a realidade.

Por outro lado, o texto detalha como a IA é essencial para a defesa moderna, permitindo a detecção proativa de anomalias e respostas automatizadas. Aborda-se, ainda, o impacto social dessa tecnologia e a urgência do letramento digital para proteger o fator humano, frequentemente o elo mais vulnerável da segurança.`,
    links: ["6", "7", "10", "9"],
    report_link: "https://drive.google.com/drive/folders/1XxWL7-huzdmD_RXYIEUjRFSumXax8hbV"
  },
  {
    id: "4",
    title: "Aprendizado Federado: Um Novo Método para Treinamento Distribuído de Modelos",
    report_link: "https://drive.google.com/file/d/1ZOGp0blnhc2ZHLe0MzOeuKts5XwAq-Kd/view?usp=sharing",
    cluster: "Privacidade",
    summary: "Uma abordagem inovadora que permite o treinamento colaborativo de modelos de IA preservando a privacidade e a eficiência em redes distribuídas.",
    content: `## Palavras-chave

- aprendizado federado

- privacidade de dados

- inteligência artificial distribuída

- computação assíncrona



## Introdução

A dependência tradicional de servidores centralizados para o treinamento de Inteligência Artificial enfrenta hoje barreiras críticas relacionadas à proteção de dados sensíveis e aos custos de transmissão. O Aprendizado Federado inverte essa lógica, permitindo que dispositivos aprendam localmente e compartilhem apenas conhecimento, sem expor as informações brutas.

Este trabalho analisa a viabilidade técnica e ética desse método através de casos de uso na predição de doenças e mobilidade urbana. Além disso, apresenta experimentos práticos comparando arquiteturas síncronas e assíncronas, demonstrando como a abordagem assíncrona oferece maior robustez e eficiência em cenários reais de conexão instável e dados heterogêneos.`,
    links: ["1", "2", "7"],
  },
  {
    id: "5",
    title: "Spotify e investimentos",
    report_link: "https://drive.google.com/drive/folders/1tk0L-i34ntxpFx0hRI1Sc0cupTw6_WV_",
    cluster: "IA e sociedade",
    summary: "Relação entre Investimentos e Músicas",
    content: `## Palavras-chave

- finanças comportamentais

- perfil pessoal

- perfil de investidor

- análise de dados

- gestão de portfólio



## Introdução

O trabalho **"Spotify e Investimentos"**, explora a correlação entre preferências musicais e o perfil de risco financeiro (investimentos). Através da análise de métricas de áudio extraídas da **API do Spotify** — como **energia**, **valência** e **acusticidade** — o sistema propõe um modelo que classifica o usuário em três perfis de investidor: **Conservador**, **Moderado** ou **Agressivo**.



Além da classificação comportamental, o projeto aplica modelos matemáticos de **autorregressão** para prever a volatilidade e o retorno de ativos (como o Ibovespa) e sugere alocações de carteira personalizadas por perfil contendo Renda Fixa, Ações e Criptomoedas.`,
    links: [],
  },
  {
    id: "6",
    title: "O Fim da Realidade Única",
    report_link: "https://drive.google.com/file/d/1TisfW5AY7SnmQ4cTU0oVJzgcVV4WGUgB/view?usp=drive_link",
    cluster: "IA e sociedade",
    summary: "Como a Inteligência Artificial fragmenta a verdade e ameaça a construção do conhecimento.",
    content: `## Palavras-chave

- IA 

- deepfake

- desinformação

- bolhas de filtro

- gestão do conhecimento

- manipulação algorítmica



## Introdução

Este texto apresenta uma análise crítica sobre como a Inteligência Artificial tem acelerado o colapso da "realidade única", ampliando a manipulação de massas por meio de perfilagem psicológica, reforço algorítmico de vieses e produção de mídia sintética. A partir da ótica da Gestão do Conhecimento, o trabalho discute como esses fenômenos comprometem os processos de aquisição, validação e compartilhamento do conhecimento, exigindo novas estratégias organizacionais baseadas em ceticismo, validação cruzada e competências digitais defensivas.`,
    links: ["3", "7", "8", "10", "12"],
  },
  {
    id: "7",
    title: "Vieses em Modelos de IA: Dos Algoritmos de Machine Learning aos LLMs",
    report_link: "https://drive.google.com/file/d/1olvKqsOu91yoA9SvTPF2spC1vvmdsubl/view",
    cluster: "Vieses",
    summary: "Uma análise crítica sobre como a inteligência artificial, ao aprender padrões do mundo real, internaliza e replica distorções e desigualdades sociais.",
    content: `## Palavras-chave

- vieses algorítmicos

- machine learning

- LLMs

- ética em IA

- letramento digital



## Introdução

Este relatório aborda um desafio da gestão do conhecimento atual: a presença de vieses em sistemas de inteligência artificial. O texto discute que a IA não cria conhecimento do zero, mas extrai padrões de dados humanos que carregam valores históricos e exclusões culturais.



A análise percorre desde os fundamentos dos modelos clássicos, onde a escolha manual de variáveis já introduzia discriminação, até os atuais Large Language Models (LLMs). Discute-se como o treinamento massivo com dados da internet faz com que esses modelos absorvam estereótipos e discursos tóxicos em escala. Por fim, reforça-se a necessidade de supervisão humana e o desenvolvimento de letramento digital para interpretar criticamente as respostas da IA.`,
    links: ["1", "2", "6", "8", "10"],
  },
  {
    id: "8",
    title: "A Evolução do Conhecimento Coletivo na Internet: Dos Fóruns à Inteligência Artificial",
    report_link: "https://drive.google.com/file/d/1UuCUoUd-01XDcx7tUaaZ5DIMMRoGbPbv/view?usp=drive_link",
    cluster: "Gestão do conhecimento",
    summary: "Uma análise da trajetória histórica do conhecimento digital, da colaboração em massa à síntese por IA, e seus impactos na Gestão do Conhecimento.",
    content: `## Palavras-chave

- inteligência coletiva

- gestão do conhecimento

- inteligência artificial

- wikis

- evolução digital



## Introdução

Este trabalho traça a trajetória do conhecimento coletivo na internet, identificando quatro fases distintas: os silos das comunidades iniciais (Fóruns/BBS), a era da colaboração em massa (Wikipédia), a fragmentação social (Redes Sociais) e a atual fronteira da síntese por Inteligência Artificial Generativa.



A análise destaca uma mudança radical na disciplina de Gestão do Conhecimento (GC). O modelo tradicional, focado em armazenar e controlar um acervo interno ("arquivista"), tornou-se insuficiente. O novo desafio da GC é atuar como "navegador", desenvolvendo competências para filtrar, validar e integrar conhecimentos gerados em um ecossistema global, caótico e em tempo real.



Conclui-se que o futuro da gestão do conhecimento reside em um modelo híbrido. Neste cenário, a IA assume tarefas de processamento e síntese de larga escala, enquanto os humanos assumem papéis de curadoria ética, validação crítica e questionamento estratégico.`,
    links: ["6", "7", "12", "13"]
  },
  {
    id: "9",
    title: "Metadados EXIF: Estrutura, Riscos e Impactos na Era Digital",
    cluster: "Privacidade",
    summary: "Como dados invisíveis em uma foto podem revelar mais do que você imagina",
    content: `## Palavras-chave

- Metadados EXIF

- Privacidade digital

- Vazato de informação

- geolocalização 

- segurança de informação



## Introdução

A popularização das câmeras digitais e dos smartphones transformou cada fotografia em um pacote de dados invisíveis — os metadados EXIF. Esses registros, muitas vezes desconhecidos pelos usuários, podem incluir localização GPS, data, hora, modelo da câmera e diversas configurações técnicas. A análise do funcionamento interno do formato EXIF revela tanto sua utilidade quanto seus riscos. Casos reais, como o de John McAfee e o episódio do Burger King, demonstram como esses metadados podem expor pessoas, revelar crimes ou gerar consequências inesperadas. O relatório explora a estrutura técnica dos arquivos EXIF, suas vulnerabilidades, debates éticos e o impacto da preservação ou remoção desses dados por plataformas digitais.`,
    links: ["3", "4", "10"],
    report_link: "https://docs.google.com/document/d/1vr4Pr26CeTC_Mrtq8plpTIy3mUl-1vHw8nsot-SAo-o/edit?usp=drivesdk"
  },
  {
    id: "10",
    title: "Necessidade do Letramento em IA na população brasileira",
    report_link: "https://drive.google.com/file/d/1X23aBSPAPhoVGLwnQTdUxTmJiJ_oFokF/view?usp=drive_link",
    cluster: "IA e sociedade",
    summary: "Uma análise sobre os riscos da desinformação e a urgência da educação crítica em uma sociedade mediada por algoritmos.",
    content: `## Palavras-chave

- letramento em IA

- analfabetismo funcional

- deepfakes

- desinformação

- cidadania digital



## Introdução

O avanço acelerado da Inteligência Artificial (IA) transformou a forma como produzimos e interpretamos informações, tornando ferramentas algorítmicas parte constante do cotidiano. No Brasil, porém, essa mudança encontra um obstáculo estrutural: o alto índice de analfabetismo funcional, que afeta cerca de quatro em cada dez brasileiros e aumenta a vulnerabilidade diante das tecnologias digitais.



Sem letramento em IA, grande parte da população tem dificuldade para identificar deepfakes, reconhecer conteúdos manipulados ou compreender decisões automatizadas, o que favorece golpes, desinformação e perda de confiança nas instituições. A sofisticação das ferramentas de geração de conteúdo torna ainda mais urgente capacitar cidadãos para verificar fontes, interpretar algoritmos e exercer uma participação crítica no ambiente digital.



Assim, este relatório destaca a necessidade de consolidar o letramento em IA como um pilar da cidadania contemporânea, defendendo investimentos em educação crítica que permitam à sociedade usar e questionar a IA de maneira ética, consciente e responsável.`,
    links: ["3", "6", "7", "11"],
  },
  {
    id: "11",
    title: "Inclusão de Idosos ao Governo Digital: a ausência virtual do governo",
    report_link: "https://drive.google.com/file/d/17pTflBMYekL1QDKvbG7KDYxRpdTARfkx/view?usp=sharing",
    cluster: "Inclusão digital",
    summary: "Uma análise em como softwares do governo afastam a população idosa de seus direitos e afetam a inclusão digital na terceira idade.",
    content: `## Palavras-chave

- idosos

- inclusão digital

- etarismo digital

- golpes financeiros

- direitos humanos



## Introdução

A exclusão digital vivida por muitos idosos tem se tornado um dos principais entraves para o uso efetivo dos serviços públicos digitais no Brasil. Apesar de dependerem cada vez mais de aplicativos e sistemas para acessar direitos básicos, grande parte encontra obstáculos simples, porém decisivos, como telas confusas, fontes pequenas e excesso de etapas. Isso não só dificulta o acesso a informações importantes, como também aumenta a vulnerabilidade a golpes e a dependência de outras pessoas para realizar tarefas cotidianas.

A importância desse tema ganhou ainda mais destaque com a recente inclusão da "Inclusão digital" no Estatuto da Pessoa Idosa, reforçando a necessidade de políticas públicas e ações educativas voltadas a esse público. Estudos mostram que escolaridade, renda e região influenciam diretamente o uso de serviços digitais, evidenciando o quanto a desigualdade tecnológica acompanha a desigualdade social. Diante disso, torna-se essencial pensar em soluções práticas que aproximem os idosos das tecnologias e fortaleçam sua autonomia no ambiente digital.`,
    links: ["10"],
  },
  {
    id: "12",
    title: "FamilySearch: A maior árvore genealogica do mundo",
    report_link: "https://drive.google.com/file/d/1be-CVW0IrnN3n3LIT-BXMdcmRqrg2sFY/view?usp=drive_link",
    cluster: "Gestão do conhecimento",
    summary: "Como tecnologia, colaboração e memória se unem para preservar histórias familiares em escala global.",
    content: `## Palavras-chave

- genealogia digital  

- gestão do conhecimento  

- memória coletiva  

- colaboração global   



## Introdução

O FamilySearch é hoje a maior e mais influente plataforma de genealogia do mundo, reunindo bilhões de registros históricos digitalizados e conectando pessoas por meio de árvores genealógicas colaborativas. O sistema combina práticas de gestão do conhecimento com tecnologia de ponta para preservar, organizar e compartilhar histórias familiares, permitindo que qualquer pessoa explore suas origens de forma gratuita.



Mais do que um repositório de dados, o FamilySearch impulsiona uma rede global de usuários, eventos culturais e iniciativas educacionais. Suas inovações — como indexação automatizada, análise de imagens e ferramentas de tradução baseadas em IA — apontam para um futuro em que descobrir antepassados e compreender contextos históricos será cada vez mais rápido, acessível e preciso.`,
    links: ["8", "13"],
  },
  {
    id: "13",
    title: "Gestão do Conhecimento na Engenharia de Software",
    cluster: "Gestão do conhecimento",
    summary: "Como ferramentas integradas apoiam o fluxo de criação, organização e compartilhamento de conhecimento técnico na engenharia de software",
    content: `## Palavras-chave

- Gestão do conhecimento

- Engenharia de software

- Ferramentas digitais colaborativas

- Ecossistemas digitais

- Documentação técnica



## Introdução

A engenharia de software moderna depende profundamente da capacidade de capturar, organizar e disseminar conhecimento dentro de equipes que operam em ambientes de alta complexidade, mudanças constantes e grande volume de informação. Nesse contexto, a gestão do conhecimento deixa de ser um conceito abstrato e passa a ser uma necessidade prática e cotidiana: sem mecanismos claros de registro, compartilhamento e integração, o trabalho técnico se fragmenta, decisões se perdem e a comunicação entre equipes se torna ineficiente.

Este relatório apresenta um estudo de caso sobre como um ecossistema digital — composto por ferramentas como GitHub, Notion, Slack, Linear, VSCode, Figma, Incident.io e Grafana — sustenta o fluxo de conhecimento em uma empresa de engenharia de software com mais de 900 funcionários. A partir da análise do papel individual de cada ferramenta e de suas integrações, o relatório discute como conhecimento tácito e explícito se convertem em práticas reais de colaboração, documentação, coordenação e tomada de decisão técnica.`,
    links: ["8", "12"],
    report_link: "https://docs.google.com/document/d/12fFULiAbFXz6njmzgtU8uYaveE2D1v0-3wSAAc0O4eA/edit?usp=sharing"
  },
  {
    id: "14",  
    title: "Impactos Cognitivos da Internet",
    report_link: "https://drive.google.com/file/d/1XRhlOtnhZuUO7C2xe7nLfGzc6Wkfz_C4/view",
    cluster: "IA e sociedade",
    summary: "Como o ambiente digital influencia atenção, memória e sociabilidade humanas",
    content: `## Palavras-chave



- atenção digital  

- memória transacional  

- sobrecarga informacional  

- sociabilidade online  

- efeitos cognitivos da Internet  



## Introdução



A expansão da Internet transformou a forma como as pessoas aprendem, trabalham, se relacionam e acessam informações. Embora os benefícios — como rapidez, disponibilidade e eficiência — sejam evidentes, seus efeitos cognitivos mais profundos ainda são motivo de estudo.  



O relatório analisou como três dimensões fundamentais do funcionamento mental — **atenção**, **memória** e **sociabilidade** — são moldadas pelo uso contínuo de plataformas digitais. A partir de evidências empíricas e interpretações neurocientíficas, discutem-se mudanças comportamentais, adaptações neurais e implicações sociais decorrentes da interação intensa com ambientes digitais.`,
    links: ["6", "8", "10"],
  },
]

export const graphLinks: GraphLink[] = reports.flatMap((report) =>
  report.links.map((targetId) => ({
    source: report.id,
    target: targetId,
  })),
)
