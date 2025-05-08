
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 bg-ostolex-purple/20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto glass-card rounded-xl border border-white/10 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6">
                Let's build your <span className="ostolex-gradient-text">blockchain future</span>
              </h2>
              <p className="text-white/70 mb-8">
                Ready to transform your business with cutting-edge blockchain technology? Reach out to us and let's discuss your project.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-white/5 border-white/10 focus:border-ostolex-purple text-white" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-white/5 border-white/10 focus:border-ostolex-purple text-white" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">Subject</label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help?" 
                    className="bg-white/5 border-white/10 focus:border-ostolex-purple text-white" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    className="bg-white/5 border-white/10 focus:border-ostolex-purple text-white min-h-[150px]" 
                  />
                </div>
                
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity w-full py-6">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center items-center bg-white/5">
              <div className="text-center max-w-md">
                <h3 className="text-2xl font-bold mb-4">Contact Us Directly</h3>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-ostolex-purple/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ostolex-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                </div>
                <a href="mailto:contact@ostolex.com" className="text-xl font-medium ostolex-gradient-text hover:opacity-80 transition-opacity">
                  office@ostolex.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
