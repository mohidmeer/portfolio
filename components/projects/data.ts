import { Project } from "./types";

export const projects: Project[] = [
  {
    logo: "assets/projects/contentforge/logo.svg",
    title: "ContentForge",
    subtitle: "Multi-Tenant AI Content Automation",
    description:
      "An AI-powered content platform that generates blogs and social posts, creates campaign visuals, schedules publishing, and prevents content repetition.",
    images: [
      { title: "Landing", image: "contentforge/hero.jpg" },
      { title: "Dashboard", image: "contentforge/dashboard.jpg" },
      { title: "Blog Scheduling", image: "contentforge/blog_schedule.jpg" },
      { title: "Content Calendar", image: "contentforge/schedules.jpg" },
    ],
    stack: ["nextjs.svg", "openai.svg", "python.svg", "postgresql.svg", "docker.svg"],
    caseStudy: {
      role: "Full-Stack Engineer",
      overview:
        "ContentForge is a multi-tenant AI content automation platform that helps teams generate blogs and social posts, create campaign visuals, schedule publishing, and keep content fresh across channels. From a single dashboard, tenants manage AI-generated content, attach visuals to campaigns, and publish to Facebook, Instagram, Twitter/X, and Google — without repeating themselves.",
      challenges: [
        "Teams needed one platform to create, visualise, and publish content across multiple social channels.",
        "AI-generated content risked becoming repetitive without memory of what was already published.",
        "Scheduled posts needed reliable retries and clear status tracking when APIs failed.",
        "Multi-tenant architecture required isolated workspaces, campaigns, and publishing credentials per client.",
      ],
      solutions: [
        "Built AI blog and social post generation with OpenAI, tailored per tenant and campaign.",
        "Added image and poster generation tied directly to campaign workflows.",
        "Implemented a scheduling calendar with retry logic and real-time publish status tracking.",
        "Developed memory-aware content logic that prevents duplicate or near-duplicate posts.",
        "Integrated social publishing for Facebook, Instagram, Twitter/X, and Google posts from one place.",
      ],
      outcomes: [
        "Teams produce and schedule content across channels without switching between separate tools.",
        "Memory-aware generation keeps posts fresh and avoids repeating past content.",
        "Scheduling with retries gives reliable publishing even when third-party APIs hiccup.",
        "Multi-tenant setup lets agencies manage multiple clients from a single platform.",
      ],
      features: [
        "AI blog & social post generation",
        "Campaign-linked image generation",
        "Scheduling calendar with retries",
        "Memory-aware no-repeat logic",
        "Multi-tenant workspaces",
        "Facebook, Instagram, X & Google publishing",
      ],
    },
  },
  {
    logo: "assets/projects/shoprai/logo.svg",
    title: "ShopRai",
    subtitle: "AI-Powered Comparison Platform",
    description:
      "An AI comparison platform that helps users find the best deals across products, flights, hotels, insurance, and services using natural language search.",
    images: [
      { title: "Landing", image: "shoprai/landing.jpg" },
      { title: "Chat Landing", image: "shoprai/chat_landing.jpg" },
      { title: "Chat Interface", image: "shoprai/chat_interface.jpg" },
      { title: "Search Results", image: "shoprai/chat_interface_1.jpg" },
    ],
    stack: ["nextjs.svg", "openai.svg", "python.svg", "postgresql.svg"],
    caseStudy: {
      role: "Full-Stack Engineer",
      overview:
        "ShopRai is an AI-powered comparison platform that helps users find the best deals across products, flights, hotels, insurance, and services. Using advanced AI and natural language search, users describe what they need and instantly receive ranked, accurate, and personalized results — with the platform analyzing millions of options in real time.",
      challenges: [
        "Users needed to compare options across very different categories — products, travel, insurance — from a single interface.",
        "Traditional keyword search couldn't understand open-ended requests like natural language queries.",
        "Ranking results required balancing cost, quality, and personal preferences across disparate data sources.",
        "Real-time price tracking and recommendation logic had to stay fast at scale.",
      ],
      solutions: [
        "Built a Next.js frontend with natural language search powered by the OpenAI API.",
        "Developed a FastAPI backend to orchestrate AI queries, data aggregation, and ranking logic.",
        "Stored user preferences, search history, and comparison data in PostgreSQL.",
        "Implemented real-time analysis pipelines that rank results by cost, quality, and user preferences.",
        "Unified multiple comparison categories — products, flights, hotels, insurance, and services — under one platform.",
      ],
      outcomes: [
        "Users can describe what they need in plain language and get personalized ranked results instantly.",
        "One platform replaces switching between multiple comparison and booking sites.",
        "AI-driven recommendations surface the best choices based on individual preferences, not just price.",
        "Real-time analysis keeps deal comparisons current as prices and availability change.",
      ],
      features: [
        "Natural language AI search",
        "Multi-category comparisons",
        "Real-time price tracking",
        "Personalized ranked results",
        "Products, flights, hotels & insurance",
        "OpenAI-powered recommendations",
      ],
    },
  },
  {
    logo: "assets/projects/clipforge/logo.svg",
    title: "ClipForge",
    subtitle: "AI Video Automation Platform",
    description:
      "An end-to-end video automation platform that generates viral clips, captions them with AI, and uploads or schedules them to YouTube.",
    images: [
      { title: "Landing", image: "clipforge/landing.jpg" },
      { title: "Dashboard", image: "clipforge/dashboard.jpg" },
      { title: "Workflow", image: "clipforge/single_workflow.jpg" },
      { title: "Generated Clips", image: "clipforge/clips_generated.jpg" },
      { title: "Project Items", image: "clipforge/Group_items.jpg" },
      { title: "Assets Library", image: "clipforge/assets.jpg" },
      { title: "AI Captions", image: "clipforge/captions.jpg" },
      { title: "Video Effects", image: "clipforge/effects_apply.jpg" },
      { title: "YouTube Upload", image: "clipforge/youtube_upload.jpg" },
      { title: "YouTube Channel", image: "clipforge/youtube_channel.jpg" },
    ],
    stack: ["nextjs.svg", "openai.svg", "python.svg", "whisper.svg", "ffmpeg.svg", "docker.svg"],
    caseStudy: {
      role: "Full-Stack Developer",
      overview:
        "ClipForge is a video automation platform built for creators who want to turn long-form content into short, publish-ready clips without manual editing. Users ingest videos from YouTube, Bilibili, or local uploads, and the system handles highlight detection, clip generation, AI captions, and YouTube publishing — all through a single pipeline.",
      challenges: [
        "Long-form videos needed to be broken into engaging clips without manual review of every timestamp.",
        "Caption generation had to run reliably on GPU infrastructure without blocking the main application.",
        "Video rendering is CPU-heavy and needed a queue system that scales with demand.",
        "Publishing to YouTube required secure OAuth handling and support for scheduled uploads.",
      ],
      solutions: [
        "Built a unified ingestion layer supporting YouTube, Bilibili, and local file uploads.",
        "Implemented AI-driven highlight detection to automatically identify and extract clip-worthy moments.",
        "Deployed Faster-Whisper on RunPod serverless workers for cost-effective AI caption generation.",
        "Set up render queues with progress tracking and scalable Docker-based workers using FFmpeg.",
        "Integrated YouTube OAuth for direct upload and scheduled publishing from the dashboard.",
        "Added reusable video templates with captions and background music for consistent output.",
      ],
      outcomes: [
        "Creators can go from raw video to a published YouTube clip without touching editing software.",
        "Async render queues give users clear progress visibility while heavy jobs run in the background.",
        "Serverless GPU captioning keeps AI processing off the main app and scales on demand.",
        "Scheduled publishing lets teams batch-produce content and release on their own timeline.",
      ],
      features: [
        "Multi-source video ingestion",
        "AI highlight detection & clip generation",
        "Faster-Whisper AI captions",
        "Reusable video templates",
        "Render queue with progress tracking",
        "YouTube OAuth upload & scheduling",
      ],
    },
  },
  {
    logo: "assets/projects/socialmint/logo.png",
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
    caseStudy: {
      role: "Full-Stack Developer",
      overview:
        "Social Mint is a centralized social media management platform built for teams and creators who juggle multiple accounts across Facebook, Twitter, and other networks. Instead of logging into each platform separately, users connect their accounts once and manage everything from a single Laravel-powered dashboard — scheduling posts, tracking API usage, and publishing to every channel simultaneously.",
      challenges: [
        "Teams were wasting hours switching between platforms to post the same content manually.",
        "OAuth integrations with Facebook and Twitter APIs were fragile and hard for non-technical users to set up.",
        "No visibility into API rate limits — accounts would hit caps without warning.",
        "Onboarding new users required lengthy documentation and support tickets.",
      ],
      solutions: [
        "Built a unified dashboard with one-click multi-platform publishing, eliminating duplicate work across networks.",
        "Designed guided OAuth connection flows for Facebook and Twitter with clear error states and retry logic.",
        "Added real-time API usage tracking so users can monitor quotas before hitting platform limits.",
        "Created in-app user documentation to reduce support load and speed up self-service onboarding.",
      ],
      outcomes: [
        "Reduced cross-platform posting time from ~30 minutes to under 2 minutes per campaign.",
        "Cut onboarding support requests by providing step-by-step connect flows and built-in docs.",
        "Gave teams proactive visibility into API consumption, preventing unexpected publishing failures.",
      ],
      features: [
        "Multi-account social linking",
        "Scheduled post queue",
        "One-click cross-platform publish",
        "API usage dashboard",
        "OAuth connect flows",
        "In-app user documentation",
      ],
    },
  },
  {
    logo: "assets/projects/pcfo/logo.svg",
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
    caseStudy: {
      role: "Frontend Lead Developer",
      overview:
        "Pocket CFO is a financial software marketplace that lets businesses discover, demo, and purchase accounting and finance tools without the friction of traditional enterprise sales cycles. Built with Next.js and MongoDB, the platform combines a product catalog, interactive demo access, Stripe-powered checkout, and an automated onboarding pipeline that provisions accounts the moment a purchase completes.",
      challenges: [
        "Buyers couldn't evaluate financial software before committing — long sales cycles and opaque pricing slowed decisions.",
        "Manual account provisioning after purchase created delays and a poor first impression.",
        "Legacy spreadsheet workflows made it hard to compare tools side-by-side.",
        "Payment and subscription logic needed to handle multiple product tiers securely.",
      ],
      solutions: [
        "Built a marketplace catalog with instant demo access so buyers can try products before purchasing.",
        "Automated post-purchase onboarding — account creation, credentials, and setup run without manual intervention.",
        "Developed a convert/comparison tool to help users evaluate options and migrate from spreadsheets.",
        "Integrated Stripe for secure payments with tiered subscription handling and webhook-driven provisioning.",
      ],
      outcomes: [
        "Shortened the buyer journey from weeks of sales calls to same-day demo and purchase.",
        "Eliminated manual provisioning bottlenecks with fully automated onboarding flows.",
        "Increased conversion by letting users experience product value before committing financially.",
      ],
      features: [
        "Product marketplace catalog",
        "Instant demo access",
        "Stripe checkout & subscriptions",
        "Automated user provisioning",
        "Spreadsheet convert tool",
        "Secure auth & role management",
      ],
    },
  },
  {
    logo: "assets/projects/promptworks/logo.svg",
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
    caseStudy: {
      role: "Full-Stack Developer",
      overview:
        "Prompt Buddy is a two-sided marketplace where AI practitioners buy and sell battle-tested prompts for DALL·E, Midjourney, ChatGPT, and Stable Diffusion. Creators monetize their prompt engineering expertise while buyers skip costly trial-and-error — getting proven prompts that produce consistent, high-quality outputs and significantly lower API spend.",
      challenges: [
        "Users burned through API credits experimenting with prompts that produced inconsistent or low-quality results.",
        "No centralized place existed for creators to sell prompts or for buyers to discover vetted ones.",
        "Managing cart state, purchases, and seller payouts across a multi-vendor catalog was complex.",
        "Different AI platforms (image vs. text) needed tailored product pages and categorization.",
      ],
      solutions: [
        "Built a categorized marketplace with rich product pages showcasing prompt previews, platform tags, and seller ratings.",
        "Implemented Stripe Connect-style payments so creators earn from their prompts with secure checkout.",
        "Used Zustand for lightweight client-side cart and session state without unnecessary re-renders.",
        "Designed platform-specific filters (DALL·E, Midjourney, ChatGPT, Stable Diffusion) for fast discovery.",
      ],
      outcomes: [
        "Helped buyers cut API experimentation costs by purchasing proven prompts instead of iterating blindly.",
        "Enabled prompt creators to monetize their expertise through a dedicated sales channel.",
        "Delivered a smooth browse-to-purchase flow with sub-second cart updates and reliable payment handling.",
      ],
      features: [
        "Multi-platform prompt catalog",
        "Seller listings & product pages",
        "Stripe-powered checkout",
        "Cart & wishlist (Zustand)",
        "Platform-specific filtering",
        "User auth & purchase history",
      ],
    },
  },
];
