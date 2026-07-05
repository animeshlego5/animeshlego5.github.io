import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "collinear-ai",
    companyName: "Collinear AI (Freelance)",
    companyLogo: "/collinear-logo.jpg",
    positions: [
      {
        id: "collinear-ai-engineer",
        title: "AI Engineer",
        employmentPeriod: {
          start: "05.2026",
        },
        employmentType: "Freelance",
        icon: "code",
        description: `AI Engineer · Remote

- Built Dockerized enterprise SaaS clone environments as agentic evaluation sandboxes, exposing each via dual-access evaluation (REST tool calls + a Playwright-driven UI at 95% visual fidelity) so LLM agents could be benchmarked on realistic multi-step tasks.
- Designed ~50 typed agent tools per environment as JSON-Schema definitions served over a FastAPI /step endpoint, giving agents a structured function-calling interface to act on a PostgreSQL backend.
- Built reward verifiers that query Postgres directly to score agent trajectories, producing the labeled signal used to improve frontier-model performance.`,
        skills: [
          "Docker",
          "Playwright",
          "FastAPI",
          "PostgreSQL",
          "Agentic Evaluation",
          "REST",
          "JSON Schema",
          "Function Calling",
          "LLM Benchmarking",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "iabhai-enterprises",
    companyName: "I.A.BHAI Enterprises Pvt. Ltd.",
    companyLogo: "/iabhai-logo.jpeg",
    positions: [
      {
        id: "iabhai-ai-engineer-intern",
        title: "AI Engineer Intern",
        employmentPeriod: {
          start: "01.2026",
          end: "04.2026",
        },
        employmentType: "Internship",
        icon: "idea",
        description: `AI Engineer Intern · Greater Noida, India

- Architected a stateful multi-agent LangGraph system with human-in-the-loop guardrails for hallucination mitigation and responsible AI oversight, automating procurement workflows and reducing anomaly resolution time by 65%.
- Deployed a production RAG pipeline (LangChain, Gemini API) over 5+ years of ISO compliance documents, cutting retrieval time from 20 minutes to under 10 seconds; added a pgvector semantic caching layer reducing p95 LLM inference latency by 70%.
- Automated order intake pipelines via n8n (self-hosted on AWS EC2), integrating WhatsApp Business API and legacy ERPs to eliminate 80% of manual data entry and save 15 hours weekly.`,
        skills: [
          "LangGraph",
          "LangChain",
          "RAG",
          "Python",
          "pgvector",
          "n8n",
          "AWS EC2",
          "WhatsApp Business API",
          "Multi-Agent Systems",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "voideditor",
    companyName: "VoidEditor (YCombinator)",
    companyLogo: "/cube.png",
    positions: [
      {
        id: "void-contributor",
        title: "Open Source Contributor",
        employmentPeriod: {
          start: "01.2025",
          end: "11.2025",
        },
        employmentType: "Open Source",
        icon: "code",
        description: `AI-Integrated Code Editor Contribution

Contributed to this Y Combinator-backed editor:
- Extended AI integration to support multiple model providers
- Fixed system-role handling for OpenAI-compatible APIs to improve suggestion reliability
- Enhanced developer experience with improved AI-powered code suggestions`,
        skills: [
          "TypeScript",
          "React",
          "AI Integration",
          "Open Source",
          "Code Editor",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];
