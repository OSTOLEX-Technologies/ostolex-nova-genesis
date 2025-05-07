
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
            
            <div className="bg-gradient-primary p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6 text-white">
                  <div>
                    <p className="text-white/70 mb-1">Email</p>
                    <p className="font-medium">contact@ostolex.com</p>
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">Address</p>
                    <p className="font-medium">123 Blockchain Avenue<br />Tech District, CA 94103</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-lg font-medium mb-4">Follow us</p>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "GitHub", "Discord"].map((platform) => (
                    <a 
                      key={platform} 
                      href="#" 
                      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      {platform.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
