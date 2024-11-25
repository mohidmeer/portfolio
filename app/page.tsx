'use client';
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import SpotLight from "@/components/SpotLight";
import { Button } from "@/components/ui/button";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { Github, Kanban, Network, Server, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { buttonVariants } from "@/components/ui/button"
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "@/hooks/use-toast";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 200, damping: 90, restDelta: 0.001 });



  return (
    <>
      <header className="top-0 z-10  fixed w-full ">
        <NavBar />
      </header>
      <main className=" relative flex flex-col gap-6  scroll-smooth px-2  sm:px-0 ">
        <motion.div className="fixed top-0 left-0 w-full h-[2px] bg-primary z-10 " style={{ scaleX, transformOrigin: 0 }} />
        <TracingLine pathLength={pathLength} />
        <Hero />
        <Introduction />
        <Skills />
        <Projects />
        <ContactMe />

      </main>
      <Footer />
    </>
  );
}


function Introduction() {
  return (
    <div className="container mx-auto py-12" id="experience" >
      <Heading heading="What I've Accomplished" subheading="A snapshot of my journey as a web developer." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-300">
        <div className="bg-card shadow-md rounded-lg p-6 border flex flex-col gap-4 ">
          <Kanban size={52} className="" />
          <h2 className="text-2xl font-semibold ">Projects</h2>
          <p>
            Delivered 50+ projects across multiple industries, including e-commerce, real estate, finance, and social media.
          </p>
        </div>

        {/* Card 2: API Integrations */}
        <div className="bg-card shadow-md rounded-lg p-6 border flex flex-col gap-4">
          <Network size={52} className="" />
          <h2 className="text-2xl font-semibold ">API Integrations</h2>
          <p>
            Successfully integrated complex APIs from platforms like Facebook and Twitter into custom systems, improving functionality and user experience.
          </p>
        </div>

        {/* Card 3: Backend System Design */}
        <div className="bg-card shadow-md rounded-lg p-6 border flex flex-col gap-4">
          <Server size={52} className="" />
          <h2 className="text-2xl font-semibold ">Backend System Design</h2>
          <p>
            Designed scalable backend systems with features such as authentication, inventory management, and cloud deployment for seamless operation.
          </p>
        </div>

        {/* Card 4: Collaborative Teamwork */}
        <div className="bg-card shadow-md rounded-lg p-6 border flex flex-col gap-4">
          <Users size={52} className="" />
          <h2 className="text-2xl font-semibold ">Collaborative Teamwork</h2>
          <p>
            Worked effectively with remote teams using tools like Jira, Slack, and Agile methodologies to deliver high-quality, timely solutions.
          </p>
        </div>

      </div>
    </div>
  )
}

function Skills() {

  const chartData = [
    { skill: "javascript", proficiency: 60, fill: "hsl(54, 100%, 50%)" },
    { skill: "typescript", proficiency: 50, fill: "hsl(214, 89%, 52%)" },
    { skill: "react", proficiency: 70, fill: "hsl(204, 86%, 53%)" },
    { skill: "nextjs", proficiency: 60, fill: "hsl(0, 0%, 20%)" },
    { skill: "aws", proficiency: 30, fill: "hsl(28, 94%, 54%)" },
    { skill: "mongodb", proficiency: 45, fill: "hsl(141, 37%, 49%)" },
    { skill: "mysql", proficiency: 55, fill: "hsl(197, 71%, 63%)" },
    { skill: "php", proficiency: 50, fill: "hsl(240, 35%, 55%)" },
    { skill: "laravel", proficiency: 56, fill: "hsl(240, 35%, 55%)" },
  ];

  const chartConfig = {
    proficiency: {
      label: "Proficiency",
    },
    react: {
      label: "React",
      color: "hsl(204, 86%, 53%)", // React Blue
    },
    javascript: {
      label: "JavaScript",
      color: "hsl(54, 100%, 50%)", // JavaScript Yellow
    },
    typescript: {
      label: "TypeScript",
      color: "hsl(214, 89%, 52%)", // TypeScript Blue
    },
    php: {
      label: "PHP",
      color: "hsl(240, 35%, 55%)", // PHP Indigo
    },
    laravel: {
      label: "Laravel",
      color: "hsl(240, 35%, 55%)", // PHP Indigo
    },
    aws: {
      label: "AWS",
      color: "hsl(28, 94%, 54%)", // AWS Orange
    },
    mongodb: {
      label: "MongoDB",
      color: "hsl(141, 37%, 49%)", // MongoDB Green
    },
    nextjs: {
      label: "Next.js",
      color: "hsl(0, 0%, 20%)", // Next.js Black
    },
    mysql: {
      label: "MySQL",
      color: "hsl(197, 71%, 63%)", // MySQL Blue
    },
  } satisfies ChartConfig;

  return (
    <div className="container rounded-xl py-6 " >
      <Heading heading="Technical Proficiencies" subheading="A visual breakdown of my core technical skills and proficiencies." />
      <div className="grid lg:grid-cols-2 gap-8" >
        <div className="bg-card shadow-md rounded-lg p-6 border w-full ">
          <h2 className="text-2xl font-semibold ">Skills That Power My Code</h2>
          <p className="text-muted-foreground text-lg  mt-4">
            My approach emphasizes practicality—using the tools at hand to deliver effective solutions while continuously refining my skills. Whether it’s designing responsive UIs, managing server-side logic with Node.js, or deploying cloud-based applications with AWS, I focus on writing clean, efficient, and adaptable code. I’m always curious about what’s next, striving to stay ahead in this ever-evolving field.
          </p>
        </div>
        <div className="bg-card shadow-md rounded-lg p-6 border overflow-x-auto" >
          <ChartContainer className="min-h-[350px]  " config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"

            >
              <YAxis
                dataKey="skill"
                type="category"
                tickLine={false}
                tickMargin={1}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label
                }
              />
              <XAxis dataKey="proficiency" type="number" hide />
              <ChartTooltip
                wrapperClassName="w-[30px]"
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="proficiency" layout="vertical" radius={5} >
                <LabelList
                  dataKey="proficiency"
                  position="right"
                  className="fill-foreground  "
                  // offset={-25}
                  fontSize={16}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      <div className="py-12  ">
        <Heading heading="GitHub Contributions" subheading="" />
        <div className="flex w-full justify-center" >
          <GitHubCalendar username="mohidmeer" />
        </div>

      </div>

    </div>

  )
}


function Projects() {
  return (
    <div className="mb" id="projects" >
      <Heading heading="My Work in Action" subheading="Projects that reflect my expertise" />
      <div className="grid  md:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto gap-6 mb-10 ">
        <ProjectCard
          data={{
            logo: 'assets/projects/socialmint/logo.png',
            title: 'Social Mint',
            subtitle: 'Seamless Social Media Management',
            description: 'Link and manage all social media accounts, schedule posts, and post with one click to all major socail media platforms',
            github: 'https://github.com/SocialMint/SocialMint',
            images: [
              {
                title: 'Landing',
                image: 'socialmint/landing.png'
              },
              {
                title: 'Dashboard',
                image: 'socialmint/dashboard.png'
              },
              {
                title: 'Api Usage',
                image: 'socialmint/apiusage.png'
              },
              {
                title: 'Connect Facebook',
                image: 'socialmint/connectpage.png'
              },
              {
                title: 'Connect Twitter',
                image: 'socialmint/connect.png'
              },
              {
                title: 'User Docs',
                image: 'socialmint/docs.png'
              },

            ],
            stack: ['php.svg', 'laravel.svg', 'bootstrap.svg']
          }}
        />
        <ProjectCard
          data={{
            logo: 'assets/projects/pcfo/logo.svg',
            title: 'Pocket CFO',
            subtitle: 'Seamless Social Media Management',
            description: 'Simplify financial software purchasing with demo access. Automate setup for seamless user onboarding.',
            github: 'https://github.com/dreamrs-io/pocketcfo-frontend.git',
            stack: ['nextjs.svg', 'tailwindcss.svg', 'mongodb.svg', 'stripe.svg'],
            images: [
              {
                title: 'Login',
                image: 'pcfo/login.png'
              },
              {
                title: 'Landing',
                image: 'pcfo/landing.png'
              },
              {
                title: 'Convert Tool',
                image: 'pcfo/tool.png'
              },

            ]
          }}
        />
        <ProjectCard
          data={{
            logo: 'assets/projects/promptworks/logo.svg',
            title: 'Prompt Buddy',
            subtitle: 'AI Prompt Marketplace',
            description: 'A marketplace for quality AI prompts, including DALL·E, Midjourney, ChatGPT, and Stable Diffusion. Buy and sell custom prompts to generate high-quality images and save on API costs.',
            github: 'https://github.com/mohidmeer/prompt.git',
            stack: ['nextjs.svg', 'tailwindcss.svg', 'zustand.svg', 'mongodb.svg', 'stripe.svg'],
            images: [
              {
                title: 'Login',
                image: 'promptworks/login.png'
              },
              {
                title: 'Landing',
                image: 'promptworks/landing.png'
              },
              {
                title: 'Product View',
                image: 'promptworks/product.png'
              },


            ]
          }}
        />
      </div>
    </div>
  )
}


const TechChip = ({ image }: { image: string }) => (
  <div className="w-fit" >
    <div className=" select-none ">
      <Image height={36} width={36} layout="fit" src={image} alt='' />
    </div>
  </div>
);

const ProjectCard = ({ data }: { data: any }) => (
  <div className="flash-effect border h-full rounded-md relative flex flex-col gap-6 p-4 cursor-pointer bg-card shadow-md group overflow-hidden ">
    <div className="flex flex-col gap-3 flex-grow">
      <div className="flex justify-between items-center">
        <Image width={40} height={40} src={data.logo} className="" alt="" />
        <Link href={data.github} className={buttonVariants({ variant: "outline", size: 'icon' })}>
          <Github />
        </Link>
      </div>
      <h4 className="text-3xl">{data.title}</h4>
      <h5 className="text-xl"></h5>
      <p className="flex-grow">{data.description}</p>
    </div>

    <div className="flex flex-col mt-auto gap-4">
      <div className="flex">
        <Dialog >
          <DialogTrigger className={buttonVariants({ variant: "outline", size: 'sm' })} >
            View Details
          </DialogTrigger>
          <DialogContent className="w-[70%]  max-w-full   overflow-hidden ">
            <DialogHeader>
              <DialogDescription >
                <div className="overflow-auto max-h-[70vh] flex flex-col gap-4 scrollbar-custom p-2 text-foreground">
                  {
                    data.images.map((i: any, z: any) => (
                      <div key={z} className="flex flex-col gap-2">
                        {/* Sticky Title */}
                        <h4 className="text-3xl font-extrabold text-foreground sticky top-0  z-10 px-2 text-center  flex justify-center items-center">
                          <span className=" px-4 py-2 rounded-md bg-background  ">
                            {i.title}
                          </span>
                        </h4>
                        {/* Image */}
                        <Image
                          src={'/assets/projects/' + i.image}
                          alt="Project Image"
                          layout="responsive"
                          width={100}
                          height={1}
                          className="max-w-full max-h-full"
                        />
                      </div>
                    ))
                  }
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-wrap gap-4 items-center py-2">
        {data.stack.map((i: string, z: number) => (
          <TechChip key={z} image={'assets/icon/'+i} />
        ))}
      </div>
    </div>


    <SpotLight clas={'bg-primary/50 bottom-0 left-[25%] blur-[100px] w-[100px] h-[100px]'} />
  </div>
);


const TracingLine = ({ pathLength }: { pathLength: any }) => (

  <div className="absolute h-full w-[10px] md:block hidden ">
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 2676" width="400" height="2676"   >
      <motion.path initial={false}
        strokeDasharray="0 1" strokeWidth="3" className="stroke-primary" style={{ pathLength }}
        fill={'none'}
        d="M0.5 0V139L196 321V529L91.5 638V879L170.5 1037V1394L236.5 1448V1551L170.5 1601.5V2029L303 2166V2316.5L170.5 2403V2492.5V2540"
      />
    </svg>
  </div>

);


function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const serviceID = "service_63h8uoe";
    const templateID = "template_b4cklmu";
    const userID = "gJCCeknnD-xNC5LYK";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        toast({
          title: "Message sent successfully",
        })
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Could not send message this time contact at email",
        })
      });
  };

  return (
    <section id="contact" className="p-16 container  mx-auto relative">
      <div className="grid md:grid-cols-2 ">
        <div className="text-center border py-4 rounded-md  ">
          <h2 className="text-4xl font-extrabold mb-8">Contact Me</h2>
          <p className="text-lg ">Let&apos;s work together! I look forward to hearing from you.</p>
          <div className="w-full mx-auto p-8 rounded-2xl bg-card text-card-foreground space-y-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>

              {/* Email Field */}
              <div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                />
              </div>

              {/* Message Field */}
              <div>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                />
              </div>

              {/* Submit Button */}
              <div>
                <Button className="w-full" type="submit" >Send Message</Button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <SpotLight clas={'bg-primary/50 bottom-0  left-[50%]      blur-[100px] w-[100px] h-[100px]'} />
    </section>
  );
}