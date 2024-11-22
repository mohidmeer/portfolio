'use client';
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useScroll, motion, useSpring } from "framer-motion";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (

    <main className="flex flex-col gap-4 relative ">
      <motion.div className="fixed top-0 left-0 w-full h-[4px] bg-primary pgbar z-10 " style={{ scaleX }} />
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card shadow-md rounded-lg p-6 border">
          <h3 className="text-2xl font-semibold ">Who Am I</h3>
          <p className="text-muted-foreground text-lg  mt-4">
            As a freelancer, I&apos;ve had the opportunity to create meaningful, tailored solutions for clients across the globe, ranging from small startups to larger enterprises. I thrive in dynamic environments and believe in continuous learning to keep up with the latest trends and best practices in web development
          </p>
        </div>
        <div className="bg-card shadow-md rounded-lg p-6 border moving-border">
          <h3 className="text-3xl font-semibold ">Key Achievements</h3>
          <ul className="list-disc list-inside mt-4 text-muted-foreground text-lg   ">
            <li>Delivered <span className="font-medium">50+ projects</span> across industries like e-commerce, real estate , finance, and social media.</li>
            <li>Successfully complex APIs from platforms like <span className="font-bold">Facebook</span> and <span className="font-bold">Twitter</span> into custom systems.</li>
            <li>Designed backend systems with features like authentication, inventory management, and cloud deployment.</li>
            <li>Collaborated with remote teams using tools like Jira, Slack, and Agile workflows to deliver high-quality solutions.</li>
          </ul>
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
    </div>

  )
}



function Projects() {

  return (

    <div>
      <Heading heading="My Work in Action" subheading="Highlights of the projects that reflect my expertise" />
      
    </div>


  )
}
