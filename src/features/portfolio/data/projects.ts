import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
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
    id: "portfolio-website",
    title: "Portfolio Website",
    period: {
      start: "01.2026",
    },
    link: "https://animeshlego5.github.io/",
    logo: "/icon.svg",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    description: `Modern Developer Portfolio

A sleek, responsive portfolio website showcasing projects and skills:
- Built with Next.js 16 and TypeScript for type-safe development
- Static site generation for fast loading on GitHub Pages
- Dark/light theme support with smooth animations
- Fully responsive design with modern UI components`,
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
