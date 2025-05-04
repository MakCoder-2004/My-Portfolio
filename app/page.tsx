import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Tape from "@/components/Tape";
import CustomScrollbar from "@/components/ui/CustomScrollbar";
import { cn } from "@/lib/utils";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <CustomScrollbar style={{ overflowX: "hidden" }}>
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
        <Hero />
        <About />
        <Tape />
        <Contact />
        <Footer />
      </CustomScrollbar>
      <Navbar />
    </main>
  );
}
