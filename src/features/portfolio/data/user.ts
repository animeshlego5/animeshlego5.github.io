import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Animesh",
  lastName: "Singh Gosain",
  displayName: "Animesh Singh Gosain",
  username: "animeshlego5",
  gender: "male",
  pronouns: "he/him",
  bio: "Focusing on scalable backend systems and AI integration.",
  flipSentences: [
    "Focusing on scalable backend systems and AI integration.",
    "Full Stack Developer",
  ],
  address: "New Delhi, Delhi",
  phoneNumber: "", // base64 encoded
  email: "YW5pbWVzaGxlZ281QGdtYWlsLmNvbQ==", // animeshlego5@gmail.com base64 encoded
  website: "https://animeshlego5.github.io",
  jobTitle: "Full Stack Developer",
  jobs: [] as { title: string; company: string; website: string }[],
  about: `
- **Full Stack Developer** passionate about building scalable backend systems and integrating AI solutions.
- Skilled in **Java**, **Python**, **JavaScript/TypeScript**, and modern full-stack technologies.
- **400+ LeetCode Problems Solved** — strong foundation in data structures and algorithms.
- Building real-world applications with **Next.js**, **FastAPI**, **Spring Boot**, and **Bun**.
`,
  avatar: "/profile-pic.jpg",
  ogImage: "/icon.svg",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "animeshlego5",
    "animesh gosain",
    "animesh singh gosain",
    "full stack developer",
    "backend developer",
    "ai integration",
  ],
  dateCreated: "2024-01-01",
} satisfies User;
