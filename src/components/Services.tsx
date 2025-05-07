
import { Zap, Shield, Code, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Zap className="h-6 w-6 text-ostolex-yellow" />,
    title: "High Performance",
    description: "Build lightning-fast blockchain solutions with our optimized architecture and advanced consensus algorithms."
  },
  {
    icon: <Shield className="h-6 w-6 text-ostolex-purple" />,
    title: "Maximum Security",
    description: "Implement enterprise-grade security protocols with multi-layered protection and regular auditing."
  },
  {
    icon: <Code className="h-6 w-6 text-ostolex-pink" />,
    title: "Smart Contracts",
    description: "Develop, audit and deploy secure smart contracts that automate and enforce your business agreements."
  },
  {
    icon: <Database className="h-6 w-6 text-ostolex-yellow" />,
    title: "DeFi Solutions",
    description: "Create decentralized financial applications with customized protocols and transparent governance."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-ostolex-pink uppercase tracking-wider mb-3">Services</h2>
          <h3 className="text-4xl font-bold mb-6">
            <span className="ostolex-gradient-text">Cutting-edge</span> blockchain services
          </h3>
          <p className="text-white/70 text-lg">
            We deliver innovative blockchain solutions tailored to your business needs, combining technical excellence with strategic vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card border-white/10 hover:border-ostolex-purple/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
