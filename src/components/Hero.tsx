import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-pattern">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ostolex-purple/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-ostolex-pink/20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full mb-6 border border-white/10">
              <span className="text-ostolex-yellow font-medium">Blockchain Development Company</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="ostolex-gradient-text">Your trusted</span> <br /> web3 partner
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-lg">
              Team of experienced engineers that creates resilient, high-performance blockchain innovations.
              <br />
              <br />
              
              <i>We transform ideas into revolutionary technology.</i>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 bg-white/5 hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Solutions
              </Button>
            </div>
            
            
          </div>
          
          <div className="relative">
            <div className="glass-card p-6 rounded-xl mx-auto max-w-md animate-float">
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-ostolex-pink rounded-full mr-2 animate-glow"></div>
                  <span className="text-sm text-white/80">Blockchain Analytics</span>
                </div>
                <div className="text-ostolex-yellow text-sm">Live</div>
              </div>
              
              <div className="space-y-6">
                <div className="h-32 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
                  <div className="w-20 h-20 relative">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-3 bg-gradient-primary rounded-full opacity-70"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      85%
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Projects Delivery Status</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white/5 p-2 rounded border border-white/10">
                        <div className="text-xs text-white/70">Project {i}</div>
                        <div className="text-sm font-medium">
                          {97 + i}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-10 glass-card p-4 rounded-lg w-48 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-ostolex-yellow rounded-full mr-2"></div>
                <span className="text-xs text-white/80">Performance</span>
              </div>
              <div className="text-lg font-bold">12,456 TPS</div>
              <div className="text-xs text-ostolex-pink">+24% from last week</div>
            </div>
            
            <div className="absolute -left-4 top-10 glass-card p-4 rounded-lg w-48 animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 bg-ostolex-purple rounded-full mr-2"></div>
                <span className="text-xs text-white/80">Security</span>
              </div>
              <div className="text-lg font-bold">Zero breaches</div>
              <div className="text-xs text-ostolex-pink">100% uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
