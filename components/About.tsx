import { AnimatedTestimonial } from "./ui/animated-testimonials";
import SectionTitle from "./ui/SectionTitle";

interface ITestimonial {
  description: string;
  name: string;
  designation: string;
}

export default function About() {
  const testimonial: ITestimonial = {
    description:
      "Hi, I’m Makrious Ayman — a web developer and software engineer from Alexandria, Egypt, with a passion for solving problems and building smart, scalable solutions. As a Computer Science student specializing in Data Science at Alexandria University, I enjoy turning ideas into clean, efficient code — whether it’s crafting user-friendly websites or developing high-performance software. With experience in competitive programming and hands-on roles in coding and training programs, I’ve built a strong foundation in tackling complex challenges and delivering real-world results. Every project is a new opportunity to learn, improve, and push my limits — and I’m always ready to take it on.",
    name: "Makrious Ayman",
    designation: "Software Engineer/ Web Developer",
  };

  return (
    <section id="about" className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <SectionTitle
          title="About Me"
          subtitle="Your story is the greatest legacy you’ll leave behind—make it worth telling."
        />
      </div>

      <div>
        <div className="py-4">
          <AnimatedTestimonial testimonial={testimonial} />
        </div>
      </div>
    </section>
  );
}
