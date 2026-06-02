import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "n8n-linkedin-job-search-automation",
    title: "n8n-linkedin-job-search-automation",
    period: {
      start: "05.2026",
    },
    link: "https://github.com/animeshlego5/n8n-linkedin-job-search-automation",
    logo: "/job-scraper-logo.png",
    skills: ["n8n", "Apify", "JavaScript", "Google Sheets API", "Supabase", "Docker"],
    description: `Serverless Job Matching Workflow (n8n + Apify)

An autonomous workflow that scrapes LinkedIn and scores jobs against a custom skill matrix:
- Scheduled daily scraping via Apify's LinkedIn Scraper with Local/India and Global/Remote branches
- Custom JavaScript scoring engine awarding points per matched skill and auto-rejecting mismatches via Regex
- Smart deduplication against a master Google Sheet to prevent reprocessing
- Hosted on a free Hugging Face Docker Space backed by Supabase PostgreSQL`,
    isExpanded: true,
  },
  {
    id: "enterprise-qna",
    title: "Enterprise QnA",
    period: {
      start: "05.2026",
    },
    link: "https://github.com/animeshlego5/enterprise-qna",
    logo: "/q-icon.svg",
    skills: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "RAG",
      "LangChain",
      "Transformers",
      "LLMs",
    ],
    description: `Dual-Mode RAG System (Cloud + Local / Free)

RAG platform for querying a private document knowledge base — two operating modes:

- **Cloud mode** — PDFs uploaded and chunked server-side, embedded with all-MiniLM-L6-v2, stored in PostgreSQL + pgvector, and streamed via SSE from Gemini 2.5 Flash. Semantic cache (cosine sim ≥ 0.92) skips redundant LLM calls. Clerk auth with RS256 JWT verified via PyJWT + JWKS.
- **Local / Free mode** — fully browser-side: PDF extraction (pdfjs-dist), ONNX embeddings (@huggingface/transformers), cosine search over persistent IndexedDB, and streamed directly from the user's own OpenAI / Gemini / Anthropic key — zero server cost.
- Redis Streams async worker queue (XREADGROUP) decouples the API from LLM processing for reliable, non-blocking job handling.
- Prometheus metrics, structlog structured logging, Docker Compose one-command deployment.`,
    isExpanded: true,
  },
  {
    id: "notespy",
    title: "NoteSpy",
    period: {
      start: "01.2026",
    },
    link: "https://notespy.vercel.app/",
    logo: "/icon.png",
    skills: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Machine Learning"],
    description: `Music Recognition & Recommendation Engine

A Shazam-like web app with advanced music identification capabilities:
- Implemented a FastAPI backend with spectral peak hashing and MFCC features for identification
- Achieved 85%+ accuracy on sub-second song identification
- Built a vectorized search pipeline using NumPy

[Read Medium Article](https://medium.com/@animeshlego5/how-notespy-works-deconstructing-a-shazam-clones-backend-7b2002013753)`,
    isExpanded: true,
  },
  {
    id: "thinkweave-ai",
    title: "Think Weave.ai",
    period: {
      start: "01.2025",
    },
    link: "https://think-weave.vercel.app/",
    logo: "/thinkweave-logo.svg",
    skills: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "OpenAI API",
    ],
    description: `Unified GenAI Orchestration Gateway

Full-stack SaaS serving AI text generation:
- Per-user quota enforcement and rate limiting middleware
- Tiered billing (free/premium) with dynamic credit tracking
- Integration with OpenAI providers`,
    isExpanded: true,
  },
];
