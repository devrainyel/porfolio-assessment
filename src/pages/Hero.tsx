import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Github, Linkedin } from "lucide-react"; // Make sure you have lucide-react installed
import { portfolioData } from "@/data/portfolio";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto py-24 md:py-32 space-y-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Available for new projects
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
            Hi, I'm <span className="bg-gradient-to-r from-[#00A8CC] to-[#6372F7] bg-clip-text text-transparent whitespace-nowrap">{portfolioData.name}</span>
          </h1>

          <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl">
            {portfolioData.title}
          </h2>

          <p className="max-w-[600px] text-lg text-muted-foreground">
            {portfolioData.bio}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#projects">
                View My Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
           
          </div>
          <div className="flex gap-4 pt-4 text-muted-foreground">
             <a href="https://github.com/devrainyel" target="_blank" className="hover:text-primary transition-colors">
               <Github className="w-6 h-6" />
               <span className="sr-only">GitHub</span>
             </a>
             <a href="https://www.linkedin.com/in/reniel-ryand-cuellar-b9343b242/" target="_blank" className="hover:text-primary transition-colors">
               <Linkedin className="w-6 h-6" />
               <span className="sr-only">LinkedIn</span>
             </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end relative">
          <Avatar className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] border-4 border-background">
            <AvatarImage
              src={portfolioData.imageUrl}
              alt={portfolioData.name}
            />
            <AvatarFallback className="text-4xl">{portfolioData.initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default Hero;