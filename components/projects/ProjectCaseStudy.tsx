"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { assetUrl } from "@/lib/asset-url";
import { Project } from "./types";

function CaseSection({
  icon: Icon,
  title,
  items,
  variant = "default",
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  variant?: "default" | "success" | "warning";
}) {
  const styles = {
    default: "bg-muted/40 border-border/50",
    success: "bg-primary/5 border-primary/20",
    warning: "bg-orange-500/5 border-orange-500/20",
  };
  const iconStyles = {
    default: "text-muted-foreground",
    success: "text-primary",
    warning: "text-orange-500",
  };

  return (
    <div className={`rounded-lg border p-4 ${styles[variant]}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`size-4 shrink-0 ${iconStyles[variant]}`} />
        <h4 className="text-sm font-semibold uppercase tracking-wide">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
            <span className="mt-2 size-1 rounded-full bg-primary/60 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCaseStudy({ data }: { data: Project }) {
  const [open, setOpen] = useState(false);
  const { caseStudy } = data;

  return (
    <>
      <Button
        type="button"
        variant="link"
        size="sm"
        className="h-auto p-0 mt-1 gap-1 text-primary font-medium"
        onClick={() => setOpen(true)}
      >
        Read more
        <ArrowRight className="size-3.5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl w-[95vw] p-0 gap-0 overflow-hidden max-h-[90vh]">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50 shrink-0">
            <div className="flex items-start gap-3 pr-8">
              <div className="size-11 rounded-lg bg-muted p-2 shrink-0">
                <Image
                  width={28}
                  height={28}
                  src={assetUrl(data.logo)}
                  alt=""
                  className="object-contain size-full"
                />
              </div>
              <div className="text-left min-w-0">
                <DialogTitle className="text-lg">{data.title}</DialogTitle>
                <DialogDescription className="text-sm text-primary font-medium mt-0.5">
                  {data.subtitle}
                </DialogDescription>
                <p className="text-xs text-muted-foreground mt-1">{caseStudy.role}</p>
              </div>
            </div>
          </DialogHeader>

          <div className="overflow-y-auto max-h-[calc(90vh-5rem)] px-6 py-5 space-y-5 scrollbar-thin">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Overview
              </h4>
              <p className="text-sm leading-relaxed text-foreground/90">{caseStudy.overview}</p>
            </div>

            <CaseSection
              icon={AlertCircle}
              title="The Challenge"
              items={caseStudy.challenges}
              variant="warning"
            />
            <CaseSection
              icon={Lightbulb}
              title="How We Solved It"
              items={caseStudy.solutions}
            />
            <CaseSection
              icon={Target}
              title="Results & Impact"
              items={caseStudy.outcomes}
              variant="success"
            />

            <div>
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="size-4 text-primary shrink-0" />
                <h4 className="text-sm font-semibold uppercase tracking-wide">Key Features</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted border border-border/50 text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
