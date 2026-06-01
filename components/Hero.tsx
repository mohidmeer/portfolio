'use client';
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { ArrowDown, Mail } from "lucide-react";
import SpotLight from "./SpotLight";
import { buttonVariants } from "@/components/ui/button";
import { assetUrl } from "@/lib/asset-url";

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center mt-16 overflow-hidden" id="about">
      <Image
        src={assetUrl("assets/hero.svg")}
        fill
        alt=""
        className="object-cover opacity-40 dark:opacity-20 pointer-events-none"
        priority
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Full-Stack Developer · 5+ Years
            </div>

            <h1 className="leading-tight">
              Hi, I am
              <Typewriter
                words={[" Mohid"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I craft dynamic, user-centric web applications — from robust APIs and stunning UIs
              to cloud deployments that scale.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="#projects" className={buttonVariants({ size: "lg" })}>
                View My Work
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({ variant: "outline", size: "lg", className: "gap-2" })}
              >
                <Mail className="size-4" />
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <SideArt />
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <Link href="#experience" aria-label="Scroll to experience" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="size-5" />
          </Link>
        </div>
      </div>

      <SpotLight clas="-top-[40%] -left-32 bg-primary/40 blur-[250px] w-[400px] h-[400px]" />
      <SpotLight clas="-top-[60%] left-[35%] bg-primary/30 blur-[250px] w-[350px] h-[350px]" />
      <SpotLight clas="-bottom-20 right-0 bg-primary/30 blur-[250px] w-[350px] h-[350px]" />
    </div>
  );
};

export default Hero;

function SideArt() {
  const files = [
    "assets/icon/docker.svg",
    "assets/icon/mongodb.svg",
    "assets/icon/vs-code.svg",
    "assets/icon/react.svg",
    "assets/icon/nextjs.svg",
    "assets/icon/typescript.svg",
    "assets/icon/prisma.svg",
    "assets/icon/postgresql.svg",
    "assets/icon/html.svg",
    "assets/icon/laravel.svg",
    "assets/icon/figma.svg",
    "assets/icon/css.svg",
    "assets/icon/git.svg",
    "assets/icon/jira.svg",
    "assets/icon/python.svg",
    "assets/icon/graphql.svg",
    "assets/icon/nginx.svg",
    "assets/icon/gcloud.svg",
    "assets/icon/amazon.svg",
  ];

  const midpoint = Math.ceil(files.length / 2);
  const firstHalf = files.slice(0, midpoint);
  const secondHalf = files.slice(midpoint);
  const degreeIncrementFirst = 360 / firstHalf.length;
  const degreeIncrementSecond = 360 / secondHalf.length;

  return (
    <div className="relative flex justify-center items-center rounded-full h-[320px] w-[320px] md:h-[400px] md:w-[400px] lg:w-[480px] lg:h-[480px] animate-spin-slow select-none">
      {firstHalf.map((file, index) => {
        const rotation = index * degreeIncrementFirst;
        return (
          <div key={file} className="absolute w-full" style={{ transform: `rotate(${rotation}deg)` }}>
            <div
              className="rounded-full relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:w-16 lg:h-16 animate-counter-spin-slow bg-background/80 backdrop-blur-sm border border-border/30 p-2 shadow-sm"
              style={{ animationDelay: `-${(rotation / 360) * 100}s` }}
            >
              <Image src={assetUrl(file)} alt="" fill className="p-1.5 object-contain" />
            </div>
          </div>
        );
      })}

      <div className="w-full h-full flex justify-center items-center rotate-[30deg] select-none">
        {secondHalf.map((file, index) => {
          const rotation = index * degreeIncrementSecond;
          return (
            <div key={file} className="absolute w-[65%]" style={{ transform: `rotate(${rotation}deg)` }}>
              <div
                className="rounded-full relative h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12 animate-counter-spin-slow bg-background/80 backdrop-blur-sm border border-border/30 p-1.5 shadow-sm"
                style={{ animationDelay: `-${(rotation / 360) * 100}s` }}
              >
                <Image src={assetUrl(file)} alt="" fill className="rotate-[-30deg] p-1 object-contain" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute">
        <div className="rounded-full relative w-12 h-12 sm:w-16 sm:h-16 animate-counter-spin-slow bg-background border-2 border-primary/30 p-2 shadow-lg shadow-primary/10">
          <Link href="/val">
            <Image src={assetUrl("assets/icon/valorant.svg")} alt="Valorant easter egg" fill className="p-1.5 object-contain" />
          </Link>
        </div>
      </div>
    </div>
  );
}
