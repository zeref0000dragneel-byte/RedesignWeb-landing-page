import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analysis & Audit",
    description: "We analyze your current website's UX, performance, SEO, and branding to identify improvement opportunities.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Modern Design Mockups",
    description: "Our designers create stunning UI/UX mockups aligned with your brand and optimized for conversions.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development & Testing",
    description: "We build your responsive, fast, and accessible website using modern technologies and best practices.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "We handle the launch and provide ongoing support to ensure your website keeps performing at its best.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            How We <span className="gradient-text">Transform</span> Your Website
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven 4-step process that delivers results every time
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="glass-card p-6 h-full relative z-10 transition-all duration-300 hover:border-primary/30">
                {/* Step Number */}
                <div className="text-5xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
