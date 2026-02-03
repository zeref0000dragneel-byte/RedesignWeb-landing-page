import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { ArrowRight, Sparkles } from "lucide-react";
import beforeRestaurant from "@/assets/before-restaurant.jpg";
import afterRestaurant from "@/assets/after-restaurant.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-narrow mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Website Redesign Specialists</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Outdated Website?{" "}
              <span className="gradient-text">Get a Modern Redesign</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Transform your old website into a high-converting, modern digital experience that drives results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="group">
                Get Your Free Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 100+ businesses</p>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-xs text-muted-foreground">Redesigns Completed</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-bold">+40%</div>
                  <div className="text-xs text-muted-foreground">Avg. Conversion Lift</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              
              <div className="relative glass-card p-2">
                <BeforeAfterSlider
                  beforeImage={beforeRestaurant}
                  afterImage={afterRestaurant}
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">↑</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Conversion Rate</div>
                  <div className="text-xs text-success">+45% increase</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
