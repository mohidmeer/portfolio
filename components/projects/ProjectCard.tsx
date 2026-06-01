"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Images } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SpotLight from "@/components/SpotLight";
import { assetUrl } from "@/lib/asset-url";
import { Project } from "./types";
import ProjectGallery from "./ProjectGallery";
import ProjectCaseStudy from "./ProjectCaseStudy";

function TechChip({ image }: { image: string }) {
  return (
    <div className="flex items-center justify-center size-11 rounded-md bg-muted/50 border border-border/50 p-2 transition-colors hover:bg-muted">
      <Image
        height={28}
        width={28}
        src={assetUrl(`/assets/icon/${image}`)}
        alt=""
        className="object-contain size-7"
      />
    </div>
  );
}

export default function ProjectCard({ data }: { data: Project }) {
  const coverImage = data.images[0];

  return (
    <article className="group relative flex flex-col h-full rounded-xl border border-border/60 bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Cover preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/20">
        <Image
          src={assetUrl(`/assets/projects/${coverImage.image}`)}
          alt={`${data.title} preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="size-10 rounded-lg bg-background/90 backdrop-blur-sm border border-border/50 p-1.5 shadow-sm">
            <Image
              width={32}
              height={32}
              src={assetUrl(data.logo)}
              alt={`${data.title} logo`}
              className="object-contain size-full"
            />
          </div>
        </div>

        {data.github && (
          <Link
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "secondary",
              size: "icon",
              className: "absolute top-3 right-3 size-9 rounded-full shadow-md backdrop-blur-sm",
            })}
            aria-label={`View ${data.title} on GitHub`}
          >
            <Github className="size-4" />
          </Link>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow gap-3 p-5">
        <div>
          <h4 className="text-xl font-bold tracking-tight">{data.title}</h4>
          <p className="text-sm text-primary font-medium mt-0.5">{data.subtitle}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {data.description}
          </p>
          <ProjectCaseStudy data={data} />
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {data.stack.map((icon) => (
            <TechChip key={icon} image={icon} />
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full gap-2 mt-2">
              <Images className="size-4" />
              View Screenshots
              <span className="ml-auto text-xs text-muted-foreground">
                {data.images.length} screens
              </span>
            </Button>
          </DialogTrigger>
            <DialogContent className="max-w-4xl w-[95vw] p-0 gap-0 overflow-hidden">
              <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-muted p-1.5 shrink-0">
                    <Image
                      width={32}
                      height={32}
                      src={assetUrl(data.logo)}
                      alt=""
                      className="object-contain size-full"
                    />
                  </div>
                  <div className="text-left">
                    <DialogTitle className="text-lg">{data.title}</DialogTitle>
                    <p className="text-sm text-muted-foreground">{data.subtitle}</p>
                  </div>
                  {data.github && (
                    <Link
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                        className: "ml-auto gap-1.5 shrink-0",
                      })}
                    >
                      <ExternalLink className="size-3.5" />
                      Source
                    </Link>
                  )}
                </div>
              </DialogHeader>
              <div className="p-6 overflow-y-auto max-h-[75vh] scrollbar-thin">
                <ProjectGallery images={data.images} projectTitle={data.title} />
              </div>
            </DialogContent>
          </Dialog>
      </div>

      <SpotLight clas="bg-primary/30 bottom-0 left-1/2 -translate-x-1/2 blur-[80px] w-[200px] h-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </article>
  );
}
