export interface ProjectsList {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

export const projectList: ProjectsList[] = [
    {
      id: 1,
      title: "Tesda Leave Management System",
      description: "A full-stack system developed for TESDA that allows employees to request leave electronically and enables administrators to efficiently manage, approve, or reject these requests through a secure, role-based dashboard.",
      image: "./lms_thumbnail.JPG",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Ajax", "PHP", "MySQL"],
      liveLink: "https://gov.tesdaregion3.com/",
      githubLink: "/redacted"
    },
    {
      id: 2,
      title: "Marci Metzger Portfolio",
      description: "A recreation and redesign of landing page for a realtor named Marci Metzger from Pahrump, Nevada.",
      image: "./marcimetzger_thumbnail.JPG",
      tags: ["React", "NextJS", "TailwindCSS", "Responsive Design"],
      liveLink: "https://marci-metzger-revamp-five.vercel.app/",
      githubLink: "https://github.com/devrainyel/marci-metzger-revamp"
    },
    {
      id: 3,
      title: "Convofy Chat App",
      description: "A simple real-time communication app platform built for instant messaging and media sharing. The app focuses on a smooth user experience with built-in protections against common web abuse.",
      image: "./convofy_thumbnail.JPG",
      tags: ["React", "NodeJS", "Express", "Socket.io", "TailwindCSS", "MongoDB"],
      liveLink: "https://convofy-myw6.onrender.com/",
      githubLink: "https://github.com/devrainyel/convofy"
    },
  ];