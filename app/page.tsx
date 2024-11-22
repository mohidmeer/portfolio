'use client';
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <NavBar/>
      <Hero  />
      <div className="container mx-auto">
        <p>Introduction</p>
        <h1><Typewriter
              words={['Overiview']}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /> </h1>
        <p>What i am about </p>
        <div className="grid grid-cols-4">
          

        </div>

      </div>



    </main>
  );
}
