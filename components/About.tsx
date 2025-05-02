import { EvervaultCard } from "@/components/ui/EvervaultCard";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-64 h-64 md:w-80 md:h-80">
          <EvervaultCard imageUrl="/path-to-your-profile-picture.jpg" />
        </div>
        
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hi, I&apos;m Makrious Ayman. I&apos;m a [your profession] with expertise in...
          </p>
          {/* Add more about yourself here */}
        </div>
      </div>
    </section>
  );
}