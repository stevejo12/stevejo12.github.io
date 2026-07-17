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

export interface ProjectEntry {
  id: string;
  name: string;
  tag: 'AI/ML' | 'Full-stack' | 'Frontend';
  blurb: string;
  stack: string[];
}

export interface EducationInfo {
  degree: string;
  program: string;
  status: string;
  focus: string[];
  capstone: string;
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
    'I spent my first chapter as a frontend engineer, shipping React + TypeScript interfaces during a 14-month internship from December 2018 to February 2020. I learned to obsess over latency, layout, and the last mile of how a product actually feels.',
  about_p2:
    "Now I'm writing the second chapter — a Master of Engineering in Applied Data Science, focused on NLP, retrieval-augmented generation, and putting language models into production. Same obsession, different stack.",
  about_p3:
    'I am happiest when the two halves meet: a real model behind a real interface, talking to a real person.',
  frontend_pitch: 'React · TypeScript · Component systems · Accessibility · Performance budgets',
  ai_pitch: 'PyTorch · TensorFlow · Hugging Face · LangChain · RAG · Vector DBs · scikit-learn',
  cta: 'Ask the bot about my background',
  contact_email: 'steve.v.jo@example.com',
  contact_github: 'github.com/stevevjo',
  contact_linkedin: 'linkedin.com/in/stevevjo',
  contact_scholar: 'scholar.google.com/stevevjo',
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
    year: '2020 – 2023',
    title: 'Continuing engineering practice',
    org: 'Self-directed',
    side: 'bridge',
    blurb: 'Side projects, contract work, sharpening the bridge between UI and data.',
  },
  {
    year: '2024',
    title: 'Master of Engineering — Applied Data Science',
    org: 'Graduate program',
    side: 'ai',
    blurb: 'NLP, deep learning, statistical methods, MLOps. Currently in-progress.',
  },
  {
    year: '2025',
    title: 'RAG + LLM applications',
    org: 'Coursework + capstone',
    side: 'ai',
    blurb: 'Retrieval pipelines, LangChain agents, evaluation harnesses.',
  },
  {
    year: 'Now',
    title: 'Full-Stack AI Engineer',
    org: 'Open to roles',
    side: 'ai',
    blurb: 'Looking for teams shipping LLM-powered products end-to-end.',
  },
];

export const portfolioProjects: ProjectEntry[] = [
  {
    id: 'p1',
    name: 'Resume RAG',
    tag: 'AI/ML',
    blurb:
      'Retrieval-augmented chatbot over my own CV. Hybrid BM25 + dense retrieval, LangChain orchestration.',
    stack: ['LangChain', 'FAISS', 'OpenAI', 'FastAPI'],
  },
  {
    id: 'p2',
    name: 'Sentiment Lens',
    tag: 'AI/ML',
    blurb: 'Fine-tuned DistilBERT for fine-grained product-review sentiment. 92% F1 on out-of-domain test set.',
    stack: ['PyTorch', 'Transformers', 'W&B'],
  },
  {
    id: 'p3',
    name: 'Vector Atlas',
    tag: 'Full-stack',
    blurb: 'Embedding visualizer — drop a corpus, see clusters in 3D. React + Three.js front, FastAPI + pgvector back.',
    stack: ['React', 'Three.js', 'pgvector'],
  },
  {
    id: 'p4',
    name: 'Design Tokens Studio',
    tag: 'Frontend',
    blurb: 'Visual editor for design-system tokens with live theme preview across components.',
    stack: ['React', 'TypeScript', 'Stitches'],
  },
  {
    id: 'p5',
    name: 'Agent Playground',
    tag: 'AI/ML',
    blurb: 'Multi-agent sandbox for testing tool-use strategies. Tracing, replays, eval harness baked in.',
    stack: ['LangGraph', 'OpenAI', 'Postgres'],
  },
  {
    id: 'p6',
    name: 'Latency Lab',
    tag: 'Frontend',
    blurb: 'Realtime web-vitals dashboard for client teams. Streamed metrics over WebSocket.',
    stack: ['React', 'D3', 'Node'],
  },
];

export const portfolioEducation: EducationInfo = {
  degree: 'Master of Engineering',
  program: 'Applied Data Science',
  status: 'In progress',
  focus: ['Natural Language Processing', 'Deep Learning', 'MLOps & Production ML', 'Statistical Methods'],
  capstone:
    'Retrieval-augmented generation for technical documentation — evaluating retrieval strategies for grounded, citeable answers.',
};

export const skillAttention: SkillAttention[] = [
  { head: 'frontend.h1', pct: 78, tone: 'cyan', val: 'React' },
  { head: 'frontend.h2', pct: 65, tone: 'cyan', val: 'TypeScript' },
  { head: 'nlp.h1', pct: 88, tone: 'violet', val: 'RAG' },
  { head: 'nlp.h2', pct: 72, tone: 'violet', val: 'LangChain' },
  { head: 'ml.h1', pct: 80, tone: 'violet', val: 'PyTorch' },
  { head: 'bridge.h1', pct: 92, tone: 'amber', val: 'Product sense' },
];
