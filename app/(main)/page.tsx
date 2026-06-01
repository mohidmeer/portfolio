'use client';

import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SpotLight from "@/components/SpotLight";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/components/projects/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { Kanban, Mail, MapPin, Network, Phone, Server, Users } from "lucide-react";
import GitHubCalendar from "react-github-calendar";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "@/hooks/use-toast";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 200, damping: 90, restDelta: 0.001 });

  return (
    <>
      <header className="fixed top-0 z-50 w-full glass border-b border-border/40">
        <NavBar />
      </header>

      <main className="relative overflow-hidden">
        <motion.div
          className="fixed top-0 left-0 w-full h-[2px] bg-primary z-50 origin-left"
          style={{ scaleX }}
        />
        <TracingLine pathLength={pathLength} />

        <Hero />
        <Introduction />
        <Skills />
        <ProjectsSection />
        <ContactMe />
      </main>

      <Footer />
    </>
  );
}

function Introduction() {
  const cards = [
    {
      icon: Kanban,
      title: "Projects",
      description:
        "Delivered 50+ projects across e-commerce, real estate, finance, and social media.",
    },
    {
      icon: Network,
      title: "API Integrations",
      description:
        "Integrated complex APIs from Facebook and Twitter into custom systems, improving functionality and UX.",
    },
    {
      icon: Server,
      title: "Backend System Design",
      description:
        "Designed scalable backends with authentication, inventory management, and cloud deployment.",
    },
    {
      icon: Users,
      title: "Collaborative Teamwork",
      description:
        "Worked with remote teams using Jira, Slack, and Agile to deliver high-quality solutions.",
    },
  ];

  return (
    <Section id="experience">
      <Heading
        heading="What I've Accomplished"
        subheading="A snapshot of my journey as a web developer."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div key={card.title} className="experience-card">
            <div className="experience-card-icon">
              <card.icon size={24} />
            </div>
            <h3>{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const chartData = [
    { skill: "javascript", proficiency: 80, fill: "hsl(54, 100%, 50%)" },
    { skill: "typescript", proficiency: 70, fill: "hsl(214, 89%, 52%)" },
    { skill: "react", proficiency: 80, fill: "hsl(204, 86%, 53%)" },
    { skill: "nextjs", proficiency: 70, fill: "hsl(0, 0%, 20%)" },
    { skill: "aws", proficiency: 30, fill: "hsl(28, 94%, 54%)" },
    { skill: "mongodb", proficiency: 70, fill: "hsl(141, 37%, 49%)" },
    { skill: "mysql", proficiency: 80, fill: "hsl(197, 71%, 63%)" },
    { skill: "php", proficiency: 50, fill: "hsl(240, 35%, 55%)" },
    { skill: "laravel", proficiency: 60, fill: "hsl(240, 35%, 55%)" },
  ];

  const chartConfig = {
    proficiency: { label: "Proficiency" },
    react: { label: "React", color: "hsl(204, 86%, 53%)" },
    javascript: { label: "JavaScript", color: "hsl(54, 100%, 50%)" },
    typescript: { label: "TypeScript", color: "hsl(214, 89%, 52%)" },
    php: { label: "PHP", color: "hsl(240, 35%, 55%)" },
    laravel: { label: "Laravel", color: "hsl(240, 35%, 55%)" },
    aws: { label: "AWS", color: "hsl(28, 94%, 54%)" },
    mongodb: { label: "MongoDB", color: "hsl(141, 37%, 49%)" },
    nextjs: { label: "Next.js", color: "hsl(0, 0%, 20%)" },
    mysql: { label: "MySQL", color: "hsl(197, 71%, 63%)" },
  } satisfies ChartConfig;

  return (
    <Section className="relative">
      <Heading
        heading="Technical Proficiencies"
        subheading="A visual breakdown of my core technical skills."
      />

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border/60 bg-card p-6 md:p-8">
          <h3>Skills That Power My Code</h3>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            My approach emphasizes practicality — using the tools at hand to deliver effective
            solutions while continuously refining my skills. Whether designing responsive UIs,
            managing server-side logic, or deploying cloud applications, I focus on clean,
            efficient, and adaptable code.
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card p-6 overflow-x-auto">
          <ChartContainer className="min-h-[350px]" config={chartConfig}>
            <BarChart accessibilityLayer data={chartData} layout="vertical">
              <YAxis
                dataKey="skill"
                type="category"
                tickLine={false}
                tickMargin={8}
                axisLine={false}
                width={90}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <XAxis dataKey="proficiency" type="number" hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="proficiency" layout="vertical" radius={5}>
                <LabelList
                  dataKey="proficiency"
                  position="right"
                  className="fill-foreground"
                  fontSize={14}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      <div className="mt-16">
        <Heading heading="GitHub Contributions" subheading="" />
        <div className="flex justify-center overflow-x-auto rounded-xl border border-border/60 bg-card p-6">
          <GitHubCalendar username="mohidmeer" />
        </div>
      </div>

      <SpotLight clas="bg-primary/30 bottom-0 left-1/2 -translate-x-1/2 blur-[120px] w-[300px] h-[120px]" />
    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" className="relative">
      <Heading
        heading="My Work in Action"
        subheading="Projects that reflect my expertise and passion for building great products."
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} data={project} />
        ))}
      </div>
    </Section>
  );
}

const TracingLine = ({ pathLength }: { pathLength: ReturnType<typeof useSpring> }) => (
  <div className="absolute h-full w-[10px] md:block hidden pointer-events-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 2676"
      width="400"
      height="2676"
      className="opacity-60"
    >
      <motion.path
        initial={false}
        strokeDasharray="0 1"
        strokeWidth="3"
        className="stroke-primary"
        style={{ pathLength }}
        fill="none"
        d="M0.5 0V139L196 321V529L91.5 638V879L170.5 1037V1394L236.5 1448V1551L170.5 1601.5V2029L303 2166V2316.5L170.5 2403V2492.5V2540"
      />
    </svg>
  </div>
);

function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send("service_63h8uoe", "template_b4cklmu", formData, "gJCCeknnD-xNC5LYK")
      .then(() => toast({ title: "Message sent successfully" }))
      .catch(() =>
        toast({
          variant: "destructive",
          title: "Could not send message — please email me directly.",
        })
      );
  };

  return (
    <Section id="contact" className="relative">
      <Heading
        heading="Contact Me"
        subheading="Let's work together! I look forward to hearing from you."
      />

      <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-xl border border-border/60 bg-card p-6 space-y-4">
            <h3 className="text-base font-semibold">Direct Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary shrink-0" />
                <a href="mailto:mohidfauji@gmail.com" className="hover:text-primary transition-colors">
                  mohidfauji@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary shrink-0" />
                <a href="tel:+923109315867" className="hover:text-primary transition-colors">
                  0310 9315867
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary shrink-0" />
                Islamabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 rounded-xl border border-border/60 bg-card p-6 md:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <Input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <Textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
            />
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <SpotLight clas="bg-primary/30 bottom-0 left-1/2 -translate-x-1/2 blur-[100px] w-[200px] h-[80px]" />
    </Section>
  );
}
