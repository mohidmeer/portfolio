'use client';
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter"
import SpotLight from "./SpotLight";

const Hero = () => {
  return (
    <div className="h-[80vh] relative mt-20 bg-no-repeat bg-cover " >

      <Image src={'assets/hero.svg'} fill alt="hero" className="object-cover filter" />
      <div className="flex md:flex-row flex-col max-w-6xl mx-auto ">
        <div className="p-2 w-full flex flex-col justify-center  md:order-1 order-2  ">
          <h1 className="w-full">
            Hi, I am
            <Typewriter
              words={[' Mohid']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-xl max-w-md text-muted-foreground "> Full-Stack Web Developer with over 5 years of experience crafting web solutions. Whether its building robust APIs, creating stunning UIs, or deploying applications.</p>
        </div>
        <div className=" w-full justify-center flex md:order-2 order-1  ">

          <SideArt />

        </div>

      </div>

      <SpotLight clas={'-top-[60%] -left-32 bg-primary/50 blur-[300px]  w-[400px] h-[400px] '}  />
      <SpotLight clas={'-top-[80%]  left-[35%] bg-primary/50 blur-[300px]  w-[400px] h-[400px] '}  />
      <SpotLight clas={'-bottom-36 right-0 bg-primary/50 blur-[300px] w-[400px] h-[400px] '}  />

    </div>
  )
}

export default Hero




function SideArt() {


  const files = [
    'assets/icon/docker.svg',
    'assets/icon/mongodb.svg',
    'assets/icon/vs-code.svg',
    'assets/icon/react.svg',
    'assets/icon/nextjs.svg',
    'assets/icon/typescript.svg',
    'assets/icon/prisma.svg',
    'assets/icon/postgresql.svg',
    'assets/icon/html.svg',
    'assets/icon/laravel.svg',
    'assets/icon/figma.svg',
    'assets/icon/css.svg',
    'assets/icon/github.svg',
    'assets/icon/jira.svg',
    'assets/icon/python.svg',
    'assets/icon/graphql.svg',
    'assets/icon/nginx.svg',
    'assets/icon/gcloud.svg',
    'assets/icon/amazon.svg',
  ];

  const midpoint = Math.ceil(files.length / 2);

  const firstHalf = files.slice(0, midpoint);
  const secondHalf = files.slice(midpoint);

  const degreeIncrementFirsthalf = 360 / firstHalf.length;
  const degreeIncrementSecondhalf = 360 / secondHalf.length;

  return (
    <div className="relative flex justify-center items-center  rounded-full w-[600px] h-[600px] animate-spin-slow select-none ">
      <div className="rounded-full w-[88%] h-[88%] border-2 absolute" />
      {firstHalf.map((file, index) => {
        const rotation = index * degreeIncrementFirsthalf;
        return (
          <div
            key={index}
            className="absolute w-full  "
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <div className="rounded-full  relative h-16 w-16  md:w-20 md:h-20 animate-counter-spin-slow"
              style={{ animationDelay: `-${(rotation / 360) * 100}s` }}
            >
              <Image src={file} alt={`icon-${index}`} fill />
            </div>
          </div>
        );
      })}


      <div className="w-full h-full flex justify-center items-center rotate-[30deg] select-none">
        {secondHalf.map((file, index) => {
          const rotation = index * degreeIncrementSecondhalf;
          return (
            <div
              key={index}
              className="absolute w-[65%]"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="  rounded-full   relative h-12 w-12  md:w-14 md:h-14  animate-counter-spin-slow select-none "
                style={{ animationDelay: `-${(rotation / 360) * 100}s` }}
              >
                <Image src={file} alt={`icon-${index}`} fill className="rotate-[-30deg] select-none   " />
              </div>
            </div>
          );
        })}
      </div>

      <div className="    absolute ">
        <div className="rounded-full  relative w-20 h-20 animate-counter-spin-slow"
        // style={{ animationDelay: `-${(rotation / 360) * 100}s` }}
        >
          <Image src={'assets/icon/valorant.svg'} alt={`icon-valoarnt`} fill />
        </div>



      </div>

    </div>

  );
}


