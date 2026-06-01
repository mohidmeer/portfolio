import { Project } from "./types";

export const projects: Project[] = [
  {
    logo: "/assets/projects/socialmint/logo.png",
    title: "Social Mint",
    subtitle: "Social Media Management Platform",
    description:
      "Link and manage all social media accounts, schedule posts, and publish to major platforms with one click.",
    github: "https://github.com/SocialMint/SocialMint",
    images: [
      { title: "Landing", image: "socialmint/landing.png" },
      { title: "Dashboard", image: "socialmint/dashboard.png" },
      { title: "API Usage", image: "socialmint/apiusage.png" },
      { title: "Connect Facebook", image: "socialmint/connectpage.png" },
      { title: "Connect Twitter", image: "socialmint/connect.png" },
      { title: "User Docs", image: "socialmint/docs.png" },
    ],
    stack: ["php.svg", "laravel.svg", "bootstrap.svg"],
  },
  {
    logo: "/assets/projects/pcfo/logo.svg",
    title: "Pocket CFO",
    subtitle: "Financial Software Marketplace",
    description:
      "Simplify financial software purchasing with demo access and automated onboarding for seamless user setup.",
    github: "https://github.com/dreamrs-io/pocketcfo-frontend.git",
    stack: ["nextjs.svg", "tailwindcss.svg", "mongodb.svg", "stripe.svg"],
    images: [
      { title: "Convert Tool", image: "pcfo/tool.png" },
      { title: "Login", image: "pcfo/login.png" },
      { title: "Landing", image: "pcfo/landing.png" },
      
    ],
  },
  {
    logo: "/assets/projects/promptworks/logo.svg",
    title: "Prompt Buddy",
    subtitle: "AI Prompt Marketplace",
    description:
      "A marketplace for quality AI prompts — DALL·E, Midjourney, ChatGPT, and Stable Diffusion — buy and sell custom prompts to save on API costs.",
    github: "https://github.com/mohidmeer/prompt.git",
    stack: ["nextjs.svg", "tailwindcss.svg", "zustand.svg", "mongodb.svg", "stripe.svg"],
    images: [
      { title: "Product View", image: "promptworks/product.png" },
      { title: "Login", image: "promptworks/login.png" },
      { title: "Landing", image: "promptworks/landing.png" },
      
    ],
  },
];
