import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "voideditor",
    companyName: "VoidEditor (YCombinator)",
    companyLogo: "/cube.png",
    positions: [
      {
        id: "void-contributor",
        title: "Open Source Contributor",
        employmentPeriod: {
          start: "2025",
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
