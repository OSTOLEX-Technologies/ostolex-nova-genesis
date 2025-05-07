import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        
        <Separator className="bg-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 OSTOLEX Limited, London, UK. All rights reserved.
          </p>
          
          <a 
            href="mailto:contact@ostolex.com" 
            className="text-white/50 text-sm hover:text-white/80 transition-colors"
          >
            contact@ostolex.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
