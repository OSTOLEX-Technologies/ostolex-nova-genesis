
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "OSTOLEX delivered a custom blockchain solution that increased our transaction throughput by 300% while maintaining security.",
    author: "Alex Johnson",
    position: "CTO, FinTech Innovations"
  },
  {
    quote: "Their smart contract development expertise helped us launch our DeFi platform ahead of schedule with zero security issues.",
    author: "Sarah Chen",
    position: "Founder, DeFi Capital"
  },
  {
    quote: "The tokenization platform OSTOLEX built for our real estate portfolio has transformed how we manage assets and liquidity.",
    author: "Michael Rodriguez",
    position: "Director of Innovation, Global Assets"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-ostolex-purple/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-ostolex-purple uppercase tracking-wider mb-3">Testimonials</h2>
          <h3 className="text-4xl font-bold mb-6">
            What our clients <span className="ostolex-gradient-text">say about us</span>
          </h3>
          <p className="text-white/70 text-lg">
            Don't take our word for it – hear from some of our satisfied clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card border-white/10">
              <CardContent className="p-6">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-ostolex-yellow inline-block mr-1">★</span>
                  ))}
                </div>
                <p className="text-white mb-6 text-lg italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
