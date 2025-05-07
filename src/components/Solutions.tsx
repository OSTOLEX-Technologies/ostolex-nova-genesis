
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    id: "blockchain-infrastructure",
    title: "Blockchain Infrastructure",
    description: "Custom private or consortium blockchains designed for enterprise use cases with governance mechanisms and consensus protocols tailored to your needs.",
    image: "/placeholder.svg"
  },
  {
    id: "tokenization-platforms",
    title: "Tokenization Platforms",
    description: "Convert assets into digital tokens for improved liquidity, fractional ownership, and programmatic management of assets.",
    image: "/placeholder.svg"
  },
  {
    id: "mm-software",
    title: "MM Software",
    description: "Custom software development for your business, tailored to your specific needs and goals.",
    image: "/placeholder.svg"
  },
  {
    id: "defi-applications",
    title: "DeFi Applications",
    description: "Build decentralized lending, borrowing, and trading platforms with custom yield-generating strategies and risk management.",
    image: "/placeholder.svg"
  },
  {
    id: "wallets",
    title: "Wallets",
    description: "Create and manage secure crypto wallets for your business",
    image: "/placeholder.svg"
  },
  {
    id: "games",
    title: "Games",
    description: "Develop engaging blockchain-based games for entertainment and beyond.",
    image: "/placeholder.svg"
  },
  {
    id: "identity-platforms",
    title: "Identity Platforms",
    description: "Develop robust identity platforms with tailored authentication and authorization systems.",
    image: "/placeholder.svg"
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-ostolex-pink/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-ostolex-yellow uppercase tracking-wider mb-3">Solutions</h2>
          <h3 className="text-4xl font-bold mb-6">
            <span className="ostolex-gradient-text">Advanced</span> blockchain solutions
          </h3>
          <p className="text-white/70 text-lg">
            Our blockchain solutions are built with scalability, security, and interoperability as core principles.
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold">{solution.title}</h3>
                <p className="text-white/70 text-lg">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
