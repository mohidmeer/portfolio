
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Mohid Imtiyaz | Full-Stack Web Developer",
  description: "Hi, I'm Mohid Imtiyaz, a Full-Stack Web Developer with 5+ years of experience in creating dynamic, user-centric web applications. Explore my portfolio to see how I solve real-world problems with code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body   className={`font-mono `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
