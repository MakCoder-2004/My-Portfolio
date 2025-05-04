"use client";
import React from "react";
import SectionTitle from "./ui/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { WorkTestimonials } from "./ui/WorkTestimonials";
import { Testimonial } from "@/types";

const Projectstestimonials: Testimonial[] = [
  {
    quote:
      "This team delivered exceptional results beyond our expectations. Their attention to detail and creative approach solved our complex problems.",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    link: "https://github.com/MakCoder-2004/Portfolio",
  },
];

const Documentationstimonials: Testimonial[] = [
  {
    quote:
      "This team delivered exceptional results beyond our expectations. Their attention to detail and creative approach solved our complex problems.",
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    link: "https://github.com/MakCoder-2004/Portfolio",
  },
]
const MyWork = () => {
  return (
    <section id="myWork" className="container mx-auto px-4 pt-12 pb-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <SectionTitle
          title="My Work"
          subtitle="Create with your hands, solve with your mind, leave a mark with your heart."
        />
      </div>

      <div>
        <Tabs defaultValue="Projects" className="w-full">
          <div className="flex items-center justify-center">
            <TabsList className="grid grid-cols-2 max-w-lg w-full items-center justify-center">
              <TabsTrigger value="Projects">Projects</TabsTrigger>
              <TabsTrigger value="Documentations">Documentations</TabsTrigger>
            </TabsList>
          </div>

          <div className="flex items-center justify-center">
            <div className="my-8 max-w-4xl">
              <TabsContent value="Projects">
                {/*  projects */}
                <WorkTestimonials
                  testimonials={Projectstestimonials}
                  autoplay={true}
                />
              </TabsContent>

              <TabsContent value="Documentations">
                {/* Documentations */}
                <WorkTestimonials
                  testimonials={Documentationstimonials}
                  autoplay={true}
                />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default MyWork;
