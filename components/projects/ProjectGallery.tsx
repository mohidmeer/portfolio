"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { assetUrl } from "@/lib/asset-url";
import { ProjectImage } from "./types";
import { Button } from "@/components/ui/button";

interface ProjectGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  const goTo = (index: number) => {
    if (index < 0) setActiveIndex(images.length - 1);
    else if (index >= images.length) setActiveIndex(0);
    else setActiveIndex(index);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Main viewport */}
      <div className="relative group">
        <div className="rounded-xl border border-border/60 bg-muted/30 p-2 shadow-inner">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border/40 rounded-t-lg bg-background/80">
            <span className="size-2.5 rounded-full bg-red-400/80" />
            <span className="size-2.5 rounded-full bg-yellow-400/80" />
            <span className="size-2.5 rounded-full bg-green-400/80" />
            <span className="ml-3 flex-1 text-xs text-muted-foreground truncate text-center">
              {projectTitle} — {active.title}
            </span>
          </div>

          {/* Image stage */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-b-lg bg-background">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={assetUrl(`assets/projects/${active.image}`)}
                  alt={`${projectTitle} — ${active.title}`}
                  fill
                  className="object-contain object-top p-1"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority={activeIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity size-9 rounded-full shadow-lg"
                  onClick={() => goTo(activeIndex - 1)}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity size-9 rounded-full shadow-lg"
                  onClick={() => goTo(activeIndex + 1)}
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </>
            )}
          </div>
        </div>

        <p className="mt-3 text-center text-sm font-medium text-foreground">
          {active.title}
          <span className="ml-2 text-muted-foreground font-normal">
            {activeIndex + 1} / {images.length}
          </span>
        </p>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, i) => (
            <button
              key={img.image}
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200",
                i === activeIndex
                  ? "border-primary ring-2 ring-primary/30 scale-105"
                  : "border-border/50 opacity-60 hover:opacity-100 hover:border-border"
              )}
              aria-label={`View ${img.title}`}
            >
              <Image
                src={assetUrl(`assets/projects/${img.image}`)}
                alt={img.title}
                fill
                className="object-cover object-top"
                sizes="96px"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-1 py-0.5 text-[9px] text-white truncate">
                {img.title}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
