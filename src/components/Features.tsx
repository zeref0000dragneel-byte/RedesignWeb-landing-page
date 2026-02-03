import { motion } from "framer-motion";
import { 
  Smartphone, 
  Search, 
  Zap, 
  Palette, 
  Layout,
  Settings 
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Modern UI/UX",
    description: "Beautiful, intuitive designs that engage visitors and guide them towards conversion.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Responsive",
    description: "Flawless experience across all devices, from smartphones to large desktops.",
  },
  {
    icon: Search,
    title: "SEO Optimized Structure",
    description: "Built with search engines in mind to improve your organic rankings and visibility.",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Lightning-fast load times that keep visitors engaged and reduce bounce rates.",
  },
  {
    icon: Layout,
    title: "Brand Alignment",
    description: "Designs that perfectly reflect your brand identity and resonate with your audience.",
  },
  {
    icon: Settings,
    title: "User-Friendly CMS",
    description: "Easy-to-use content management so you can update your site without technical help.",
  },
];

const Features = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything You Need for a{" "}
            <span className="gradient-text">Winning Website</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every redesign includes these essential features to maximize your results
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
