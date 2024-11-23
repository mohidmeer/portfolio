'use client';
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useScroll, motion, useSpring, transform, MotionValue, useTransform } from "framer-motion";
import { Kanban, Network, Server, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 200, damping: 90, restDelta: 0.001 });


  const pathRef = useRef<SVGPathElement>(null);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  // Use a ref to hold the scrollYProgress value and trigger updates manually
  const [scrollProgress, setScrollProgress] = useState(0);

  // Subscribe to the scroll progress value
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latestValue) => {
      setScrollProgress(latestValue); // Update scroll progress
    });

    return () => unsubscribe(); // Clean up on component unmount
  }, [scrollYProgress]);

  // Update the circle position when scrollProgress changes
  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const totalLength = path.getTotalLength(); // Get the total length of the path

      // Make sure pathLength covers the full length of the path
      const position = path.getPointAtLength((totalLength * scrollProgress+200)); // Get the position along the path

      // Set the circle's position based on the calculated position
      setCirclePosition({ x: position.x, y: position.y });
    }
  }, [scrollProgress]);
  return (

    <main className="flex flex-col gap-4 relative ">
      <motion.div className="fixed top-0 left-0 w-full h-[2px] bg-primary z-10 " style={{ scaleX, transformOrigin: 0 }} />
      <div className="absolute h-full w-full   z-10 ">
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 2676" width="400" height="2676"   >
          <motion.path ref={pathRef} initial={false}
            strokeDasharray="0 1" strokeWidth="3" className="stroke-primary" style={{ pathLength }}
            fill={'none'}
            d="M0.5 0V139L196 321V529L91.5 638V879L170.5 1037V1394L236.5 1448V1551L170.5 1601.5V2029L303 2166V2316.5L170.5 2403V2492.5V2540"
          />
          
      
      

        </svg>
      </div>
      <NavBar />
      <Hero />
      <Introduction />
      <Skills />
      <Projects />

    </main>
  );
}


function Introduction() {
  return (
    <div className="container mx-auto py-12">
      <Heading heading="What I've Accomplished" subheading="A snapshot of my journey as a web developer." />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Card 1: Diverse Project Portfolio */}
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
      <div className="grid grid-cols-2 gap-8" >
        <div className="bg-card shadow-md rounded-lg p-6 border w-full ">
          <h2 className="text-3xl font-semibold ">Skills That Power My Code</h2>
          <p className="text-muted-foreground text-lg  mt-4">
            My approach emphasizes practicality—using the tools at hand to deliver effective solutions while continuously refining my skills. Whether it’s designing responsive UIs, managing server-side logic with Node.js, or deploying cloud-based applications with AWS, I focus on writing clean, efficient, and adaptable code. I’m always curious about what’s next, striving to stay ahead in this ever-evolving field.
          </p>
        </div>
        <ChartContainer className="min-h-[350px] bg-card shadow-md rounded-lg p-6 border w-full" config={chartConfig}>
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

    <div className="" >
      <Heading heading="My Work in Action" subheading="Highlights of the projects that reflect my expertise" />

      <div className="movingborder " ></div>

    </div>


  )
}
