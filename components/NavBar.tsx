'use client';
import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { cn } from "@/lib/utils";

const menu_items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
      <Link
        href="#about"
        className="font-bold text-lg tracking-tight hover:text-primary transition-colors shrink-0"
      >
        Mohid<span className="text-primary">.</span>
      </Link>

      <nav className="hidden sm:block">
        <ul className="flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {menu_items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium rounded-full",
                  "text-muted-foreground hover:text-foreground transition-colors",
                  "hover:bg-accent/50"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3 ml-auto sm:ml-0">
        <nav className="sm:hidden">
          <ul className="flex items-center gap-3 text-sm font-medium">
            {menu_items.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
