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
    logo: "/enterprise-qna-logo.png",
    skills: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "RAG",
      "Clerk",
      "Docker",
      "Google Gemini",
    ],
    description: `Dual-Mode RAG System (Cloud + Local / Free)

A production-grade Retrieval-Augmented Generation platform that lets users query a private document knowledge base in natural language — with two fully implemented operating modes:

- **Cloud mode** — PDF is chunked and embedded server-side (all-MiniLM-L6-v2), stored in PostgreSQL with pgvector, and answers are streamed token-by-token via Server-Sent Events from Google Gemini 2.5 Flash. A semantic cache (cosine sim ≥ 0.92) skips redundant LLM calls. Auth is handled by Clerk (RS256 JWT verified server-side via PyJWT + JWKS).
- **Local / Free mode** — runs entirely in the browser: PDF text extraction with pdfjs-dist, ONNX embeddings via @huggingface/transformers, vector search over IndexedDB, and streaming directly from the user's own OpenAI / Gemini / Anthropic key — zero server cost.
- Redis Streams power an async worker queue (XREADGROUP) so LLM jobs are processed reliably without blocking the API.
- Prometheus metrics endpoint, structured logging with structlog, and Docker Compose orchestration for one-command deployment.`,
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
