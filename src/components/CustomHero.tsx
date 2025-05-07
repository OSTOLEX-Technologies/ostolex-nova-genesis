
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CustomHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-ostolex-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-ostolex-pink/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Building the future with <span className="ostolex-gradient-text">blockchain</span> technology
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl">
            We create high-performance blockchain solutions with unrivaled security and resilience for next-generation businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6 px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-white/5 border-white/10 hover:bg-white/10 text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomHero;
