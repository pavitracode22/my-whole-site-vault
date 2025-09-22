import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroBanner from "@/assets/hero-banner.jpg";
import laptop from "@/assets/laptop.jpg";
import smartphone from "@/assets/smartphone.jpg";

const Hero = () => {
  const slides = [
    {
      image: heroBanner,
      title: "Discover Amazing",
      highlight: "Deals",
      description: "Shop the latest products with unbeatable prices and fast shipping",
      alt: "Shop the latest products"
    },
    {
      image: laptop,
      title: "Latest Tech",
      highlight: "Collection",
      description: "Explore cutting-edge laptops and computers for work and gaming",
      alt: "Latest laptop collection"
    },
    {
      image: smartphone,
      title: "Smart Mobile",
      highlight: "Devices",
      description: "Discover the newest smartphones with advanced features and design",
      alt: "Smart mobile devices"
    }
  ];

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full -ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0 h-full">
              <div className="relative h-full w-full">
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className="w-full h-full object-cover animate-scale-in"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40 animate-fade-in" />
                
                {/* Content */}
                <div className="absolute inset-0 container mx-auto px-4 flex items-center">
                  <div className="max-w-lg text-white animate-slide-in-right">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                      <span className="block text-orange animate-float">{slide.highlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl mb-6 text-white/90 animate-fade-in" style={{animationDelay: "0.2s"}}>
                      {slide.description}
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white hover:text-navy" />
        <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white hover:text-navy" />
      </Carousel>
    </section>
  );
};

export default Hero;