import About from "@/components/About";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NavbarItem } from "@/interfaces";
import { cn } from "@/lib/utils";
import React from "react";

const navItems: NavbarItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background grid */}
      <div>
        <div
          className={cn(
            "fixed inset-0 -z-10 dark:opacity-30",
            "[background-size:50px_50px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            "animate-grid-pulse"
          )}
        />

        {/* Radial gradient overlay */}
        <div className="fixed inset-0 -z-10 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-main"></div>
      </div>

      {/* Content container */}
      <Navbar navItems={navItems} />
      <Hero />
      <About />
    </main>
  );
}
