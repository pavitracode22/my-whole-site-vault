import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <img 
        src={heroBanner} 
        alt="Shop the latest products"
        className="w-full h-full object-cover animate-scale-in"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40 animate-fade-in" />
      
      {/* Content */}
      <div className="absolute inset-0 container mx-auto px-4 flex items-center">
        <div className="max-w-lg text-white animate-slide-in-right">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Discover Amazing 
            <span className="block text-orange animate-float">Deals</span>
          </h2>
          <p className="text-lg md:text-xl mb-6 text-white/90 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Shop the latest products with unbeatable prices and fast shipping
          </p>
          <div className="flex gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Button 
              size="lg"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-3 hover-scale group"
            >
              Shop Now
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-3 hover-scale"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;