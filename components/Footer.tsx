import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">
              Mohid<span className="text-primary">.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting modern web solutions with passion and precision since 2016.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { href: "#about", label: "About Me" },
                { href: "#projects", label: "Projects" },
                { href: "#experience", label: "Experience" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-3.5 shrink-0" />
                <a href="mailto:mohidfauji@gmail.com" className="hover:text-primary transition-colors">
                  mohidfauji@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="size-3.5 shrink-0" />
                <a href="tel:+923355383369" className="hover:text-primary transition-colors">
                  +92 335 5383369
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-3.5 shrink-0" />
                Islamabad, Pakistan
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Follow Me
            </h3>
            <ul className="flex gap-3">
              <li>
                <a
                  href="https://github.com/mohidmeer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-9 rounded-lg border border-border/60 hover:border-primary/40 hover:text-primary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="size-4" />
                </a>
              </li>
              <li>
                <a
                  href="https://pk.linkedin.com/in/mohid-imtiaz-a71855111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-9 rounded-lg border border-border/60 hover:border-primary/40 hover:text-primary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mohid Imtiyaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
