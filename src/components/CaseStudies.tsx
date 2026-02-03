import { motion } from "framer-motion";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { TrendingUp, Zap, Users } from "lucide-react";

import beforeRestaurant from "@/assets/before-restaurant.jpg";
import afterRestaurant from "@/assets/after-restaurant.jpg";
import beforeEcommerce from "@/assets/before-ecommerce.jpg";
import afterEcommerce from "@/assets/after-ecommerce.jpg";
import beforeCorporate from "@/assets/before-corporate.jpg";
import afterCorporate from "@/assets/after-corporate.jpg";

const caseStudies = [
  {
    industry: "Restaurant",
    title: "La Cocina Moderna",
    description: "From outdated menu PDFs to an elegant, reservation-ready website",
    beforeImage: beforeRestaurant,
    afterImage: afterRestaurant,
    metrics: [
      { icon: TrendingUp, label: "Conversion Rate", value: "+45%", color: "text-success" },
      { icon: Zap, label: "Load Time", value: "-60%", color: "text-primary" },
      { icon: Users, label: "Bounce Rate", value: "-35%", color: "text-accent" },
    ],
  },
  {
    industry: "E-commerce",
    title: "StyleHub Fashion",
    description: "Transformed a cluttered store into a sleek shopping experience",
    beforeImage: beforeEcommerce,
    afterImage: afterEcommerce,
    metrics: [
      { icon: TrendingUp, label: "Sales", value: "+65%", color: "text-success" },
      { icon: Zap, label: "Load Time", value: "-55%", color: "text-primary" },
      { icon: Users, label: "Cart Abandonment", value: "-40%", color: "text-accent" },
    ],
  },
  {
    industry: "Corporate",
    title: "TechVentures Inc",
    description: "Professional rebrand that increased lead generation dramatically",
    beforeImage: beforeCorporate,
    afterImage: afterCorporate,
    metrics: [
      { icon: TrendingUp, label: "Lead Generation", value: "+80%", color: "text-success" },
      { icon: Zap, label: "Page Speed", value: "-70%", color: "text-primary" },
      { icon: Users, label: "Time on Site", value: "+50%", color: "text-accent" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="portfolio" className="section-padding">
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
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Real Results, <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've transformed outdated websites into high-performing digital experiences
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {study.industry}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-muted-foreground mb-8">{study.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="glass-card p-4 text-center">
                      <metric.icon className={`w-5 h-5 mx-auto mb-2 ${metric.color}`} />
                      <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl" />
                  <div className="relative glass-card p-2">
                    <BeforeAfterSlider
                      beforeImage={study.beforeImage}
                      afterImage={study.afterImage}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
