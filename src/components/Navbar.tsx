import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-md bg-background/70">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="#home" active>Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#solutions">Solutions</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <Button 
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Us
        </Button>
      </div>
    </header>
  );
};

const Logo = () => (
  <div className="flex items-center">
    <span className="ml-2 text-xl font-orbitron tracking-tight">OSTOLEX</span>
  </div>
);

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active }: NavLinkProps) => (
  <a
    href={href}
    className={cn(
      "px-4 py-2 rounded-md transition-colors",
      active 
        ? "text-ostolex-purple" 
        : "text-white/70 hover:text-white"
    )}
  >
    {children}
  </a>
);

export default Navbar;
