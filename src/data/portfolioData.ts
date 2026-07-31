export interface PortfolioCopy {
  name: string;
  title: string;
  tagline: string;
  about_p1: string;
  about_p2: string;
  about_p3: string;
  frontend_pitch: string;
  ai_pitch: string;
  cta: string;
  contact_email: string;
  contact_github: string;
  contact_linkedin: string;
  contact_scholar: string;
}

export type TimelineSide = 'fe' | 'bridge' | 'ai';

export interface TimelineEntry {
  year: string;
  title: string;
  org: string;
  side: TimelineSide;
  blurb: string;
}

export interface ProjectPipelineStep {
  label: string;
  value: string;
}

export type CodeTokenType = 'plain' | 'keyword' | 'string' | 'func';

export interface CodeToken {
  text: string;
  type?: CodeTokenType;
}

export type CodeLine = CodeToken[];

export interface ProjectDemo {
  kind: 'notebook' | 'clip' | 'none';
  thumbnailLabel: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ProjectEntry {
  id: string;
  name: string;
  tag: 'AI/ML' | 'Full-stack' | 'Frontend';
  tagline: string;
  status?: string;
  badges: string[];
  pipeline: ProjectPipelineStep[];
  abstract: string;
  code: CodeLine[];
  demo: ProjectDemo;
  stack: string[];
  keyMetric: string;
}

export interface EducationInfo {
  degree: string;
  program: string;
  status: string;
  statusNote: string;
  focus: string[];
}

export interface SkillAttention {
  head: string;
  pct: number;
  tone: 'cyan' | 'violet' | 'amber';
  val: string;
}

// Placeholder copy — swap these values for real content when ready.
export const portfolioCopy: PortfolioCopy = {
  name: 'Steve Vinsensius Jo',
  title: 'Full-Stack AI Engineer',
  tagline:
    'Building intelligent products end-to-end — from the model in the backend to the pixel in the browser.',
  about_p1:
    "My first real job was a frontend internship — React and TypeScript, December 2018 through February 2020. Fourteen months of learning that the last few pixels are the hardest ones: the gap between a page that loads and a page that actually feels good to use.",
  about_p2:
    "Then the market went sideways, the way it did for a lot of people around then. I spent a few years looking for the next engineering role, and worked an administrative job in the meantime to pay the bills. Not the plan, but it's the honest version. In January 2026 I started a Master of Engineering in Applied Data Science — my way back into building things, this time with a focus on NLP and getting language models to actually hold up in production. The program wraps up in December 2026, and I'm looking for a co-op or internship starting January 2027 to put it to use.",
  about_p3:
    "What I actually care about is the seam between the model and the person using it — making sure a clever backend doesn't get ruined by a clunky interface. Also, for the record: I do my best work early in the morning, and I don't drink coffee. Just wired that way.",
  frontend_pitch: 'React · TypeScript · Component systems · Accessibility · Performance budgets',
  ai_pitch: 'PyTorch · TensorFlow · Hugging Face · LangChain · RAG · Vector DBs · scikit-learn',
  cta: 'Ask the bot about my background',
  contact_email: 'steve.v.jo@gmail.com',
  contact_github: 'github.com/stevejo12',
  contact_linkedin: 'linkedin.com/in/stevevjo',
  contact_scholar: 'scholar.google.com/citations?user=JH_cWYIAAAAJ&hl=en',
};

export const portfolioTimeline: TimelineEntry[] = [
  {
    year: 'Dec 2018',
    title: 'Frontend Engineer Intern',
    org: 'First role · React + TypeScript',
    side: 'fe',
    blurb: 'Component libraries, design-system work, performance audits. 14 months of shipping pixels.',
  },
  {
    year: 'Feb 2020',
    title: 'End of frontend chapter',
    org: 'Internship complete',
    side: 'fe',
    blurb: 'Closed the loop on a year of production frontend.',
  },
  {
    year: '2020 – 2025',
    title: 'Career reset',
    org: 'Job search, then administrative work',
    side: 'bridge',
    blurb:
      'Stepped away from full-time engineering during a tough hiring market; spent the back half of this stretch in an administrative role while preparing to return to technical work.',
  },
  {
    year: 'Jan 2026',
    title: 'Master of Engineering — Applied Data Science',
    org: 'Graduate program · in progress',
    side: 'ai',
    blurb: 'Returning to technical work with a MEng focused on NLP, RAG, and production ML.',
  },
  {
    year: 'Now',
    title: 'Mid-program, shipping projects',
    org: 'Building portfolio projects alongside coursework',
    side: 'ai',
    blurb: 'Shipping projects (ChatCSV, IDS capstone writeup) while finishing the program, which wraps up December 2026.',
  },
  {
    year: 'Jan 2027',
    title: 'Co-op / internship search',
    org: 'Open to full-stack AI/ML engineering roles',
    side: 'ai',
    blurb: 'Looking to start a co-op or internship right after finishing the program, building on both the frontend chapter and the MEng.',
  },
];

export const portfolioProjects: ProjectEntry[] = [
  {
    id: 'cmapss',
    name: 'C-MAPSS Conformal Prediction',
    tag: 'AI/ML',
    tagline: 'Evaluation framework for uncertainty-aware remaining-useful-life estimation.',
    badges: ['Python', 'NumPy', 'Conformal Prediction'],
    pipeline: [
      { label: 'Ingestion', value: 'Turbofan sensor time series' },
      { label: 'Storage / Retrieval', value: 'C-MAPSS dataset splits' },
      { label: 'Inference', value: 'Conformal prediction, 4×3×2 grid' },
      { label: 'UI', value: 'Results notebook + plots' },
    ],
    abstract:
      "Point predictions understate uncertainty in remaining-useful-life estimation. This project builds an evaluation framework for conformal prediction applied to NASA's C-MAPSS turbofan degradation dataset, sweeping a 4×3×2 grid of models, coverage targets, and data splits, and comparing RMSE against NASA score, empirical coverage, and Winkler score to characterize the accuracy/uncertainty trade-off.",
    code: [
      [
        { text: 'for', type: 'keyword' },
        { text: ' model, alpha, split ' },
        { text: 'in', type: 'keyword' },
        { text: ' product(MODELS, ALPHAS, SPLITS):' },
      ],
      [{ text: '    preds, intervals = conformal_predict(model, X_test, alpha=alpha)' }],
      [{ text: '    scores[model][alpha][split] = evaluate(preds, intervals, y_test)' }],
    ],
    demo: {
      kind: 'notebook',
      thumbnailLabel: 'results\nplots',
      title: 'Notebook, not a hosted demo',
      subtitle: 'Pure evaluation framework — results live in the repo.',
      ctaLabel: 'view repo →',
      ctaHref: '#',
    },
    stack: ['Python', 'NumPy'],
    keyMetric: '4×3×2 grid',
  },
  {
    id: 'devils-advocate',
    name: "Devil's Advocate",
    tag: 'Full-stack',
    tagline: 'Multi-agent debate engine — three personas argue a proposition in real time.',
    badges: ['FastAPI', 'React', 'SSE'],
    pipeline: [
      { label: 'Ingestion', value: 'User debate topic' },
      { label: 'Storage / Retrieval', value: 'In-memory debate state' },
      { label: 'Inference', value: '3-persona LLM orchestration' },
      { label: 'UI', value: 'React + SSE stream' },
    ],
    abstract:
      'Large language models tend toward agreeable, single-perspective outputs when used as decision-support tools. This project explores whether structured multi-agent disagreement — three personas (Pragmatist, Contrarian, Wildcard) arguing a proposition in real time — produces more robust reasoning traces than single-model prompting. The system streams each turn over SSE as it is generated, treating latency and perceived responsiveness as first-class product constraints rather than an afterthought.',
    code: [
      [
        { text: 'async def', type: 'keyword' },
        { text: ' ' },
        { text: 'stream_debate', type: 'func' },
        { text: '(topic: str):' },
      ],
      [
        { text: '    ' },
        { text: 'async for', type: 'keyword' },
        { text: ' turn ' },
        { text: 'in', type: 'keyword' },
        { text: ' debate_engine.run(topic, personas=PERSONAS):' },
      ],
      [
        { text: '        ' },
        { text: 'yield', type: 'keyword' },
        { text: ' ' },
        { text: 'f"data: {json.dumps(turn)}\\n\\n"', type: 'string' },
      ],
      [
        { text: '        ' },
        { text: 'await', type: 'keyword' },
        { text: ' asyncio.sleep(' },
        { text: '0.05', type: 'string' },
        { text: ')' },
      ],
    ],
    demo: {
      kind: 'clip',
      thumbnailLabel: 'recorded\ndemo clip',
      title: '15–20s walkthrough',
      subtitle: 'Shown by default — free-tier hosting cold-starts slowly.',
      ctaLabel: 'try it live →',
      ctaHref: '#',
    },
    stack: ['FastAPI', 'React', 'SSE'],
    keyMetric: '3 personas',
  },
  {
    id: 'ids-capstone',
    name: 'IDS Capstone',
    tag: 'AI/ML',
    tagline: 'Two-stage hybrid intrusion detection for IoT network traffic.',
    status: 'in progress',
    badges: ['PyTorch', 'Autoencoder', 'scikit-learn'],
    pipeline: [
      { label: 'Ingestion', value: 'Raw network flow captures' },
      { label: 'Storage / Retrieval', value: 'Cleaned, feature-engineered splits (CIC IoT-DIAD)' },
      { label: 'Inference', value: 'Autoencoder → classifier' },
      { label: 'UI', value: 'Research notebook (in progress)' },
    ],
    abstract:
      "Modern IoT intrusion detection must catch both known attack signatures and unseen anomalies. As part of a capstone team, I owned the data pipeline: ingesting raw network-flow captures across five attack categories plus benign traffic from the CIC IoT-DIAD dataset, then cleaning and feature-engineering the splits that feed the team's two-stage hybrid architecture — an autoencoder trained on benign traffic to flag reconstruction-error anomalies, followed by a supervised classifier for attack-type discrimination.",
    code: [
      [
        { text: 'def', type: 'keyword' },
        { text: ' ' },
        { text: 'build_flow_features', type: 'func' },
        { text: '(raw_capture: pd.DataFrame) -> pd.DataFrame:' },
      ],
      [{ text: '    flows = dedupe_and_align(raw_capture)' }],
      [{ text: '    flows = engineer_flow_features(flows)' }],
      [
        { text: '    ' },
        { text: 'return', type: 'keyword' },
        { text: ' flows.assign(label=map_attack_labels(flows, ATTACK_TYPES))' },
      ],
    ],
    demo: {
      kind: 'none',
      thumbnailLabel: 'results\nnotebook',
      title: 'No live demo yet',
      subtitle: 'Capstone in progress — GitHub repo tracks current results.',
      ctaLabel: 'view repo →',
      ctaHref: '#',
    },
    stack: ['PyTorch', 'scikit-learn'],
    keyMetric: '2-stage hybrid',
  },
  {
    id: 'chatcsv',
    name: 'ChatCSV',
    tag: 'AI/ML',
    tagline: 'Upload any tabular file, have a conversation with it — SQL, charts, and plain-English answers back.',
    status: 'building',
    badges: ['FastAPI', 'React', 'Postgres', 'OpenRouter'],
    pipeline: [
      { label: 'Ingestion', value: 'CSV / Excel / JSON upload' },
      { label: 'Storage / Retrieval', value: 'Per-session Postgres schema (24h TTL)' },
      { label: 'Inference', value: 'NL → SQL via OpenRouter, few-shot + RAG' },
      { label: 'UI', value: 'Editable SQL + auto-picked charts' },
    ],
    abstract:
      "ChatCSV is a natural-language interface to structured data, currently in active development. Users will upload a CSV, Excel, or JSON file and ask questions in English — the system generates SQL, executes it against a per-session Postgres schema, and returns results with an auto-picked chart and a plain-English narrative, with the SQL left editable rather than hidden. It's a direct extension of the RAG + few-shot retrieval pattern from an earlier Eurostat NL-to-SQL project, generalized from a curated schema to arbitrary user uploads, with a threaded conversation layer for follow-ups and a planned five-model LLM evaluation to pick the production default.",
    code: [
      [
        { text: 'def', type: 'keyword' },
        { text: ' ' },
        { text: 'generate_sql', type: 'func' },
        { text: '(prompt: str, model: str, schema: dict, history: list) -> SQLResponse:' },
      ],
      [{ text: '    # routes through OpenRouter — swap models for the eval, zero rewiring' }],
      [{ text: '    ...' }],
    ],
    demo: {
      kind: 'none',
      thumbnailLabel: 'build\nin progress',
      title: 'Build in progress',
      subtitle: 'V1 spec written — 2–3 week build starting soon. Full writeup coming with the eval results.',
      ctaLabel: 'view repo →',
      ctaHref: '#',
    },
    stack: ['FastAPI', 'React', 'Postgres'],
    keyMetric: 'V1 spec ready',
  },
  {
    id: 'spendlens',
    name: 'SpendLens',
    tag: 'Full-stack',
    tagline: 'Dockerized microservice that categorizes personal-finance transactions.',
    badges: ['FastAPI', 'Docker', 'scikit-learn', 'pytest'],
    pipeline: [
      { label: 'Ingestion', value: 'Transaction CSV / API' },
      { label: 'Storage / Retrieval', value: 'Stateless per-request' },
      { label: 'Inference', value: 'TF-IDF + logistic regression' },
      { label: 'UI', value: 'Category JSON response' },
    ],
    abstract:
      'Personal finance tools require categorization that is both fast and auditable. This project treats transaction categorization as a constrained classification problem rather than reaching for a heavier model: a TF-IDF representation feeds a logistic regression classifier, packaged as a Dockerized FastAPI microservice with a full pytest suite covering edge cases in merchant-string normalization.',
    code: [
      [{ text: 'pipeline = Pipeline([' }],
      [
        { text: '    (' },
        { text: '"tfidf"', type: 'string' },
        { text: ', TfidfVectorizer(ngram_range=(' },
        { text: '1', type: 'string' },
        { text: ', ' },
        { text: '2', type: 'string' },
        { text: '))),' },
      ],
      [
        { text: '    (' },
        { text: '"clf"', type: 'string' },
        { text: ', LogisticRegression(max_iter=' },
        { text: '1000', type: 'string' },
        { text: ')),' },
      ],
      [{ text: '])' }],
      [{ text: 'pipeline.fit(X_train, y_train)' }],
    ],
    demo: {
      kind: 'clip',
      thumbnailLabel: 'recorded\ndemo clip',
      title: '15–20s walkthrough',
      subtitle: 'Shown by default — free-tier hosting cold-starts slowly.',
      ctaLabel: 'try it live →',
      ctaHref: '#',
    },
    stack: ['FastAPI', 'Docker', 'scikit-learn'],
    keyMetric: 'V1 complete',
  },
];

export const portfolioEducation: EducationInfo = {
  degree: 'Master of Engineering',
  program: 'Applied Data Science',
  status: 'In progress · Jan–Dec 2026',
  statusNote: 'Graduating December 2026 — looking for a co-op or internship starting January 2027.',
  focus: ['Natural Language Processing', 'Deep Learning', 'MLOps & Production ML', 'Statistical Methods'],
};

export const skillAttention: SkillAttention[] = [
  { head: 'frontend.h1', pct: 78, tone: 'cyan', val: 'React' },
  { head: 'frontend.h2', pct: 65, tone: 'cyan', val: 'TypeScript' },
  { head: 'nlp.h1', pct: 88, tone: 'violet', val: 'RAG' },
  { head: 'nlp.h2', pct: 72, tone: 'violet', val: 'LangChain' },
  { head: 'ml.h1', pct: 80, tone: 'violet', val: 'PyTorch' },
  { head: 'bridge.h1', pct: 92, tone: 'amber', val: 'Product sense' },
];
