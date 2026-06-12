import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
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
