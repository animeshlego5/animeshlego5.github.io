import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Animesh",
  lastName: "Singh Gosain",
  displayName: "Animesh Singh Gosain",
  username: "animeshlego5",
  gender: "male",
  pronouns: "he/him",
  bio: "Building agentic AI systems, LLM evaluation harnesses, and production RAG pipelines.",
  flipSentences: [
    "AI Engineer",
    "Building agentic AI systems & RAG pipelines.",
  ],
  address: "New Delhi, Delhi",
  phoneNumber: "", // base64 encoded
  email: "YW5pbWVzaGxlZ281QGdtYWlsLmNvbQ==", // animeshlego5@gmail.com base64 encoded
  website: "https://animeshlego5.github.io",
  jobTitle: "AI Engineer",
  jobs: [] as { title: string; company: string; website: string }[],
  about: `
- **AI Engineer** building agentic systems, LLM evaluation harnesses, and production RAG pipelines.
- Shipped **multi-agent workflows** (LangGraph) with human-in-the-loop guardrails and **agentic eval sandboxes** for benchmarking frontier models.
- Strong backend foundation — **Python**, **TypeScript**, **FastAPI**, **Next.js**, **PostgreSQL/pgvector**, **Redis**, **Docker**.
`,
  avatar: "/profile-pic.jpg",
  ogImage: "/icon.svg",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "animeshlego5",
    "animesh gosain",
    "animesh singh gosain",
    "ai engineer",
    "agentic ai",
    "llm engineer",
    "rag",
    "backend developer",
  ],
  dateCreated: "2024-01-01",
} satisfies User;
